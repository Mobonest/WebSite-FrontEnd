

// ========== COURSES PAGE SCRIPT ==========
(function() {
    'use strict';

    // تبدیل اعداد به فارسی
    function toPersianNumber(num) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return String(num).replace(/\d/g, d => persianDigits[parseInt(d)]);
    }

    // فرمت قیمت به فارسی
    function formatPrice(price) {
        return toPersianNumber(price.toLocaleString()) + ' تومان';
    }

    // لیست دوره‌ها
    const courses = [
        {
            id: 1,
            title: 'فارکس جامع',
            desc: 'صفر تا صد معامله‌گری در بزرگترین بازار مالی جهان',
            category: 'forex',
            level: 'مقدماتی تا پیشرفته',
            badge: 'hot',
            badgeText: 'پرفروش',
            image: 'assets/images/learn-Forex.jpg',
            price: 2490000,
            duration: '۱۲۰ ساعت',
            lessons: 48,
            instructor: 'محمد کریمی'
        },
        {
            id: 2,
            title: 'ارز دیجیتال حرفه‌ای',
            desc: 'تحلیل و معامله در بازار کریپتو، بررسی پروژه‌های DeFi و NFT',
            category: 'crypto',
            level: 'مقدماتی تا پیشرفته',
            badge: 'new',
            badgeText: 'جدید',
            image: 'assets/images/forex-image2.jpg',
            price: 1990000,
            duration: '۸۰ ساعت',
            lessons: 36,
            instructor: 'زهرا رحیمی'
        },
        {
            id: 3,
            title: 'تحلیل تکنیکال پیشرفته',
            desc: 'پرایس اکشن، الگوهای هارمونیک، ICT و اسمارت مانی',
            category: 'technical',
            level: 'پیشرفته',
            badge: 'hot',
            badgeText: 'پرفروش',
            image: 'assets/images/learn-Forex1.jpeg',
            price: 1690000,
            duration: '۶۰ ساعت',
            lessons: 32,
            instructor: 'احمد نوروزی'
        },
        {
            id: 4,
            title: 'روانشناسی ترید',
            desc: 'غلبه بر ترس و طمع، ذهنیت برنده و مدیریت استرس',
            category: 'psychology',
            level: 'متوسط',
            badge: 'popular',
            badgeText: 'محبوب',
            image: 'assets/images/ler.jpeg',
            price: 1290000,
            duration: '۴۰ ساعت',
            lessons: 24,
            instructor: 'رضا عباسی'
        },
        {
            id: 5,
            title: 'بورس ایران',
            desc: 'تحلیل بنیادی و تکنیکال بورس، فیلترنویسی و سرمایه‌گذاری',
            category: 'stock',
            level: 'متوسط',
            badge: '',
            badgeText: '',
            image: 'assets/images/Screenshot 2023-06-01 192804.png',
            price: 1490000,
            duration: '۵۰ ساعت',
            lessons: 28,
            instructor: 'سارا محمدی'
        },
        {
            id: 6,
            title: 'منتورینگ VIP',
            desc: 'جلسات خصوصی هفتگی و کوچینگ اختصاصی با منتور ارشد',
            category: 'forex',
            level: 'VIP',
            badge: 'vip',
            badgeText: 'VIP',
            image: 'assets/images/Screenshot 2023-06-02 003216.png',
            price: 4990000,
            duration: '۶ ماه',
            lessons: 48,
            instructor: 'محمد کریمی'
        },
        {
            id: 7,
            title: 'اسمارت مانی Concepts',
            desc: 'مفاهیم پول هوشمند و ICT در بازار فارکس',
            category: 'technical',
            level: 'پیشرفته',
            badge: 'new',
            badgeText: 'جدید',
            image: 'assets/images/learn-Forex1.jpeg',
            price: 1990000,
            duration: '۲۵ ساعت',
            lessons: 15,
            instructor: 'احمد نوروزی'
        },
        {
            id: 8,
            title: 'تحلیل فاندامنتال',
            desc: 'تأثیر اخبار اقتصادی بر بازارهای مالی',
            category: 'forex',
            level: 'مقدماتی',
            badge: '',
            badgeText: '',
            image: 'assets/images/hero-bg.png',
            price: 1490000,
            duration: '۳۰ ساعت',
            lessons: 18,
            instructor: 'سارا محمدی'
        },
        {
            id: 9,
            title: 'تحلیل پیشرفته بازار و پرایس اکشن',
            desc: 'آموزش حرفه‌ای پرایس اکشن، تحلیل ساختار بازار و استراتژی‌های معاملاتی پیشرفته',
            category: 'technical',
            level: 'پیشرفته',
            badge: 'hot',
            badgeText: 'پیشنهاد ویژه',
            image: 'assets/images/image.jpg',
            price: 1890000,
            duration: '۴۵ ساعت',
            lessons: 28,
            instructor: 'محمد کریمی'
        }
    ];

    let currentFilter = 'all';
    let currentSearch = '';

    function getBadgeClass(badge) {
        switch(badge) {
            case 'hot': return 'course-card__badge--hot';
            case 'new': return 'course-card__badge--new';
            case 'popular': return 'course-card__badge--popular';
            case 'vip': return 'course-card__badge--vip';
            default: return '';
        }
    }

    function renderCourses() {
        const container = document.getElementById('coursesContainer');
        if (!container) return;

        let filtered = courses.filter(course => {
            if (currentFilter !== 'all' && course.category !== currentFilter) return false;
            if (currentSearch && !course.title.includes(currentSearch) && !course.desc.includes(currentSearch)) return false;
            return true;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state__icon">🔍</div>
                    <h3>دوره‌ای یافت نشد</h3>
                    <p>هیچ دوره‌ای با این مشخصات پیدا نشد. لطفاً فیلترهای جستجو را تغییر دهید.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(course => `
            <div class="course-card" onclick="location.href='course-single.html?id=${course.id}'">
                <div class="course-card__image">
                    <img src="${course.image}" alt="${course.title}" loading="lazy" onerror="this.src='assets/images/hero-bg.png'">
                    ${course.badge ? `<span class="course-card__badge ${getBadgeClass(course.badge)}">${course.badgeText}</span>` : ''}
                </div>
                <div class="course-card__body">
                    <span class="course-card__level">${course.level}</span>
                    <h3 class="course-card__title">${course.title}</h3>
                    <div class="course-card__instructor">
                        <span>👨‍🏫</span> ${course.instructor}
                    </div>
                    <p class="course-card__desc">${course.desc}</p>
                    <div class="course-card__meta">
                        <span>⏱️ ${course.duration}</span>
                        <span>📚 ${toPersianNumber(course.lessons)} جلسه</span>
                    </div>
                    <div class="course-card__footer">
                        <span class="course-card__price">${formatPrice(course.price)}</span>
                        <button class="btn btn--gold btn-sm" onclick="event.stopPropagation(); addToCart(${course.id})">➕ افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    window.addToCart = function(courseId) {
        let cart = JSON.parse(localStorage.getItem('polaris_cart') || '[]');
        if (!cart.includes(courseId)) {
            cart.push(courseId);
            localStorage.setItem('polaris_cart', JSON.stringify(cart));
            showToast('✅ دوره به سبد خرید اضافه شد');
            updateCartBadge();
        } else {
            showToast('ℹ️ این دوره قبلاً در سبد خرید موجود است');
        }
    };

    function showToast(message) {
        let toast = document.querySelector('.toast');
        if (toast) toast.remove();
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${message}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

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
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            renderCourses();
        });
    });

    const searchInput = document.getElementById('searchCourses');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value;
            renderCourses();
        });
    }

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
    renderCourses();
    updateCartBadge();

    console.log('✦ صفحه دوره‌های پولاریس آماده است ✦');
})();
