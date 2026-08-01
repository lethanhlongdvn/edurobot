// === 122/cube3d.js ===
// Logic mô phỏng khối hộp chữ nhật 3D tương tác cho Tiết 122

(function() {
    const CUBE_SIZE = 50; // Khối mini là 1dm3 (tương ứng 50px trong scene)
    const DEFAULT_ROT_X = -20;
    const DEFAULT_ROT_Y = -30;

    // Dimensions for Lesson 122: 6dm x 5dm x 4dm
    const TOTAL_X = 6;
    const TOTAL_Y = 4;
    const TOTAL_Z = 5;

    function ensureBlocksData122() {
        if (window.blocksData122) return window.blocksData122;
        window.blocksData122 = [];
        // Xếp từ dưới lên (y giảm dần), từ trước ra sau (z tăng), từ trái sang phải (x tăng)
        for (let y = TOTAL_Y - 1; y >= 0; y--) {
            for (let z = 0; z < TOTAL_Z; z++) {
                for (let x = 0; x < TOTAL_X; x++) {
                    window.blocksData122.push({ x, y, z });
                }
            }
        }
        return window.blocksData122;
    }

    function createController(key, ids) {
        if (!window.lesson122CubeControllers) window.lesson122CubeControllers = {};
        if (window.lesson122CubeControllers[key]) return window.lesson122CubeControllers[key];

        const controller = {
            ids,
            dragInit: false,
            dragging: false,
            startX: 0,
            startY: 0,
            rotX: DEFAULT_ROT_X,
            rotY: DEFAULT_ROT_Y,
            fillStage: 0,
            blockIdx: 0,
            detachDrag: null
        };
        window.lesson122CubeControllers[key] = controller;
        return controller;
    }

    function setupDrag(controller) {
        if (controller.dragInit) return;
        const scene = document.getElementById(controller.ids.scene);
        const wrapper = document.getElementById(controller.ids.wrapper);
        if (!scene || !wrapper) return;

        const handleDragStart = (e) => {
            if (wrapper.classList.contains('rotate-anim-122')) return;
            controller.dragging = true;
            wrapper.classList.replace('cursor-grab', 'cursor-grabbing');
            if (e.type === 'touchstart') {
                controller.startX = e.touches[0].clientX;
                controller.startY = e.touches[0].clientY;
            } else {
                controller.startX = e.clientX;
                controller.startY = e.clientY;
            }
        };

        const handleDragMove = (e) => {
            if (!controller.dragging) return;
            e.preventDefault();
            let currentX, currentY;
            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX;
                currentY = e.touches[0].clientY;
            } else {
                currentX = e.clientX;
                currentY = e.clientY;
            }
            const deltaX = currentX - controller.startX;
            const deltaY = currentY - controller.startY;
            controller.rotY += deltaX * 0.5;
            controller.rotX -= deltaY * 0.5;
            controller.rotX = Math.max(-80, Math.min(80, controller.rotX));
            wrapper.style.transform = `rotateX(${controller.rotX}deg) rotateY(${controller.rotY}deg)`;
            controller.startX = currentX;
            controller.startY = currentY;
        };

        const handleDragEnd = () => {
            if (!controller.dragging) return;
            controller.dragging = false;
            wrapper.classList.replace('cursor-grabbing', 'cursor-grab');
        };

        scene.addEventListener('mousedown', handleDragStart);
        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        scene.addEventListener('touchstart', handleDragStart, { passive: false });
        document.addEventListener('touchmove', handleDragMove, { passive: false });
        document.addEventListener('touchend', handleDragEnd);

        controller.detachDrag = () => {
            scene.removeEventListener('mousedown', handleDragStart);
            document.removeEventListener('mousemove', handleDragMove);
            document.removeEventListener('mouseup', handleDragEnd);
            scene.removeEventListener('touchstart', handleDragStart);
            document.removeEventListener('touchmove', handleDragMove);
            document.removeEventListener('touchend', handleDragEnd);
        };
        controller.dragInit = true;
    }

    function playSFX(name, vol) {
        if (window.Quiz && typeof window.Quiz.playSFX === 'function') {
            window.Quiz.playSFX(name, vol);
        }
    }

    function fillCube(controller) {
        const container = document.getElementById(controller.ids.layers);
        const btn = document.getElementById(controller.ids.button);
        if (!container || !btn || controller.fillStage >= 6) return;

        const blocksData = ensureBlocksData122();
        // Stages: 1 block, 1 row (5 blocks more), 1 layer (24 blocks more), then 3 more layers (30 blocks each)
        // Correcting stages for 6x5x4:
        // Stage 0: 1 block (1/120)
        // Stage 1: 5 more blocks -> 1 row of 6 blocks (6/120)
        // Stage 2: 24 more blocks -> 1 layer of 6x5 = 30 blocks (30/120)
        // Stage 3: 30 more blocks -> Layer 2 (60/120)
        // Stage 4: 30 more blocks -> Layer 3 (90/120)
        // Stage 5: 30 more blocks -> Layer 4 (120/120)
        const stageCounts = [1, 5, 24, 30, 30, 30];
        const blocksToStack = stageCounts[controller.fillStage];
        let delay = 0;

        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');

        let countAdded = 0;
        for (let i = 0; i < blocksToStack; i++) {
            if (controller.blockIdx >= blocksData.length) break;
            const b = blocksData[controller.blockIdx++];
            // Center the whole 6x5x4 box
            // total width = 6 * 50 = 300 -> center is 150
            // total depth = 5 * 50 = 250 -> center is 125
            // total height = 4 * 50 = 200 -> center is 100
            const tx = -150 + (b.x * CUBE_SIZE) + (CUBE_SIZE / 2);
            const ty = -100 + (b.y * CUBE_SIZE) + (CUBE_SIZE / 2);
            const tz = -125 + (b.z * CUBE_SIZE) + (CUBE_SIZE / 2);

            const block = document.createElement('div');
            block.className = 'minicube-122';
            block.style.transform = `translate3d(${tx}px, ${ty}px, ${tz}px) scale(0)`;
            block.style.opacity = '0';
            block.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            block.innerHTML = `
                <div class="face front"></div>
                <div class="face back"></div>
                <div class="face right"></div>
                <div class="face left"></div>
                <div class="face top"></div>
                <div class="face bottom"></div>
            `;
            container.appendChild(block);

            setTimeout(() => {
                block.style.transform = `translate3d(${tx}px, ${ty}px, ${tz}px) scale(1)`;
                block.style.opacity = '1';
                countAdded++;
                if (blocksToStack < 10) playSFX('pop', 0.2);
                else if (countAdded % 5 === 0) playSFX('pop', 0.1);
            }, delay);
            delay += (blocksToStack > 10) ? 20 : 100;
        }

        setTimeout(() => {
            controller.fillStage++;
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
            
            const btnTexts = [
                '🧊 Bấm lần 1: Xếp 1 hình',
                '🧊 Bấm lần 2: Xếp 1 hàng',
                '🧊 Bấm lần 3: Xếp lớp 1',
                '🧊 Bấm lần 4: Xếp lớp 2',
                '🧊 Bấm lần 5: Xếp lớp 3',
                '🧊 Bấm lần 6: Xếp lớp 4 (Đầy!)'
            ];
            
            if (controller.fillStage < 6) {
                btn.innerHTML = btnTexts[controller.fillStage];
            } else {
                btn.innerHTML = '✨ Đã lấp đầy';
                btn.disabled = true;
                btn.classList.add('opacity-50', 'bg-emerald-500');
                btn.classList.remove('from-amber-400', 'to-orange-500', 'hover:from-amber-500', 'hover:to-orange-600');
            }
        }, delay + 300);
    }

    function resetCube(controller) {
        const container = document.getElementById(controller.ids.layers);
        if (container) container.innerHTML = '';
        controller.fillStage = 0;
        controller.blockIdx = 0;

        const btn = document.getElementById(controller.ids.button);
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '🧊 Bấm lần 1: Xếp 1 hình';
            btn.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-emerald-500');
            btn.classList.add('from-amber-400', 'to-orange-500', 'hover:from-amber-500', 'hover:to-orange-600');
        }

        const wrapper = document.getElementById(controller.ids.wrapper);
        if (wrapper) {
            wrapper.classList.remove('rotate-anim-122');
            controller.rotX = DEFAULT_ROT_X;
            controller.rotY = DEFAULT_ROT_Y;
            wrapper.style.transform = `rotateX(${controller.rotX}deg) rotateY(${controller.rotY}deg)`;
        }
    }

    window.initLesson122CubeController = function(mode) {
        const isPre = mode === 'pre';
        const ids = isPre
            ? { scene: 'scene-122-pre', wrapper: 'cube-wrapper-122-pre', layers: 'cube-layers-122-pre', button: 'btn-fill-122-pre' }
            : { scene: 'scene-122', wrapper: 'cube-wrapper-122', layers: 'cube-layers-122', button: 'btn-fill-122' };
        const key = isPre ? 'pre' : 'modal';
        const controller = createController(key, ids);
        setupDrag(controller);
        return controller;
    };

    window.fillKhamPha122 = function() {
        const controller = window.initLesson122CubeController('modal');
        fillCube(controller);
    };
    window.resetKhamPha122 = function() {
        const controller = window.initLesson122CubeController('modal');
        resetCube(controller);
    };
    window.fillKhamPha122Pre = function() {
        const controller = window.initLesson122CubeController('pre');
        fillCube(controller);
    };
    window.resetKhamPha122Pre = function() {
        const controller = window.initLesson122CubeController('pre');
        resetCube(controller);
    };

    window.openKhamPhaModal122 = function() {
        const modal = document.getElementById('modal-122-khampha');
        if (!modal) return;
        window.initLesson122CubeController('modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => modal.classList.remove('opacity-0'), 10);
    };

    window.closeKhamPhaModal122 = function() {
        const modal = document.getElementById('modal-122-khampha');
        if (!modal) return;
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            window.resetKhamPha122();
        }, 300);
    };

    window.animKhamPha122 = function() {
        const wrapper = document.getElementById('cube-wrapper-122');
        if (wrapper) wrapper.classList.toggle('rotate-anim-122');
    };
})();
