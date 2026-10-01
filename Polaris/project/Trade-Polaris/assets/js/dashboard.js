
// ========== DASHBOARD SCRIPT ==========
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

    // مسیرهای عکس‌ها
    const courseImages = {
        forex: 'assets/images/learn-Forex.jpg',
        crypto: 'assets/images/forex-image2.jpg',
        technical: 'assets/images/learn-Forex1.jpeg',
        psychology: 'assets/images/ler.jpeg',
        stock: 'assets/images/Screenshot 2023-06-01 192804.png',
        vip: 'assets/images/Screenshot 2023-06-02 003216.png',
        default: 'assets/images/hero-bg.png'
    };

    // User Data
    let userData = {
        name: 'محمد کریمی',
        email: 'mohammad@polaris.academy',
        phone: '۰۹۱۲۱۲۳۴۵۶۷',
        avatar: 'assets/images/user4.jpg',
        streakDays: 15,
        rank: 42,
        totalPoints: 2840,
        enrolledCourses: [
            { id: 1, title: 'فارکس جامع', progress: 75, completed: false, hoursSpent: 42, image: courseImages.forex, instructor: 'محمد کریمی', lastAccess: '۱۴۰۵/۰۲/۱۰' },
            { id: 2, title: 'تحلیل تکنیکال پیشرفته', progress: 45, completed: false, hoursSpent: 28, image: courseImages.technical, instructor: 'احمد نوروزی', lastAccess: '۱۴۰۵/۰۲/۰۸' },
            { id: 3, title: 'روانشناسی ترید', progress: 100, completed: true, hoursSpent: 20, image: courseImages.psychology, instructor: 'رضا عباسی', lastAccess: '۱۴۰۵/۰۱/۲۵' },
            { id: 4, title: 'ارز دیجیتال', progress: 30, completed: false, hoursSpent: 18, image: courseImages.crypto, instructor: 'زهرا رحیمی', lastAccess: '۱۴۰۵/۰۲/۰۵' }
        ]
    };

    const recommendedCourses = [
        { id: 5, title: 'مدیریت سرمایه حرفه‌ای', desc: 'اصول طلایی مدیریت ریسک در معاملات', price: 1290000, image: courseImages.default, instructor: 'محمد کریمی', level: 'متوسط', duration: '۱۲ ساعت' },
        { id: 6, title: 'اسمارت مانی Concepts', desc: 'مفاهیم پول هوشمند و ICT در فارکس', price: 1990000, image: courseImages.technical, instructor: 'احمد نوروزی', level: 'پیشرفته', duration: '۲۰ ساعت' },
        { id: 7, title: 'تحلیل فاندامنتال', desc: 'تأثیر اخبار اقتصادی بر بازارها', price: 1490000, image: courseImages.default, instructor: 'سارا محمدی', level: 'مقدماتی', duration: '۱۵ ساعت' }
    ];

    function showToast(message) {
        let toast = document.querySelector('.toast');
        if (toast) toast.remove();
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${message}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function saveData() {
        localStorage.setItem('polaris_dashboard', JSON.stringify(userData));
    }

    function loadData() {
        const saved = localStorage.getItem('polaris_dashboard');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                userData = { ...userData, ...parsed };
            } catch(e) {}
        }
        updateUI();
    }

    function updateUI() {
        // Profile
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('welcomeName').textContent = userData.name.split(' ')[0];
        document.getElementById('userAvatar').src = userData.avatar;
        
        // Stats
        const total = userData.enrolledCourses.length;
        const completed = userData.enrolledCourses.filter(c => c.completed).length;
        const totalHours = userData.enrolledCourses.reduce((s, c) => s + c.hoursSpent, 0);
        
        document.getElementById('statCourses').textContent = toPersianNumber(total);
        document.getElementById('statCompleted').textContent = toPersianNumber(completed);
        document.getElementById('statPoints').textContent = toPersianNumber(userData.totalPoints);
        document.getElementById('dashTotalCourses').textContent = toPersianNumber(total);
        document.getElementById('dashCompletedCourses').textContent = toPersianNumber(completed);
        document.getElementById('dashHoursSpent').textContent = toPersianNumber(totalHours);
        document.getElementById('dashCertificates').textContent = toPersianNumber(completed);
        document.getElementById('dashStreak').textContent = toPersianNumber(userData.streakDays);
        document.getElementById('dashRank').textContent = `#${toPersianNumber(userData.rank)}`;
        
        // Progress
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
        document.getElementById('overallPercent').textContent = `${toPersianNumber(percent)}%`;
        document.getElementById('progressBar').style.width = `${percent}%`;
        document.getElementById('progressCompleted').textContent = toPersianNumber(completed);
        document.getElementById('progressTotal').textContent = toPersianNumber(total);
        
        // Settings
        document.getElementById('fullName').value = userData.name;
        document.getElementById('email').value = userData.email;
        document.getElementById('phone').value = userData.phone;
        
        // Render
        renderRecommended();
        renderMyCourses();
        renderProgress();
        renderCertificates();
    }
    
    function renderRecommended() {
        const container = document.getElementById('recommendedGrid');
        if (!container) return;
        container.innerHTML = recommendedCourses.map(c => `
            <div class="course-card">
                <div class="course-img"><img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.src='assets/images/hero-bg.png'"></div>
                <div class="course-body">
                    <h3 class="course-title">${c.title}</h3>
                    <p class="course-desc">${c.desc}</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 12px; font-size: 12px; color: var(--text-tertiary);">
                        <span>👨‍🏫 ${c.instructor}</span>
                        <span>📊 ${c.level}</span>
                        <span>⏱️ ${c.duration}</span>
                    </div>
                    <div class="course-footer">
                        <span class="course-price">${formatPrice(c.price)}</span>
                        <button class="btn btn--gold btn-sm" onclick="enrollCourse(${c.id})">ثبت‌نام</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    function renderMyCourses() {
        const container = document.getElementById('myCoursesGrid');
        if (!container) return;
        if (userData.enrolledCourses.length === 0) {
            container.innerHTML = '<div class="empty-state">📚 هنوز دوره‌ای ثبت‌نام نکرده‌اید</div>';
            return;
        }
        container.innerHTML = userData.enrolledCourses.map(c => `
            <div class="course-card">
                <div class="course-img"><img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.src='assets/images/hero-bg.png'"></div>
                <div class="course-body">
                    <h3 class="course-title">${c.title}</h3>
                    <div style="font-size: 12px; color: var(--text-tertiary); margin-bottom: 5px;">👨‍🏫 ${c.instructor}</div>
                    <div class="progress-bar-wrapper"><div class="progress-bar-fill" style="width: ${c.progress}%"></div></div>
                    <div class="course-footer">
                        <span class="course-price">پیشرفت: ${toPersianNumber(c.progress)}%</span>
                        <button class="btn ${c.completed ? 'btn--outline-gold' : 'btn--gold'} btn-sm" onclick="continueCourse(${c.id})">${c.completed ? 'مشاهده مجدد' : 'ادامه یادگیری'}</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    function renderProgress() {
        const container = document.getElementById('progressList');
        if (!container) return;
        container.innerHTML = userData.enrolledCourses.map(c => `
            <div class="course-progress-item">
                <div class="course-progress-header"><span>${c.title}</span><span>${toPersianNumber(c.progress)}%</span></div>
                <div class="progress-bar-wrapper"><div class="progress-bar-fill" style="width: ${c.progress}%"></div></div>
                <div style="margin-top: 8px; font-size: 12px; color: var(--text-tertiary);">${toPersianNumber(c.hoursSpent)} ساعت مطالعه • ${c.completed ? '✅ تکمیل شده' : '📖 در حال پیشرفت'}</div>
            </div>
        `).join('');
    }
    
    function renderCertificates() {
        const container = document.getElementById('certificatesGrid');
        if (!container) return;
        const certificates = userData.enrolledCourses.filter(c => c.completed);
        if (certificates.length === 0) {
            container.innerHTML = '<div class="empty-state">🎓 هنوز گواهی‌ای دریافت نکرده‌اید</div>';
            return;
        }
        container.innerHTML = certificates.map(c => `
            <div class="certificate-card">
                <div class="certificate-icon">🏅</div>
                <h3 class="certificate-title">${c.title}</h3>
                <p class="certificate-date">تاریخ دریافت: ${c.lastAccess}</p>
                <button class="btn btn--outline-gold btn-sm" onclick="downloadCertificate(${c.id})">دانلود گواهی PDF</button>
            </div>
        `).join('');
    }
    
    // Page Switching
    function switchPage(pageId) {
        document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(`page-${pageId}`);
        if (target) target.classList.add('active');
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }
    
    // Event Listeners
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page === 'logout') {
                showToast('شما از حساب خود خارج شدید');
                setTimeout(() => window.location.href = 'index.html', 1000);
            } else {
                switchPage(page);
            }
        });
    });
    
    document.getElementById('saveSettings').addEventListener('click', function() {
        userData.name = document.getElementById('fullName').value;
        userData.email = document.getElementById('email').value;
        userData.phone = document.getElementById('phone').value;
        saveData();
        updateUI();
        showToast('تنظیمات با موفقیت ذخیره شد');
    });
    
    document.getElementById('themeToggle').addEventListener('click', function() {
        const html = document.documentElement;
        const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('polaris-theme', newTheme);
        showToast(`تم به ${newTheme === 'dark' ? 'تاریک' : 'روشن'} تغییر کرد`);
    });
    
    // Global Functions
    window.enrollCourse = function(id) {
        const course = recommendedCourses.find(c => c.id === id);
        if (course) {
            userData.enrolledCourses.push({
                id: course.id, title: course.title, progress: 0, completed: false,
                hoursSpent: 0, image: course.image, instructor: course.instructor, lastAccess: new Date().toLocaleDateString('fa-IR')
            });
            saveData();
            updateUI();
            showToast(`دوره "${course.title}" با موفقیت اضافه شد`);
            switchPage('courses');
        }
    };
    
    window.continueCourse = function(id) {
        showToast('در حال انتقال به صفحه دوره...');
    };
    
    window.downloadCertificate = function(id) {
        showToast('در حال دانلود گواهی...');
    };
    
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
    loadData();
    switchPage('dashboard');
    updateCartBadge();
    
    console.log('✦ داشبورد پولاریس آماده است ✦');
})();
