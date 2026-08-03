// js/components/lesson/LessonMedia.js
export const LessonMedia = {
    _zoomLevel: 1,
    _zoomOffsetX: 0,
    _zoomOffsetY: 0,
    _isDragging: false,
    _dragStart: { x: 0, y: 0 },

    openZoom(src, caption) {
        this._zoomLevel = 1;
        this._zoomOffsetX = 0;
        this._zoomOffsetY = 0;

        const existing = document.getElementById('edu-zoom-modal');
        if (existing) existing.remove();

        const isIframe = src.startsWith('http') && (src.includes('maps.google') || src.includes('youtube') || src.includes('embed'));

        const modal = document.createElement('div');
        modal.id = 'edu-zoom-modal';
        modal.className = 'fixed inset-0 z-[999999] flex items-center justify-center';
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/90 backdrop-blur-sm" onclick="Lesson.closeZoom()"></div>
            <div class="relative z-10 w-full h-full flex flex-col">
                <div class="flex items-center justify-between p-4 shrink-0">
                    <div class="flex items-center gap-2">
                        <button onclick="Lesson.zoomIn()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Phóng to (Ctrl +)">🔍+</button>
                        <button onclick="Lesson.zoomOut()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Thu nhỏ (Ctrl -)">🔍−</button>
                        <button onclick="Lesson.zoomReset()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-lg font-black backdrop-blur-md transition-all active:scale-90" title="Về gốc">↺</button>
                        <span id="edu-zoom-level" class="ml-3 text-white/70 font-black text-sm backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-xl">100%</span>
                    </div>
                    ${caption ? `<span class="text-white font-bold text-sm bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md max-w-[40%] truncate">${caption}</span>` : ''}
                    <button onclick="Lesson.closeZoom()" class="w-12 h-12 bg-red-500/80 hover:bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Đóng (Esc)">✕</button>
                </div>
                <div id="edu-zoom-content" class="flex-grow flex items-center justify-center overflow-hidden px-4 pb-4" ${!isIframe ? 'onwheel="Lesson._handleZoomWheel(event)"' : ''}>
                    ${isIframe ? `
                        <iframe src="${src}" class="w-full h-full rounded-2xl border-2 border-white/20" allowfullscreen loading="lazy" style="min-height:80vh"></iframe>
                    ` : `
                        <img id="edu-zoom-img" src="${src}" alt="${caption || ''}" 
                            class="max-w-none transition-transform duration-200 ease-out rounded-xl shadow-2xl select-none"
                            style="transform: scale(1) translate(0px, 0px); cursor: grab;"
                            draggable="false"
                            onmousedown="Lesson._startDrag(event)"
                            ontouchstart="Lesson._startDragTouch(event)"
                        />
                    `}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        this._zoomKeyHandler = (e) => {
            if (e.key === 'Escape') this.closeZoom();
            else if (e.key === '+' || e.key === '=') this.zoomIn();
            else if (e.key === '-') this.zoomOut();
            else if (e.key === '0') this.zoomReset();
        };
        document.addEventListener('keydown', this._zoomKeyHandler);

        this._dragMoveHandler = (e) => this._handleDragMove(e);
        this._dragEndHandler = () => this._endDrag();
        document.addEventListener('mousemove', this._dragMoveHandler);
        document.addEventListener('mouseup', this._dragEndHandler);
        document.addEventListener('touchmove', this._dragMoveHandler, { passive: false });
        document.addEventListener('touchend', this._dragEndHandler);
    },

    closeZoom() {
        const modal = document.getElementById('edu-zoom-modal');
        if (modal) modal.remove();
        document.body.style.overflow = '';
        if (this._zoomKeyHandler) document.removeEventListener('keydown', this._zoomKeyHandler);
        if (this._dragMoveHandler) {
            document.removeEventListener('mousemove', this._dragMoveHandler);
            document.removeEventListener('touchmove', this._dragMoveHandler);
        }
        if (this._dragEndHandler) {
            document.removeEventListener('mouseup', this._dragEndHandler);
            document.removeEventListener('touchend', this._dragEndHandler);
        }
    },

    _updateZoomTransform() {
        const img = document.getElementById('edu-zoom-img');
        const label = document.getElementById('edu-zoom-level');
        if (img) img.style.transform = `scale(${this._zoomLevel}) translate(${this._zoomOffsetX}px, ${this._zoomOffsetY}px)`;
        if (label) label.textContent = `${Math.round(this._zoomLevel * 100)}%`;
    },

    zoomIn() { this._zoomLevel = Math.min(this._zoomLevel + 0.25, 5); this._updateZoomTransform(); },
    zoomOut() { this._zoomLevel = Math.max(this._zoomLevel - 0.25, 0.25); this._updateZoomTransform(); },
    zoomReset() { this._zoomLevel = 1; this._zoomOffsetX = 0; this._zoomOffsetY = 0; this._updateZoomTransform(); },

    _handleZoomWheel(event) {
        event.preventDefault();
        this._zoomLevel = event.deltaY < 0 ? Math.min(this._zoomLevel + 0.15, 5) : Math.max(this._zoomLevel - 0.15, 0.25);
        this._updateZoomTransform();
    },

    _startDrag(event) {
        event.preventDefault();
        this._isDragging = true;
        this._dragStart = { x: event.clientX - this._zoomOffsetX, y: event.clientY - this._zoomOffsetY };
        const img = document.getElementById('edu-zoom-img');
        if (img) img.style.cursor = 'grabbing';
    },

    _startDragTouch(event) {
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            this._isDragging = true;
            this._dragStart = { x: touch.clientX - this._zoomOffsetX, y: touch.clientY - this._zoomOffsetY };
        }
    },

    _handleDragMove(event) {
        if (!this._isDragging) return;
        if (event.type === 'touchmove') {
            event.preventDefault();
            const touch = event.touches[0];
            this._zoomOffsetX = touch.clientX - this._dragStart.x;
            this._zoomOffsetY = touch.clientY - this._dragStart.y;
        } else {
            this._zoomOffsetX = event.clientX - this._dragStart.x;
            this._zoomOffsetY = event.clientY - this._dragStart.y;
        }
        this._updateZoomTransform();
    },

    _endDrag() {
        this._isDragging = false;
        const img = document.getElementById('edu-zoom-img');
        if (img) img.style.cursor = 'grab';
    },

    _initImageZoom() {
        if (typeof document === 'undefined') return;
        let zoomBtn = document.getElementById('global-zoom-btn');
        if (!zoomBtn) {
            zoomBtn = document.createElement('button');
            zoomBtn.id = 'global-zoom-btn';
            zoomBtn.className = 'fixed z-[100] w-12 h-12 bg-indigo-600/90 text-white rounded-xl shadow-2xl flex items-center justify-center opacity-0 pointer-events-none scale-75 transition-all duration-300 outline-none';
            zoomBtn.innerHTML = `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>`;
            document.body.appendChild(zoomBtn);
            zoomBtn.addEventListener('mouseenter', () => {
                clearTimeout(this._zoomBtnTimeout);
                zoomBtn.classList.remove('opacity-0', 'pointer-events-none', 'scale-75');
                zoomBtn.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
            });
            zoomBtn.addEventListener('mouseleave', () => {
                this._zoomBtnTimeout = setTimeout(() => {
                    zoomBtn.classList.add('opacity-0', 'pointer-events-none', 'scale-75');
                    zoomBtn.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
                }, 300);
            });
            zoomBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this._activeTargetImg) {
                    this.openZoom(this._activeTargetImg.src, this._activeTargetImg.alt || this._activeTargetImg.title || '');
                }
            });
        }

        const handleMouseEnter = (e) => {
            const img = e.currentTarget;
            this._activeTargetImg = img;
            clearTimeout(this._zoomBtnTimeout);
            const rect = img.getBoundingClientRect();
            const btnSize = 48;
            const offset = 12;
            zoomBtn.style.top = `${rect.bottom - btnSize - offset}px`;
            zoomBtn.style.left = `${rect.right - btnSize - offset}px`;
            zoomBtn.classList.remove('opacity-0', 'pointer-events-none', 'scale-75');
            zoomBtn.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
        };

        const handleMouseLeave = () => {
            this._zoomBtnTimeout = setTimeout(() => {
                zoomBtn.classList.add('opacity-0', 'pointer-events-none', 'scale-75');
                zoomBtn.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
            }, 300);
        };

        const attachZoom = (container) => {
            if (!container) return;
            const images = container.querySelectorAll('img:not([data-no-zoom]):not([data-zoom-ready])');
            images.forEach(img => {
                img.setAttribute('data-zoom-ready', 'true');
                img.classList.add('zoom-active-cursor');
                img.addEventListener('mouseenter', handleMouseEnter);
                img.addEventListener('mouseleave', handleMouseLeave);
                img.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    this.openZoom(img.src, img.alt || img.title || '');
                });
            });
        };

        attachZoom(document.getElementById('tab-content'));
        if (!this._zoomObserver) {
            this._zoomObserver = new MutationObserver((mutations) => {
                mutations.forEach(m => {
                    m.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            if (node.tagName === 'IMG') attachZoom(node.parentElement);
                            else attachZoom(node);
                        }
                    });
                });
            });
            const tabContent = document.getElementById('tab-content');
            if (tabContent) this._zoomObserver.observe(tabContent, { childList: true, subtree: true });
        }
    },

    renderInteractiveMap(id, title, description, locations) {
        const center = locations[0] || { lat: 16.047079, lng: 108.206230 };
        const zoom = locations.length === 1 ? 8 : 6;
        const markersHtml = locations.map((loc, idx) => `
            <button onclick="Lesson.flyToMapLocation('${id}', ${idx}, ${loc.lat}, ${loc.lng}, '${(loc.name || '').replace(/'/g, "\\'")}', '${(loc.info || '').replace(/'/g, "\\'")}', '${loc.emoji || '📍'}')"
                class="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-slate-700 hover:border-blue-400 hover:shadow-lg transition-all active:scale-95 text-left group"
                id="map-marker-btn-${id}-${idx}">
                <span class="text-2xl shrink-0">${loc.emoji || '📍'}</span>
                <div class="flex-grow min-w-0">
                    <p class="font-black text-gray-800 dark:text-slate-100 text-sm md:text-base truncate">${loc.name}</p>
                    <p class="text-[11px] font-bold text-gray-400 dark:text-slate-500 truncate">${loc.info || ''}</p>
                </div>
                <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        `).join('');
        const mapSrc = `https://maps.google.com/maps?q=${center.lat},${center.lng}&z=${zoom}&output=embed&t=k`;

        return `
        <div class="interactive-map-module p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] border border-blue-100 dark:border-slate-700 mb-6 mt-6" id="map-module-${id}">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-200">🗺️</div>
                <div><h3 class="text-xl md:text-2xl font-black text-blue-600 dark:text-blue-400">${title}</h3><p class="text-sm font-bold text-blue-600/70 dark:text-blue-400/50">${description || 'Nhấn vào các địa điểm bên dưới để khám phá trên bản đồ'}</p></div>
            </div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200 dark:border-slate-600 mt-4">
                <iframe id="map-iframe-${id}" src="${mapSrc}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
                <div id="map-info-${id}" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform translate-y-full transition-transform duration-300">
                    <div class="flex items-center gap-3"><span id="map-info-emoji-${id}" class="text-3xl">📍</span><div><h4 id="map-info-name-${id}" class="text-lg font-black"></h4><p id="map-info-detail-${id}" class="text-sm font-bold opacity-80"></p></div></div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">${markersHtml}</div>
            <div class="flex gap-2 mt-4 justify-center flex-wrap">
                <button onclick="Lesson.switchMapType('${id}', 'k')" class="px-4 py-2 bg-blue-600 text-white font-black rounded-xl text-sm shadow-md active:scale-95 transition-all">🛰️ Vệ tinh</button>
                <button onclick="Lesson.switchMapType('${id}', 'm')" class="px-4 py-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 font-black rounded-xl text-sm shadow-md active:scale-95 transition-all border">🗺️ Bản đồ</button>
                <button onclick="Lesson.openMapFullscreen('${id}')" class="px-4 py-2 bg-emerald-600 text-white font-black rounded-xl text-sm shadow-md active:scale-95 transition-all">🔍 Phóng to</button>
            </div>
        </div>
        `;
    },

    flyToMapLocation(id, idx, lat, lng, name, info, emoji) {
        const iframe = document.getElementById(`map-iframe-${id}`);
        if (iframe) iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&z=10&output=embed&t=k`;
        const overlay = document.getElementById(`map-info-${id}`);
        if (overlay) {
            document.getElementById(`map-info-name-${id}`).textContent = name;
            document.getElementById(`map-info-detail-${id}`).textContent = info;
            document.getElementById(`map-info-emoji-${id}`).textContent = emoji;
            overlay.classList.remove('translate-y-full');
            setTimeout(() => overlay.classList.add('translate-y-full'), 5000);
        }
        const activeBtn = document.getElementById(`map-marker-btn-${id}-${idx}`);
        if (activeBtn) {
            document.querySelectorAll(`[id^="map-marker-btn-${id}-"]`).forEach(btn => btn.classList.remove('border-blue-500', 'bg-blue-50', 'shadow-lg'));
            activeBtn.classList.add('border-blue-500', 'bg-blue-50', 'shadow-lg');
        }
    },

    switchMapType(id, type) {
        const iframe = document.getElementById(`map-iframe-${id}`);
        if (iframe) iframe.src = iframe.src.replace(/&t=[a-z]/, `&t=${type}`);
    },

    openMapFullscreen(id) {
        const iframe = document.getElementById(`map-iframe-${id}`);
        if (iframe) this.openZoom(iframe.src, 'Bản đồ tương tác — cuộn chuột để zoom | kéo để di chuyển');
    },

    // =========================================
    // NATIVE WEB PRESENTATION FEATURE
    // =========================================
    _currentSlideIndex: 0,
    _presentationActive: false,

    startPresentation(lessonId) {
        // Find the lesson object from window globally (assuming it's loaded like window.lesson123)
        const lessonObj = window[`lesson${lessonId.split('_').pop()}`] || window.currentLessonData;
        
        if (!lessonObj) {
            alert('Không tìm thấy dữ liệu bài học để trình chiếu.');
            return;
        }

        if (!Array.isArray(lessonObj.presentation) || lessonObj.presentation.length === 0) {
            alert('Bài học này chưa được cấu hình nội dung trình chiếu (mảng `presentation` trống).');
            return;
        }

        const overlay = document.getElementById('presentation-overlay');
        const wrapper = document.getElementById('slides-wrapper');
        
        if (!overlay || !wrapper) {
            console.error('Không tìm thấy khung Presentation Overlay trong HTML.');
            return;
        }

        // Tạo các Slide từ mảng presentation
        wrapper.innerHTML = '';
        lessonObj.presentation.forEach((slideHTML, index) => {
            const section = document.createElement('section');
            section.className = `web-slide ${index === 0 ? 'active' : ''}`;
            section.innerHTML = window.UI && window.UI.parseTutor ? window.UI.parseTutor(slideHTML) : slideHTML;
            
            // Tìm và loại bỏ thuộc tính autoplay để tránh trình duyệt tự kích hoạt trước khi logic của chúng ta chạy
            const autos = section.querySelectorAll('video[autoplay], audio[autoplay]');
            autos.forEach(a => {
                a.removeAttribute('autoplay');
                a.pause(); // Cẩn thận hơn
            });

            wrapper.appendChild(section);

            // Thực thi các thẻ script bên trong slide (do innerHTML không tự chạy script)
            const scripts = section.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                document.body.appendChild(newScript);
                oldScript.parentNode.removeChild(oldScript);
            });
        });

        this._currentSlideIndex = 0;
        this._presentationActive = true;
        
        // Cập nhật trạng thái media ban đầu (chỉ play slide 0 nếu có)
        this._syncSlideMedia(0);

        // Hiện Overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Khoá cuộn trang nền
        document.body.classList.add('presentation-mode'); // Kích hoạt chế độ TV Presentation

        // Đảm bảo nút điều hướng luôn hiển thị đúng text
        const navBtns = overlay.querySelectorAll('.nav-controls button');
        if (navBtns.length >= 2) {
            navBtns[0].innerHTML = '&#10094;';
            navBtns[1].innerHTML = '&#10095;';
        }

        // Đăng ký sự kiện bàn phím nếu chưa có
        if (!this._pptKeyHandler) {
            this._pptKeyHandler = (e) => {
                if (!this._presentationActive) return;
                if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "Space") {
                    e.preventDefault();
                    this.moveSlide(1);
                }
                if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                    e.preventDefault();
                    this.moveSlide(-1);
                }
                if (e.key === "Escape") {
                    e.preventDefault();
                    this.stopPresentation();
                }
            };
            document.addEventListener('keydown', this._pptKeyHandler);
        }
    },

    stopPresentation() {
        this._presentationActive = false;
        const overlay = document.getElementById('presentation-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
        document.body.style.overflow = ''; // Mở lại cuộn trang nền
        document.body.classList.remove('presentation-mode'); // Tắt chế độ TV Presentation
    },

    moveSlide(step) {
        if (!this._presentationActive) return;
        const overlay = document.getElementById('presentation-overlay');
        if (!overlay) return;

        const slides = overlay.querySelectorAll('.web-slide');
        if (slides.length === 0) return;

        // Xóa class active ở slide hiện tại
        if (slides[this._currentSlideIndex]) {
            slides[this._currentSlideIndex].classList.remove('active');
        }

        // Tính slide tiếp theo (vòng lặp)
        this._currentSlideIndex = (this._currentSlideIndex + step + slides.length) % slides.length;

        // Thêm class active
        if (slides[this._currentSlideIndex]) {
            slides[this._currentSlideIndex].classList.add('active');
            // Sync media cho slide mới
            this._syncSlideMedia(this._currentSlideIndex);
        }
    },

    /**
     * Đồng bộ trạng thái Media (assets/assets/video/Audio) khi chuyển slide
     * @param {number} activeIndex 
     */
    _syncSlideMedia(activeIndex) {
        const overlay = document.getElementById('presentation-overlay');
        if (!overlay) return;

        const slides = overlay.querySelectorAll('.web-slide');
        
        slides.forEach((slide, idx) => {
            const mediaElements = slide.querySelectorAll('video, audio');
            if (idx === activeIndex) {
                // Trang hiện hành: Play
                mediaElements.forEach(media => {
                    media.currentTime = 0; // Luôn bắt đầu từ đầu
                    const playPromise = media.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            // Tự động play có thể bị trình duyệt chặn nếu chưa có tương tác người dùng
                            console.log("Auto-play was prevented by browser:", error);
                        });
                    }
                });
            } else {
                // Trang khác: Pause
                mediaElements.forEach(media => {
                    media.pause();
                });
            }
        });
    },

    // =========================================
    // MÔ PHỎNG THÍ NGHIỆM TƯƠNG TÁC
    // =========================================
    _expSimActiveTab: 0,
    _expSimRunning: false,

    /**
     * Mở popup mô phỏng thí nghiệm
     * @param {Array} experiments - Mảng các thí nghiệm [{id, title, icon, steps}]
     */
    openExperimentSimulator(experiments) {
        const existing = document.getElementById('edu-experiment-modal');
        if (existing) existing.remove();

        this._expSimActiveTab = 0;
        this._expSimRunning = false;
        this._expConfigs = experiments;

        const modal = document.createElement('div');
        modal.id = 'edu-experiment-modal';
        modal.className = 'fixed inset-0 z-[999999] flex items-center justify-center p-4';
        modal.style.cssText = 'animation: expFadeIn 0.3s ease-out forwards;';

        // Tạo CSS cho animation mô phỏng
        const styleEl = document.createElement('style');
        styleEl.id = 'edu-experiment-styles';
        styleEl.textContent = `
            @keyframes expFadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes expSlideUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
            @keyframes botKhi { 
                0% { bottom: 20%; opacity: 0.8; transform: scale(0.6) translateX(0); }
                50% { opacity: 1; transform: scale(1) translateX(4px); }
                100% { bottom: 85%; opacity: 0; transform: scale(0.3) translateX(-4px); }
            }
            @keyframes datRoi {
                0% { top: 5%; opacity: 1; }
                40% { top: 50%; opacity: 1; }
                60% { top: 60%; opacity: 0.9; }
                100% { top: 65%; opacity: 0.8; }
            }
            @keyframes songNuoc {
                0%, 100% { transform: translateX(0) scaleY(1); }
                25% { transform: translateX(-3px) scaleY(1.05); }
                75% { transform: translateX(3px) scaleY(0.95); }
            }
            @keyframes hoiNuoc {
                0% { opacity: 0; transform: translateY(0) scale(0.5); }
                30% { opacity: 0.7; transform: translateY(-8px) scale(0.8); }
                70% { opacity: 0.4; transform: translateY(-20px) scale(1.1); }
                100% { opacity: 0; transform: translateY(-35px) scale(0.6); }
            }
            @keyframes khoiMun {
                0% { opacity: 0; transform: translateY(0) scale(0.4) rotate(0deg); }
                40% { opacity: 0.6; transform: translateY(-15px) scale(0.9) rotate(5deg); }
                100% { opacity: 0; transform: translateY(-40px) scale(1.2) rotate(-5deg); }
            }
            @keyframes luaDenCon {
                0%, 100% { transform: scaleY(1) scaleX(1); }
                30% { transform: scaleY(1.15) scaleX(0.9); }
                60% { transform: scaleY(0.85) scaleX(1.1); }
            }
            @keyframes giotNuoc {
                0% { opacity: 0; transform: scale(0); }
                50% { opacity: 0.8; transform: scale(1.2); }
                100% { opacity: 0.6; transform: scale(1) translateY(3px); }
            }
            @keyframes pulseGlow {
                0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
                50% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); }
            }
            .exp-bubble {
                position: absolute;
                width: 8px; height: 8px;
                border-radius: 50%;
                background: rgba(255,255,255,0.7);
                border: 1px solid rgba(255,255,255,0.9);
                animation: botKhi 2s ease-out infinite;
            }
            .exp-steam {
                position: absolute;
                width: 12px; height: 12px;
                border-radius: 50%;
                background: rgba(200,220,255,0.5);
                animation: hoiNuoc 2.5s ease-out infinite;
            }
            .exp-smoke {
                position: absolute;
                width: 14px; height: 14px;
                border-radius: 50%;
                background: rgba(120,100,80,0.4);
                animation: khoiMun 3s ease-out infinite;
            }
            .exp-tab-active {
                background: linear-gradient(135deg, #10b981, #059669) !important;
                color: white !important;
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            }
            .exp-step-card {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .exp-step-card.active {
                border-color: #10b981;
                background: linear-gradient(135deg, #ecfdf5, #d1fae5);
            }
        `;
        document.head.appendChild(styleEl);

        // Tạo tabs HTML
        const tabsHtml = experiments.map((exp, i) => `
            <button onclick="Lesson._switchExpTab(${i})" id="exp-tab-${i}"
                class="flex-1 py-3 px-4 rounded-2xl font-black text-sm md:text-base transition-all active:scale-95 ${i === 0 ? 'exp-tab-active' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}">
                <span class="text-lg mr-1">${exp.icon}</span> ${exp.title}
            </button>
        `).join('');

        // Tạo content cho mỗi thí nghiệm
        const contentsHtml = experiments.map((exp, i) => `
            <div id="exp-content-${i}" class="${i === 0 ? '' : 'hidden'} space-y-5">
                <!-- Khu vực mô phỏng trực quan -->
                <div class="relative rounded-[28px] overflow-hidden border-2 border-slate-200 dark:border-slate-600" 
                     style="height: 320px; background: ${exp.labBg || 'linear-gradient(180deg, #e0f2fe 0%, #bae6fd 40%, #7dd3fc 100%)'};">
                    <div id="exp-lab-${i}" class="relative w-full h-full flex items-center justify-center">
                        ${exp.labHtml}
                    </div>
                </div>

                <!-- Các bước thí nghiệm -->
                <div class="space-y-3">
                    ${exp.steps.map((step, si) => `
                        <div id="exp-step-${i}-${si}" class="exp-step-card p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 ${si === 0 ? 'active' : ''}">
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-black text-sm 
                                    ${si === 0 ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400'}">
                                    ${si + 1}
                                </div>
                                <div class="flex-1">
                                    <h5 class="font-black text-sm md:text-base text-slate-800 dark:text-slate-100">${step.title}</h5>
                                    <p class="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">${step.desc}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Nút điều khiển -->
                <div class="flex gap-3 justify-center">
                    <button onclick="Lesson._runExperiment(${i})" id="exp-run-btn-${i}"
                        class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-2 text-sm md:text-base"
                        style="animation: pulseGlow 2s infinite;">
                        ▶️ Bắt đầu thí nghiệm
                    </button>
                    <button onclick="Lesson._resetExperiment(${i})"
                        class="px-5 py-3 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 font-black rounded-2xl transition-all active:scale-95 text-sm md:text-base">
                        ↺ Làm lại
                    </button>
                </div>

                <!-- Kết luận -->
                <div id="exp-conclusion-${i}" class="hidden p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xl">✅</span>
                        <h5 class="font-black text-emerald-800 dark:text-emerald-400 text-base md:text-lg">Kết luận</h5>
                    </div>
                    <p class="font-bold text-sm md:text-base text-emerald-700 dark:text-emerald-300 leading-relaxed">${exp.conclusion}</p>
                </div>
            </div>
        `).join('');

        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="Lesson.closeExperimentSimulator()"></div>
            <div class="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-[36px] shadow-2xl border border-slate-200 dark:border-slate-700"
                 style="animation: expSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;">
                <!-- Header -->
                <div class="sticky top-0 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg rounded-t-[36px] p-5 border-b border-slate-100 dark:border-slate-700">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl">🔬</div>
                            <div>
                                <h3 class="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100">Mô phỏng thí nghiệm</h3>
                                <p class="text-xs font-bold text-slate-400">Nhấn "Bắt đầu" để quan sát hiện tượng</p>
                            </div>
                        </div>
                        <button onclick="Lesson.closeExperimentSimulator()" 
                            class="w-10 h-10 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-500 rounded-xl flex items-center justify-center text-lg font-black transition-all active:scale-90">✕</button>
                    </div>
                    <!-- Tabs -->
                    <div class="flex gap-2">${tabsHtml}</div>
                </div>

                <!-- Body -->
                <div class="p-5">${contentsHtml}</div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Phím Esc đóng
        this._expKeyHandler = (e) => { if (e.key === 'Escape') this.closeExperimentSimulator(); };
        document.addEventListener('keydown', this._expKeyHandler);
    },

    closeExperimentSimulator() {
        const modal = document.getElementById('edu-experiment-modal');
        if (modal) modal.remove();
        const styles = document.getElementById('edu-experiment-styles');
        if (styles) styles.remove();
        document.body.style.overflow = '';
        if (this._expKeyHandler) {
            document.removeEventListener('keydown', this._expKeyHandler);
            this._expKeyHandler = null;
        }
        this._expSimRunning = false;
        // Dọn dẹp các interval
        if (this._expIntervals) {
            this._expIntervals.forEach(id => clearInterval(id));
            this._expIntervals = [];
        }
        if (this._expTimeouts) {
            this._expTimeouts.forEach(id => clearTimeout(id));
            this._expTimeouts = [];
        }
    },

    _switchExpTab(tabIndex) {
        this._expSimActiveTab = tabIndex;
        // Ẩn tất cả content, hiện content được chọn
        document.querySelectorAll('[id^="exp-content-"]').forEach(el => el.classList.add('hidden'));
        const activeContent = document.getElementById(`exp-content-${tabIndex}`);
        if (activeContent) activeContent.classList.remove('hidden');
        // Cập nhật tab style
        document.querySelectorAll('[id^="exp-tab-"]').forEach(el => {
            el.classList.remove('exp-tab-active');
            el.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        });
        const activeTab = document.getElementById(`exp-tab-${tabIndex}`);
        if (activeTab) {
            activeTab.classList.add('exp-tab-active');
            activeTab.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        }
    },

    _runExperiment(expIndex) {
        if (this._expSimRunning) return;
        this._expSimRunning = true;
        this._expIntervals = this._expIntervals || [];
        this._expTimeouts = this._expTimeouts || [];

        const btn = document.getElementById(`exp-run-btn-${expIndex}`);
        if (btn) {
            btn.textContent = '⏳ Đang thí nghiệm...';
            btn.style.animation = 'none';
            btn.disabled = true;
            btn.classList.add('opacity-60');
        }

        const lab = document.getElementById(`exp-lab-${expIndex}`);
        if (!lab) return;

        // Kích hoạt tuần tự các bước
        const steps = document.querySelectorAll(`[id^="exp-step-${expIndex}-"]`);
        const totalSteps = steps.length;
        
        steps.forEach((step, si) => {
            const timeout = setTimeout(() => {
                // Đánh dấu bước hiện tại active
                steps.forEach((s, j) => {
                    s.classList.remove('active');
                    const num = s.querySelector('div:first-child > div:first-child');
                    if (num) {
                        num.classList.remove('bg-emerald-500', 'text-white');
                        num.classList.add('bg-slate-200', 'dark:bg-slate-600', 'text-slate-500');
                    }
                    if (j <= si) {
                        if (j === si) s.classList.add('active');
                        if (num) {
                            num.classList.add('bg-emerald-500', 'text-white');
                            num.classList.remove('bg-slate-200', 'dark:bg-slate-600', 'text-slate-500');
                        }
                    }
                });

                // Gọi animation trực quan tương ứng
                this._runStepAnimation(expIndex, si, lab);

                // Khi đến bước cuối: hiện kết luận
                if (si === totalSteps - 1) {
                    const concTimeout = setTimeout(() => {
                        const conclusion = document.getElementById(`exp-conclusion-${expIndex}`);
                        if (conclusion) {
                            conclusion.classList.remove('hidden');
                            conclusion.style.animation = 'expSlideUp 0.5s ease-out forwards';
                        }
                        this._expSimRunning = false;
                        if (btn) {
                            btn.textContent = '✅ Hoàn thành!';
                            btn.classList.remove('opacity-60');
                        }
                    }, 2500);
                    this._expTimeouts.push(concTimeout);
                }
            }, si * 3000);
            this._expTimeouts.push(timeout);
        });
    },

    _resetExperiment(expIndex) {
        // Dọn dẹp
        if (this._expIntervals) {
            this._expIntervals.forEach(id => clearInterval(id));
            this._expIntervals = [];
        }
        if (this._expTimeouts) {
            this._expTimeouts.forEach(id => clearTimeout(id));
            this._expTimeouts = [];
        }
        this._expSimRunning = false;

        // Reset steps
        const steps = document.querySelectorAll(`[id^="exp-step-${expIndex}-"]`);
        steps.forEach((step, si) => {
            step.classList.remove('active');
            const num = step.querySelector('div:first-child > div:first-child');
            if (num) {
                num.classList.remove('bg-emerald-500', 'text-white');
                num.classList.add('bg-slate-200', 'dark:bg-slate-600', 'text-slate-500');
            }
            if (si === 0) {
                step.classList.add('active');
                if (num) {
                    num.classList.add('bg-emerald-500', 'text-white');
                    num.classList.remove('bg-slate-200', 'dark:bg-slate-600', 'text-slate-500');
                }
            }
        });

        // Ẩn kết luận
        const conclusion = document.getElementById(`exp-conclusion-${expIndex}`);
        if (conclusion) conclusion.classList.add('hidden');

        // Reset lab area
        const lab = document.getElementById(`exp-lab-${expIndex}`);
        if (lab) {
            // Xóa các phần tử animation động
            lab.querySelectorAll('.exp-bubble, .exp-steam, .exp-smoke, .exp-dynamic').forEach(el => el.remove());
            // Reset vị trí cục đất
            const datCuc = lab.querySelector('.dat-cuc');
            if (datCuc) { datCuc.style.animation = 'none'; datCuc.style.top = '5%'; datCuc.style.opacity = '1'; }
            // Reset mặt nước
            const matNuoc = lab.querySelector('.mat-nuoc');
            if (matNuoc) matNuoc.style.animation = 'none';
        }

        // Reset button
        const btn = document.getElementById(`exp-run-btn-${expIndex}`);
        if (btn) {
            btn.innerHTML = '▶️ Bắt đầu thí nghiệm';
            btn.disabled = false;
            btn.classList.remove('opacity-60');
            btn.style.animation = 'pulseGlow 2s infinite';
        }
    },

    /**
     * Chạy animation trực quan cho từng bước thí nghiệm
     * @param {number} expIndex - Chỉ số thí nghiệm
     * @param {number} stepIndex - Chỉ số bước
     * @param {HTMLElement} lab - Phần tử chứa mô phỏng
     */
    _runStepAnimation(expIndex, stepIndex, lab) {
        const exp = this._expConfigs?.[expIndex];
        if (!exp) return;
        const type = exp.type || '';

        // ===== THÍ NGHIỆM 1: THẢ ĐẤT VÀO NƯỚC =====
        if (type === 'tha-dat-vao-nuoc') {
            if (stepIndex === 0) {
                // Bước 1: Bàn tay di chuyển xuống, chuẩn bị thả đất
                const banTay = lab.querySelector('.ban-tay');
                if (banTay) {
                    banTay.style.transition = 'top 1.5s ease-in-out';
                    banTay.style.top = '18%';
                }
            } else if (stepIndex === 1) {
                // Bước 2: Cục đất rơi xuống nước, mặt nước sóng
                const datCuc = lab.querySelector('.dat-cuc');
                const matNuoc = lab.querySelector('.mat-nuoc');
                const banTay = lab.querySelector('.ban-tay');
                if (banTay) {
                    banTay.style.transition = 'top 0.8s ease-out, opacity 0.8s';
                    banTay.style.top = '2%';
                    banTay.style.opacity = '0.5';
                }
                if (datCuc) {
                    datCuc.style.animation = 'datRoi 1.5s ease-in forwards';
                }
                if (matNuoc) {
                    setTimeout(() => {
                        matNuoc.style.animation = 'songNuoc 0.8s ease-in-out 3';
                    }, 800);
                }
            } else if (stepIndex === 2) {
                // Bước 3: Bọt khí nổi lên liên tục
                const cocContainer = lab.querySelector('.absolute');
                if (cocContainer) {
                    // Tạo bọt khí liên tục
                    const interval = setInterval(() => {
                        const bubble = document.createElement('div');
                        bubble.className = 'exp-bubble exp-dynamic';
                        const offsetX = 30 + Math.random() * 80;
                        const size = 4 + Math.random() * 8;
                        bubble.style.cssText = `
                            left: ${offsetX}px;
                            bottom: 25%;
                            width: ${size}px;
                            height: ${size}px;
                            animation-duration: ${1.5 + Math.random() * 1.5}s;
                            animation-delay: ${Math.random() * 0.5}s;
                        `;
                        cocContainer.appendChild(bubble);
                        // Xóa bọt sau khi animation xong
                        setTimeout(() => bubble.remove(), 3500);
                    }, 300);
                    this._expIntervals.push(interval);
                }
            }
        }

        // ===== THÍ NGHIỆM 2: ĐUN ỐNG NGHIỆM =====
        if (type === 'dun-ong-nghiem') {
            if (stepIndex === 0) {
                // Bước 1: Đèn cồn cháy mạnh hơn
                const lua = lab.querySelector('.lua-den-con');
                if (lua) {
                    lua.style.transition = 'transform 0.5s, width 0.5s, height 0.5s';
                    lua.style.width = '22px';
                    lua.style.height = '32px';
                }
            } else if (stepIndex === 1) {
                // Bước 2: Giọt nước ngưng tụ trên thành ống nghiệm
                const ongNghiem = lab.querySelector('[style*="rotate(-30deg)"]');
                if (ongNghiem) {
                    for (let i = 0; i < 6; i++) {
                        const giot = document.createElement('div');
                        giot.className = 'exp-dynamic';
                        const topPos = 15 + i * 12;
                        const leftPos = i % 2 === 0 ? -2 : 26;
                        giot.style.cssText = `
                            position: absolute;
                            top: ${topPos}px;
                            left: ${leftPos}px;
                            width: ${4 + Math.random() * 3}px;
                            height: ${5 + Math.random() * 4}px;
                            border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
                            background: radial-gradient(circle at 30% 30%, rgba(200,230,255,0.9), rgba(100,180,255,0.5));
                            animation: giotNuoc ${0.8 + Math.random() * 0.5}s ease-out ${i * 0.3}s forwards;
                            z-index: 20;
                        `;
                        ongNghiem.querySelector('div')?.appendChild(giot);
                    }
                }
            } else if (stepIndex === 2) {
                // Bước 3: Khói bốc lên từ miệng ống nghiệm
                const ongNghiem = lab.querySelector('[style*="rotate(-30deg)"]');
                if (ongNghiem) {
                    const interval = setInterval(() => {
                        const khoi = document.createElement('div');
                        khoi.className = 'exp-smoke exp-dynamic';
                        khoi.style.cssText = `
                            top: -10px;
                            left: ${8 + Math.random() * 12}px;
                            width: ${10 + Math.random() * 8}px;
                            height: ${10 + Math.random() * 8}px;
                            animation-duration: ${2 + Math.random() * 2}s;
                            animation-delay: ${Math.random() * 0.3}s;
                        `;
                        ongNghiem.querySelector('div')?.appendChild(khoi);
                        setTimeout(() => khoi.remove(), 4500);
                    }, 400);
                    this._expIntervals.push(interval);

                    // Thêm hơi nước (steam) nhỏ bên cạnh
                    const steamInterval = setInterval(() => {
                        const steam = document.createElement('div');
                        steam.className = 'exp-steam exp-dynamic';
                        steam.style.cssText = `
                            top: 0px;
                            left: ${4 + Math.random() * 20}px;
                            animation-duration: ${2 + Math.random() * 1.5}s;
                        `;
                        ongNghiem.querySelector('div')?.appendChild(steam);
                        setTimeout(() => steam.remove(), 4000);
                    }, 600);
                    this._expIntervals.push(steamInterval);
                }
            }
        }
    },

    /**
     * Tạo HTML cố định cho Thí nghiệm 1: Thả đất vào nước
     */
    renderExpLab1_ThaDatVaoNuoc() {
        return `
            <!-- Cốc thuỷ tinh -->
            <div class="absolute" style="bottom: 8%; left: 50%; transform: translateX(-50%); width: 140px; height: 180px;">
                <!-- Thân cốc -->
                <div style="position: absolute; bottom: 0; left: 5%; width: 90%; height: 75%; border: 3px solid rgba(200,220,240,0.8); border-top: none; border-radius: 0 0 12px 12px; background: linear-gradient(180deg, rgba(180,220,255,0.15) 0%, rgba(180,220,255,0.3) 100%);">
                </div>
                <!-- Nước trong cốc -->
                <div class="mat-nuoc" style="position: absolute; bottom: 3px; left: 5.5%; width: 88.5%; height: 60%; background: linear-gradient(180deg, rgba(56,189,248,0.35) 0%, rgba(14,165,233,0.5) 100%); border-radius: 0 0 10px 10px;">
                </div>
                <!-- Cục đất -->
                <div class="dat-cuc" style="position: absolute; top: 5%; left: 50%; transform: translateX(-50%); width: 30px; height: 24px; z-index:5;">
                    <div style="width: 100%; height: 100%; background: radial-gradient(circle at 40% 35%, #a0845c, #6b5b3a); border-radius: 40% 50% 45% 55%; box-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    </div>
                </div>
            </div>
            <!-- Bàn tay (emoji đơn giản) -->
            <div class="ban-tay" style="position: absolute; top: 2%; left: 50%; transform: translateX(-40%); font-size: 2.5rem; z-index: 10; filter: drop-shadow(2px 3px 4px rgba(0,0,0,0.2));">🤏</div>
            <!-- Label -->
            <div style="position: absolute; bottom: 2%; left: 50%; transform: translateX(-50%); text-align: center;">
                <span class="text-xs font-black text-slate-600 bg-white/80 px-3 py-1 rounded-full">Cốc nước sạch</span>
            </div>
        `;
    },

    /**
     * Tạo HTML cố định cho Thí nghiệm 2: Đun ống nghiệm chứa đất
     */
    renderExpLab2_DunOngNghiem() {
        return `
            <!-- Giá đỡ ống nghiệm -->
            <div style="position: absolute; bottom: 25%; left: 50%; transform: translateX(-50%); width: 6px; height: 120px; background: linear-gradient(180deg, #94a3b8, #64748b); border-radius: 3px;"></div>
            <div style="position: absolute; bottom: 25%; left: 50%; transform: translateX(-50%); width: 80px; height: 6px; background: linear-gradient(90deg, #94a3b8, #64748b, #94a3b8); border-radius: 3px;"></div>
            
            <!-- Ống nghiệm nghiêng -->
            <div style="position: absolute; bottom: 30%; left: 50%; transform: translateX(-20%) rotate(-30deg); transform-origin: bottom center;">
                <div style="width: 28px; height: 110px; border: 2px solid rgba(200,220,240,0.9); border-bottom: none; border-radius: 14px 14px 0 0; background: linear-gradient(90deg, rgba(200,220,240,0.1) 0%, rgba(200,220,240,0.2) 50%, rgba(200,220,240,0.1) 100%); position: relative;">
                    <!-- Đất trong ống nghiệm -->
                    <div style="position: absolute; bottom: 0; left: 2px; right: 2px; height: 35%; background: linear-gradient(180deg, #8b7355, #6b5b3a); border-radius: 0 0 10px 10px;"></div>
                    <!-- Miệng ống -->
                    <div style="position: absolute; top: -3px; left: -2px; right: -2px; height: 6px; background: rgba(200,220,240,0.6); border-radius: 3px;"></div>
                </div>
            </div>

            <!-- Đèn cồn -->
            <div style="position: absolute; bottom: 8%; left: 50%; transform: translateX(-50%);">
                <!-- Thân đèn -->
                <div style="width: 50px; height: 40px; background: linear-gradient(180deg, #fbbf24, #d97706); border-radius: 8px 8px 12px 12px; position: relative;">
                    <!-- Bấc đèn -->
                    <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); width: 4px; height: 18px; background: linear-gradient(180deg, #1e293b, #475569);"></div>
                    <!-- Ngọn lửa -->
                    <div class="lua-den-con" style="position: absolute; top: -38px; left: 50%; transform: translateX(-50%); width: 16px; height: 24px; background: radial-gradient(ellipse at center bottom, #fef08a 0%, #fb923c 40%, #ef4444 70%, transparent 100%); border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; animation: luaDenCon 0.6s ease-in-out infinite; filter: blur(0.5px);">
                    </div>
                </div>
            </div>
            <!-- Label -->
            <div style="position: absolute; bottom: 2%; left: 50%; transform: translateX(-50%); text-align: center;">
                <span class="text-xs font-black text-slate-600 bg-white/80 px-3 py-1 rounded-full">Ống nghiệm + Đèn cồn</span>
            </div>
        `;
    }
};


