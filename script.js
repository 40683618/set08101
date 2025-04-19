const toggle = document.getElementById('darkModeToggle');
const body = document.body;

function applyTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        toggle.checked = false;
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

toggle.addEventListener('change', toggleDarkMode);