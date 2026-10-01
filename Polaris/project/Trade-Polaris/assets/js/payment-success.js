// ========== PAYMENT SUCCESS SCRIPT ==========
(function() {
    'use strict';

    // تبدیل اعداد به فارسی
    function toPersianNumber(num) {
        if (!num && num !== 0) return '۰';
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return String(num).replace(/\d/g, d => persianDigits[parseInt(d)]);
    }

    // فرمت قیمت به فارسی
    function formatPrice(price) {
        if (!price) return '۰ تومان';
        return toPersianNumber(price.toLocaleString()) + ' تومان';
    }

    // دوره‌های موجود
    const allCourses = {
        1: { id: 1, title: 'فارکس جامع', price: 2490000, image: 'assets/images/learn-Forex.jpg' },
        2: { id: 2, title: 'ارز دیجیتال حرفه‌ای', price: 1990000, image: 'assets/images/forex-image2.jpg' },
        3: { id: 3, title: 'تحلیل تکنیکال پیشرفته', price: 1690000, image: 'assets/images/learn-Forex1.jpeg' },
        4: { id: 4, title: 'روانشناسی ترید', price: 1290000, image: 'assets/images/ler.jpeg' },
        5: { id: 5, title: 'بورس ایران', price: 1490000, image: 'assets/images/Screenshot 2023-06-01 192804.png' },
        6: { id: 6, title: 'منتورینگ VIP', price: 4990000, image: 'assets/images/Screenshot 2023-06-02 003216.png' }
    };

    // دریافت اطلاعات پرداخت از localStorage
    function loadPaymentData() {
        const paymentData = JSON.parse(localStorage.getItem('polaris_last_order') || '{}');
        const cart = JSON.parse(localStorage.getItem('polaris_cart') || '[]');
        
        // تولید شماره تراکنش تصادفی
        const transId = 'TRX-' + Math.floor(Math.random() * 90000000 + 10000000);
        document.getElementById('transactionId').textContent = transId;
        
        // محاسبه مبلغ کل از سبد خرید
        let totalAmount = 0;
        const purchasedItems = [];
        
        cart.forEach(id => {
            if (allCourses[id]) {
                totalAmount += allCourses[id].price;
                purchasedItems.push(allCourses[id]);
            }
        });
        
        // اگر از فرم اطلاعات داشت استفاده کن
        if (paymentData.total) {
            totalAmount = paymentData.total;
        }
        
        document.getElementById('paymentAmount').textContent = formatPrice(totalAmount);
        document.getElementById('paymentDate').textContent = new Date().toLocaleDateString('fa-IR');
        document.getElementById('paymentMethod').textContent = paymentData.paymentMethod === 'zarinpal' ? 'زرین‌پال' : 
                                                            (paymentData.paymentMethod === 'idpay' ? 'آیدی پی' : 'کیف پول');
        
        // نمایش دوره‌های خریداری شده
        const container = document.getElementById('purchasedCoursesList');
        if (purchasedItems.length > 0) {
            container.innerHTML = purchasedItems.map(item => `
                <div class="course-item">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/images/hero-bg.png'">
                    <div class="course-item-info">
                        <h4>${item.title}</h4>
                        <p>پرداخت شده در ${new Date().toLocaleDateString('fa-IR')}</p>
                    </div>
                    <div class="course-item-price">${formatPrice(item.price)}</div>
                </div>
            `).join('');
        } else {
            container.innerHTML = `
                <div class="course-item">
                    <img src="assets/images/learn-Forex.jpg" alt="دوره فارکس">
                    <div class="course-item-info">
                        <h4>فارکس جامع</h4>
                        <p>پرداخت شده در ${new Date().toLocaleDateString('fa-IR')}</p>
                    </div>
                    <div class="course-item-price">${formatPrice(2490000)}</div>
                </div>
            `;
        }
    }

    // به‌روزرسانی تعداد سبد خرید و خالی کردن سبد
    function clearCartAndUpdateBadge() {
        // خالی کردن سبد خرید
        localStorage.removeItem('polaris_cart');
        
        // به‌روزرسانی نشانگر
        const badge = document.getElementById('cartCountBadge');
        if (badge) {
            badge.textContent = '۰';
            badge.style.display = 'none';
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
    clearCartAndUpdateBadge();

    console.log('✦ صفحه پرداخت موفق پولاریس آماده است ✦');
})();