const toggleButton = document.getElementById('mode-toggle');
const musicButton = document.getElementById('music-toggle');
const body = document.body;
const music = document.getElementById('background-music');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = '🌙 Dark Mode';
    } else {
        toggleButton.textContent = '☀️ Light Mode';
    }
});

musicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicButton.textContent = '⏸️ Pause Music';
    } else {
        music.pause();
        musicButton.textContent = '▶️ Play Music';
    }
});
