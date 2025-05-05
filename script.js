const toggle = document.getElementById('darkModeToggle');
const body = document.body;

const audio = document.getElementById('audio');
if (audio) {
    audio.volume = loadVolume() / 100;
}

function loadVolume() {
    return localStorage.getItem('volume') || 0;
}

function applyTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (toggle) {
            toggle.checked = true;
        }
    } else {
        body.classList.remove('dark-mode');
        if (toggle) {
            toggle.checked = false;
        }
    }
}

function toggleDarkMode() {
    body.classList.toggle('dark-mode', toggle.checked);
    if (toggle.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

applyTheme();

if (toggle) {
    toggle.addEventListener('change', toggleDarkMode);
}