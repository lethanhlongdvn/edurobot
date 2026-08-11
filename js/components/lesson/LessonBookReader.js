// js/components/lesson/LessonBookReader.js
// Trình đọc sách giáo khoa tương tác (lật trang) kế thừa từ dự án LSDL

export const LessonBookReader = {
    // Danh sách mục lục bài học giống như LSDL
    LESSONS: [
        { title: "Bìa Sách & Giới thiệu", startPage: 1, printPage: "Bìa" },
        { title: "Mục Lục", startPage: 6, printPage: "Trang 4" },
        { 
            title: "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca", 
            startPage: 7, 
            printPage: "Trang 5", 
            type: "geography",
            objectives: [
                "Xác định được vị trí địa lí của Việt Nam trên bản đồ hoặc lược đồ.",
                "Trình bày được ảnh hưởng của vị trí địa lí đối với tự nhiên và hoạt động sản xuất.",
                "Mô tả được hình dạng lãnh thổ phần đất liền của Việt Nam.",
                "Nêu được số lượng đơn vị hành chính của Việt Nam, kể được tên một số tỉnh, thành phố của Việt Nam.",
                "Nêu được ý nghĩa của Quốc kì, Quốc huy, Quốc ca của Việt Nam."
            ]
        },
        { title: "Bài 2: Thiên nhiên Việt Nam", startPage: 11, printPage: "Trang 9", type: "geography" },
        { title: "Bài 3: Biển, đảo Việt Nam", startPage: 18, printPage: "Trang 16", type: "geography" },
        { title: "Bài 4: Dân cư và dân tộc ở Việt Nam", startPage: 22, printPage: "Trang 20", type: "geography" },
        { title: "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc", startPage: 27, printPage: "Trang 25", type: "history" },
        { title: "Bài 6: Vương quốc Phù Nam", startPage: 31, printPage: "Trang 29", type: "history" },
        { title: "Bài 7: Vương quốc Chăm-pa", startPage: 34, printPage: "Trang 32", type: "history" },
        { title: "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc", startPage: 38, printPage: "Trang 36", type: "history" },
        { title: "Bài 9: Triều Lý và việc định đô ở Thăng Long", startPage: 42, printPage: "Trang 40", type: "history" },
        { title: "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên", startPage: 46, printPage: "Trang 44", type: "history" },
        { title: "Bài 11: Ôn tập", startPage: 50, printPage: "Trang 48", type: "general" },
        { title: "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê", startPage: 52, printPage: "Trang 50", type: "history" },
        { title: "Bài 13: Triều Nguyễn", startPage: 58, printPage: "Trang 56", type: "history" },
        { title: "Bài 14: Cách mạng tháng Tám năm 1945", startPage: 63, printPage: "Trang 61", type: "history" },
        { title: "Bài 15: Chiến dịch Điện Biên Phủ năm 1954", startPage: 67, printPage: "Trang 65", type: "history" },
        { title: "Bài 16: Chiến dịch Hồ Chí Minh năm 1975", startPage: 72, printPage: "Trang 70", type: "history" },
        { title: "Bài 17: Đất nước Đổi mới", startPage: 76, printPage: "Trang 74", type: "history" },
        { title: "Bài 18: Nước Cộng hoà Nhân dân Trung Hoa", startPage: 78, printPage: "Trang 76", type: "geography" },
        { title: "Bài 19: Cộng hoà Dân chủ Nhân dân Lào", startPage: 83, printPage: "Trang 81", type: "geography" },
        { title: "Bài 20: Vương quốc Cam-pu-chia", startPage: 87, printPage: "Trang 85", type: "geography" },
        { title: "Bài 21: Hiệp hội các quốc gia Đông Nam Á", startPage: 92, printPage: "Trang 90", type: "geography" },
        { title: "Bài 22: Các châu lục và đại dương trên thế giới", startPage: 96, printPage: "Trang 94", type: "geography" },
        { title: "Bài 23: Dân số và các chủng tộc trên thế giới", startPage: 100, printPage: "Trang 98", type: "geography" },
        { title: "Bài 24: Văn minh Ai Cập", startPage: 104, printPage: "Trang 102", type: "history" },
        { title: "Bài 25: Văn minh Hy Lạp", startPage: 107, printPage: "Trang 105", type: "history" },
        { title: "Bài 26: Xây dựng thế giới xanh – sạch – đẹp", startPage: 111, printPage: "Trang 109", type: "general" },
        { title: "Bài 27: Xây dựng thế giới hoà bình", startPage: 114, printPage: "Trang 112", type: "general" },
        { title: "Bài 28: Ôn tập", startPage: 119, printPage: "Trang 117", type: "general" }
    ],

    state: {
        currentPage: 7,
        totalPages: 123,
        viewMode: 'double', // 'single' hoặc 'double'
        zoom: 100,
        isFlipped: false
    },

    renderBookReader(lesson) {
        // Tự động tìm startPage phù hợp cho bài học
        const startPage = lesson.startPage || 7;
        this.state.currentPage = startPage;

        const currentLesson = this.getCurrentLesson(startPage);

        return `
        <div class="book-reader-container w-full select-none">
            <!-- 1. Thanh điều khiển phía trên -->
            <div class="reader-controls-bar">
                <div class="flex items-center gap-3">
                    <button id="btn-toc-toggle" class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all">
                        ☰ Mục lục
                    </button>
                    <button id="btn-viewmode-toggle" class="bg-gray-50 text-gray-600 hover:bg-gray-100 px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all">
                        📄 Chế độ xem
                    </button>
                </div>

                <!-- Điều hướng trang chính giữa -->
                <div class="flex items-center gap-3 bg-gray-50 dark:bg-slate-800 px-4 py-2 rounded-xl border border-gray-100 dark:border-slate-700">
                    <button id="btn-page-prev" class="text-lg font-black text-blue-600 active:scale-90 transition-transform">◀</button>
                    <div class="flex items-center gap-1">
                        <input id="input-current-page" type="text" value="${this.state.currentPage}" class="w-10 text-center bg-transparent border-none font-black text-blue-600 outline-none">
                        <span class="text-gray-400 font-bold">/${this.state.totalPages}</span>
                    </div>
                    <button id="btn-page-next" class="text-lg font-black text-blue-600 active:scale-90 transition-transform">▶</button>
                </div>

                <!-- Zoom Controls -->
                <div class="flex items-center gap-2">
                    <button id="btn-zoom-out" class="w-8 h-8 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 flex items-center justify-center font-black">−</button>
                    <span id="zoom-value" class="text-xs font-black text-gray-500 min-w-[35px] text-center">${this.state.zoom}%</span>
                    <button id="btn-zoom-in" class="w-8 h-8 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 flex items-center justify-center font-black">+</button>
                </div>
            </div>

            <!-- 2. Vùng hiển thị sách chính -->
            <div class="viewer-area">
                <div class="bg-decor-left"></div>
                <div class="bg-decor-right"></div>

                <!-- Collapsible ToC Drawer -->
                <div id="book-toc-drawer" class="toc-drawer">
                    <h3 class="text-blue-900 dark:text-blue-400">Danh mục Bài học</h3>
                    <ul class="toc-list">
                        ${this.LESSONS.map(l => `
                            <li class="toc-item ${l.startPage === startPage ? 'active' : ''}" data-page="${l.startPage}">
                                <span>${l.title}</span>
                                <span class="text-[10px] opacity-60">${l.printPage}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Book Wrapper -->
                <div id="book-wrapper-scale" class="book-wrapper duration-300">
                    <div class="book-container">
                        <div id="book-element" class="book">
                            <!-- 1. Trang Trái -->
                            <div class="book-page page-left">
                                <div class="page-face">
                                    <img id="img-page-left" src="assets/images/sgk-lsdl/SGK_lich-su-va-dia-li-lop-5-kntt-da_nen_011f5-${String(this.state.currentPage).padStart(3, '0')}.png" alt="Trang ${this.state.currentPage}">
                                    
                                    <!-- Hotspots Clickbox -->
                                    <div id="hotspot-left" class="objectives-clickbox hidden"></div>
                                </div>
                                <div class="book-corner corner-top-left" id="corner-prev-top"></div>
                                <div class="book-corner corner-bottom-left" id="corner-prev-bottom"></div>
                            </div>

                            <!-- 2. Trang Phải -->
                            <div class="book-page page-right">
                                <div class="page-face">
                                    <img id="img-page-right" src="assets/images/sgk-lsdl/SGK_lich-su-va-dia-li-lop-5-kntt-da_nen_011f5-${String(this.state.currentPage + 1).padStart(3, '0')}.png" alt="Trang ${this.state.currentPage + 1}">
                                    
                                    <!-- Hotspots Clickbox -->
                                    <div id="hotspot-right" class="objectives-clickbox hidden"></div>
                                </div>
                                <div class="book-corner corner-top-right" id="corner-next-top"></div>
                                <div class="book-corner corner-bottom-right" id="corner-next-bottom"></div>
                            </div>

                            <!-- Gáy sách -->
                            <div class="book-spine"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Yêu cầu cần đạt -->
            <div id="modal-objectives" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] hidden items-center justify-center p-4">
                <div class="relative w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden animate-scale-up" style="background: linear-gradient(135deg, #1e40af 0%, #2563eb 40%, #3b82f6 100%);">
                    <button id="btn-close-objectives" class="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl font-bold transition-all">×</button>
                    <div class="p-8 md:p-10">
                        <h3 class="text-2xl md:text-3xl font-black text-white flex items-center gap-3 mb-3">🎯 Yêu cầu cần đạt</h3>
                        <h4 id="obj-lesson-title" class="text-base md:text-lg font-bold text-blue-200 mb-6 uppercase tracking-wide"></h4>
                        <div id="obj-list-container" class="text-base md:text-lg text-white/95 space-y-3 font-semibold leading-relaxed"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    initBookReader(lesson) {
        const self = this;
        const drawer = document.getElementById('book-toc-drawer');
        const bookWrapper = document.getElementById('book-wrapper-scale');
        const bookElement = document.getElementById('book-element');

        const updateView = () => {
            const pageInput = document.getElementById('input-current-page');
            if (pageInput) pageInput.value = self.state.currentPage;

            const leftImg = document.getElementById('img-page-left');
            const rightImg = document.getElementById('img-page-right');

            const formattedLeft = String(self.state.currentPage).padStart(3, '0');
            const formattedRight = String(self.state.currentPage + 1).padStart(3, '0');

            if (leftImg) leftImg.src = `assets/images/sgk-lsdl/SGK_lich-su-va-dia-li-lop-5-kntt-da_nen_011f5-${formattedLeft}.png`;
            if (rightImg && self.state.viewMode === 'double') {
                rightImg.src = `assets/images/sgk-lsdl/SGK_lich-su-va-dia-li-lop-5-kntt-da_nen_011f5-${formattedRight}.png`;
            }

            // Cập nhật zoom scale
            if (bookWrapper) {
                bookWrapper.style.transform = `scale(${self.state.zoom / 100})`;
            }

            // Kiểm tra hotspot Yêu cầu cần đạt
            const currentLessonLeft = self.getCurrentLesson(self.state.currentPage);
            const hotspotLeft = document.getElementById('hotspot-left');
            if (hotspotLeft) {
                if (currentLessonLeft && currentLessonLeft.objectives && currentLessonLeft.startPage === self.state.currentPage) {
                    hotspotLeft.classList.remove('hidden');
                } else {
                    hotspotLeft.classList.add('hidden');
                }
            }

            const currentLessonRight = self.getCurrentLesson(self.state.currentPage + 1);
            const hotspotRight = document.getElementById('hotspot-right');
            if (hotspotRight && self.state.viewMode === 'double') {
                if (currentLessonRight && currentLessonRight.objectives && currentLessonRight.startPage === (self.state.currentPage + 1)) {
                    hotspotRight.classList.remove('hidden');
                } else {
                    hotspotRight.classList.add('hidden');
                }
            }
        };

        const nextPage = () => {
            const step = self.state.viewMode === 'double' ? 2 : 1;
            if (self.state.currentPage < self.state.totalPages - (self.state.viewMode === 'double' ? 1 : 0)) {
                if (bookElement) bookElement.classList.add('flipped');
                setTimeout(() => {
                    self.state.currentPage += step;
                    updateView();
                    if (bookElement) bookElement.classList.remove('flipped');
                }, 300);
            }
        };

        const prevPage = () => {
            const step = self.state.viewMode === 'double' ? 2 : 1;
            if (self.state.currentPage > 1) {
                if (bookElement) bookElement.classList.add('flipped');
                setTimeout(() => {
                    self.state.currentPage = Math.max(1, self.state.currentPage - step);
                    updateView();
                    if (bookElement) bookElement.classList.remove('flipped');
                }, 300);
            }
        };

        // Event Listeners cho nút
        document.getElementById('btn-page-next')?.addEventListener('click', nextPage);
        document.getElementById('btn-page-prev')?.addEventListener('click', prevPage);

        // Góc trang click hotspot
        document.getElementById('corner-next-top')?.addEventListener('click', (e) => { e.stopPropagation(); nextPage(); });
        document.getElementById('corner-next-bottom')?.addEventListener('click', (e) => { e.stopPropagation(); nextPage(); });
        document.getElementById('corner-prev-top')?.addEventListener('click', (e) => { e.stopPropagation(); prevPage(); });
        document.getElementById('corner-prev-bottom')?.addEventListener('click', (e) => { e.stopPropagation(); prevPage(); });

        // Cho phép click vào nửa trái/phải của book-container để lật trang (trừ trường hợp click trúng các nút/hotspot tương tác)
        document.querySelector('.book-container')?.addEventListener('click', (e) => {
            if (e.target.closest('.objectives-clickbox') || e.target.closest('.quiz-overlay-btn') || e.target.closest('button') || e.target.closest('input')) {
                return;
            }
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            
            if (clickX < width / 2) {
                prevPage();
            } else {
                nextPage();
            }
        });

        // Zoom
        document.getElementById('btn-zoom-in')?.addEventListener('click', () => {
            self.state.zoom = Math.min(150, self.state.zoom + 10);
            document.getElementById('zoom-value').innerText = `${self.state.zoom}%`;
            updateView();
        });
        document.getElementById('btn-zoom-out')?.addEventListener('click', () => {
            self.state.zoom = Math.max(50, self.state.zoom - 10);
            document.getElementById('zoom-value').innerText = `${self.state.zoom}%`;
            updateView();
        });

        // Toggle Drawer Mục lục
        document.getElementById('btn-toc-toggle')?.addEventListener('click', () => {
            drawer?.classList.toggle('open');
        });

        // Chọn mục lục
        drawer?.querySelectorAll('.toc-item').forEach(item => {
            item.addEventListener('click', () => {
                const targetPage = parseInt(item.getAttribute('data-page'), 10);
                self.state.currentPage = self.state.viewMode === 'double' && targetPage % 2 === 0 ? targetPage - 1 : targetPage;
                updateView();
                drawer.classList.remove('open');
            });
        });

        // Thay đổi chế độ xem (single / double)
        document.getElementById('btn-viewmode-toggle')?.addEventListener('click', () => {
            self.state.viewMode = self.state.viewMode === 'double' ? 'single' : 'double';
            const wrapper = document.getElementById('book-wrapper-scale');
            if (self.state.viewMode === 'single') {
                wrapper?.classList.add('single-view');
            } else {
                wrapper?.classList.remove('single-view');
            }
            updateView();
        });

        // Nhập số trang nhảy
        document.getElementById('input-current-page')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val) && val >= 1 && val <= self.state.totalPages) {
                    self.state.currentPage = self.state.viewMode === 'double' && val % 2 === 0 ? val - 1 : val;
                    updateView();
                }
            }
        });

        // Click xem Yêu cầu cần đạt
        const showObjectives = (pageNum) => {
            const currentLesson = self.getCurrentLesson(pageNum);
            if (!currentLesson || !currentLesson.objectives) return;

            const modal = document.getElementById('modal-objectives');
            const title = document.getElementById('obj-lesson-title');
            const list = document.getElementById('obj-list-container');

            if (modal && title && list) {
                title.innerText = currentLesson.title;
                list.innerHTML = `
                    <p class="text-white font-black mb-3 text-lg md:text-xl">Sau bài học này, em sẽ:</p>
                    <ul class="space-y-3 pl-1">
                        ${currentLesson.objectives.map(o => `<li class="flex items-start gap-3"><span class="mt-1.5 w-2.5 h-2.5 rounded-full bg-yellow-300 flex-shrink-0"></span><span>${o}</span></li>`).join('')}
                    </ul>
                `;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        };

        document.getElementById('hotspot-left')?.addEventListener('click', () => showObjectives(self.state.currentPage));
        document.getElementById('hotspot-right')?.addEventListener('click', () => showObjectives(self.state.currentPage + 1));
        document.getElementById('btn-close-objectives')?.addEventListener('click', () => {
            const modal = document.getElementById('modal-objectives');
            modal?.classList.add('hidden');
            modal?.classList.remove('flex');
        });
        // Bấm ra ngoài vùng nội dung để đóng modal
        document.getElementById('modal-objectives')?.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                e.currentTarget.classList.add('hidden');
                e.currentTarget.classList.remove('flex');
            }
        });

        updateView();
    },

    getCurrentLesson(page) {
        let current = this.LESSONS[0];
        for (let i = 0; i < this.LESSONS.length; i++) {
            if (page >= this.LESSONS[i].startPage) {
                current = this.LESSONS[i];
            }
        }
        return current;
    }
};
