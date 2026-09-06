/**
 * js/floating-menu.js
 * Quản lý nút bấm nổi (Floating Button) và thực đơn trò chơi EduRobot.
 * Đã thiết kế cụm nút xếp gọn thông minh (Expandable Floating Action Button Group).
 */

(function() {
    // Ghi đè alert toàn cục khi đang ở Fullscreen để tránh trình duyệt tự động thoát Fullscreen
    const nativeAlert = window.alert;
    window.alert = function(message) {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback(
                    "THÔNG BÁO HỆ THỐNG",
                    "⚠️",
                    `<div class="text-center p-4">
                        <p class="text-base md:text-lg font-bold text-slate-800 mb-6" style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                        <button onclick="window.closeMathModal();" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-95 text-sm md:text-base">Xác nhận</button>
                    </div>`
                );
                return;
            }
        }
        nativeAlert(message);
    };

    const MENU_ID = 'edurobot-floating-menu-container';
    const GROUP_ID = 'edurobot-floating-group';
    const BTN_TRIGGER_ID = 'edurobot-floating-trigger'; 
    const BTN_G_ID = 'edurobot-floating-btn-g';
    const BTN_R_ID = 'edurobot-floating-btn-r';
    const BTN_D_ID = 'edurobot-floating-btn-d';
    const CANVAS_CONTAINER_ID = 'edurobot-draw-container';

    function init() {
        if (document.getElementById(GROUP_ID)) return;

        const style = document.createElement('style');
        style.textContent = `
            #${GROUP_ID} {
                position: fixed !important;
                right: 20px !important;
                bottom: 20px !important;
                z-index: 2147483647 !important;
                display: flex !important;
                flex-direction: column-reverse !important;
                align-items: center !important;
                gap: 12px !important;
                pointer-events: none !important;
            }

            .edurobot-floating-btn {
                width: 60px !important;
                height: 60px !important;
                color: white !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-family: 'Be Vietnam Pro', 'Nunito', sans-serif !important;
                font-weight: 900 !important;
                font-size: 32px !important;
                cursor: pointer !important;
                border: 4px solid white !important;
                user-select: none !important;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
                pointer-events: auto !important;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                transform-origin: center center !important;
                box-sizing: border-box !important;
            }

            /* Trạng thái mặc định thu gọn của các nút con */
            .edurobot-floating-btn.child-btn {
                opacity: 0 !important;
                transform: scale(0) translateY(30px) !important;
                pointer-events: none !important;
                height: 0px !important;
                width: 0px !important;
                border-width: 0px !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow: hidden !important;
            }

            /* Khi cụm nút được mở rộng (expanded) */
            #${GROUP_ID}.expanded .edurobot-floating-btn.child-btn {
                opacity: 1 !important;
                transform: scale(1) translateY(0) !important;
                pointer-events: auto !important;
                height: 60px !important;
                width: 60px !important;
                border-width: 4px !important;
            }

            @media (max-width: 768px) {
                #${GROUP_ID} {
                    right: 16px !important;
                    bottom: 16px !important;
                    gap: 8px !important;
                }
                .edurobot-floating-btn {
                    width: 46px !important;
                    height: 46px !important;
                    font-size: 20px !important;
                    border-width: 2px !important;
                }
                #${GROUP_ID}.expanded .edurobot-floating-btn.child-btn {
                    height: 46px !important;
                    width: 46px !important;
                    border-width: 2px !important;
                }
                #${MENU_ID} {
                    right: 16px !important;
                    bottom: 260px !important;
                    width: calc(100vw - 32px) !important;
                    max-width: 300px !important;
                }
            }

            /* Thiết lập màu sắc */
            #${BTN_TRIGGER_ID} {
                background: linear-gradient(135deg, #6366f1, #8b5cf6) !important; /* Indigo to Purple */
                font-size: 24px !important;
                border-color: #c084fc !important;
            }

            #${BTN_TRIGGER_ID}.active {
                background: #ef4444 !important;
                border-color: #fca5a5 !important;
                transform: rotate(135deg) !important;
            }

            #${BTN_R_ID} {
                background: #f97316 !important;
            }

            #${BTN_G_ID} {
                background: #2563eb !important;
            }

            #${BTN_D_ID} {
                background: #10b981 !important;
            }

            .edurobot-floating-btn:hover {
                transform: scale(1.1) rotate(5deg) !important;
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4) !important;
            }
            #${BTN_TRIGGER_ID}.active:hover {
                transform: scale(1.1) rotate(140deg) !important;
            }

            #${BTN_D_ID}:hover { background: #059669 !important; }
            #${BTN_G_ID}:hover { background: #1d4ed8 !important; }
            #${BTN_R_ID}:hover { background: #ea580c !important; }

            .edurobot-floating-btn:active {
                transform: scale(0.9) !important;
            }

            #${MENU_ID} {
                position: fixed !important;
                bottom: 300px !important;
                right: 90px !important;
                width: 280px !important;
                max-height: calc(100vh - 340px) !important;
                background: white !important;
                border-radius: 24px !important;
                box-shadow: 0 20px 50px rgba(0,0,0,0.3) !important;
                z-index: 2147483647 !important;
                overflow-x: hidden !important;
                overflow-y: auto !important;
                display: none;
                flex-direction: column !important;
                border: 1px solid #f1f5f9 !important;
                animation: edurobot-menu-in 0.3s ease forwards !important;
                font-family: 'Be Vietnam Pro', 'Nunito', sans-serif !important;
                pointer-events: auto !important;
            }

            /* Custom Scrollbar */
            #${MENU_ID}::-webkit-scrollbar {
                width: 6px !important;
            }
            #${MENU_ID}::-webkit-scrollbar-track {
                background: #f8fafc !important;
                border-radius: 10px !important;
            }
            #${MENU_ID}::-webkit-scrollbar-thumb {
                background: #cbd5e1 !important;
                border-radius: 10px !important;
            }
            #${MENU_ID}::-webkit-scrollbar-thumb:hover {
                background: #94a3b8 !important;
            }

            @keyframes edurobot-menu-in {
                from { opacity: 0; transform: translateY(20px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }

            .edurobot-menu-header {
                background: #f8fafc !important;
                padding: 16px !important;
                border-bottom: 1px solid #f1f5f9 !important;
                font-weight: 900 !important;
                text-transform: uppercase !important;
                font-size: 11px !important;
                color: #64748b !important;
                letter-spacing: 1px !important;
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
            }

            .edurobot-menu-item {
                padding: 16px 20px !important;
                display: flex !important;
                align-items: center !important;
                gap: 12px !important;
                cursor: pointer !important;
                transition: all 0.2s !important;
                border: none !important;
                background: none !important;
                width: 100% !important;
                text-align: left !important;
                font-family: inherit !important;
            }

            .edurobot-menu-item:hover {
                background: #eff6ff !important;
            }

            .edurobot-menu-item-icon {
                width: 40px !important;
                height: 40px !important;
                background: #f1f5f9 !important;
                border-radius: 12px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 20px !important;
            }

            .edurobot-menu-item:hover .edurobot-menu-item-icon {
                background: #2563eb !important;
                color: white !important;
                transform: scale(1.1) !important;
            }

            .edurobot-menu-item-text { flex: 1 !important; }
            .edurobot-menu-item-title { display: block !important; font-weight: 800 !important; font-size: 14px !important; color: #1e293b !important; }
            .edurobot-menu-item-desc { display: block !important; font-size: 10px !important; font-weight: 600 !important; color: #94a3b8 !important; }

            .edurobot-pulse {
               animation: edurobot-pulse-animation 2s infinite !important;
            }
            @keyframes edurobot-pulse-animation {
                0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
                70% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
                100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
            }

            /* Draw Container styling in main page */
            #${CANVAS_CONTAINER_ID} {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                z-index: 2147483640 !important;
                pointer-events: none !important;
                display: none !important;
            }
            #${CANVAS_CONTAINER_ID} canvas {
                pointer-events: none !important;
            }
            #${CANVAS_CONTAINER_ID}.active {
                pointer-events: auto !important;
                display: block !important;
            }
            #${CANVAS_CONTAINER_ID}.active canvas {
                pointer-events: auto !important;
            }
        `;
        document.head.appendChild(style);

        // Inject thêm CSS của Bảng vẽ vào trang chính
        const drawStyle = document.createElement('link');
        drawStyle.rel = 'stylesheet';
        const isPage = window.location.href.includes('/pages/');
        const assetsPrefix = isPage ? '../' : '';
        drawStyle.href = `${assetsPrefix}css/drawing-board.css`;
        document.head.appendChild(drawStyle);

        // Tạo container bọc ngoài cụm nút nổi
        const group = document.createElement('div');
        group.id = GROUP_ID;

        // Tạo nút Trigger chính chữ E
        const btnTrigger = document.createElement('div');
        btnTrigger.id = BTN_TRIGGER_ID;
        btnTrigger.className = 'edurobot-floating-btn edurobot-pulse';
        btnTrigger.innerHTML = `E`;
        btnTrigger.title = 'Mở rộng thực đơn';

        // Tạo các nút con
        const btnD = document.createElement('div');
        btnD.id = BTN_D_ID;
        btnD.className = 'edurobot-floating-btn child-btn';
        btnD.innerHTML = `🖋️`;
        btnD.title = 'Bảng vẽ & Viết ghi chú';
        btnD.style.fontSize = '24px';

        const btnG = document.createElement('div');
        btnG.id = BTN_G_ID;
        btnG.className = 'edurobot-floating-btn child-btn';
        btnG.innerHTML = `<img src="${assetsPrefix}assets/images/gamepad.png" style="width: 100%; height: 100%; object-fit: contain; padding: 15%;" />`;
        btnG.title = 'Trò chơi';

        const btnR = document.createElement('div');
        btnR.id = BTN_R_ID;
        btnR.className = 'edurobot-floating-btn child-btn';
        btnR.innerHTML = `<img src="${assetsPrefix}assets/images/chatbot.png" style="width: 100%; height: 100%; object-fit: contain; padding: 15%;" />`;
        btnR.title = 'Robot - Trợ lý của bạn';

        // Ghép nút vào container group theo thứ tự flex column-reverse
        group.appendChild(btnTrigger);
        group.appendChild(btnR);
        group.appendChild(btnG);
        group.appendChild(btnD);

        const menu = document.createElement('div');
        menu.id = MENU_ID;
        
        // Cập nhật HTML menu để tự động đóng khi chọn game
        const closeMenu = "document.getElementById('" + MENU_ID + "').style.display='none'; document.getElementById('" + BTN_G_ID + "').classList.remove('active');";
        
        function updateMenuHTML() {
            const role = localStorage.getItem('userRole') || '';
            const isAdmin = role === 'admin' || role === 'teacher-admin';
            const closeMenu = "document.getElementById('" + MENU_ID + "').style.display='none'; document.getElementById('" + BTN_G_ID + "').classList.remove('active');";

            menu.innerHTML = `
                <div class="edurobot-menu-header">
                    <span style="font-size: 16px;">🏆</span> Kho Trò Chơi EduRobot
                </div>
                <button class="edurobot-menu-item" onclick="${closeMenu} GameLibrary.play('LuckyWheel')">
                    <div class="edurobot-menu-item-icon bg-yellow-100 text-yellow-600">🎡</div>
                    <div class="edurobot-menu-item-text">
                        <span class="edurobot-menu-item-title text-yellow-700">Vòng quay may mắn</span>
                        <span class="edurobot-menu-item-desc text-yellow-400">Chọn ngẫu nhiên học sinh từ lớp học</span>
                    </div>
                </button>
                <button class="edurobot-menu-item" onclick="${closeMenu} GameLibrary.play('HeadTiltGame')">
                    <div class="edurobot-menu-item-icon bg-blue-100 text-blue-600">🤳</div>
                    <div class="edurobot-menu-item-text">
                        <span class="edurobot-menu-item-title text-blue-700">Game Nghiêng Đầu</span>
                        <span class="edurobot-menu-item-desc text-blue-400">Nghiêng đầu để chọn đáp án qua Camera AI</span>
                    </div>
                </button>
                <button class="edurobot-menu-item" onclick="${closeMenu} GameLibrary.play('GroupDivider')">
                    <div class="edurobot-menu-item-icon bg-emerald-100 text-emerald-600">👥</div>
                    <div class="edurobot-menu-item-text">
                        <span class="edurobot-menu-item-title text-emerald-700">Chia nhóm hoạt động</span>
                        <span class="edurobot-menu-item-desc text-emerald-400">Phân chia học sinh ngẫu nhiên</span>
                    </div>
                </button>
                <button class="edurobot-menu-item" onclick="${closeMenu} GameLibrary.play('EduCardScanner')">
                    <div class="edurobot-menu-item-icon bg-indigo-100 text-indigo-600">🎴</div>
                    <div class="edurobot-menu-item-text">
                        <span class="edurobot-menu-item-title text-indigo-700">Đấu Trường Quét Thẻ</span>
                        <span class="edurobot-menu-item-desc text-indigo-400">Quét thẻ trả lời trắc nghiệm cả lớp</span>
                    </div>
                </button>
                ${isAdmin ? `
                <button class="edurobot-menu-item" onclick="${closeMenu} GameLibrary.play('tug_of_war')">
                    <div class="edurobot-menu-item-icon bg-rose-100 text-rose-600">🚩</div>
                    <div class="edurobot-menu-item-text">
                        <span class="edurobot-menu-item-title text-rose-700">Cuộc chiến Kéo co</span>
                        <span class="edurobot-menu-item-desc text-rose-400">Thi đấu trả lời câu hỏi đồng đội</span>
                    </div>
                </button>
                <button class="edurobot-menu-item" onclick="${closeMenu} GameLibrary.play('choice_game')">
                    <div class="edurobot-menu-item-icon bg-amber-100 text-amber-600">🎯</div>
                    <div class="edurobot-menu-item-text">
                        <span class="edurobot-menu-item-title text-amber-700">Game trắc nghiệm</span>
                        <span class="edurobot-menu-item-desc text-amber-400">Tùy biến câu hỏi và theo dõi kết quả</span>
                    </div>
                </button>
                <button class="edurobot-menu-item" onclick="${closeMenu} GameLibrary.openMatchingGame()">
                    <div class="edurobot-menu-item-icon bg-purple-100 text-purple-600">🧩</div>
                    <div class="edurobot-menu-item-text">
                        <span class="edurobot-menu-item-title text-purple-700">Ghép Đôi Pro</span>
                        <span class="edurobot-menu-item-desc text-purple-400">Trò chơi ghép hình, chữ đa môn học</span>
                    </div>
                </button>
                <button class="edurobot-menu-item" onclick="${closeMenu} if(window.QuestionBankAdmin) window.QuestionBankAdmin.renderModal(); else alert('Đang tải dữ liệu. Bạn thử lại nhé.')">
                    <div class="edurobot-menu-item-icon bg-indigo-100 text-indigo-600">🏦</div>
                    <div class="edurobot-menu-item-text">
                        <span class="edurobot-menu-item-title text-indigo-700">Ngân hàng Đề</span>
                        <span class="edurobot-menu-item-desc text-indigo-400">Tạo đề thi & Import Excel</span>
                    </div>
                </button>
                ` : ''}
                <div style="padding: 12px; background: #f8fafc; border-top: 1px solid #f1f5f9; text-align: center;">
                     <p style="font-size: 9px; font-weight: 800; color: #94a3b8; text-transform: uppercase;">Phiên bản EduRobot 5.2</p>
                </div>
            `;
        }

        updateMenuHTML();

        // Tạo sẵn Container vẽ nhưng ẩn đi
        const drawContainer = document.createElement('div');
        drawContainer.id = CANVAS_CONTAINER_ID;
        drawContainer.className = 'hidden';
        drawContainer.innerHTML = `
            <canvas id="edurobot-paint-canvas"></canvas>
            <div class="drawing-toolbar" id="edurobot-draw-toolbar" style="left: 50%; bottom: 80px; transform: translateX(-50%); display: none;">
              <div class="toolbar-drag-handle" id="edurobot-drag-handle" title="Kéo để di chuyển"></div>
              <button class="toolbar-btn" data-tool="select" title="Chọn & Di chuyển">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.303.197-1.591 1.591M21.75 12h-2.25m-.197 5.303-1.591-1.591M12 21.75V19.5m-5.303-.197 1.591-1.591M2.25 12h2.25m-.197-5.303 1.591 1.591" /></svg>
              </button>
              <button class="toolbar-btn" data-tool="eraser" title="Tẩy (Xóa đối tượng)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              </button>
              <div class="toolbar-divider"></div>
              <button class="toolbar-btn active" data-tool="pencil" title="Bút chì">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>
              </button>
              <button class="toolbar-btn" data-tool="highlight" title="Bút Highlight">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.53 16.122l9.82-9.82a2.122 2.122 0 10-3-3l-9.82 9.82a2.122 2.122 0 00-.51 1.03l-1.002 4.004a.75.75 0 00.902.902l4.004-1.002a2.122 2.122 0 001.03-.51zM6 14l3 3" /></svg>
              </button>
              <button class="toolbar-btn" data-tool="rect" title="Vẽ hình chữ nhật">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" /></svg>
              </button>
              <button class="toolbar-btn" data-tool="circle" title="Vẽ hình tròn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /></svg>
              </button>
              <button class="toolbar-btn" data-tool="line" title="Vẽ đường thẳng">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.5 19.5 15-15" /></svg>
              </button>
              <button class="toolbar-btn" data-tool="text" title="Nhập chữ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 21V3m8 0H2.5" /></svg>
              </button>
              <div class="toolbar-divider"></div>
              <button class="toolbar-btn" id="edurobot-color-trigger" title="Chọn màu & độ dày">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.53 16.122l9.82-9.82a2.122 2.122 0 10-3-3l-9.82 9.82a2.122 2.122 0 00-.51 1.03l-1.002 4.004a.75.75 0 00.902.902l4.004-1.002a2.122 2.122 0 001.03-.51zm0 0l-3 3m15.03-3.03l-3 3m-9.75-2.625c.162.298.396.55.688.732a3 3 0 11-4.225-4.225l1.62-1.623M16.5 12h-.008v.008H16.5V12Zm-.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0ZM13.5 13.5h-.008v.008H13.5v-.008Zm-.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0Z" /></svg>
                <div class="color-picker-popover" id="edurobot-color-popover">
                  <div class="color-options">
                    <div class="color-swatch" style="background-color: #000000;" data-color="#000000"></div>
                    <div class="color-swatch active" style="background-color: #ef4444;" data-color="#ef4444"></div>
                    <div class="color-swatch" style="background-color: #3b82f6;" data-color="#3b82f6"></div>
                    <div class="color-swatch" style="background-color: #22c55e;" data-color="#22c55e"></div>
                    <div class="color-swatch" style="background-color: #eab308;" data-color="#eab308"></div>
                  </div>
                  <div class="thickness-slider-container">
                    <span id="edurobot-thickness-val">4px</span>
                    <input type="range" class="thickness-slider" id="edurobot-thickness-range" min="2" max="20" value="4">
                  </div>
                </div>
              </button>
              <button class="toolbar-btn" id="edurobot-undo-btn" title="Undo"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg></button>
              <button class="toolbar-btn" id="edurobot-redo-btn" title="Redo"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" /></svg></button>
              <div class="toolbar-divider"></div>
              <!-- Tăng/Giảm cỡ chữ bài học -->
              <button class="toolbar-btn" id="edurobot-font-inc" title="Tăng cỡ chữ bài học" style="display:flex; flex-direction:column; justify-content:center; align-items:center; position:relative;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:16px; height:16px; margin-top:-6px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                <span style="font-size: 9px; font-weight: 900; position:absolute; bottom:2px;">A+</span>
              </button>
              <button class="toolbar-btn" id="edurobot-font-dec" title="Giảm cỡ chữ bài học" style="display:flex; flex-direction:column; justify-content:center; align-items:center; position:relative;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:16px; height:16px; margin-top:-6px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
                <span style="font-size: 9px; font-weight: 900; position:absolute; bottom:2px;">A-</span>
              </button>
              <div class="toolbar-divider"></div>
              <button class="toolbar-btn" id="edurobot-clear-btn" title="Xóa tất cả"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
              <div class="toolbar-divider"></div>
              <!-- Nút Đóng Bảng Vẽ nhanh -->
              <button class="toolbar-btn" id="edurobot-close-draw" title="Tắt chế độ vẽ" style="color: #ef4444; background: rgba(239, 68, 68, 0.05);">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="stroke-width: 2.5px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
        `;

        function appendToBody() {
            if (!document.getElementById(GROUP_ID)) document.body.appendChild(group);
            if (!document.getElementById(MENU_ID)) document.body.appendChild(menu);
            if (!document.getElementById(CANVAS_CONTAINER_ID)) document.body.appendChild(drawContainer);
        }

        appendToBody();

        // Hàm tự động tắt bảng vẽ nếu đang hoạt động
        function deactivateDrawIfNeeded() {
            if (drawContainer && drawContainer.classList.contains('active')) {
                // Giả lập click nút vẽ btnD để kích hoạt logic tắt vẽ đồng bộ
                btnD.click();
            }
        }

        // Tự động đóng/mở cụm nút
        btnTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = group.classList.contains('expanded');
            if (isExpanded) {
                group.classList.remove('expanded');
                btnTrigger.classList.remove('active');
                btnTrigger.innerHTML = 'E'; // Trả về chữ E khi thu gọn
            } else {
                group.classList.add('expanded');
                btnTrigger.classList.add('active');
                btnTrigger.innerHTML = '✕'; // Đổi thành dấu X khi mở rộng
            }
        });

        // Đóng cụm nút khi nhấn ra ngoài
        document.addEventListener('click', () => {
            if (group.classList.contains('expanded')) {
                group.classList.remove('expanded');
                btnTrigger.classList.remove('active');
                btnTrigger.innerHTML = 'E';
            }
        });

        group.addEventListener('click', (e) => e.stopPropagation());

        // Load drawing board JS library dynamically if not yet loaded
        if (typeof DrawingBoard === 'undefined') {
            const script = document.createElement('script');
            script.src = `${assetsPrefix}js/drawing-board.js`;
            script.onload = () => {
                initializeDrawLogic();
            };
            document.body.appendChild(script);
        } else {
            initializeDrawLogic();
        }

        function initializeDrawLogic() {
            const board = new DrawingBoard('edurobot-paint-canvas', CANVAS_CONTAINER_ID);

            // Gán hành động click cho các nút trên thanh công cụ vẽ
            const toolBtns = drawContainer.querySelectorAll('.toolbar-btn[data-tool]');
            toolBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    toolBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    board.setTool(btn.getAttribute('data-tool'));
                });
            });

            // Chọn màu vẽ
            const swatches = drawContainer.querySelectorAll('.color-swatch');
            swatches.forEach(swatch => {
                swatch.addEventListener('click', () => {
                    swatches.forEach(s => s.classList.remove('active'));
                    swatch.classList.add('active');
                    board.currentColor = swatch.getAttribute('data-color');
                });
            });

            // Kéo độ dày vẽ
            const range = document.getElementById('edurobot-thickness-range');
            const valSpan = document.getElementById('edurobot-thickness-val');
            range.addEventListener('input', (e) => {
                valSpan.textContent = `${e.target.value}px`;
                board.currentThickness = parseInt(e.target.value, 10);
            });

            // Trigger đóng/mở popover màu sắc
            const colorTrigger = document.getElementById('edurobot-color-trigger');
            const colorPopover = document.getElementById('edurobot-color-popover');
            colorTrigger.addEventListener('click', (e) => {
                if (e.target.closest('.color-picker-popover')) return;
                colorPopover.classList.toggle('show');
            });
            document.addEventListener('click', (e) => {
                if (!colorTrigger.contains(e.target)) {
                    colorPopover.classList.remove('show');
                }
            });

            // Undo / Redo / Clear
            document.getElementById('edurobot-undo-btn').addEventListener('click', () => board.undo());
            document.getElementById('edurobot-redo-btn').addEventListener('click', () => board.redo());
            document.getElementById('edurobot-clear-btn').addEventListener('click', () => board.clearAll());

            // Tăng / Giảm cỡ chữ bài học toàn cục
            let currentRootFontSizePercent = 100;
            document.getElementById('edurobot-font-inc').addEventListener('click', () => {
                currentRootFontSizePercent += 10;
                currentRootFontSizePercent = Math.min(220, currentRootFontSizePercent);
                document.documentElement.style.fontSize = `${currentRootFontSizePercent}%`;
                if (board && typeof board.initCanvasSize === 'function') {
                    setTimeout(() => board.initCanvasSize(), 50);
                }
            });
            document.getElementById('edurobot-font-dec').addEventListener('click', () => {
                currentRootFontSizePercent -= 10;
                currentRootFontSizePercent = Math.max(70, currentRootFontSizePercent);
                document.documentElement.style.fontSize = `${currentRootFontSizePercent}%`;
                if (board && typeof board.initCanvasSize === 'function') {
                    setTimeout(() => board.initCanvasSize(), 50);
                }
            });

            // Đóng nhanh chế độ vẽ từ thanh công cụ
            document.getElementById('edurobot-close-draw').addEventListener('click', () => {
                const btnD = document.getElementById(BTN_D_ID);
                if (btnD) {
                    btnD.click(); // Giả lập click để tắt vẽ
                }
            });

            // Kéo thả thanh công cụ vẽ nổi
            const toolbar = document.getElementById('edurobot-draw-toolbar');
            const handle = document.getElementById('edurobot-drag-handle');
            let isDragging = false;
            let offsetX, offsetY;

            handle.addEventListener('mousedown', (e) => {
                isDragging = true;
                toolbar.classList.remove('dock-top', 'dock-bottom', 'dock-left');
                offsetX = e.clientX - toolbar.offsetLeft;
                offsetY = e.clientY - toolbar.offsetTop;
                toolbar.style.transform = 'none';
                toolbar.style.transition = 'none';
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                let x = e.clientX - offsetX;
                let y = e.clientY - offsetY;
                x = Math.max(10, Math.min(window.innerWidth - toolbar.offsetWidth - 10, x));
                y = Math.max(10, Math.min(window.innerHeight - toolbar.offsetHeight - 10, y));
                toolbar.style.left = `${x}px`;
                toolbar.style.top = `${y}px`;
                toolbar.style.bottom = 'auto';
            });

            document.addEventListener('mouseup', () => {
                if (!isDragging) return;
                isDragging = false;
                toolbar.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease';
                const rect = toolbar.getBoundingClientRect();
                const threshold = 50;
                if (rect.top < threshold) {
                    toolbar.classList.add('dock-top');
                    toolbar.style.left = '50%';
                    toolbar.style.top = '10px';
                } else if (window.innerHeight - rect.bottom < threshold) {
                    toolbar.classList.add('dock-bottom');
                    toolbar.style.left = '50%';
                    toolbar.style.top = 'auto';
                    toolbar.style.bottom = '10px';
                } else if (rect.left < threshold) {
                    toolbar.classList.add('dock-left');
                    toolbar.style.left = '10px';
                    toolbar.style.top = '50%';
                }
            });

            // Touch support for dragging
            handle.addEventListener('touchstart', (e) => {
                isDragging = true;
                toolbar.classList.remove('dock-top', 'dock-bottom', 'dock-left');
                const touch = e.touches[0];
                offsetX = touch.clientX - toolbar.getBoundingClientRect().left;
                offsetY = touch.clientY - toolbar.getBoundingClientRect().top;
                toolbar.style.transform = 'none';
                toolbar.style.transition = 'none';
            });

            document.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                const touch = e.touches[0];
                let x = touch.clientX - offsetX;
                let y = touch.clientY - offsetY;
                x = Math.max(10, Math.min(window.innerWidth - toolbar.offsetWidth - 10, x));
                y = Math.max(10, Math.min(window.innerHeight - toolbar.offsetHeight - 10, y));
                toolbar.style.left = `${x}px`;
                toolbar.style.top = `${y}px`;
                toolbar.style.bottom = 'auto';
            });

            document.addEventListener('touchend', () => {
                if (!isDragging) return;
                isDragging = false;
            });
            
            // Lắng nghe resize màn hình để cập nhật kích thước canvas vẽ
            window.addEventListener('resize', () => {
                if (board && typeof board.initCanvasSize === 'function') {
                    board.initCanvasSize();
                }
            });
        }

        // Sự kiện click nút vẽ nổi để BẬT/TẮT bảng vẽ
        btnD.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = drawContainer.classList.contains('active');
            const toolbar = document.getElementById('edurobot-draw-toolbar');
            
            if (isActive) {
                // Tắt vẽ
                drawContainer.classList.remove('active');
                drawContainer.classList.add('hidden');
                btnD.classList.remove('active');
                btnD.innerHTML = '🖋️';
                if (toolbar) toolbar.style.display = 'none';
            } else {
                // Bật vẽ
                drawContainer.classList.add('active');
                drawContainer.classList.remove('hidden');
                btnD.classList.add('active');
                btnD.innerHTML = '✕';
                if (toolbar) {
                    toolbar.style.display = 'flex';
                    if (!toolbar.style.left || toolbar.style.left === '50%') {
                        toolbar.style.left = '50%';
                        toolbar.style.bottom = '80px';
                        toolbar.style.top = 'auto';
                        toolbar.style.transform = 'translateX(-50%)';
                    }
                }
                
                // Đóng các menu game hay chatbot khác
                menu.style.display = 'none';
                btnG.classList.remove('active');
                if (window.AIInteraction && typeof window.AIInteraction.closeChat === 'function') {
                    window.AIInteraction.closeChat();
                }
                
                // Kích hoạt cập nhật kích thước Canvas ngay lập tức
                const paintCanvas = document.getElementById('edurobot-paint-canvas');
                if (paintCanvas) {
                    paintCanvas.width = window.innerWidth;
                    paintCanvas.height = window.innerHeight;
                }
            }
        });

        // Chỉ re-append nếu đang ở chế độ Presentation để chống iframe GoogleSlides che khuất
        // Mà không dùng setInterval liên tục để tránh nháy menu
        const observer = new MutationObserver(() => {
            const presentation = document.getElementById('presentation-overlay');
            if (presentation && presentation.classList.contains('active')) {
                const chatWindow = document.getElementById('ai-chat-window');
                const elements = [drawContainer, menu, group];
                if (chatWindow) elements.push(chatWindow);

                const lastElement = document.body.lastElementChild;
                const isAllAtEnd = elements.includes(lastElement);

                if (!isAllAtEnd) {
                    if (chatWindow) document.body.appendChild(chatWindow);
                    document.body.appendChild(drawContainer);
                    document.body.appendChild(menu);
                    document.body.appendChild(group);
                }
            }
        });
        observer.observe(document.body, { childList: true });

        btnG.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = menu.style.display === 'flex';
            if (isOpen) {
                menu.style.display = 'none';
                btnG.classList.remove('active');
            } else {
                updateMenuHTML();
                menu.style.display = 'flex';
                btnG.classList.add('active');
                if (window.AIInteraction && typeof window.AIInteraction.closeChat === 'function') {
                    window.AIInteraction.closeChat();
                }
                // Tắt bảng vẽ nếu đang bật
                if (drawContainer.classList.contains('active')) {
                    btnD.click();
                }
            }
        });

        btnR.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.AIInteraction && typeof window.AIInteraction.toggleChat === 'function') {
                window.AIInteraction.toggleChat();
                menu.style.display = 'none';
                btnG.classList.remove('active');
                // Tắt bảng vẽ nếu đang bật
                if (drawContainer.classList.contains('active')) {
                    btnD.click();
                }
            }
        });

        document.addEventListener('click', () => {
            menu.style.display = 'none';
            btnG.classList.remove('active');
        });

        menu.addEventListener('click', (e) => e.stopPropagation());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
