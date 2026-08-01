// === 124CD/cube3d.js ===
// Logic mô phỏng khối lập phương 3D tương tác

(function() {
    const CUBE_SIZE = 80;
    const DEFAULT_ROT_X = -20;
    const DEFAULT_ROT_Y = -30;

    function ensureBlocksData124CD() {
        if (window.blocksData124CD) return window.blocksData124CD;
        window.blocksData124CD = [];
        for (let y = 2; y >= 0; y--) {
            for (let z = 0; z < 3; z++) {
                for (let x = 0; x < 3; x++) {
                    window.blocksData124CD.push({ x, y, z });
                }
            }
        }
        return window.blocksData124CD;
    }

    function createController(key, ids) {
        if (!window.lesson124CDCubeControllers) window.lesson124CDCubeControllers = {};
        if (window.lesson124CDCubeControllers[key]) return window.lesson124CDCubeControllers[key];

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
        window.lesson124CDCubeControllers[key] = controller;
        return controller;
    }

    function setupDrag(controller) {
        if (controller.dragInit) return;
        const scene = document.getElementById(controller.ids.scene);
        const wrapper = document.getElementById(controller.ids.wrapper);
        if (!scene || !wrapper) return;

        const handleDragStart = (e) => {
            if (wrapper.classList.contains('rotate-anim-124CD')) return;
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
            let currentX;
            let currentY;
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
        if (!container || !btn || controller.fillStage >= 4) return;

        const blocksData = ensureBlocksData124CD();
        const stageCounts = [1, 8, 9, 9];
        const blocksToStack = stageCounts[controller.fillStage];
        let delay = 0;

        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');

        for (let i = 0; i < blocksToStack; i++) {
            if (controller.blockIdx >= blocksData.length) break;
            const b = blocksData[controller.blockIdx++];
            const tx = -120 + (b.x * CUBE_SIZE) + (CUBE_SIZE / 2);
            const ty = -120 + (b.y * CUBE_SIZE) + (CUBE_SIZE / 2);
            const tz = -120 + (b.z * CUBE_SIZE) + (CUBE_SIZE / 2);

            const block = document.createElement('div');
            block.className = 'minicube-124CD';
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
                if (blocksToStack < 20) playSFX('pop', 0.2);
            }, delay);
            delay += (blocksToStack > 10) ? 20 : 100;
        }

        setTimeout(() => {
            controller.fillStage++;
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
            if (controller.fillStage === 1) btn.innerHTML = '🧊 Bấm lần 2: Đầy 1 lớp ngang';
            else if (controller.fillStage === 2) btn.innerHTML = '🧊 Bấm lần 3: Đầy lớp 2';
            else if (controller.fillStage === 3) btn.innerHTML = '🧊 Bấm lần 4: Đầy hộp !';
            else {
                btn.innerHTML = '✨ Đã đầy hộp';
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
            wrapper.classList.remove('rotate-anim-124CD');
            controller.rotX = DEFAULT_ROT_X;
            controller.rotY = DEFAULT_ROT_Y;
            wrapper.style.transform = `rotateX(${controller.rotX}deg) rotateY(${controller.rotY}deg)`;
        }
    }

    window.initLesson124CDCubeController = function(mode) {
        const isPre = mode === 'pre';
        const ids = isPre
            ? { scene: 'scene-124CD-pre', wrapper: 'cube-wrapper-124CD-pre', layers: 'cube-layers-124CD-pre', button: 'btn-fill-124CD-pre' }
            : { scene: 'scene-124CD', wrapper: 'cube-wrapper-124CD', layers: 'cube-layers-124CD', button: 'btn-fill-124CD' };
        const key = isPre ? 'pre' : 'modal';
        const controller = createController(key, ids);
        setupDrag(controller);
        return controller;
    };

    window.fillKhamPha124CD = function() {
        const controller = window.initLesson124CDCubeController('modal');
        fillCube(controller);
    };
    window.resetKhamPha124CD = function() {
        const controller = window.initLesson124CDCubeController('modal');
        resetCube(controller);
    };
    window.fillKhamPha124CDPre = function() {
        const controller = window.initLesson124CDCubeController('pre');
        fillCube(controller);
    };
    window.resetKhamPha124CDPre = function() {
        const controller = window.initLesson124CDCubeController('pre');
        resetCube(controller);
    };

    window.openKhamPhaModal124CD = function() {
        const modal = document.getElementById('modal-124CD-khampha');
        if (!modal) return;
        window.initLesson124CDCubeController('modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => modal.classList.remove('opacity-0'), 10);
    };

    window.closeKhamPhaModal124CD = function() {
        const modal = document.getElementById('modal-124CD-khampha');
        if (!modal) return;
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            window.resetKhamPha124CD();
        }, 300);
    };

    window.animKhamPha124CD = function() {
        const wrapper = document.getElementById('cube-wrapper-124CD');
        if (wrapper) wrapper.classList.toggle('rotate-anim-124CD');
    };
})();
