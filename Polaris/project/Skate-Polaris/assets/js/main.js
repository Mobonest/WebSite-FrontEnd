document.addEventListener('DOMContentLoaded', () => {

    // ===== LOADER =====
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 1200);
    });

    // ===== SCROLL TO TOP =====
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('polaris-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            localStorage.setItem('polaris-theme', next);
        });
    }

    // ===== LANGUAGE TOGGLE =====
    const langBtns = document.querySelectorAll('[data-lang]');
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('polaris-lang') || 'fa';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    if (langToggle) langToggle.textContent = currentLang === 'fa' ? 'EN' : 'FA';
    
    function setLangBtnsActive(lang) {
        langBtns.forEach(b => {
            b.classList.remove('active');
            if (b.getAttribute('data-lang') === lang) b.classList.add('active');
        });
    }
    setLangBtnsActive(currentLang);
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.getAttribute('data-lang');
            applyLang(currentLang);
        });
    });
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fa' ? 'en' : 'fa';
            applyLang(currentLang);
        });
    }

    function applyLang(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
        localStorage.setItem('polaris-lang', lang);
        if (langToggle) langToggle.textContent = lang === 'fa' ? 'EN' : 'FA';
        setLangBtnsActive(lang);
        updateContent(lang);
        renderAllContent(lang);
    }

    // ===== TRANSLATION DATA =====
    const translations = {
        fa: {
            'header.sub': 'آکادمی اسکیت',
            'nav.home': 'خانه', 'nav.about': 'درباره ما', 'nav.classes': 'کلاس‌ها',
            'nav.instructors': 'امتیازآوران', 'nav.gallery': 'گالری', 'nav.more': 'بیشتر',
            'nav.services': 'خدمات', 'nav.testimonials': 'نظرات', 'nav.news': 'اطلاع‌رسانی',
            'nav.competitions': 'مسابقات', 'nav.shop': 'خرید اسکیت', 'nav.faq': 'سوالات متداول',
            'nav.contact': 'تماس با ما', 'nav.login': 'ورود / ثبت‌نام',
            'search.submit': 'جستجو',
            'hero.badge': '🌟 برترین آکادمی اسکیت ایران',
            'hero.title1': 'آینده را روی', 'hero.title2': 'چرخ‌هایت بساز',
            'hero.desc': 'پولاریس، جایی که رویاهایت به پرواز درمی‌آیند. با ۱۷ سال تجربه، مدرن‌ترین متدهای آموزشی و مربیان قهرمان، تو را تا سکوی قهرمانی همراهی می‌کنیم.',
            'hero.start': 'شروع ماجراجویی', 'hero.video': 'ویدیو معرفی',
            'hero.stat1': 'هنرجوی فعال', 'hero.stat2': 'سال تجربه',
            'hero.stat3': 'مدال قهرمانی', 'hero.stat4': 'مربی حرفه‌ای',
            'hero.scroll': 'اسکرول کنید',
            'about.badge': '🎯 درباره ما',
            'about.title': 'داستان <span class="text-accent">پولاریس</span> از کجا شروع شد؟',
            'about.desc': 'از یک رویای کوچک تا بزرگترین آکادمی اسکیت خاورمیانه',
            'about.heading': 'اولین و معتبرترین آکادمی تخصصی اسکیت ایران',
            'about.text1': 'پولاریس در سال ۱۳۸۸ با یک هدف ساده متولد شد: <strong>ایجاد بهترین فضای آموزشی اسکیت در ایران.</strong>',
            'about.text2': 'امروز با بیش از ۳۵۰۰ هنرجوی فعال، ۵۸ مربی بین‌المللی و ۳ شعبه در تهران، افتخار می‌کنیم که خانواده بزرگی از عاشقان اسکیت را کنار هم جمع کرده‌ایم.',
            'about.f1': 'مورد تأیید فدراسیون', 'about.f1d': 'دارای مجوز رسمی',
            'about.f2': 'متد آموزشی بین‌المللی', 'about.f2d': 'جدیدترین متدهای آموزشی',
            'about.f3': 'تضمین ایمنی کامل', 'about.f3d': 'تجهیزات استاندارد',
            'about.f4': 'پیشرفت تضمینی', 'about.f4d': 'برنامه شخصی‌سازی شده',
            'about.cta': 'همین حالا شروع کن',
            'classes.badge': '📚 دوره‌های آموزشی',
            'classes.title': 'کلاس‌های <span class="text-accent">تخصصی</span> ما',
            'classes.desc': 'از اولین قدم تا حرفه‌ای‌ترین حرکات',
            'instructors.badge': '👑 امتیازآوران',
            'instructors.title': 'قهرمانان <span class="text-accent">پولاریس</span>',
            'instructors.desc': 'مربیان و هنرجویانی که افتخار آفریده‌اند',
            'gallery.badge': '📸 گالری تصاویر',
            'gallery.title': 'لحظه‌های <span class="text-accent">ناب</span> پولاریس',
            'gallery.desc': 'خاطرات، مسابقات و افتخارات ما',
            'services.badge': '🔧 خدمات ما',
            'services.title': 'چه <span class="text-accent">خدماتی</span> ارائه می‌دهیم؟',
            'services.desc': 'فراتر از آموزش اسکیت',
            'testimonials.badge': '💬 نظرات',
            'testimonials.title': 'هنرجویان <span class="text-accent">چه می‌گویند؟</span>',
            'testimonials.desc': 'رضایت شما افتخار ماست',
            'news.badge': '📰 اطلاع‌رسانی',
            'news.title': 'اخبار و <span class="text-accent">رویدادها</span>',
            'news.desc': 'از تازه‌ترین اخبار پولاریس باخبر شو',
            'competitions.badge': '🏆 مسابقات',
            'competitions.title': 'مسابقات <span class="text-accent">پیش رو</span>',
            'competitions.desc': 'در رقابت‌های حرفه‌ای شرکت کن و بدرخش',
            'shop.badge': '🛒 فروشگاه',
            'shop.title': 'خرید <span class="text-accent">اسکیت</span> و تجهیزات',
            'shop.desc': 'تمامی محصولات در آکادمی موجود است',
            'shop.notice': 'تمامی این محصولات <strong>در آکادمی موجود</strong> است. برای خرید و مشاوره رایگان به آموزشگاه پولاریس مراجعه کنید.',
            'faq.badge': '❓ سوالات متداول',
            'faq.title': 'سوالات <span class="text-accent">پر تکرار</span>',
            'faq.desc': 'هر آنچه باید بدانید',
            'contact.badge': '📞 تماس با ما',
            'contact.title': 'با <span class="text-accent">پولاریس</span> در ارتباط باش',
            'contact.desc': 'منتظر شنیدن صدای گرمت هستیم',
            'contact.addr': 'آدرس', 'contact.tel': 'تلفن',
            'contact.email': 'ایمیل', 'contact.hours': 'ساعت کاری',
            'contact.send': 'ارسال پیام',
            'footer.text': 'اولین و معتبرترین آکادمی تخصصی اسکیت ایران با ۱۷ سال تجربه و بیش از ۳۵۰۰ هنرجوی فعال.',
            'footer.quick': 'دسترسی سریع', 'footer.more': 'بیشتر',
            'footer.copy': '© ۲۰۲۶ تمامی حقوق محفوظ است | پولاریس آکادمی',
        },
        en: {
            'header.sub': 'Skate Academy',
            'nav.home': 'Home', 'nav.about': 'About', 'nav.classes': 'Classes',
            'nav.instructors': 'Champions', 'nav.gallery': 'Gallery', 'nav.more': 'More',
            'nav.services': 'Services', 'nav.testimonials': 'Reviews', 'nav.news': 'News',
            'nav.competitions': 'Competitions', 'nav.shop': 'Shop', 'nav.faq': 'FAQ',
            'nav.contact': 'Contact', 'nav.login': 'Login / Register',
            'search.submit': 'Search',
            'hero.badge': '🌟 Top Skate Academy in Iran',
            'hero.title1': 'Build Your Future', 'hero.title2': 'On Wheels',
            'hero.desc': 'Polaris, where your dreams take flight. With 17 years of experience, modern training methods and champion coaches.',
            'hero.start': 'Start Adventure', 'hero.video': 'Intro Video',
            'hero.stat1': 'Active Students', 'hero.stat2': 'Years Experience',
            'hero.stat3': 'Gold Medals', 'hero.stat4': 'Pro Coaches',
            'hero.scroll': 'Scroll Down',
            'about.badge': '🎯 About Us',
            'about.title': 'Where did <span class="text-accent">Polaris</span> story begin?',
            'about.desc': 'From a small dream to the largest skating academy in the Middle East',
            'about.heading': 'The first and most prestigious specialized skating academy in Iran',
            'about.text1': 'Polaris was born in 2009 with a simple goal: creating the best skating education environment in Iran.',
            'about.text2': 'Today with over 3500 active students, 58 international coaches and 3 branches in Tehran.',
            'about.f1': 'Federation Approved', 'about.f1d': 'Official license',
            'about.f2': 'International Method', 'about.f2d': 'Latest training methods',
            'about.f3': 'Safety Guaranteed', 'about.f3d': 'Standard equipment',
            'about.f4': 'Guaranteed Progress', 'about.f4d': 'Personalized program',
            'about.cta': 'Get Started Now',
            'classes.badge': '📚 Courses',
            'classes.title': 'Our <span class="text-accent">Specialized</span> Classes',
            'classes.desc': 'From first steps to professional moves',
            'instructors.badge': '👑 Champions',
            'instructors.title': '<span class="text-accent">Polaris</span> Champions',
            'instructors.desc': 'Coaches and students who made us proud',
            'gallery.badge': '📸 Gallery',
            'gallery.title': '<span class="text-accent">Amazing</span> Moments',
            'gallery.desc': 'Our memories, competitions and honors',
            'services.badge': '🔧 Services',
            'services.title': 'What <span class="text-accent">Services</span> We Offer?',
            'services.desc': 'Beyond skating education',
            'testimonials.badge': '💬 Reviews',
            'testimonials.title': 'What <span class="text-accent">Students Say?</span>',
            'testimonials.desc': 'Your satisfaction is our honor',
            'news.badge': '📰 News',
            'news.title': 'Latest <span class="text-accent">News</span>',
            'news.desc': 'Stay updated with Polaris news',
            'competitions.badge': '🏆 Competitions',
            'competitions.title': 'Upcoming <span class="text-accent">Competitions</span>',
            'competitions.desc': 'Compete and shine in professional races',
            'shop.badge': '🛒 Shop',
            'shop.title': 'Buy <span class="text-accent">Skates</span> & Equipment',
            'shop.desc': 'All products available at the academy',
            'shop.notice': 'All products are <strong>available at the academy</strong>. Visit us for purchase and free consultation.',
            'faq.badge': '❓ FAQ',
            'faq.title': 'Frequently <span class="text-accent">Asked Questions</span>',
            'faq.desc': 'Everything you need to know',
            'contact.badge': '📞 Contact',
            'contact.title': 'Get in <span class="text-accent">Touch</span>',
            'contact.desc': 'We are waiting to hear from you',
            'contact.addr': 'Address', 'contact.tel': 'Phone',
            'contact.email': 'Email', 'contact.hours': 'Working Hours',
            'contact.send': 'Send Message',
            'footer.text': 'The first and most prestigious specialized skating academy in Iran with 17 years of experience.',
            'footer.quick': 'Quick Access', 'footer.more': 'More',
            'footer.copy': '© 2026 All Rights Reserved | Polaris Academy',
        }
    };

    function updateContent(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    // ===== DYNAMIC CONTENT RENDERER با عکس‌ها =====
    function renderAllContent(lang) {
        const isFa = lang === 'fa';

        // ===== CLASSES با عکس (اصلاح شده) =====
        const classesGrid = document.getElementById('classesGrid');
        if (classesGrid) {
            const classes = [
                { img: 'class1.jpg', level: isFa?'مبتدی':'Beginner', levelClass: '', title: isFa?'اسکیت مقدماتی':'Beginner Skating', desc: isFa?'یادگیری اصول اولیه، تعادل و ترمز':'Learn fundamentals, balance and braking', sessions: '۱۲', capacity: '۸', price: '۱,۲۰۰,۰۰۰' },
                { img: 'class2.png', level: isFa?'متوسط':'Intermediate', levelClass: '--mid', title: isFa?'اسکیت نمایشی':'Figure Skating', desc: isFa?'حرکات نمایشی و چرخش‌های حرفه‌ای':'Display moves and professional spins', sessions: '۱۶', capacity: '۶', price: '۲,۵۰۰,۰۰۰' },
                { img: 'class3.jpg', level: isFa?'پیشرفته':'Advanced', levelClass: '--pro', title: isFa?'اسکیت سرعت':'Speed Skating', desc: isFa?'تکنیک‌های پیشرفته سرعت':'Advanced speed techniques', sessions: '۲۰', capacity: '۴', price: '۳,۸۰۰,۰۰۰' },
                { img: 'class4.jpg', level: isFa?'تخصصی':'Specialized', levelClass: '', title: isFa?'اسکیت هاکی':'Roller Hockey', desc: isFa?'آموزش تخصصی هاکی':'Professional hockey training', sessions: '۲۰', capacity: '۱۰', price: '۴,۲۰۰,۰۰۰' },
                { img: 'class5.jpg', level: isFa?'متوسط':'Intermediate', levelClass: '--mid', title: isFa?'فری‌استایل':'Freestyle', desc: isFa?'حرکات آزاد و خلاقانه':'Free and creative moves', sessions: '۱۴', capacity: '۶', price: '۲,۸۰۰,۰۰۰' },
                { img: 'class6.webp', level: isFa?'قهرمانی':'Championship', levelClass: '--pro', title: isFa?'دوره قهرمانی':'Championship', desc: isFa?'آمادگی برای مسابقات':'Competition preparation', sessions: '۳۰', capacity: '۲', price: '۸,۵۰۰,۰۰۰' },
            ];
            classesGrid.innerHTML = classes.map(c => `
                <div class="class-card reveal">
                    <div class="class-card__image" style="background: linear-gradient(135deg, var(--accent-fire), var(--accent-warm));">
                        <img src="./assets/img/${c.img}" alt="${c.title}" style="width:100%; height:100%; object-fit:cover;">
                        <div class="class-card__level ${c.levelClass}">${c.level}</div>
                    </div>
                    <div class="class-card__content">
                        <h3 class="class-card__title">${c.title}</h3>
                        <p class="class-card__desc">${c.desc}</p>
                        <div class="class-card__details"><span>${c.sessions} ${isFa?'جلسه':'sessions'}</span><span>${c.capacity} ${isFa?'نفره':'people'}</span></div>
                        <div class="class-card__price">${c.price} <span>${isFa?'تومان':'Toman'}</span></div>
                        <a href="./enroll.html" class="btn btn--primary">${isFa?'ثبت‌نام':'Register'}</a>
                    </div>
                </div>
            `).join('');
        }

        // ===== INSTRUCTORS با عکس =====
        const instructorsGrid = document.getElementById('instructorsGrid');
        if (instructorsGrid) {
            const instructors = [
                { img: 'user1.jpg', name: isFa?'علی کریمی':'Ali Karimi', role: isFa?'مربی ارشد - قهرمان آسیا':'Head Coach - Asian Champion', exp: isFa?'۱۲ سال سابقه':'12 years experience', medals: '🥇🥇🥈' },
                { img: 'user2.jpeg', name: isFa?'سارا محمدی':'Sara Mohammadi', role: isFa?'مربی اسکیت نمایشی':'Figure Skating Coach', exp: isFa?'۸ سال سابقه':'8 years experience', medals: '🥇🥇🥇' },
                { img: 'user3.jpg', name: isFa?'رضا احمدی':'Reza Ahmadi', role: isFa?'مربی اسکیت سرعت':'Speed Skating Coach', exp: isFa?'۱۰ سال سابقه':'10 years experience', medals: '🥇🥈🥈' },
                { img: 'user4.jpg', name: isFa?'نیلوفر حسینی':'Niloufar Hosseini', role: isFa?'قهرمان فری‌استایل':'Freestyle Champion', exp: isFa?'۵ سال سابقه':'5 years experience', medals: '🥇🥇🥇🥈' },
            ];
            instructorsGrid.innerHTML = instructors.map(i => `
                <div class="instructor-card reveal">
                    <div class="instructor-card__img" style="background: linear-gradient(135deg, var(--accent-fire), var(--accent-warm));">
                        <img src="./assets/img/${i.img}" alt="${i.name}" style="width:100%; height:100%; object-fit:cover;">
                        <div class="instructor-card__medals">${i.medals}</div>
                    </div>
                    <div class="instructor-card__info"><h3>${i.name}</h3><span>${i.role}</span><p>${i.exp}</p></div>
                </div>
            `).join('');
        }

        // ===== GALLERY با عکس (اصلاح شده با فایل‌های موجود) =====
        const galleryGrid = document.getElementById('galleryGrid');
        if (galleryGrid) {
            const items = [
                { img: 'gallery1.jpg', size: '--large', label: isFa?'مسابقات کشوری':'National Competitions' },
                { img: 'gallery2.jpg', size: '', label: isFa?'کارگاه آموزشی':'Workshop' },
                { img: 'gallery3.jpg', size: '', label: isFa?'جشن فارغ‌التحصیلی':'Graduation' },
                { img: 'gallery4.jpg', size: '--tall', label: isFa?'افتخارات تیم':'Team Honors' },
                { img: 'gallery5.webp', size: '', label: isFa?'اردوی تابستانی':'Summer Camp' },
                { img: 'gallery6.jpg', size: '', label: isFa?'کلاس تخصصی':'Special Class' },
                { img: 'gallery7.webp', size: '--wide', label: isFa?'جشن پایان فصل':'End Season Party' },
                { img: 'gallery8.jpg', size: '', label: isFa?'مسابقات اینلاین':'Inline Competition' },
                { img: 'gallery9.jpg', size: '', label: isFa?'اردوی تیم ملی':'National Team Camp' },
            ];
            galleryGrid.innerHTML = items.map(item => `
                <div class="gallery__item gallery__item${item.size}" style="background: linear-gradient(135deg, var(--accent-fire), var(--accent-warm));">
                    <img src="./assets/img/${item.img}" alt="${item.label}" style="width:100%; height:100%; object-fit:cover;">
                    <div class="gallery__overlay"><span>${item.label}</span></div>
                </div>
            `).join('');
        }

        // ===== SERVICES با آیکون‌های اختصاصی =====
        const servicesGrid = document.getElementById('servicesGrid');
        if (servicesGrid) {
            const services = [
                { 
                    title: isFa?'آموزش خصوصی':'Private Lessons', 
                    desc: isFa?'جلسات اختصاصی با مربی':'One-on-one sessions',
                    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M12 2a10 10 0 1010 10 10 10 0 00-10-10z"/>
                            <path d="M12 6v6l4 2"/>
                            <path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>`
                },
                { 
                    title: isFa?'اجاره سالن':'Hall Rental', 
                    desc: isFa?'سالن‌های استاندارد':'Standard halls',
                    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                            <path d="M2 9h20"/>
                          </svg>`
                },
                { 
                    title: isFa?'تعمیرات اسکیت':'Skate Repair', 
                    desc: isFa?'سرویس و تعمیر تخصصی':'Professional service',
                    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="12" y1="18" x2="12" y2="12"/>
                            <line x1="9" y1="15" x2="15" y2="15"/>
                          </svg>`
                },
                { 
                    title: isFa?'مشاوره تخصصی':'Consulting', 
                    desc: isFa?'راهنمایی خرید و آموزش':'Buying & training advice',
                    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 16v-4"/>
                            <path d="M12 8h.01"/>
                            <line x1="12" y1="4" x2="12" y2="6"/>
                          </svg>`
                },
            ];
            servicesGrid.innerHTML = services.map(s => `
                <div class="service-card reveal">
                    <div class="service-card__icon">${s.icon}</div>
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                </div>
            `).join('');
        }

        // ===== TESTIMONIALS با عکس =====
        const testimonialsGrid = document.getElementById('testimonialsGrid');
        if (testimonialsGrid) {
            const reviews = [
                { 
                    img: 'profile5.jpg', 
                    stars: '⭐⭐⭐⭐⭐', 
                    text: isFa?'بهترین تصمیم زندگیم ثبت‌نام تو پولاریس بود. مربی‌ها فوق‌العاده‌ان و فضا کاملاً حرفه‌ایه.':'Best decision of my life! The coaches are amazing and the environment is completely professional.', 
                    name: isFa?'سارا محمدی':'Sara Mohammadi', 
                    role: isFa?'هنرجوی اسکیت نمایشی':'Figure Skating Student', 
                    avatar: 'س م' 
                },
                { 
                    img: 'profile3.jpg', 
                    stars: '⭐⭐⭐⭐⭐', 
                    text: isFa?'پسرم عاشق پولاریس شده. اعتماد به نفسش عالی شده و عاشق اسکیت شده.':'My son loves Polaris! His confidence has improved greatly.', 
                    name: isFa?'مریم رضایی':'Maryam Rezaei', 
                    role: isFa?'والدین هنرجو':'Parent', 
                    avatar: 'ر ض' 
                },
                { 
                    img: 'profile1.jpg', 
                    stars: '⭐⭐⭐⭐⭐', 
                    text: isFa?'از صفر شروع کردم و الان مدال دارم! پولاریس بهترین انتخاب برای پیشرفت بود.':'Started from zero, now I have medals! Polaris was the best choice for progress.', 
                    name: isFa?'امیر توسلی':'Amir Tavasoli', 
                    role: isFa?'قهرمان اسکیت سرعت':'Speed Skating Champion', 
                    avatar: 'ا ت' 
                },
                { 
                    img: 'profile2.jpg', 
                    stars: '⭐⭐⭐⭐⭐', 
                    text: isFa?'محیط بسیار حرفه‌ای و دوستانه. بهترین آکادمی اسکیت تهران.':'Very professional and friendly environment. The best skate academy in Tehran.', 
                    name: isFa?'محمد رضایی':'Mohammad Rezaei', 
                    role: isFa?'هنرجوی اسکیت سرعت':'Speed Skating Student', 
                    avatar: 'م ر' 
                },
                { 
                    img: 'profile4.jpg', 
                    stars: '⭐⭐⭐⭐⭐', 
                    text: isFa?'تنها جایی که میتونم بگم واقعاً پیشرفت کردم. مربی‌ها دلسوز و حرفه‌ای هستن.':'The only place where I can say I really progressed. The coaches are caring and professional.', 
                    name: isFa?'فاطمه کریمی':'Fatemeh Karimi', 
                    role: isFa?'هنرجوی فری‌استایل':'Freestyle Student', 
                    avatar: 'ف ک' 
                },
                { 
                    img: 'profile6.jpg', 
                    stars: '⭐⭐⭐⭐⭐', 
                    text: isFa?'بعد از ۶ ماه تمرین، تونستم در مسابقات استانی مقام بیارم. ممنون از تیم پولاریس.':'After 6 months of training, I was able to win a place in the provincial competitions. Thanks to the Polaris team.', 
                    name: isFa?'حسین رضایی':'Hossein Rezaei', 
                    role: isFa?'قهرمان نوجوانان':'Youth Champion', 
                    avatar: 'ح ر' 
                },
            ];
            testimonialsGrid.innerHTML = reviews.map(r => `
                <div class="testimonial-card reveal">
                    <div class="testimonial-card__stars">${r.stars}</div>
                    <p class="testimonial-card__text">${r.text}</p>
                    <div class="testimonial-card__author">
                        <img src="./assets/img/${r.img}" alt="${r.name}" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
                        <div><strong>${r.name}</strong><span>${r.role}</span></div>
                    </div>
                </div>
            `).join('');
        }

        // ===== NEWS با عکس =====
        const newsGrid = document.getElementById('newsGrid');
        if (newsGrid) {
            const news = [
                { 
                    date: isFa?'۱۵ اردیبهشت ۱۴۰۵':'May 5, 2026', 
                    title: isFa?'ثبت‌نام ترم تابستان آغاز شد':'Summer term registration open', 
                    desc: isFa?'با تخفیف ۲۰٪ ویژه ثبت‌نام زودهنگام':'20% discount for early registration',
                    img: 'mo1.webp'
                },
                { 
                    date: isFa?'۲۸ فروردین ۱۴۰۵':'Apr 17, 2026', 
                    title: isFa?'کسب ۵ مدال طلا در مسابقات آسیایی':'5 gold medals won at Asian Championships', 
                    desc: isFa?'تیم پولاریس در مسابقات اسکیت آسیا ۲۰۲۶ بدرخشید':'Polaris team shined at 2026 Asian Skating Championships',
                    img: 'mo2.jpg'
                },
                { 
                    date: isFa?'۵ اسفند ۱۴۰۴':'Feb 24, 2026', 
                    title: isFa?'برگزاری کارگاه رایگان اسکیت':'Free skating workshop', 
                    desc: isFa?'کارگاه آشنایی با اسکیت برای علاقه‌مندان':'Introduction to skating for beginners',
                    img: 'mo3.jpg'
                },
            ];
            newsGrid.innerHTML = news.map(n => `
                <div class="news-card reveal">
                    <div class="news-card__image" style="background: linear-gradient(135deg, var(--accent-warm), var(--accent-fire));">
                        <img src="./assets/img/${n.img}" alt="${n.title}" style="width:100%; height:100%; object-fit:cover;">
                    </div>
                    <div class="news-card__content">
                        <span class="news-card__date">${n.date}</span>
                        <h3>${n.title}</h3>
                        <p>${n.desc}</p>
                        <a href="#" class="news-card__link">${isFa?'بیشتر بخوانید':'Read more'} 
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="19" y1="12" x2="5" y2="12"/>
                                <polyline points="12 19 5 12 12 5"/>
                            </svg>
                        </a>
                    </div>
                </div>
            `).join('');
        }

        // ===== COMPETITIONS =====
        const competitionsGrid = document.getElementById('competitionsGrid');
        if (competitionsGrid) {
            const comps = [
                { title: isFa?'مسابقات جهانی اسکیت ۲۰۲۶':'World Skating Championships 2026', date: isFa?'شهریور ۱۴۰۵ | ایتالیا':'Sep 2026 | Italy', desc: isFa?'رقابت‌های جهانی اسکیت نمایشی، سرعتی':'World championships for figure, speed and freestyle skating' },
                { title: isFa?'لیگ کشوری اسکیت ۱۴۰۵':'National Skating League 2026', date: isFa?'مهر تا اسفند | ایران':'Oct-Mar | Iran', desc: isFa?'بزرگترین رویداد اسکیت کشور در تمامی رده‌ها':'The biggest skating event in the country' },
                { title: isFa?'المپیاد استعدادهای برتر':'Talent Olympiad', date: isFa?'مرداد ۱۴۰۵ | تهران':'Aug 2026 | Tehran', desc: isFa?'رقابت ویژه رده سنی نوجوانان و جوانان':'Competition for teenagers and youth' },
            ];
            competitionsGrid.innerHTML = comps.map(c => `
                <div class="competition-card reveal"><div class="competition-card__icon"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/></svg></div><h3>${c.title}</h3><span class="competition-card__date">${c.date}</span><p>${c.desc}</p><a href="#" class="btn btn--outline">${isFa?'اطلاعات بیشتر':'More Info'}</a></div>
            `).join('');
        }

        // ===== SHOP با عکس =====
        const shopGrid = document.getElementById('shopGrid');
        if (shopGrid) {
            const products = [
                { img: 'shop1.jpg', title: isFa?'اسکیت نمایشی حرفه‌ای':'Professional Figure Skate', price: '۸,۵۰۰,۰۰۰', detail: isFa?'برند K2 | سایز ۳۶-۴۴':'Brand K2 | Size 36-44' },
                { img: 'shop2.jpg', title: isFa?'اسکیت سرعت کربنی':'Carbon Speed Skate', price: '۱۲,۰۰۰,۰۰۰', detail: isFa?'برند Powerslide | سایز ۳۸-۴۶':'Brand Powerslide | Size 38-46' },
                { img: 'shop3.jpg', title: isFa?'اسکیت مبتدی کودکان':'Kids Beginner Skate', price: '۲,۲۰۰,۰۰۰', detail: isFa?'قابل تنظیم | سایز ۲۸-۳۵':'Adjustable | Size 28-35' },
                { img: 'shop4.jpg', title: isFa?'کلاه و لوازم ایمنی':'Helmet & Safety Gear', price: '۴۵۰,۰۰۰', detail: isFa?'کلاه، زانوبند، آرنج‌بند':'Helmet, knee pads, elbow pads' },
            ];
            shopGrid.innerHTML = products.map(p => `
                <div class="shop-card reveal">
                    <div class="shop-card__img"><img src="./assets/img/${p.img}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;"></div>
                    <h3>${p.title}</h3><span class="shop-card__price">${p.price} ${isFa?'تومان':'Toman'}</span><p>${p.detail}</p>
                </div>
            `).join('');
        }

        // ===== FAQ =====
        const faqList = document.getElementById('faqList');
        if (faqList) {
            const faqs = [
                { q: isFa?'حداقل سن برای شروع اسکیت چقدر است؟':'What is the minimum age?', a: isFa?'ما از ۳ سالگی تا ۷۰ سالگی هنرجو می‌پذیریم. برنامه آموزشی هر فرد متناسب با سن و توانایی‌اش طراحی می‌شود.':'We accept students from 3 to 70 years old.' },
                { q: isFa?'آیا تجهیزات ایمنی ارائه می‌دهید؟':'Do you provide safety equipment?', a: isFa?'بله، در جلسات اول کلاه و تجهیزات ایمنی رایگان در اختیار هنرجو قرار می‌گیرد.':'Yes, free for first sessions.' },
                { q: isFa?'امکان شرکت در مسابقات وجود دارد؟':'Can I join competitions?', a: isFa?'قطعاً! ما تیم‌های مسابقاتی در رده‌های مختلف داریم.':'Absolutely! We have competition teams.' },
                { q: isFa?'چطور می‌توانم ثبت‌نام کنم؟':'How to register?', a: isFa?'از طریق دکمه ورود/ثبت‌نام در سایت، تماس تلفنی، یا مراجعه حضوری.':'Online, by phone, or in person.' },
            ];
            faqList.innerHTML = faqs.map(f => `
                <div class="faq__item reveal"><button class="faq__question"><span>${f.q}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button><div class="faq__answer"><p>${f.a}</p></div></div>
            `).join('');
        }

        // Re-attach FAQ listeners
        document.querySelectorAll('.faq__question').forEach(btn => {
            btn.removeEventListener('click', btn.clickHandler);
            btn.clickHandler = function() {
                const item = this.parentElement;
                const wasActive = item.classList.contains('active');
                document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('active'));
                if (!wasActive) item.classList.add('active');
            };
            btn.addEventListener('click', btn.clickHandler);
        });

        // Re-attach reveal observer
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, { threshold: 0.15 });
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    // Initial render
    updateContent(currentLang);
    renderAllContent(currentLang);

    // ===== HEADER SCROLL =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 80);
    });

    // ===== MOBILE MENU =====
    const mobileToggle = document.getElementById('mobileToggle');
    const menu = document.querySelector('.header__menu');
    if (mobileToggle && menu) {
        mobileToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (menu) menu.classList.remove('active');
                const searchOverlay = document.getElementById('searchOverlay');
                if (searchOverlay) searchOverlay.classList.remove('active');
            }
        });
    });

    // ===== ACTIVE MENU =====
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        document.querySelectorAll('section[id]').forEach(section => {
            const top = section.offsetTop - 250;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            document.querySelectorAll(`.header__menu-link[href="#${id}"]`).forEach(link => {
                link.classList.toggle('active', scrollY > top && scrollY <= bottom);
            });
        });
    });

// ===== COUNTER WITH PERSIAN NUMBERS =====
function toPersianNumber(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, d => persianDigits[parseInt(d)]);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const targetNum = parseInt(el.getAttribute('data-count'));
            if (isNaN(targetNum)) return;
            let count = 0;
            const speed = Math.max(targetNum / 40, 1);
            const updateCount = () => {
                if (count < targetNum) {
                    count += speed;
                    el.textContent = '+' + toPersianNumber(Math.floor(count));
                    requestAnimationFrame(updateCount);
                } else {
                    el.textContent = '+' + toPersianNumber(targetNum);
                }
            };
            updateCount();
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('.hero__stat-number').forEach(num => counterObserver.observe(num));
    // ===== SEARCH =====
    const searchOverlay = document.getElementById('searchOverlay');
    const searchToggle = document.getElementById('searchToggle');
    const searchClose = document.getElementById('searchClose');
    const searchForm = document.getElementById('searchForm');
    
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            if (searchOverlay) searchOverlay.classList.add('active');
        });
    }
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            if (searchOverlay) searchOverlay.classList.remove('active');
        });
    }
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape' && searchOverlay) searchOverlay.classList.remove('active'); 
    });
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const q = document.getElementById('searchInput').value;
            if (q) alert(currentLang === 'fa' ? 'جستجو برای: ' + q : 'Searching for: ' + q);
            if (searchOverlay) searchOverlay.classList.remove('active');
        });
    }

    // ===== PARALLAX =====
    document.addEventListener('mousemove', (e) => {
        const circles = document.querySelectorAll('.hero__bg-circle');
        const x = (e.clientX / window.innerWidth - 0.5) * 25;
        const y = (e.clientY / window.innerHeight - 0.5) * 25;
        circles.forEach((c, i) => {
            c.style.transform = `translate(${x*(i+1)*0.4}px, ${y*(i+1)*0.4}px)`;
        });
    });

});