/* =============================================
   پولاریس آکادمی - تعویض تم رنگی
   Theme Color Switcher
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    const themeBtns = document.querySelectorAll('.theme-btn:not(#themeToggle)');
    const html = document.documentElement;

    // Load saved color theme
    const savedColorTheme = localStorage.getItem('polaris-color-theme') || 'midnight';
    html.setAttribute('data-theme', savedColorTheme);

    // Set active button
    themeBtns.forEach(btn => {
        if (btn.dataset.theme === savedColorTheme) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;

            // Remove active from all
            themeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Apply theme with smooth transition
            html.setAttribute('data-theme', theme);

            // Save
            localStorage.setItem('polaris-color-theme', theme);

            // Ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                background: var(--accent);
                border-radius: 50%;
                opacity: 0.3;
                animation: rippleOut 0.6s ease forwards;
                pointer-events: none;
            `;
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleOut {
            from { transform: scale(1); opacity: 0.3; }
            to { transform: scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

});