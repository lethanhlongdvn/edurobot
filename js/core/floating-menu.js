/**
 * js/floating-menu.js
 * Quản lý nút bấm nổi (Floating Button) và thực đơn trò chơi EduRobot.
 * Đã sửa lỗi nháy menu và tự động đóng menu khi chọn trò chơi.
 */

(function() {
    const MENU_ID = 'edurobot-floating-menu-container';
    const BTN_G_ID = 'edurobot-floating-btn-g';
    const BTN_R_ID = 'edurobot-floating-btn-r';

    function init() {
        if (document.getElementById(BTN_G_ID)) return;

        const style = document.createElement('style');
        style.textContent = `
            .edurobot-floating-btn {
                position: fixed !important;
                right: 20px !important;
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
                z-index: 2147483647 !important;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                border: 4px solid white !important;
                user-select: none !important;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4) !important;
                pointer-events: auto !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            @media (max-width: 768px) {
                .edurobot-floating-btn {
                    right: 16px !important;
                    width: 44px !important;
                    height: 44px !important;
                    font-size: 20px !important;
                    border-width: 2px !important;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
                }
                #${BTN_G_ID} {
                    bottom: 85px !important;
                }
                #${BTN_R_ID} {
                    bottom: 25px !important;
                }
                #${MENU_ID} {
                    right: 16px !important;
                    bottom: 145px !important;
                    width: calc(100vw - 32px) !important;
                    max-width: 300px !important;
                }
            }

            #${BTN_G_ID} {
                bottom: 95px !important;
                background: #2563eb !important;
            }

            #${BTN_R_ID} {
                bottom: 20px !important;
                background: #f97316 !important;
            }

            .edurobot-floating-btn:hover {
                transform: scale(1.1) rotate(5deg) !important;
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5) !important;
            }

            #${BTN_G_ID}:hover { background: #1d4ed8 !important; }
            #${BTN_R_ID}:hover { background: #ea580c !important; }

            .edurobot-floating-btn:active {
                transform: scale(0.9) !important;
            }

            .edurobot-floating-btn.active {
                background: #ef4444 !important;
                transform: rotate(45deg) !important;
            }

            #${MENU_ID} {
                position: fixed !important;
                bottom: 165px !important;
                right: 90px !important;
                width: 280px !important;
                max-height: calc(100vh - 200px) !important;
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
                0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
                70% { box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
                100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
            }
        `;
        document.head.appendChild(style);

        const isPage = window.location.href.includes('/pages/');
        const assetsPrefix = isPage ? '../' : '';

        const btnG = document.createElement('div');
        btnG.id = BTN_G_ID;
        btnG.className = 'edurobot-floating-btn edurobot-pulse';
        btnG.innerHTML = `<img src="${assetsPrefix}assets/images/gamepad.png" style="width: 100%; height: 100%; object-fit: contain; padding: 15%;" />`;
        btnG.title = 'Trò chơi';

        const btnR = document.createElement('div');
        btnR.id = BTN_R_ID;
        btnR.className = 'edurobot-floating-btn';
        btnR.innerHTML = `<img src="${assetsPrefix}assets/images/chatbot.png" style="width: 100%; height: 100%; object-fit: contain; padding: 15%;" />`;
        btnR.title = 'Robot - Trợ lý của bạn';

        const menu = document.createElement('div');
        menu.id = MENU_ID;
        
        // Cập nhật HTML menu để tự động đóng khi chọn game
        const closeMenu = "document.getElementById('" + MENU_ID + "').style.display='none'; document.getElementById('" + BTN_G_ID + "').classList.remove('active');";
        
        const role = localStorage.getItem('userRole') || '';
        const isTeacher = role === 'teacher' || role === 'admin' || role === 'teacher-admin';
        
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
            ${isTeacher ? `
            <button class="edurobot-menu-item" onclick="${closeMenu} GameLibrary.play('tug_of_war')">
                <div class="edurobot-menu-item-icon bg-rose-100 text-rose-600">🚩</div>
                <div class="edurobot-menu-item-text">
                    <span class="edurobot-menu-item-title text-rose-700">Cuộc chiến Kéo co</span>
                    <span class="edurobot-menu-item-desc text-rose-400">Thi đấu trả lời câu hỏi đồng đội</span>
                </div>
            </button>
            ` : ''}
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
            ${isTeacher ? `
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

        function appendToBody() {
            if (!document.getElementById(BTN_G_ID)) document.body.appendChild(btnG);
            if (!document.getElementById(BTN_R_ID)) document.body.appendChild(btnR);
            if (!document.getElementById(MENU_ID)) document.body.appendChild(menu);
        }

        appendToBody();

        // Chỉ re-append nếu đang ở chế độ Presentation để chống iframe GoogleSlides che khuất
        // Mà không dùng setInterval liên tục để tránh nháy menu
        const observer = new MutationObserver(() => {
            const presentation = document.getElementById('presentation-overlay');
            if (presentation && presentation.classList.contains('active')) {
                // Đảm bảo các nút và cửa sổ chat luôn ở cuối body
                const chatWindow = document.getElementById('ai-chat-window');
                const elements = [menu, btnR, btnG];
                if (chatWindow) elements.push(chatWindow);

                const lastElement = document.body.lastElementChild;
                const isAllAtEnd = elements.includes(lastElement);

                if (!isAllAtEnd) {
                    if (chatWindow) document.body.appendChild(chatWindow);
                    document.body.appendChild(menu);
                    document.body.appendChild(btnR);
                    document.body.appendChild(btnG);
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
                menu.style.display = 'flex';
                btnG.classList.add('active');
                if (window.AIInteraction && typeof window.AIInteraction.closeChat === 'function') {
                    window.AIInteraction.closeChat();
                }
            }
        });

        btnR.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.AIInteraction && typeof window.AIInteraction.toggleChat === 'function') {
                window.AIInteraction.toggleChat();
                menu.style.display = 'none';
                btnG.classList.remove('active');
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
