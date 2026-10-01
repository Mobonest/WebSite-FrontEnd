const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;
const saved = localStorage.getItem('linguaTheme');
if (saved === 'light') { body.classList.add('light-mode'); updateIcon('light'); }
else updateIcon('dark');

function updateIcon(t) {
  if (!themeIcon) return;
  themeIcon.innerHTML = t === 'light'
    ? `<circle cx="12" cy="12" r="4" stroke="#2C1810" stroke-width="1.8" fill="none"/><path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" stroke="#2C1810" stroke-width="1.8" fill="none"/><path d="M12 8C9.79 8 8 9.79 8 12" stroke="#2C1810" stroke-width="1.8" fill="none"/>`
    : `<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" stroke="currentColor" stroke-width="1.8" fill="none"/>`;
}

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem('linguaTheme', isLight ? 'light' : 'dark');
  updateIcon(isLight ? 'light' : 'dark');
});