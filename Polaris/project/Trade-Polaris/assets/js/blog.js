/* =============================================
   ✦ POLARIS BLOG - JAVASCRIPT (FULL BILINGUAL) ✦
   بلاگ پولاریس - با قابلیت ترجمه کامل فارسی و انگلیسی
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ==========================================
    // BLOG POSTS DATA - دیتای مقالات (دو زبانه)
    // ==========================================
    const blogPosts = [
        {
            id: 1,
            title_fa: "۱۰ الگوی کندلی که باید بشناسید",
            title_en: "10 Candlestick Patterns You Must Know",
            excerpt_fa: "قدرتمندترین الگوهای کندل استیک برای ورود و خروج دقیق در بازارهای مالی",
            excerpt_en: "The most powerful candlestick patterns for precise entry and exit in financial markets",
            content_fa: "مقاله کامل در صفحه اختصاصی - آموزش کامل الگوهای کندل استیک",
            content_en: "Full article on dedicated page - Complete candlestick patterns training",
            image: "assets/images/1564671557_DescendingTriangleBearish.png",
            category: "technical",
            date_fa: "۲۵ فروردین ۱۴۰۵",
            date_en: "April 14, 2026",
            readTime_fa: "۱۲ دقیقه",
            readTime_en: "12 min",
            slug: "blog-post.html"
        },
        {
            id: 2,
            title_fa: "مدیریت سرمایه در ترید: قوانین طلایی بقا",
            title_en: "Capital Management in Trading: Golden Rules of Survival",
            excerpt_fa: "اصول حرفه‌ای مدیریت ریسک و سرمایه برای تریدرهای موفق",
            excerpt_en: "Professional risk and capital management principles for successful traders",
            content_fa: "مقاله کامل درباره مدیریت سرمایه و ریسک در معاملات",
            content_en: "Full article on capital and risk management in trading",
            image: "assets/images/Stock-chart-pattern-cup-handle.png",
            category: "education",
            date_fa: "۱۸ فروردین ۱۴۰۵",
            date_en: "April 7, 2026",
            readTime_fa: "۸ دقیقه",
            readTime_en: "8 min",
            slug: "#"
        },
        {
            id: 3,
            title_fa: "چگونه بر ترس و طمع غلبه کنیم؟",
            title_en: "How to Overcome Fear and Greed?",
            excerpt_fa: "تکنیک‌های علمی روانشناسی برای تصمیم‌گیری منطقی در معاملات",
            excerpt_en: "Scientific psychological techniques for rational decision-making in trading",
            content_fa: "مقاله کامل درباره روانشناسی ترید و کنترل احساسات",
            content_en: "Full article on trading psychology and emotional control",
            image: "assets/images/Group-10985.jpg",
            category: "psychology",
            date_fa: "۱۰ فروردین ۱۴۰۵",
            date_en: "March 30, 2026",
            readTime_fa: "۱۰ دقیقه",
            readTime_en: "10 min",
            slug: "#"
        },
        {
            id: 4,
            title_fa: "تحلیل آنچین؛ کلید موفقیت در بازار کریپتو",
            title_en: "On-Chain Analysis; The Key to Success in Crypto Market",
            excerpt_fa: "با تحلیل داده‌های زنجیره‌ای، حرکت هوشمندانه‌ای در بازار داشته باشید",
            excerpt_en: "Make smart moves in the market with on-chain data analysis",
            content_fa: "مقاله کامل درباره تحلیل آنچین و بررسی پروژه‌های کریپتو",
            content_en: "Full article on on-chain analysis and crypto project evaluation",
            image: "assets/images/forex-image2.jpg",
            category: "crypto",
            date_fa: "۵ فروردین ۱۴۰۵",
            date_en: "March 25, 2026",
            readTime_fa: "۱۵ دقیقه",
            readTime_en: "15 min",
            slug: "#"
        },
        {
            id: 5,
            title_fa: "آموزش پرایس اکشن از صفر تا صد",
            title_en: "Price Action Trading from Zero to Hero",
            excerpt_fa: "معامله‌گری بدون اندیکاتور با استفاده از حرکات خالص قیمت",
            excerpt_en: "Indicator-free trading using pure price movements",
            content_fa: "مقاله کامل درباره پرایس اکشن و استراتژی‌های معاملاتی",
            content_en: "Full article on price action and trading strategies",
            image: "assets/images/learn-Forex1.jpeg",
            category: "technical",
            date_fa: "۲۸ اسفند ۱۴۰۴",
            date_en: "March 18, 2026",
            readTime_fa: "۲۰ دقیقه",
            readTime_en: "20 min",
            slug: "#"
        },
        {
            id: 6,
            title_fa: "معرفی بهترین بروکرهای معتبر بین‌المللی",
            title_en: "Introduction to Best International Brokers",
            excerpt_fa: "راهنمای انتخاب بروکر مناسب برای ترید حرفه‌ای",
            excerpt_en: "Guide to choosing the right broker for professional trading",
            content_fa: "مقاله کامل درباره معرفی بروکرهای معتبر و نحوه انتخاب",
            content_en: "Full article on reputable brokers and how to choose",
            image: "assets/images/forex-image.jpg",
            category: "forex",
            date_fa: "۲۰ اسفند ۱۴۰۴",
            date_en: "March 10, 2026",
            readTime_fa: "۹ دقیقه",
            readTime_en: "9 min",
            slug: "#"
        }
    ];

    // ==========================================
    // GLOBAL VARIABLES - متغیرهای سراسری
    // ==========================================
    let currentFilter = 'all';
    let currentSearch = '';
    let visibleCount = 6;
    let currentLanguage = 'fa'; // 'fa' or 'en'

    // ==========================================
    // HELPER FUNCTIONS - توابع کمکی
    // ==========================================
    
    // Get current language from HTML tag - دریافت زبان فعلی از تگ HTML
    function getCurrentLanguage() {
        const htmlLang = document.documentElement.getAttribute('lang');
        return htmlLang === 'en' ? 'en' : 'fa';
    }

    // Get localized text from post - دریافت متن محلی شده از پست
    function getLocalizedText(post, field) {
        const lang = getCurrentLanguage();
        const key = `${field}_${lang}`;
        return post[key] || post[`${field}_fa`] || '';
    }

    // Get category name in current language - دریافت نام دسته‌بندی به زبان فعلی
    function getCategoryName(cat) {
        const lang = getCurrentLanguage();
        const categoryNames = {
            technical: { fa: 'تحلیل تکنیکال', en: 'Technical Analysis' },
            psychology: { fa: 'روانشناسی', en: 'Psychology' },
            crypto: { fa: 'ارز دیجیتال', en: 'Cryptocurrency' },
            forex: { fa: 'فارکس', en: 'Forex' },
            education: { fa: 'آموزشی', en: 'Education' }
        };
        return categoryNames[cat]?.[lang] || (lang === 'fa' ? 'مقالات' : 'Articles');
    }

    // Get "read more" text - دریافت متن "مطالعه بیشتر"
    function getReadMoreText() {
        return getCurrentLanguage() === 'fa' ? 'مطالعه بیشتر →' : 'Read More →';
    }

    // Get empty message - دریافت پیام خالی بودن
    function getEmptyMessage() {
        return getCurrentLanguage() === 'fa' 
            ? 'هیچ مقاله‌ای یافت نشد.' 
            : 'No articles found.';
    }

    // Get newsletter success message - دریافت پیام موفقیت خبرنامه
    function getNewsletterSuccessMessage() {
        return getCurrentLanguage() === 'fa'
            ? 'ایمیل شما با موفقیت ثبت شد! به خانواده پولاریس خوش آمدید.'
            : 'Email registered successfully! Welcome to Polaris family!';
    }

    // ==========================================
    // RENDER BLOG POSTS - رندر کردن مقالات بلاگ
    // ==========================================
    function renderBlogPosts() {
        const grid = document.getElementById('blogGrid');
        if (!grid) return;

        const lang = getCurrentLanguage();

        // Filter posts based on category and search - فیلتر کردن مقالات بر اساس دسته‌بندی و جستجو
        let filtered = blogPosts.filter(post => {
            if (currentFilter !== 'all' && post.category !== currentFilter) return false;
            
            const title = getLocalizedText(post, 'title').toLowerCase();
            const excerpt = getLocalizedText(post, 'excerpt').toLowerCase();
            const searchTerm = currentSearch.toLowerCase();
            
            if (currentSearch && !title.includes(searchTerm) && !excerpt.includes(searchTerm)) return false;
            return true;
        });

        const visiblePosts = filtered.slice(0, visibleCount);
        const hasMore = filtered.length > visibleCount;

        // Show empty message if no posts - نمایش پیام خالی بودن اگر مقاله‌ای نباشد
        if (visiblePosts.length === 0) {
            grid.innerHTML = `<div class="blog-empty"><p>${getEmptyMessage()}</p></div>`;
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        // Render posts - رندر کردن مقالات
        grid.innerHTML = visiblePosts.map(post => {
            const title = getLocalizedText(post, 'title');
            const excerpt = getLocalizedText(post, 'excerpt');
            const date = getLocalizedText(post, 'date');
            const readTime = getLocalizedText(post, 'readTime');
            const readMoreText = getReadMoreText();
            
            return `
                <article class="blog-card" data-id="${post.id}">
                    <div class="blog-card__image">
                        <img src="${post.image}" alt="${title}" loading="lazy" onerror="this.src='assets/images/hero-bg.png'">
                    </div>
                    <div class="blog-card__body">
                        <div class="blog-card__meta">
                            <span class="blog-card__category">${getCategoryName(post.category)}</span>
                            <span>${date}</span>
                            <span>${readTime}</span>
                        </div>
                        <h3 class="blog-card__title">${title}</h3>
                        <p class="blog-card__excerpt">${excerpt}</p>
                        <a href="${post.slug === 'blog-post.html' ? 'blog-post.html' : 'blog.html'}" class="blog-card__link">${readMoreText}</a>
                    </div>
                </article>
            `;
        }).join('');

        // Show/hide load more button - نمایش/مخفی کردن دکمه بارگذاری بیشتر
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            const loadMoreButton = loadMoreBtn.querySelector('button');
            if (loadMoreButton) {
                loadMoreButton.textContent = lang === 'fa' ? 'بارگذاری بیشتر' : 'Load More';
            }
            loadMoreBtn.style.display = hasMore ? 'block' : 'none';
        }
    }

    // ==========================================
    // RENDER RELATED POSTS - رندر مقالات مرتبط
    // ==========================================
    function renderRelatedPosts() {
        const relatedGrid = document.getElementById('relatedPostsGrid');
        if (!relatedGrid) return;
        
        const lang = getCurrentLanguage();
        const related = blogPosts.filter(p => p.id !== 1 && p.category === 'technical').slice(0, 2);
        const readMoreText = getReadMoreText();
        
        relatedGrid.innerHTML = related.map(post => {
            const title = getLocalizedText(post, 'title');
            const date = getLocalizedText(post, 'date');
            
            return `
                <article class="blog-card" style="cursor:pointer" onclick="location.href='${post.slug}'">
                    <div class="blog-card__image">
                        <img src="${post.image}" alt="${title}" loading="lazy" onerror="this.src='assets/images/hero-bg.png'">
                    </div>
                    <div class="blog-card__body">
                        <div class="blog-card__meta">
                            <span class="blog-card__category">${getCategoryName(post.category)}</span>
                            <span>${date}</span>
                        </div>
                        <h3 class="blog-card__title" style="font-size:18px">${title}</h3>
                        <a href="${post.slug}" class="blog-card__link">${readMoreText}</a>
                    </div>
                </article>
            `;
        }).join('');
    }

    // ==========================================
    // UPDATE CATEGORY BUTTONS - بروزرسانی دکمه‌های دسته‌بندی
    // ==========================================
    function updateCategoryButtons() {
        const lang = getCurrentLanguage();
        const categoryButtons = document.querySelectorAll('.blog-category');
        
        const categoryLabels = {
            all: { fa: 'همه مقالات', en: 'All Posts' },
            technical: { fa: 'تحلیل تکنیکال', en: 'Technical Analysis' },
            psychology: { fa: 'روانشناسی', en: 'Psychology' },
            crypto: { fa: 'ارز دیجیتال', en: 'Cryptocurrency' },
            forex: { fa: 'فارکس', en: 'Forex' },
            education: { fa: 'آموزشی', en: 'Education' }
        };
        
        categoryButtons.forEach(btn => {
            const cat = btn.getAttribute('data-cat');
            if (categoryLabels[cat]) {
                btn.textContent = categoryLabels[cat][lang];
            }
        });
    }

    // ==========================================
    // UPDATE SEARCH PLACEHOLDER - بروزرسانی placeholder جستجو
    // ==========================================
    function updateSearchPlaceholder() {
        const searchInput = document.getElementById('blogSearchInput');
        if (searchInput) {
            const placeholder = getCurrentLanguage() === 'fa' ? 'جستجوی مقالات ...' : 'Search articles...';
            searchInput.setAttribute('placeholder', placeholder);
        }
    }

    // ==========================================
    // SETUP FILTERS - راه‌اندازی فیلترها
    // ==========================================
    function setupFilters() {
        // Category filters - فیلترهای دسته‌بندی
        const categories = document.querySelectorAll('.blog-category');
        categories.forEach(btn => {
            btn.addEventListener('click', function() {
                categories.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-cat');
                visibleCount = 6;
                renderBlogPosts();
            });
        });

        // Search functionality - قابلیت جستجو
        const searchInput = document.getElementById('blogSearchInput');
        const searchBtn = document.getElementById('blogSearchBtn');
        
        if (searchInput && searchBtn) {
            const performSearch = () => {
                currentSearch = searchInput.value.trim();
                visibleCount = 6;
                renderBlogPosts();
            };
            
            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') performSearch();
            });
        }

        // Load more button - دکمه بارگذاری بیشتر
        const loadMore = document.getElementById('loadMoreBtn');
        if (loadMore) {
            loadMore.addEventListener('click', function() {
                visibleCount += 3;
                renderBlogPosts();
            });
        }
    }

    // ==========================================
    // SETUP NEWSLETTER - راه‌اندازی خبرنامه
    // ==========================================
    function setupNewsletter() {
        const form = document.getElementById('blogNewsletterForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const input = form.querySelector('.newsletter__input');
                if (input && input.value.trim()) {
                    // Update placeholder based on language - بروزرسانی placeholder بر اساس زبان
                    const placeholder = getCurrentLanguage() === 'fa' ? 'ایمیل خود را وارد کنید' : 'Enter your email';
                    input.setAttribute('placeholder', placeholder);
                    
                    // Show success toast - نمایش پیام موفقیت
                    if (typeof showToast === 'function') {
                        showToast('success', getNewsletterSuccessMessage());
                    } else if (window.showToast) {
                        window.showToast('success', getNewsletterSuccessMessage());
                    } else {
                        alert(getNewsletterSuccessMessage());
                    }
                    input.value = '';
                }
            });
        }
    }

    // ==========================================
    // SETUP SHARE BUTTONS - راه‌اندازی دکمه‌های اشتراک‌گذاری
    // ==========================================
    function setupShareButtons() {
        const shareBtns = document.querySelectorAll('.share-btn');
        shareBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const platform = this.getAttribute('data-platform');
                const url = encodeURIComponent(window.location.href);
                const title = encodeURIComponent(document.title);
                let shareUrl = '';
                
                if (platform === 'telegram') {
                    shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
                }
                if (platform === 'twitter') {
                    shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
                }
                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            });
        });
    }

    // ==========================================
    // UPDATE BLOG HERO TEXT - بروزرسانی متن هدر بلاگ
    // ==========================================
    function updateBlogHeroText() {
        const lang = getCurrentLanguage();
        const heroDesc = document.querySelector('.blog-hero__desc');
        const blogBadge = document.querySelector('.section__badge span:not(.badge__ornament)');
        
        if (heroDesc) {
            heroDesc.textContent = lang === 'fa' 
                ? 'جدیدترین تحلیل‌ها، استراتژی‌های معاملاتی و مقالات تخصصی بازارهای مالی'
                : 'Latest analysis, trading strategies and specialized articles on financial markets';
        }
        
        if (blogBadge && blogBadge.getAttribute('data-translate') === 'blog_badge') {
            blogBadge.textContent = lang === 'fa' ? 'مقالات آموزشی' : 'Educational Articles';
        }
    }

    // ==========================================
    // OBSERVE LANGUAGE CHANGES - نظارت بر تغییرات زبان
    // ==========================================
    function observeLanguageChanges() {
        // Watch for attribute changes on html tag - نظارت بر تغییرات تگ html
        const observer = new MutationObserver(() => {
            renderBlogPosts();
            renderRelatedPosts();
            updateCategoryButtons();
            updateSearchPlaceholder();
            updateBlogHeroText();
            
            // Update newsletter input placeholder - بروزرسانی placeholder خبرنامه
            const newsletterInput = document.querySelector('.newsletter__input');
            if (newsletterInput) {
                const placeholder = getCurrentLanguage() === 'fa' ? 'ایمیل خود را وارد کنید' : 'Enter your email';
                newsletterInput.setAttribute('placeholder', placeholder);
            }
        });
        
        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ['lang'] 
        });
    }

    // ==========================================
    // INITIALIZE BLOG - راه‌اندازی بلاگ
    // ==========================================
    function initBlog() {
        renderBlogPosts();
        setupFilters();
        setupNewsletter();
        setupShareButtons();
        updateCategoryButtons();
        updateSearchPlaceholder();
        updateBlogHeroText();
        observeLanguageChanges();
        
        console.log('%c✦ %cPolaris Blog %c| %cبلاگ پولاریس %c✦',
            'color: #FFD700; font-size: 16px;',
            'color: #FFD700; font-size: 16px; font-weight: bold;',
            'color: #fff;',
            'color: #FFA500; font-size: 14px;',
            'color: #FFD700; font-size: 16px;'
        );
    }

    // ==========================================
    // EXPOSE FUNCTIONS TO GLOBAL - در دسترس قرار دادن توابع در سطح جهانی
    // ==========================================
    window.renderRelatedPosts = renderRelatedPosts;
    window.PolarisBlog = {
        renderBlogPosts,
        renderRelatedPosts,
        getCurrentLanguage,
        getLocalizedText
    };
    
    // Start the blog - راه‌اندازی بلاگ
    initBlog();
});