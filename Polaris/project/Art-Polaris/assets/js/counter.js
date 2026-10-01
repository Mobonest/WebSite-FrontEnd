/* =============================================
   پولاریس آکادمی - شمارنده اعداد فارسی
   Premium Counter with Smooth Animation
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth ease-out
            const eased = 1 - Math.pow(1 - progress, 5);
            const current = Math.floor(eased * target);

            // Persian numeral conversion
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            const persianNum = current.toString().replace(/\d/g, d => persianDigits[d]);

            el.textContent = persianNum;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    statNumbers.forEach(num => counterObserver.observe(num));

});