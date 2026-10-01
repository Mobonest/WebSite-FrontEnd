// ========== COURSE SINGLE SCRIPT - فقط دوره فارکس جامع ==========
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

    // ==========================================
    // داده کامل دوره فارکس جامع (فقط همین یک دوره)
    // ==========================================
    const courseData = {
        id: 1,
        title: 'دوره جامع فارکس',
        badge: 'پرفروش‌ترین دوره | رضایت ۹۸٪ دانشجویان',
        shortDescription: 'صفر تا صد معامله‌گری در بزرگترین بازار مالی جهان — از مفاهیم پایه تا استراتژی‌های پیشرفته ICT و Smart Money',
        description: 'آموزش صفر تا صد بازار فارکس به همراه تمرین‌های عملی و پروژه‌های واقعی. این دوره برای تمام سطوح طراحی شده و شما را از یک مبتدی مطلق به یک تریدر حرفه‌ای تبدیل می‌کند. در این دوره شما با پرایس اکشن، الگوهای هارمونیک، مفاهیم پول هوشمند (ICT/Smart Money)، مدیریت سرمایه حرفه‌ای و روانشناسی ترید آشنا می‌شوید.',
        longDescription: `
            <p>دوره جامع فارکس پولاریس یک مسیر کامل و ساختاریافته برای تبدیل شدن به یک تریدر حرفه‌ای و سودده در بازار فارکس است. این دوره بر اساس آخرین استانداردهای آموزشی بازارهای مالی جهان طراحی شده و بیش از ۱۲۰ ساعت محتوای ویدیویی با کیفیت، تمرین‌های عملی، جلسات لایو ترید و پشتیبانی اختصاصی را شامل می‌شود.</p>
            
            <p><strong>🎯 هدف دوره:</strong> آموزش اصولی و بدون هیچ میانبری که شما را قادر می‌ساد تا با اعتماد به نفس و دانش کافی وارد بازار فارکس شوید و سوددهی پایدار را تجربه کنید.</p>
            
            <p><strong>📌 چرا این دوره متفاوت است؟</strong> برخلاف بسیاری از دوره‌های دیگر، ما فقط به تئوری بسنده نمی‌کنیم. شما در طول دوره با معاملات واقعی اساتید آشنا می‌شوید، استراتژی‌های عملی را در حساب دمو تمرین می‌کنید و در نهایت با یک پلن معاملاتی شخصی‌سازی شده وارد بازار واقعی می‌شوید.</p>
            
            <p><strong>✅ پیش‌نیاز:</strong> هیچ پیش‌نیازی نیاز نیست. این دوره از سطح مطلق مبتدی شروع می‌شود و تا سطح پیشرفته و حرفه‌ای ادامه می‌یابد.</p>
            
            <p><strong>🎁 گارانتی بازگشت وجه:</strong> اگر تا ۳۰ روز پس از ثبت‌نام از دوره راضی نبودید، کل وجه به شما برگردانده می‌شود، بدون هیچ سوالی.</p>
        `,
        image: 'assets/images/learn-Forex.jpg',
        price: 2490000,
        duration: '۱۲۵ ساعت',
        lessons: 52,
        level: 'مقدماتی تا پیشرفته (صفر تا صد)',
        instructor: {
            name: 'محمد کریمی',
            title: 'مدرس ارشد فارکس و ICT | ۱۰ سال سابقه ترید موفق',
            bio: 'محمد کریمی با بیش از ۱۰ سال تجربه مستقیم در بازار فارکس و مدیریت پرتفوی سرمایه‌گذاران حقیقی و حقوقی، یکی از برجسته‌ترین اساتید ایران در زمینه ICT و Smart Money Concepts است. ایشان دوره‌های تخصصی متعددی را در سطح بین‌المللی گذرانده‌اند و حاصل سال‌ها تجربه عملی خود را در این دوره به صورت کاملاً عملی و کاربردی ارائه کرده‌اند.',
            avatar: 'assets/images/user2.jpg'
        },
        syllabus: [
            { 
                title: 'فصل اول: مبانی بازار فارکس', 
                duration: '۱۲ ساعت', 
                lessons: [
                    'معرفی بازار فارکس و اصطلاحات پایه',
                    'جفت‌ارزها و نحوه تحلیل آنها',
                    'پلتفرم‌های معاملاتی MetaTrader 4/5',
                    'انواع سفارشات و نحوه اجرای معاملات',
                    'مدیریت حساب و مفاهیم لات و پیپ'
                ] 
            },
            { 
                title: 'فصل دوم: تحلیل تکنیکال پایه', 
                duration: '۲۰ ساعت', 
                lessons: [
                    'مفاهیم حمایت و مقاومت (Support & Resistance)',
                    'شناخت روند و خطوط روند (Trendlines)',
                    'الگوهای کندل استیک پیشرفته',
                    'الگوهای کلاسیک نموداری (سروشانه، مثلث، پرچم)',
                    'مقدمه‌ای بر اندیکاتورها (Moving Average, RSI, MACD)'
                ] 
            },
            { 
                title: 'فصل سوم: پرایس اکشن حرفه‌ای', 
                duration: '۲۵ ساعت', 
                lessons: [
                    'ساختار بازار (Market Structure)',
                    'Break of Structure (BOS) و Change of Character (CHoCH)',
                    'نواحی تقاضا و عرضه (Supply & Demand)',
                    'Order Blocks و شناسایی سفارشات بانکی',
                    'Fair Value Gap (FVG) و Liquidity مفاهیم'
                ] 
            },
            { 
                title: 'فصل چهارم: ICT و Smart Money Concepts', 
                duration: '۲۸ ساعت', 
                lessons: [
                    'مفاهیم پول هوشمند (Smart Money)',
                    'Identify Liquidity و نحوه شکار استاپ‌ها',
                    'مفاهیم Premium و Discount در بازار',
                    'الگوهای ICT (OB, FVG, Mitigation)',
                    'مدیریت زمانی معاملات (Killzones)'
                ] 
            },
            { 
                title: 'فصل پنجم: مدیریت سرمایه و روانشناسی', 
                duration: '۲۰ ساعت', 
                lessons: [
                    'اصول حرفه‌ای مدیریت سرمایه (Risk Management)',
                    'سایزینگ پوزیشن و نسبت ریسک به ریوارد (RRR)',
                    'مدیریت احساسات: ترس، طمع و انتقام‌گیری',
                    'طراحی و اجرای ژورنال معاملاتی حرفه‌ای',
                    'ساخت یک پلن معاملاتی شخصی‌سازی شده'
                ] 
            },
            { 
                title: 'فصل ششم: تمرین عملی و لایو ترید', 
                duration: '۲۰ ساعت', 
                lessons: [
                    'تمرین استراتژی‌ها در حساب دمو',
                    'تحلیل روزانه و هفتگی بازار به صورت لایو',
                    'مدیریت معاملات واقعی و بحث و بررسی',
                    'رفع اشکال و آنالیز معاملات انجام شده'
                ] 
            }
        ],
        reviews: [
            { name: 'سارا محمدی', date: '۱۴۰۵/۰۲/۱۰', rating: 5, text: 'بعد از ۲ سال ضرر در فارکس و شرکت در چندین دوره مختلف، با دوره آقای کریمی تونستم واقعاً بفهمم بازار چطور کار میکنه. مدیریت سرمایه رو عالی یاد گرفتم و الان چند ماهه سوددهی پایدار دارم. واقعاً متشکرم.' },
            { name: 'علی رضایی', date: '۱۴۰۵/۰۱/۲۵', rating: 5, text: 'باورم نمیشد بشه با ICT اینقدر دقیق بازار رو تحلیل کرد. استاد کریمی خیلی روان و عملی تدریس میکنن. هر سوالی داشتم توی گروه پشتیبانی سریع جواب گرفتم. بهترین سرمایه‌گذاری عمرم بود.' },
            { name: 'مریم حسینی', date: '۱۴۰۵/۰۱/۱۵', rating: 5, text: 'دوره خیلی کاملی بود. از صفر مطلق شروع کردم و الان میتونم تحلیل تکنیکال حرفه‌ای انجام بدم. فقط کاش تمرین‌های عملی بیشتری توی خود دوره بود، ولی جلسات لایو ترید واقعاً عالی بودن.' },
            { name: 'رضا عابدی', date: '۱۴۰۵/۰۱/۰۵', rating: 5, text: 'به جرأت میتونم بگم بهترین و کامل‌ترین دوره فارکسی که دیدم. هم مباحث تکنیکال خیلی عمیق، هم روانشناسی و مدیریت سرمایه عالی. آقای کریمی واقعاً استاد مسلم این حوزه هستن.' },
            { name: 'زهرا کاظمی', date: '۱۴۰۴/۱۲/۲۰', rating: 4, text: 'دوره عالی بود. من یه مدت بود توی بازار بودم ولی سودده نبودم. با این دوره ساختار بازار رو کامل فهمیدم. فقط کاش تعداد جلسات عملی بیشتر بود.' }
        ],
        rating: 4.9,
        ratingCount: 247
    };

    // تابع نمایش ستاره‌ها
    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        let stars = '';
        for (let i = 0; i < fullStars; i++) stars += '⭐';
        if (hasHalf) stars += '½';
        return stars;
    }

    // تابع نمایش سرفصل‌ها
    function renderSyllabus(syllabus) {
        return syllabus.map((item, index) => `
            <div class="syllabus-item">
                <div class="syllabus-header" onclick="toggleSyllabus(this)">
                    <div class="syllabus-title">
                        <span>📘</span>
                        <span>${item.title}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 16px;">
                        <span class="syllabus-duration">⏱️ ${item.duration}</span>
                        <svg class="syllabus-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                </div>
                <div class="syllabus-body">
                    ${item.lessons.map(lesson => `<div class="syllabus-lesson"><span>📖 ${lesson}</span><span></span></div>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // تابع نمایش نظرات
    function renderReviews(reviews) {
        return reviews.map(review => `
            <div class="review-card">
                <div class="review-header">
                    <span class="reviewer-name">${review.name}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-stars">
                    ${'⭐'.repeat(review.rating)}${review.rating % 1 ? '½' : ''}
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `).join('');
    }

    // رندر کامل صفحه
    function renderCoursePage() {
        const container = document.getElementById('courseContent');
        const course = courseData;
        
        if (!course) {
            container.innerHTML = `<div class="loading-state"><h3>❌ دوره مورد نظر یافت نشد</h3><a href="index.html#courses" class="btn btn--gold" style="margin-top: 20px;">بازگشت به دوره‌ها</a></div>`;
            return;
        }

        container.innerHTML = `
            <div class="course-header">
                <div class="course-info">
                    <span class="course-badge">🏆 ${course.badge}</span>
                    <h1>${course.title}</h1>
                    <p class="course-description">${course.shortDescription}</p>
                    <div class="course-meta">
                        <div class="meta-item"><span class="meta-icon">⏱️</span> مدت دوره: ${course.duration}</div>
                        <div class="meta-item"><span class="meta-icon">📚</span> تعداد جلسات: ${toPersianNumber(course.lessons)}</div>
                        <div class="meta-item"><span class="meta-icon">📊</span> سطح: ${course.level}</div>
                        <div class="meta-item"><span class="meta-icon">👨‍🏫</span> مدرس: ${course.instructor.name}</div>
                    </div>
                    <div class="course-meta">
                        <div class="meta-item"><span class="meta-icon">⭐</span> امتیاز: ${renderStars(course.rating)} (${toPersianNumber(course.ratingCount)} نظر)</div>
                    </div>
                </div>
                <div class="course-card-side">
                    <div class="course-card-img">
                        <img src="${course.image}" alt="${course.title}" onerror="this.src='assets/images/hero-bg.png'">
                    </div>
                    <div class="course-card-body">
                        <div class="course-price">${formatPrice(course.price)}</div>
                        <button class="btn btn--gold btn-block" onclick="addToCartAndRedirect(${course.id})">➕ افزودن به سبد خرید</button>
                        <button class="btn btn--outline-gold btn-block" onclick="window.location.href='index.html#courses'">← بازگشت به دوره‌ها</button>
                        <div class="course-features">
                            <div class="feature-item"><span>✅</span> دسترسی مادام‌العمر</div>
                            <div class="feature-item"><span>✅</span> گواهی پایان دوره معتبر</div>
                            <div class="feature-item"><span>✅</span> پشتیبانی ۲۴ ساعته و منتور اختصاصی</div>
                            <div class="feature-item"><span>✅</span> آپدیت رایگان محتواها</div>
                            <div class="feature-item"><span>✅</span> جلسات لایو ترید هفتگی</div>
                            <div class="feature-item"><span>✅</span> گروه اختصاصی دانشجویی VIP</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="course-tabs">
                <div class="tabs-header">
                    <button class="tab-btn active" data-tab="about">📖 درباره دوره</button>
                    <button class="tab-btn" data-tab="syllabus">📚 سرفصل‌های کامل</button>
                    <button class="tab-btn" data-tab="instructor">👨‍🏫 معرفی مدرس</button>
                    <button class="tab-btn" data-tab="reviews">⭐ نظرات دانشجویان (${toPersianNumber(course.reviews.length)})</button>
                </div>
                
                <div class="tab-content active" id="tab-about">
                    <div style="background: var(--bg-secondary); border-radius: 20px; padding: 28px;">
                        <h3 style="margin-bottom: 20px;">📖 معرفی کامل دوره ${course.title}</h3>
                        <div style="color: var(--text-secondary); line-height: 1.9;">
                            ${course.longDescription}
                        </div>
                        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border-light);">
                            <h4 style="margin-bottom: 16px; color: var(--gold-primary);">✨ مهارت‌هایی که در این دوره کسب می‌کنید:</h4>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--gold-primary);">✓</span> تحلیل تکنیکال حرفه‌ای</div>
                                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--gold-primary);">✓</span> پرایس اکشن و ICT/Smart Money</div>
                                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--gold-primary);">✓</span> مدیریت سرمایه اصولی</div>
                                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--gold-primary);">✓</span> روانشناسی معامله‌گری حرفه‌ای</div>
                                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--gold-primary);">✓</span> طراحی استراتژی معاملاتی شخصی</div>
                                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--gold-primary);">✓</span> توانایی تحلیل مستقل بازار</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tab-content" id="tab-syllabus">
                    <div class="syllabus-list">
                        ${renderSyllabus(course.syllabus)}
                    </div>
                </div>
                
                <div class="tab-content" id="tab-instructor">
                    <div class="instructor-card">
                        <div class="instructor-avatar">
                            <img src="${course.instructor.avatar}" alt="${course.instructor.name}" onerror="this.src='assets/images/user1.jpg'">
                        </div>
                        <div class="instructor-info">
                            <h3>${course.instructor.name}</h3>
                            <div class="instructor-title">${course.instructor.title}</div>
                            <p class="instructor-bio">${course.instructor.bio}</p>
                            <div style="margin-top: 16px; display: flex; gap: 16px; flex-wrap: wrap;">
                                <span style="background: var(--bg-glass-strong); padding: 4px 12px; border-radius: 50px; font-size: 12px;">📊 بیش از ۱۰,۰۰۰ دانشجو</span>
                                <span style="background: var(--bg-glass-strong); padding: 4px 12px; border-radius: 50px; font-size: 12px;">🏆 میانگین رضایت ۴.۹ از ۵</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tab-content" id="tab-reviews">
                    <div class="reviews-summary">
                        <div class="rating-score">
                            <div class="rating-number">${course.rating}</div>
                            <div class="rating-stars">${renderStars(course.rating)}</div>
                            <div class="rating-count">${toPersianNumber(course.ratingCount)} نظر ثبت شده</div>
                        </div>
                        <div class="rating-bars">
                            <div class="rating-bar-item"><div class="rating-star-label">۵ ستاره</div><div class="rating-bar-bg"><div class="rating-bar-fill" style="width: 87%"></div></div><div class="rating-percent">۸۷٪</div></div>
                            <div class="rating-bar-item"><div class="rating-star-label">۴ ستاره</div><div class="rating-bar-bg"><div class="rating-bar-fill" style="width: 10%"></div></div><div class="rating-percent">۱۰٪</div></div>
                            <div class="rating-bar-item"><div class="rating-star-label">۳ ستاره</div><div class="rating-bar-bg"><div class="rating-bar-fill" style="width: 2%"></div></div><div class="rating-percent">۲٪</div></div>
                            <div class="rating-bar-item"><div class="rating-star-label">۲ ستاره</div><div class="rating-bar-bg"><div class="rating-bar-fill" style="width: 1%"></div></div><div class="rating-percent">۱٪</div></div>
                            <div class="rating-bar-item"><div class="rating-star-label">۱ ستاره</div><div class="rating-bar-bg"><div class="rating-bar-fill" style="width: 0%"></div></div><div class="rating-percent">۰٪</div></div>
                        </div>
                    </div>
                    <div class="reviews-list">
                        ${renderReviews(course.reviews)}
                    </div>
                </div>
            </div>
        `;
        
        // تنظیم تب‌ها
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(`tab-${tabId}`).classList.add('active');
            });
        });
    }

    // تابع باز و بسته شدن سرفصل‌ها
    window.toggleSyllabus = function(element) {
        const item = element.closest('.syllabus-item');
        item.classList.toggle('open');
    };

    // تابع اضافه به سبد خرید
    window.addToCartAndRedirect = function(courseId) {
        let cart = JSON.parse(localStorage.getItem('polaris_cart') || '[]');
        if (!cart.includes(courseId)) {
            cart.push(courseId);
            localStorage.setItem('polaris_cart', JSON.stringify(cart));
            showToast('✅ دوره فارکس جامع به سبد خرید اضافه شد');
            updateCartBadge();
            setTimeout(() => {
                window.location.href = 'cart.html';
            }, 800);
        } else {
            showToast('ℹ️ این دوره قبلاً در سبد خرید موجود است');
            setTimeout(() => {
                window.location.href = 'cart.html';
            }, 1000);
        }
    };

    // تابع نمایش پیام
    function showToast(message) {
        let toast = document.querySelector('.toast');
        if (toast) toast.remove();
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${message}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
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

    // Event Listeners عمومی
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

    // اجرای رندر - فقط یک دوره
    renderCoursePage();
    updateCartBadge();
    
    console.log('✦ صفحه جزئیات دوره فارکس جامع پولاریس آماده است ✦');
})();