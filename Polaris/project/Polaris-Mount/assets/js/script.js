// ===== MAIN SCRIPT =====
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== INITIALIZE AOS =====
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 0,
    });

    // ===== LOADER =====
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                loader.classList.add('hidden');
                document.body.style.overflow = '';
            }, 1000);
        });
        setTimeout(function() {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 5000);
        document.body.style.overflow = 'hidden';
    }

    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('mainHeader');
    let lastScroll = 0;
    let scrollTimer;

    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            clearTimeout(scrollTimer);
            
            if (currentScroll > lastScroll && currentScroll > 200) {
                header.style.transform = 'translateY(-120%)';
                header.style.opacity = '0';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
            }
            
            scrollTimer = setTimeout(function() {
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
            }, 2000);
            
            lastScroll = currentScroll;
        });
    }

    // ===== MOBILE MENU =====
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 30;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ===== FAQ ACCORDION =====
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // ===== COUNTER ANIMATION =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-value[data-count]');
        
        counters.forEach(counter => {
            if (counter.classList.contains('counted')) return;
            counter.classList.add('counted');
            
            const targetText = counter.getAttribute('data-count');
            // Convert Persian/English numbers to integer
            const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            let cleanedText = targetText;
            for (let i = 0; i < 10; i++) {
                cleanedText = cleanedText.replace(new RegExp(persianNumbers[i], 'g'), i);
            }
            const target = parseInt(cleanedText.replace(/[^\d]/g, ''));
            const suffix = targetText.includes('+') ? '+' : '';
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
        // تابع تبدیل عدد به فارسی
        function toPersianNumber(num) {
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return num.toString().replace(/\d/g, d => persianDigits[parseInt(d)]);
        }

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = toPersianNumber(Math.floor(current)) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = toPersianNumber(target) + suffix;
            }
        };
            
            updateCounter();
        });
    }

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // ===== PARALLAX EFFECT =====
    const parallaxContainer = document.getElementById('parallaxBg');
    if (parallaxContainer) {
        let ticking = false;
        let mouseX = 0;
        let mouseY = 0;
        let scrollY = 0;

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        window.addEventListener('scroll', function() {
            scrollY = window.pageYOffset;
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        function updateParallax() {
            const layers = parallaxContainer.querySelectorAll('.parallax-svg');
            layers.forEach((layer, index) => {
                const speed = (index + 1) * 0.02;
                const xOffset = (mouseX / window.innerWidth - 0.5) * 80 * speed;
                const yOffset = (mouseY / window.innerHeight - 0.5) * 60 * speed;
                const scrollOffset = scrollY * 0.15 * speed;
                layer.style.transform = `translate3d(${xOffset}px, ${yOffset - scrollOffset}px, 0)`;
            });
            ticking = false;
        }

        updateParallax();
        
        window.addEventListener('resize', function() {
            updateParallax();
        });
    }

    // ===== PARTICLES =====
    function createParticles() {
        const heroSection = document.querySelector('.hero-particles');
        if (!heroSection) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            particle.setAttribute('viewBox', '0 0 10 10');
            particle.setAttribute('width', '10');
            particle.setAttribute('height', '10');
            particle.classList.add('particle');
            particle.style.position = 'absolute';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '5');
            circle.setAttribute('cy', '5');
            circle.setAttribute('r', Math.random() * 2 + 0.5);
            circle.setAttribute('fill', '#22C55E');
            circle.setAttribute('opacity', Math.random() * 0.4 + 0.1);
            
            const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
            animate.setAttribute('attributeName', 'cy');
            animate.setAttribute('dur', Math.random() * 4 + 3 + 's');
            animate.setAttribute('values', '5;' + (Math.random() * 4 + 2) + ';5');
            animate.setAttribute('repeatCount', 'indefinite');
            
            circle.appendChild(animate);
            particle.appendChild(circle);
            heroSection.appendChild(particle);
        }
    }

    createParticles();

    // ===== SHOP MODAL =====
    window.openModal = function(title, desc) {
        const modal = document.getElementById('shopModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        
        if (modal && modalTitle && modalDesc) {
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function() {
        const modal = document.getElementById('shopModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Close modal on overlay click
    const modalOverlay = document.getElementById('shopModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // ===== FORM HANDLING =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, select');

        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#22C55E';
                this.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
            });
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.style.borderColor = '';
                    this.style.boxShadow = '';
                }
            });
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#22C55E';
                }
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#EF4444';
                }
            });
            
            if (!isValid) {
                contactForm.style.animation = 'shake 0.5s ease';
                setTimeout(() => contactForm.style.animation = '', 500);
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            
            submitBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="18">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                </svg>
                ثبت‌نام موفق ✓
            `;
            submitBtn.style.background = '#065F2C';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                inputs.forEach(input => {
                    input.style.borderColor = '';
                    input.style.boxShadow = '';
                });
            }, 2500);
        });
    }

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-theme');
                body.classList.remove('light-theme');
            } else {
                body.classList.add('light-theme');
                body.classList.remove('dark-theme');
            }
        }
    });

    // ===== LANGUAGE SYSTEM =====
    const langToggle = document.getElementById('langToggle');
    const langSpan = langToggle ? langToggle.querySelector('span') : null;
    
    const translations = {
        fa: {
            pageTitle: '🏔️ آکادمی کوهنوردی پولاریس | آموزش تخصصی و فروشگاه تجهیزات کوهنوردی',
            langToggleText: 'EN',
            loaderText: 'در حال فتح قله...',
            topBarText: '🏔️ آکادمی کوهنوردی پولاریس | آموزش از مبتدی تا پیشرفته',
            navHome: 'خانه',
            navAbout: 'درباره آکادمی',
            navWhyUs: 'چرا پولاریس',
            navCourses: 'دوره‌ها',
            navTeam: 'مربیان',
            navAchievements: 'افتخارات',
            navRanking: 'رتبه‌بندی',
            navShop: 'فروشگاه',
            navFaq: 'سوالات متداول',
            navGallery: 'گالری',
            navContact: 'تماس',
            heroBadge: '🎖️ آکادمی رسمی کوهنوردی ایران',
            heroTitleLine1: 'آکادمی کوهنوردی',
            heroTitleLine2: 'پولاریس',
            heroDesc: 'آموزش تخصصی کوهنوردی، یخ‌نوردی و سنگ‌نوردی | برگزاری دوره‌های مقدماتی تا پیشرفته | دارای مجوز رسمی از فدراسیون کوهنوردی و صعودهای ورزشی | همراه شما تا فتح بلندترین قله‌ها',
            heroBtnCourses: 'مشاهده دوره‌ها',
            heroBtnRegister: 'ثبت‌نام آنلاین',
            statStudents: 'هنرجوی آموزش دیده',
            statCourses: 'دوره تخصصی',
            statYears: 'سال تجربه',
            statCoaches: 'مربی حرفه‌ای',
            heroCardCurrentCourse: '📅 دوره درحال برگزاری',
            heroCardCourseName: 'دوره پیشرفته سنگ‌نوردی',
            heroCardCapacity: '👥 ظرفیت باقی‌مانده',
            heroCardSpots: '۵ نفر',
            aboutBadge: '📋 درباره آکادمی',
            aboutTitle: 'پولاریس؛ قطب آموزش کوهنوردی ایران',
            aboutGreeting: '🎯 به آکادمی پولاریس خوش آمدید',
            aboutText1: 'آکادمی کوهنوردی پولاریس با ۱۵ سال تجربه درخشان در زمینه آموزش کوهنوردی، به عنوان یکی از معتبرترین مراکز آموزشی ایران شناخته می‌شود. ما مفتخریم که با بهره‌گیری از مربیان بین‌المللی و متدهای آموزشی روز دنیا، مسیر حرفه‌ای شدن علاقه‌مندان به کوهنوردی را هموار می‌کنیم.',
            aboutText2: 'از دوره‌های مقدماتی برای مبتدیان تا دوره‌های پیشرفته سنگ‌نوردی، یخ‌نوردی و امداد کوهستان - همه در یک محیط کاملاً حرفه‌ای و استاندارد. پولاریس یعنی مسیر مطمئن شما به سوی قله‌های موفقیت.',
            aboutCert1: '✅ مجوز رسمی فدراسیون',
            aboutCert2: '✅ مربیان بین‌المللی',
            aboutCert3: '✅ تجهیزات کامل و مدرن',
            aboutCert4: '✅ گواهینامه معتبر',
            whyUsBadge: '⭐ چرا پولاریس',
            whyUsTitle: 'چه چیزی ما را متمایز می‌کند',
            whyUs1Title: 'متد آموزشی مدرن',
            whyUs1Desc: 'استفاده از جدیدترین متدهای آموزشی جهان و برنامه‌های تمرینی شخصی‌سازی شده برای هر هنرجو',
            whyUs2Title: 'تجهیزات حرفه‌ای',
            whyUs2Desc: 'تمامی تجهیزات کوهنوردی از برندهای معتبر جهانی برای تجربه‌ای امن و لذت‌بخش در اختیار هنرجویان',
            whyUs3Title: 'گواهینامه بین‌المللی',
            whyUs3Desc: 'اعطای گواهینامه‌های معتبر قابل ترجمه و مورد تایید فدراسیون جهانی کوهنوردی برای هنرجویان موفق',
            whyUs4Title: 'پشتیبانی دائمی',
            whyUs4Desc: 'پشتیبانی ۲۴/۷ و ارتباط مستمر با مربیان حتی پس از اتمام دوره برای راهنمایی و مشاوره صعودهای آینده',
            coursesBadge: '🎓 دوره‌های آموزشی',
            coursesTitle: 'مسیرهای آموزشی پولاریس',
            course1Title: 'کوهنوردی مقدماتی',
            course1Desc: 'آشنایی با اصول پایه، گام‌برداری و تنفس',
            course2Title: 'یخ‌نوردی پیشرفته',
            course2Desc: 'تکنیک‌های تخصصی، کرامپون و تبر یخ',
            course3Title: 'سنگ‌نوردی فنی',
            course3Desc: 'صعودهای درجه ۵، طناب و ابزار تخصصی',
            course4Title: 'امداد کوهستان',
            course4Desc: 'کمک‌های اولیه و نجات فنی در ارتفاع',
            course5Title: 'ناوبری و مسیریابی',
            course5Desc: 'GPS، نقشه‌خوانی و مسیریابی پیشرفته',
            course6Title: 'آمادگی ۸۰۰۰ متری',
            course6Desc: 'برنامه کامل برای قله‌های بلند جهان',
            teamBadge: '👥 تیم آموزشی',
            teamTitle: 'مربیان حرفه‌ای پولاریس',
            team1Name: 'رضا کوهنورد',
            team1Role: 'موسس و سرمربی',
            team1Bio: '۱۸ سال تجربه | فاتح ۱۴ قله ۸۰۰۰ متری',
            team2Name: 'علی صبور',
            team2Role: 'مربی ارشد سنگ‌نوردی',
            team2Bio: '۱۲ سال تجربه | مدرس رسمی فدراسیون',
            team3Name: 'مریم امید',
            team3Role: 'مربی یخ‌نوردی و برف',
            team3Bio: '۱۰ سال تجربه | قهرمان کشوری یخ‌نوردی',
            team4Name: 'حسین کوهیار',
            team4Role: 'مربی امداد و نجات',
            team4Bio: '۱۵ سال تجربه | امدادگر رسمی هلال احمر',
            achievementsBadge: '🏆 افتخارات',
            achievementsTitle: 'مدال‌ها و دستاوردهای پولاریس',
            achieve1Title: 'قهرمانی کشوری ۱۴۰۲',
            achieve1Desc: 'مقام اول مسابقات سنگ‌نوردی',
            achieve2Title: 'آکادمی برتر سال ۱۴۰۱',
            achieve2Desc: 'منتخب فدراسیون کوهنوردی ایران',
            achieve3Title: '۵۰۰+ هنرجوی موفق',
            achieve3Desc: 'ثبت رکورد آموزش در یک سال',
            achieve4Title: 'حضور بین‌المللی',
            achieve4Desc: 'اعزام به اکسپدیشن‌های جهانی',
            achievementsTableTitle: '📊 جدول افتخارات و آمار',
            tableHead1: 'سال',
            tableHead2: 'عنوان',
            tableHead3: 'دسته‌بندی',
            tableHead4: 'سطح',
            tableHead5: 'توضیحات',
            tableRow1Title: 'قهرمانی کشوری',
            tableRow1Desc: 'مقام اول سنگ‌نوردی',
            tableRow2Title: 'آکادمی برتر',
            tableRow2Desc: 'منتخب فدراسیون',
            tableRow3Title: 'رکورد آموزش',
            tableRow3Desc: '۵۰۰+ هنرجوی موفق',
            tableRow4Title: 'اعزام بین‌المللی',
            tableRow4Desc: 'اکسپدیشن K2',
            tableRow5Title: 'صعود زمستانی',
            tableRow5Desc: 'دماوند زمستانی',
            rankingBadge: '📊 رتبه‌بندی',
            rankingTitle: 'سیستم رتبه‌بندی پولاریس',
            rank1Title: 'کوهنورد مبتدی',
            rank1Desc: 'شروع مسیر کوهنوردی',
            rank2Title: 'کوهنورد متوسط',
            rank2Desc: '۳ دوره موفق',
            rank3Title: 'کوهنورد پیشرفته',
            rank3Desc: '۵+ دوره و ۱۰+ صعود',
            rank4Title: 'الیت پولاریس',
            rank4Desc: 'سطح حرفه‌ای نهایی',
            shopBadge: '🛒 فروشگاه تجهیزات',
            shopTitle: 'تجهیزات حرفه‌ای کوهنوردی',
            shop1Title: 'طناب کوهنوردی',
            shop1Desc: 'طناب دینامیک حرفه‌ای',
            shop2Title: 'کرامپون',
            shop2Desc: 'کرامپون ۱۲ دندانه',
            shop3Title: 'تبر یخ',
            shop3Desc: 'تبر یخ تکنیکال',
            shop4Title: 'هارنس',
            shop4Desc: 'هارنس آلپاین',
            shop5Title: 'کلاه کوهنوردی',
            shop5Desc: 'کلاه استاندارد UIAA',
            shop6Title: 'کفش کوهنوردی',
            shop6Desc: 'کفش Gore-Tex',
            modalMessage: '📞 برای خرید و مشاوره با پشتیبانی تماس بگیرید:',
            faqBadge: '❓ سوالات متداول',
            faqTitle: 'پرسش‌های پرتکرار',
            faq1Q: '❓ آیا برای ثبت‌نام نیاز به تجربه قبلی دارم؟',
            faq1A: 'خیر، برای دوره‌های مقدماتی نیاز به هیچ تجربه قبلی ندارید. ما از صفر شروع می‌کنیم و قدم به قدم با شما پیش می‌آییم.',
            faq2Q: '💰 هزینه دوره‌ها به چه صورت است؟',
            faq2A: 'هزینه‌ها بسته به نوع دوره متفاوت است. امکان پرداخت اقساطی نیز وجود دارد. برای اطلاع دقیق با ما تماس بگیرید.',
            faq3Q: '🏅 آیا گواهینامه معتبر ارائه می‌دهید؟',
            faq3A: 'بله، تمامی دوره‌ها همراه با گواهینامه معتبر از آکادمی پولاریس و فدراسیون کوهنوردی ارائه می‌شود که قابل ترجمه است.',
            faq4Q: '🧗 تجهیزات لازم را باید خودم تهیه کنم؟',
            faq4A: 'تجهیزات اصلی توسط آکادمی در اختیار شما قرار می‌گیرد. فقط لباس و کفش مناسب نیاز دارید.',
            faq5Q: '📍 مکان برگزاری دوره‌ها کجاست؟',
            faq5A: 'دوره‌های تئوری در باشگاه پولاریس تهران و دوره‌های عملی در مناطق کوهستانی البرز، دماوند و سبلان برگزار می‌شود.',
            faq6Q: '🆘 در صورت بروز مشکل حین آموزش چه می‌شود؟',
            faq6A: 'تمامی مربیان ما آموزش‌های امداد و نجات دیده‌اند و جعبه کمک‌های اولیه کامل همراه تیم است. ایمنی هنرجویان اولویت اول ماست.',
            galleryBadge: '📸 گالری',
            galleryTitle: 'لحظات ناب کوهنوردی',
            contactBadge: '📞 تماس با ما',
            contactTitle: 'همین حالا شروع کنید',
            formName: 'نام کامل',
            formNamePlaceholder: 'نام و نام خانوادگی',
            formEmail: 'ایمیل',
            formEmailPlaceholder: 'your@email.com',
            formPhone: 'تلفن',
            formPhonePlaceholder: '۰۹۱۲۳۴۵۶۷۸۹',
            formCourse: 'دوره مورد نظر',
            formOption1: 'کوهنوردی مقدماتی',
            formOption2: 'یخ‌نوردی پیشرفته',
            formOption3: 'سنگ‌نوردی فنی',
            formOption4: 'امداد کوهستان',
            formOption5: 'ناوبری و مسیریابی',
            formOption6: 'آمادگی ۸۰۰۰ متری',
            formSubmit: 'ثبت‌نام در دوره',
            contactHours: 'ساعات کاری: ۸ صبح تا ۸ عصر',
            footerBrand: 'پولاریس',
            footerBrandSub: 'آکادمی کوهنوردی',
            footerQuickLinks: '🔗 دسترسی سریع',
            footerPopularCourses: '⭐ دوره‌های محبوب',
            footerContactInfo: '📋 اطلاعات تماس',
            footerQuote: '"کوه‌ها بهترین معلمان زندگی‌اند - صبر، استقامت و فروتنی را از آنها بیاموزید"',
            footerCopy: '© ۱۴۰۳ آکادمی کوهنوردی پولاریس | تمامی حقوق محفوظ است',
            footerDesign: 'طراحی و توسعه با افتخار برای کوهنوردان ایران 🏔️',
        },
        en: {
            pageTitle: '🏔️ Polaris Mountaineering Academy | Training & Equipment Shop',
            langToggleText: 'FA',
            loaderText: 'Conquering the peak...',
            topBarText: '🏔️ Polaris Mountaineering Academy | Professional Training for All Levels',
            navHome: 'Home',
            navAbout: 'About',
            navWhyUs: 'Why Polaris',
            navCourses: 'Courses',
            navTeam: 'Instructors',
            navAchievements: 'Achievements',
            navRanking: 'Ranking',
            navShop: 'Shop',
            navFaq: 'FAQ',
            navGallery: 'Gallery',
            navContact: 'Contact',
            heroBadge: '🎖️ Official Mountaineering Academy of Iran',
            heroTitleLine1: 'Polaris',
            heroTitleLine2: 'Mountaineering Academy',
            heroDesc: 'Professional training in mountaineering, ice climbing & rock climbing | Beginner to advanced courses | Officially licensed by the Mountaineering Federation | With you to conquer the highest peaks',
            heroBtnCourses: 'View Courses',
            heroBtnRegister: 'Register Online',
            statStudents: 'Students Trained',
            statCourses: 'Specialized Courses',
            statYears: 'Years Experience',
            statCoaches: 'Professional Coaches',
            heroCardCurrentCourse: '📅 Current Course',
            heroCardCourseName: 'Advanced Rock Climbing',
            heroCardCapacity: '👥 Available Spots',
            heroCardSpots: '5 People',
            aboutBadge: '📋 About Academy',
            aboutTitle: 'Polaris; The Hub of Mountaineering Education',
            aboutGreeting: '🎯 Welcome to Polaris Academy',
            aboutText1: 'With 15 years of brilliant experience in mountaineering education, Polaris Academy is recognized as one of the most prestigious training centers in Iran.',
            aboutText2: 'From beginner courses to advanced rock climbing, ice climbing, and mountain rescue - all in a fully professional environment.',
            aboutCert1: '✅ Official Federation License',
            aboutCert2: '✅ International Instructors',
            aboutCert3: '✅ Complete Modern Equipment',
            aboutCert4: '✅ Valid Certification',
            whyUsBadge: '⭐ Why Polaris',
            whyUsTitle: 'What Makes Us Different',
            whyUs1Title: 'Modern Training Methods',
            whyUs1Desc: 'Using the latest global training methods and personalized exercise programs for each student',
            whyUs2Title: 'Professional Equipment',
            whyUs2Desc: 'All mountaineering equipment from world-renowned brands for a safe and enjoyable experience',
            whyUs3Title: 'International Certification',
            whyUs3Desc: 'Awarding valid translatable certificates approved by the International Mountaineering Federation',
            whyUs4Title: 'Ongoing Support',
            whyUs4Desc: '24/7 support and continuous communication with instructors even after course completion',
            coursesBadge: '🎓 Training Courses',
            coursesTitle: 'Polaris Training Paths',
            course1Title: 'Beginner Mountaineering',
            course1Desc: 'Basic principles, step techniques & breathing',
            course2Title: 'Advanced Ice Climbing',
            course2Desc: 'Specialized techniques, crampons & ice axe',
            course3Title: 'Technical Rock Climbing',
            course3Desc: 'Grade 5 climbs, ropes & specialized tools',
            course4Title: 'Mountain Rescue',
            course4Desc: 'First aid & technical rescue at altitude',
            course5Title: 'Navigation & Route Finding',
            course5Desc: 'GPS, professional map reading & advanced routing',
            course6Title: '8000m Peak Preparation',
            course6Desc: 'Complete program for world\'s highest peaks',
            teamBadge: '👥 Training Team',
            teamTitle: 'Polaris Professional Instructors',
            team1Name: 'Reza Kouhnavard',
            team1Role: 'Founder & Head Coach',
            team1Bio: '18 years experience | 14x 8000m summiteer',
            team2Name: 'Ali Sabour',
            team2Role: 'Senior Rock Climbing Instructor',
            team2Bio: '12 years experience | Official Federation Instructor',
            team3Name: 'Maryam Omid',
            team3Role: 'Ice & Snow Climbing Instructor',
            team3Bio: '10 years experience | National Ice Climbing Champion',
            team4Name: 'Hossein Kouhyar',
            team4Role: 'Rescue & First Aid Instructor',
            team4Bio: '15 years experience | Official Red Crescent Rescuer',
            achievementsBadge: '🏆 Achievements',
            achievementsTitle: 'Polaris Medals & Accomplishments',
            achieve1Title: 'National Champion 2023',
            achieve1Desc: 'First place in rock climbing',
            achieve2Title: 'Best Academy 2022',
            achieve2Desc: 'Selected by Iran Federation',
            achieve3Title: '500+ Successful Students',
            achieve3Desc: 'Record training numbers',
            achieve4Title: 'International Presence',
            achieve4Desc: 'Global expeditions',
            achievementsTableTitle: '📊 Achievements & Statistics Table',
            tableHead1: 'Year',
            tableHead2: 'Title',
            tableHead3: 'Category',
            tableHead4: 'Level',
            tableHead5: 'Details',
            tableRow1Title: 'National Champion',
            tableRow1Desc: '1st Place Rock Climbing',
            tableRow2Title: 'Best Academy',
            tableRow2Desc: 'Federation Selection',
            tableRow3Title: 'Training Record',
            tableRow3Desc: '500+ Successful Students',
            tableRow4Title: 'International Dispatch',
            tableRow4Desc: 'K2 Expedition',
            tableRow5Title: 'Winter Ascent',
            tableRow5Desc: 'Damavand Winter',
            rankingBadge: '📊 Ranking',
            rankingTitle: 'Polaris Ranking System',
            rank1Title: 'Beginner Mountaineer',
            rank1Desc: 'Starting the journey',
            rank2Title: 'Intermediate Mountaineer',
            rank2Desc: '3 successful courses',
            rank3Title: 'Advanced Mountaineer',
            rank3Desc: '5+ courses & 10+ ascents',
            rank4Title: 'Polaris Elite',
            rank4Desc: 'Final professional level',
            shopBadge: '🛒 Equipment Shop',
            shopTitle: 'Professional Mountaineering Gear',
            shop1Title: 'Climbing Rope',
            shop1Desc: 'Professional dynamic rope',
            shop2Title: 'Crampons',
            shop2Desc: '12-point crampons',
            shop3Title: 'Ice Axe',
            shop3Desc: 'Technical ice axe',
            shop4Title: 'Harness',
            shop4Desc: 'Alpine harness',
            shop5Title: 'Helmet',
            shop5Desc: 'UIAA Standard helmet',
            shop6Title: 'Hiking Boots',
            shop6Desc: 'Gore-Tex boots',
            modalMessage: '📞 Contact support for purchase and consultation:',
            faqBadge: '❓ FAQ',
            faqTitle: 'Frequently Asked Questions',
            faq1Q: '❓ Do I need prior experience to register?',
            faq1A: 'No, beginner courses require no prior experience. We start from scratch and progress step by step with you.',
            faq2Q: '💰 How much do the courses cost?',
            faq2A: 'Costs vary depending on the course type. Installment payment options are available. Contact us for exact details.',
            faq3Q: '🏅 Do you provide valid certification?',
            faq3A: 'Yes, all courses come with valid certification from Polaris Academy and the Mountaineering Federation.',
            faq4Q: '🧗 Do I need to bring my own equipment?',
            faq4A: 'Main equipment is provided by the academy. You only need appropriate clothing and shoes.',
            faq5Q: '📍 Where are the courses held?',
            faq5A: 'Theory courses at Polaris Club in Tehran, practical courses in the Alborz, Damavand, and Sabalan mountain regions.',
            faq6Q: '🆘 What if a problem occurs during training?',
            faq6A: 'All our instructors are trained in rescue and first aid. Student safety is our top priority.',
            galleryBadge: '📸 Gallery',
            galleryTitle: 'Beautiful Mountaineering Moments',
            contactBadge: '📞 Contact Us',
            contactTitle: 'Start Right Now',
            formName: 'Full Name',
            formNamePlaceholder: 'Your full name',
            formEmail: 'Email',
            formEmailPlaceholder: 'your@email.com',
            formPhone: 'Phone',
            formPhonePlaceholder: '+98 912 345 6789',
            formCourse: 'Desired Course',
            formOption1: 'Beginner Mountaineering',
            formOption2: 'Advanced Ice Climbing',
            formOption3: 'Technical Rock Climbing',
            formOption4: 'Mountain Rescue',
            formOption5: 'Navigation & Route Finding',
            formOption6: '8000m Peak Preparation',
            formSubmit: 'Register for Course',
            contactHours: 'Working Hours: 8 AM to 8 PM',
            footerBrand: 'Polaris',
            footerBrandSub: 'Mountaineering Academy',
            footerQuickLinks: '🔗 Quick Links',
            footerPopularCourses: '⭐ Popular Courses',
            footerContactInfo: '📋 Contact Info',
            footerQuote: '"Mountains are the best teachers of life - learn patience, perseverance, and humility from them"',
            footerCopy: '© 2024 Polaris Mountaineering Academy | All Rights Reserved',
            footerDesign: 'Proudly designed for Iranian Mountaineers 🏔️',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'fa';
    
    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            
            if (translations[lang] && translations[lang][key]) {
                if (el.hasAttribute('placeholder')) {
                    el.placeholder = translations[lang][key];
                } else if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else if (el.tagName === 'OPTION') {
                    el.textContent = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        if (lang === 'fa') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'fa';
            document.body.style.direction = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = 'en';
            document.body.style.direction = 'ltr';
        }
        
        if (langSpan) {
            langSpan.textContent = translations[lang].langToggleText;
        }
        
        localStorage.setItem('lang', lang);
        currentLang = lang;
        
        if (typeof AOS !== 'undefined') {
            setTimeout(() => AOS.refresh(), 100);
        }
    }
    
    applyLanguage(currentLang);
    
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'fa' ? 'en' : 'fa';
            applyLanguage(newLang);
            
            langToggle.style.transform = 'scale(0.8)';
            setTimeout(() => {
                langToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    window.changeLanguage = applyLanguage;
    window.getCurrentLang = () => currentLang;

    // ===== REVEAL ON SCROLL =====
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== TOUCH DEVICE HELPER =====
    function isTouchDevice() {
        return ('ontouchstart' in window) || 
               (navigator.maxTouchPoints > 0) || 
               (navigator.msMaxTouchPoints > 0);
    }

    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
        
        document.querySelectorAll('.glass-card, .course-card, .team-card, .rank-card, .why-us-card, .achievement-card, .shop-card').forEach(el => {
            el.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            el.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }

    // ===== CONSOLE LOG =====
    console.log('%c🏔️ آکادمی کوهنوردی پولاریس',
                'font-size: 20px; color: #22C55E; background: #0A1F1A; padding: 14px 24px; border-radius: 40px; font-weight: bold;');
    console.log('%c🌐 نسخه نهایی | تمامی بخش‌ها فعال | فروشگاه + جدول افتخارات',
                'font-size: 14px; color: #4ADE80;');
});