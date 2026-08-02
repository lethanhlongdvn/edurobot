(function() {
    // Export for potential re-init (placeholder as it's now global)
    window.initLesson204Logic = () => {};

    window.playModelAudio = function() {
        const audioPath = window.lesson204?.audio;
        if (!audioPath) return;

        // Check if audio is already playing
        if (window.currentLessonAudio && !window.currentLessonAudio.paused) {
            window.currentLessonAudio.pause();
            return;
        }

        const audio = new Audio(audioPath);
        window.currentLessonAudio = audio;
        audio.play().catch(err => console.error("Audio play failed:", err));
    };
})();
