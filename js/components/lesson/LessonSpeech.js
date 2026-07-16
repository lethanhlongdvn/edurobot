// js/components/lesson/LessonSpeech.js
export const LessonSpeech = {
    toggleSpeechRec(id) {
        const input = document.getElementById(id) || document.getElementById(`input-${id}`) || document.getElementById(`wp-full-${id}`);
        const micBtn = document.getElementById(`btn-mic-${id}`) || document.getElementById(`btn-mic-${id.replace('input-', '').replace('wp-full-', '')}`);
        const status = document.getElementById(`mic-status-${id}`) || document.getElementById(`mic-status-${id.replace('input-', '').replace('wp-full-', '')}`);

        if (!('webkitSpeechRecognition' in window)) {
            alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome nhé!");
            return;
        }

        if (window._isRecognitionActive) {
            window._recognition.stop();
            return;
        }

        const recognition = new webkitSpeechRecognition();
        window._recognition = recognition;
        recognition.lang = 'vi-VN';
        recognition.interimResults = false;

        recognition.onstart = () => {
            window._isRecognitionActive = true;
            if (status) status.classList.remove('hidden');
            if (micBtn) micBtn.classList.add('animate-pulse', 'text-red-500');
        };

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            if (input) {
                // If it's a word problem, append. Otherwise replace.
                if (input.tagName === 'TEXTAREA') {
                    input.value += (input.value ? ' ' : '') + result;
                } else {
                    input.value = result;
                }
                // Trigger input event for math cells
                input.dispatchEvent(new Event('input'));
            }
        };

        recognition.onend = () => {
            window._isRecognitionActive = false;
            if (status) status.classList.add('hidden');
            if (micBtn) micBtn.classList.remove('animate-pulse', 'text-red-500');
        };

        recognition.start();
    }
};
