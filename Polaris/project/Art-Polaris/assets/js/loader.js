/* =============================================
   پولاریس آکادمی - لودر
   Premium Loader with Smooth Exit
   ============================================= */

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    // Beautiful exit animation
    setTimeout(() => {
        loader.classList.add('hidden');

        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 600);
});

// Fallback: hide loader after 3 seconds max
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
}, 3000);