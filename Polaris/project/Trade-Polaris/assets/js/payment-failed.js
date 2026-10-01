
// ========== PAYMENT FAILED SCRIPT ==========
(function() {
    'use strict';

    // تبدیل اعداد به فارسی
    function toPersianNumber(num) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return String(num).replace(/\d/g, d => persianDigits[parseInt(d)]);
    }

    // فرمت قیمت به فارسی
    function formatPrice(price) {
        if (!price) return '۰ تومان';
        return toPersianNumber(price.toLocaleString()) + ' تومان';
    }

    // دریافت اطلاعات پرداخت از localStorage
    function loadPaymentData() {
        const paymentData = JSON.parse(localStorage.getItem('polaris_last_payment') || '{}');
        
        if (paymentData.paymentId) {
            document.getElementById('failedTransactionId').textContent = paymentData.paymentId;
            document.getElementById('failedAmount').textContent = formatPrice(paymentData.total || paymentData.amount || 0);
            document.getElementById('failedDate').textContent = paymentData.orderDate || new Date().toLocaleDateString('fa-IR');
        } else {
            // داده‌های نمونه برای نمایش
            document.getElementById('failedTransactionId').textContent = 'TRX-۹۹۸۲۳۷۴۵';
            document.getElementById('failedAmount').textContent = formatPrice(2490000);
            document.getElementById('failedDate').textContent = new Date().toLocaleDateString('fa-IR');
        }
    }

    // به‌روزرسانی تعداد سبد خرید
    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem('polaris_cart') || '[]');
        const badge = document.getElementById('cartCountBadge');
        if (badge) {
            const count = cart.length;
            if (count > 0) {
                badge.textContent = toPersianNumber(count);
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }
    }

    // Event Listeners
    document.getElementById('themeToggle')?.addEventListener('click', function() {
        const html = document.documentElement;
        const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('polaris-theme', newTheme);
    });

    // Mobile Menu
    const hamburger = document.getElementById('hamburgerBtn');
    const nav = document.getElementById('mainNav');
    const overlay = document.getElementById('mobileOverlay');
    if (hamburger && nav && overlay) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        overlay.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Header Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('hidden');
                setTimeout(() => preloader.style.display = 'none', 500);
            }, 800);
        }
    });

    // Theme Init
    const savedTheme = localStorage.getItem('polaris-theme');
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

    // Account Button
    document.getElementById('accountBtn')?.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Init
    loadPaymentData();
    updateCartBadge();

    console.log('✦ صفحه پرداخت ناموفق پولاریس آماده است ✦');
})();
