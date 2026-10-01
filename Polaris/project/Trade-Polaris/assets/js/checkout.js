// ========== CHECKOUT SCRIPT ==========
(function() {
    'use strict';

    // تبدیل اعداد به فارسی
    function toPersianNumber(num) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().replace(/\d/g, d => persianDigits[parseInt(d)]);
    }

    // فرمت قیمت به فارسی
    function formatPrice(price) {
        return toPersianNumber(price.toLocaleString()) + ' تومان';
    }

    // دوره‌های موجود
    const allCourses = {
        1: { id: 1, title: 'فارکس جامع', price: 2490000, image: 'assets/images/learn-Forex.jpg' },
        2: { id: 2, title: 'ارز دیجیتال', price: 1990000, image: 'assets/images/forex-image2.jpg' },
        3: { id: 3, title: 'تحلیل تکنیکال پیشرفته', price: 1690000, image: 'assets/images/learn-Forex1.jpeg' },
        4: { id: 4, title: 'روانشناسی ترید', price: 1290000, image: 'assets/images/ler.jpeg' },
        5: { id: 5, title: 'بورس ایران', price: 1490000, image: 'assets/images/Screenshot 2023-06-01 192804.png' },
        6: { id: 6, title: 'منتورینگ VIP', price: 4990000, image: 'assets/images/Screenshot 2023-06-02 003216.png' }
    };

    // دریافت سبد خرید
    function getCart() {
        const cart = localStorage.getItem('polaris_cart');
        return cart ? JSON.parse(cart) : [];
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

    // نمایش پیام
    function showToast(message) {
        let toast = document.querySelector('.toast');
        if (toast) toast.remove();
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${message}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // رندر آیتم‌های سبد خرید در صفحه تسویه
    function renderCheckoutItems() {
        const container = document.getElementById('checkoutItems');
        const totalSpan = document.getElementById('checkoutTotal');
        const payableSpan = document.getElementById('checkoutPayable');
        
        if (!container) return;
        
        const cart = getCart();
        const cartItems = cart.map(id => allCourses[id]).filter(c => c);
        
        if (cartItems.length === 0) {
            container.innerHTML = `
                <div class="empty-cart" style="text-align:center;padding:30px;">
                    <p>🛒 سبد خرید شما خالی است</p>
                    <a href="index.html#courses" style="color:var(--gold-primary);margin-top:10px;display:inline-block;">مشاهده دوره‌ها</a>
                </div>
            `;
            if (totalSpan) totalSpan.textContent = '۰ تومان';
            if (payableSpan) payableSpan.textContent = '۰ تومان';
            return;
        }
        
        // رندر آیتم‌ها
        container.innerHTML = cartItems.map(item => `
            <div class="order-item">
                <div class="order-item-img">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/images/hero-bg.png'">
                </div>
                <div class="order-item-info">
                    <div class="order-item-title">${item.title}</div>
                    <div class="order-item-price">${formatPrice(item.price)}</div>
                </div>
            </div>
        `).join('');
        
        // محاسبه جمع
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        if (totalSpan) totalSpan.textContent = formatPrice(total);
        if (payableSpan) payableSpan.textContent = formatPrice(total);
    }

    // انتخاب روش پرداخت
    let selectedPayment = 'zarinpal';
    document.querySelectorAll('.payment-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            selectedPayment = this.getAttribute('data-method');
        });
    });

    // ارسال فرم
    const form = document.getElementById('checkoutForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            
            if (!fullName || !phone || !email) {
                showToast('لطفاً تمام فیلدهای ضروری را پر کنید');
                return;
            }
            
            const cart = getCart();
            if (cart.length === 0) {
                showToast('سبد خرید شما خالی است');
                return;
            }
            
            // ذخیره اطلاعات کاربر
            const userInfo = {
                fullName, phone, email,
                nationalCode: document.getElementById('nationalCode').value,
                postalCode: document.getElementById('postalCode').value,
                address: document.getElementById('address').value,
                paymentMethod: selectedPayment,
                orderDate: new Date().toLocaleDateString('fa-IR'),
                items: cart,
                total: cart.reduce((sum, id) => sum + (allCourses[id]?.price || 0), 0)
            };
            
            localStorage.setItem('polaris_last_order', JSON.stringify(userInfo));
            
            showToast('در حال انتقال به درگاه پرداخت...');
            
            setTimeout(() => {
                showToast('پرداخت با موفقیت انجام شد! به زودی به داشبورد هدایت می‌شوید.');
                localStorage.removeItem('polaris_cart');
                updateCartBadge();
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            }, 2000);
        });
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
    renderCheckoutItems();
    updateCartBadge();
    
    console.log('✦ صفحه تکمیل خرید پولاریس آماده است ✦');
})();
