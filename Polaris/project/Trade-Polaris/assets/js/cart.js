// ========== CART SCRIPT ==========
(function() {
    'use strict';

    // دوره‌های موجود
    const allCourses = {
        1: { id: 1, title: 'فارکس جامع', desc: 'صفر تا صد معامله‌گری در بزرگترین بازار مالی جهان', price: 2490000, image: 'assets/images/learn-Forex.jpg', instructor: 'محمد کریمی', duration: '۱۲۰ ساعت', level: 'مقدماتی تا پیشرفته' },
        2: { id: 2, title: 'ارز دیجیتال', desc: 'تحلیل و معامله حرفه‌ای در بازار کریپتو', price: 1990000, image: 'assets/images/forex-image2.jpg', instructor: 'زهرا رحیمی', duration: '۸۰ ساعت', level: 'مقدماتی تا پیشرفته' },
        3: { id: 3, title: 'تحلیل تکنیکال پیشرفته', desc: 'پرایس اکشن، الگوهای هارمونیک و ICT', price: 1690000, image: 'assets/images/learn-Forex1.jpeg', instructor: 'احمد نوروزی', duration: '۶۰ ساعت', level: 'پیشرفته' },
        4: { id: 4, title: 'روانشناسی ترید', desc: 'غلبه بر ترس و طمع، ذهنیت برنده', price: 1290000, image: 'assets/images/ler.jpeg', instructor: 'رضا عباسی', duration: '۴۰ ساعت', level: 'متوسط' },
        5: { id: 5, title: 'بورس ایران', desc: 'تحلیل بنیادی و ارزندگی سهام', price: 1490000, image: 'assets/images/Screenshot 2023-06-01 192804.png', instructor: 'سارا محمدی', duration: '۵۰ ساعت', level: 'متوسط' },
        6: { id: 6, title: 'منتورینگ VIP', desc: 'جلسات خصوصی هفتگی و کوچینگ اختصاصی', price: 4990000, image: 'assets/images/Screenshot 2023-06-02 003216.png', instructor: 'محمد کریمی', duration: '۶ ماه', level: 'VIP' }
    };

    // تبدیل اعداد به فارسی
    function toPersianNumber(num) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().replace(/\d/g, d => persianDigits[parseInt(d)]);
    }

    // فرمت قیمت به فارسی
    function formatPrice(price) {
        return toPersianNumber(price.toLocaleString()) + ' تومان';
    }

    // بارگذاری سبد خرید از localStorage
    function getCart() {
        const cart = localStorage.getItem('polaris_cart');
        return cart ? JSON.parse(cart) : [];
    }

    // ذخیره سبد خرید
    function saveCart(cart) {
        localStorage.setItem('polaris_cart', JSON.stringify(cart));
        updateCartBadge();
        renderCart();
    }

    // به‌روزرسانی تعداد سبد خرید در هدر
    function updateCartBadge() {
        const cart = getCart();
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

    // حذف از سبد خرید
    function removeFromCart(courseId) {
        let cart = getCart();
        cart = cart.filter(id => id !== courseId);
        saveCart(cart);
        showToast('دوره از سبد خرید حذف شد', 'success');
    }

    // نمایش پیام
    function showToast(message, type = 'success') {
        let toast = document.querySelector('.toast');
        if (toast) toast.remove();
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${message}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // رندر سبد خرید
    function renderCart() {
        const container = document.getElementById('cartItemsContainer');
        const summaryCount = document.getElementById('summaryItemCount');
        const summaryTotal = document.getElementById('summaryTotal');
        const summaryPayable = document.getElementById('summaryPayable');
        
        if (!container) return;
        
        const cart = getCart();
        const cartItems = cart.map(id => allCourses[id]).filter(c => c);
        
        if (cartItems.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <h3>سبد خرید خالی است</h3>
                    <p>هنوز دوره‌ای به سبد خرید اضافه نکرده‌اید.</p>
                    <a href="index.html#courses" class="btn btn--gold">مشاهده دوره‌ها</a>
                </div>
            `;
            if (summaryCount) summaryCount.textContent = '۰';
            if (summaryTotal) summaryTotal.textContent = '۰ تومان';
            if (summaryPayable) summaryPayable.textContent = '۰ تومان';
            return;
        }
        
        // رندر آیتم‌ها
        container.innerHTML = cartItems.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/images/hero-bg.png'">
                </div>
                <div class="cart-item-info">
                    <h3 class="cart-item-title">${item.title}</h3>
                    <div class="cart-item-instructor">
                        <span>👨‍🏫</span> ${item.instructor}
                    </div>
                    <p class="cart-item-desc">${item.desc}</p>
                    <div class="cart-item-meta">
                        <span>⏱️ ${item.duration}</span>
                        <span>📊 ${item.level}</span>
                    </div>
                </div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `).join('');
        
        // محاسبه جمع
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        if (summaryCount) summaryCount.textContent = toPersianNumber(cartItems.length);
        if (summaryTotal) summaryTotal.textContent = formatPrice(total);
        if (summaryPayable) summaryPayable.textContent = formatPrice(total);
    }

    // ادامه به پرداخت
    window.proceedToCheckout = function() {
        const cart = getCart();
        if (cart.length === 0) {
            showToast('سبد خرید شما خالی است', 'error');
            return;
        }
        showToast('در حال انتقال به درگاه پرداخت...', 'success');
        setTimeout(() => {
            window.location.href = 'checkout.html';
        }, 1000);
    };

    // حذف از سبد خرید (global)
    window.removeFromCart = function(courseId) {
        removeFromCart(courseId);
    };

    // اضافه به سبد خرید (برای صفحات دیگر)
    window.addToCart = function(courseId) {
        let cart = getCart();
        if (!cart.includes(courseId)) {
            cart.push(courseId);
            saveCart(cart);
            showToast('دوره به سبد خرید اضافه شد', 'success');
        } else {
            showToast('این دوره قبلاً در سبد خرید موجود است', 'info');
        }
    };

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
    renderCart();
    updateCartBadge();
    
    console.log('✦ سبد خرید پولاریس آماده است ✦');
})();
