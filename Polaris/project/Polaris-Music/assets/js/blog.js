// ============================================
// BLOG.JS - POLARIS MUSIC ACADEMY
// ۶ مقاله با متن‌های اصلاح شده
// ============================================

// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "۱۰ تکنیک طلایی برای بهبود سرعت انگشتان در گیتار کلاسیک",
        excerpt: "آیا می‌دانستید ستارگان و موسیقی ارتباط عمیقی با هم دارند؟ در این مقاله به بررسی تکنیک‌های کاربردی برای افزایش سرعت و دقت در نوازندگی گیتار کلاسیک می‌پردازیم...",
        category: "guitar",
        categoryName: "گیتار کلاسیک",
        date: "۲۵ دی ۱۴۰۳",
        author: "استاد احمد رضایی",
        views: "۲,۸۴۰",
        readTime: "۸ دقیقه",
        image: "./assets/image/image/img9.webp"
    },
    {
        id: 2,
        title: "رازهای ویولن نوازی حرفه‌ای: تکنیک آرشه‌کشی",
        excerpt: "تکنیک آرشه‌کشی یکی از مهمترین مهارت‌ها در ویولن است که می‌تواند صدای شما را از یک نوازنده معمولی به یک نوازنده حرفه‌ای تبدیل کند...",
        category: "violin",
        categoryName: "ویولن",
        date: "۱۸ دی ۱۴۰۳",
        author: "استاد نگار کریمی",
        views: "۱,۹۲۰",
        readTime: "۶ دقیقه",
        image: "./assets/image/image/img2.webp"
    },
    {
        id: 3,
        title: "تئوری موسیقی پایه تا پیشرفته (قسمت اول: نت‌خوانی)",
        excerpt: "نت‌خوانی اولین و مهمترین گام در یادگیری موسیقی است. در این مقاله به زبان ساده با اصول نت‌خوانی آشنا می‌شوید...",
        category: "theory",
        categoryName: "تئوری موسیقی",
        date: "۱۲ دی ۱۴۰۳",
        author: "دکتر پیمان محمدی",
        views: "۳,۲۰۰",
        readTime: "۱۰ دقیقه",
        image: "./assets/image/image/img3.webp"
    },
    {
        id: 4,
        title: "۱۰ تکنیک طلایی برای نوازندگی حرفه‌ای گیتار",
        excerpt: "آیا به دنبال یادگیری گیتار به صورت حرفه‌ای هستید؟ در این مقاله راهنمای جامع ۱۰ تکنیک طلایی برای تسلط بر گیتار و نوازندگی حرفه‌ای را آموزش می‌بینید...",
        category: "guitar",
        categoryName: "گیتار",
        date: "۵ دی ۱۴۰۳",
        author: "استاد مهرناز صادقی",
        views: "۴,۱۵۰",
        readTime: "۷ دقیقه",
        image: "./assets/image/image/img4.jpg"
    },
    {
        id: 5,
        title: "تکنیک‌های پیشرفته ویولن نوازی برای هنرجویان حرفه‌ای",
        excerpt: "در موسیقی کلاسیک، تکنیک‌های پیشرفته ویولن اهمیت ویژه‌ای دارند. در این مقاله به بررسی دقیق تکنیک‌های آرشه‌کشی و انگشت‌گذاری حرفه‌ای می‌پردازیم...",
        category: "violin",
        categoryName: "ویولن",
        date: "۲۸ آذر ۱۴۰۳",
        author: "استاد حسین طاهری",
        views: "۱,۶۸۰",
        readTime: "۵ دقیقه",
        image: "./assets/image/image/img5.jpg"
    },
    {
        id: 6,
        title: "آشنایی با دستگاه‌های موسیقی ایرانی",
        excerpt: "موسیقی ایرانی دارای هفت دستگاه اصلی است. در این مقاله با هر یک از این دستگاه‌ها و ویژگی‌های آن آشنا می‌شوید...",
        category: "traditional",
        categoryName: "سنتور و تار",
        date: "۲۰ آذر ۱۴۰۳",
        author: "استاد علی نقی",
        views: "۲,۳۰۰",
        readTime: "۹ دقیقه",
        image: "./assets/image/image/img6.jpg"
    }
];

let currentCategory = "all";
let visiblePosts = 6;
const postsPerLoad = 3;

function renderBlogPosts() {
    const grid = document.getElementById("blogPostsGrid");
    if (!grid) return;

    let filteredPosts = blogPosts;
    if (currentCategory !== "all") {
        filteredPosts = blogPosts.filter(post => post.category === currentCategory);
    }

    const postsToShow = filteredPosts.slice(0, visiblePosts);
    
    if (postsToShow.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px; background:var(--card-bg); border-radius:24px;">
            <p style="color:var(--text-light-dim);">هیچ مقاله‌ای در این دسته یافت نشد.</p>
            <button class="cat-btn" data-cat="all" style="margin-top:20px;">مشاهده همه مقالات</button>
        </div>`;
        
        const resetBtn = grid.querySelector('.cat-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                document.querySelector('.cat-btn[data-cat="all"]').click();
            });
        }
        return;
    }

    grid.innerHTML = postsToShow.map(post => `
        <div class="blog-post-card" data-post-id="${post.id}">
            <div class="post-img">
                <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 400 250\\'%3E%3Crect width=\\'400\\' height=\\'250\\' fill=\\'%2314110D\\'/%3E%3Cpolygon points=\\'200,85 220,145 285,145 235,180 255,245 200,205 145,245 165,180 115,145 180,145\\' fill=\\'%23E11D48\\' opacity=\\'0.3\\'/%3E%3C/svg%3E'">
            </div>
            <div class="post-content">
                <div class="post-category">${post.categoryName}</div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="post-meta">
                    <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${post.date}</span>
                    <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ${post.views} بازدید</span>
                </div>
                <button class="read-more-btn" data-post-id="${post.id}">مطالعه مقاله <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
            </div>
        </div>
    `).join("");

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.style.display = visiblePosts >= filteredPosts.length ? "none" : "inline-flex";
    }

    document.querySelectorAll(".blog-post-card, .read-more-btn").forEach(el => {
        el.addEventListener("click", (e) => {
            e.stopPropagation();
            const postId = el.closest(".blog-post-card")?.dataset.postId || el.dataset.postId;
            if (postId) {
                localStorage.setItem("polarisBlogPostId", postId);
                window.location.href = "blog-post.html";
            }
        });
    });
}

function initBlogCategories() {
    const catBtns = document.querySelectorAll(".cat-btn");
    catBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            catBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.cat;
            visiblePosts = 6;
            renderBlogPosts();
        });
    });
}

function initLoadMore() {
    const loadBtn = document.getElementById("loadMoreBtn");
    if (loadBtn) {
        loadBtn.addEventListener("click", () => {
            visiblePosts += postsPerLoad;
            renderBlogPosts();
        });
    }
}

function initSinglePost() {
    const storedId = localStorage.getItem("polarisBlogPostId");
    const postId = storedId ? parseInt(storedId) : 1;
    const post = blogPosts.find(p => p.id === postId) || blogPosts[0];
    
    if (document.querySelector(".single-post-hero")) {
        const categoryEl = document.querySelector(".single-post-category");
        if (categoryEl) categoryEl.textContent = post.categoryName + " | مقاله تخصصی";
        
        const titleEl = document.querySelector(".single-post-hero h1");
        if (titleEl) titleEl.textContent = post.title;
        
        const metaSpans = document.querySelectorAll(".single-post-meta span");
        if (metaSpans.length >= 4) {
            metaSpans[0].innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${post.date}`;
            metaSpans[1].innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${post.author}`;
            metaSpans[2].innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ${post.views} بازدید`;
            if (metaSpans[3]) {
                metaSpans[3].innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12h18M12 3v18"/></svg> ${post.readTime} مطالعه`;
            }
        }
        
        const featuredImg = document.querySelector(".post-featured-img");
        if (featuredImg && post.image) {
            featuredImg.src = post.image;
            featuredImg.alt = post.title;
        }
        
        // به‌روزرسانی متن مقدمه مقاله بر اساس موضوع
        const postIntro = document.querySelector(".post-intro p");
        if (postIntro) {
            if (post.id === 1) {
                postIntro.innerHTML = "آیا می‌دانستید ستارگان و موسیقی ارتباط عمیقی با هم دارند؟ در این مقاله از مجله پولاریس، به بررسی ۱۰ تکنیک اثبات شده برای افزایش سرعت و دقت در نوازندگی گیتار کلاسیک می‌پردازیم که توسط اساتید کنسرواتوارهای معتبر جهان تدریس می‌شود. همانطور که ستارگان در آسمان می‌درخشند، شما نیز با این تکنیک‌ها در دنیای موسیقی خواهید درخشید.";
            } else if (post.id === 4) {
                postIntro.innerHTML = "گیتار یکی از محبوب‌ترین سازهای جهان است. در این مقاله از مجله پولاریس، به بررسی ۱۰ تکنیک طلایی برای نوازندگی حرفه‌ای گیتار می‌پردازیم. از اصول پایه تا تکنیک‌های پیشرفته، همه چیز را در این راهنمای جامع خواهید آموخت.";
            } else if (post.id === 5) {
                postIntro.innerHTML = "ویولن نوازی حرفه‌ای نیازمند تسلط بر تکنیک‌های پیشرفته آرشه‌کشی و انگشت‌گذاری است. در این مقاله از مجله پولاریس، به بررسی دقیق تکنیک‌های پیشرفته ویولن می‌پردازیم که توسط اساتید بزرگ کنسرواتوارهای جهان تدریس می‌شود.";
            }
        }
    }
    
    const relatedContainer = document.getElementById("relatedPosts");
    if (relatedContainer) {
        const related = blogPosts.filter(p => p.id !== post.id).slice(0, 3);
        relatedContainer.innerHTML = related.map(p => `
            <div class="related-post-item" data-post-id="${p.id}">
                <div class="related-post-img"><img src="${p.image}" alt="${p.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 70 70\\'%3E%3Crect width=\\'70\\' height=\\'70\\' fill=\\'%2314110D\\'/%3E%3C/svg%3E'"></div>
                <div class="related-post-info">
                    <h6>${p.title.length > 35 ? p.title.substring(0, 35) + "..." : p.title}</h6>
                    <span>${p.date}</span>
                </div>
            </div>
        `).join("");
        
        document.querySelectorAll(".related-post-item").forEach(el => {
            el.addEventListener("click", () => {
                localStorage.setItem("polarisBlogPostId", el.dataset.postId);
                window.location.reload();
            });
        });
    }
    
    const sidebarForm = document.getElementById("sidebarNewsletter");
    if (sidebarForm) {
        sidebarForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = sidebarForm.querySelector("input").value;
            if (email && email.includes("@")) {
                alert("✅ عضویت شما با موفقیت انجام شد!");
                sidebarForm.reset();
            } else {
                alert("❌ لطفاً ایمیل معتبر وارد کنید");
            }
        });
    }
}

function initBlogNewsletter() {
    const form = document.getElementById("sidebarNewsletter") || document.getElementById("newsletterFormAlt");
    if (form && form.id !== "sidebarNewsletter") {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = form.querySelector("input")?.value;
            if (email && email.includes("@")) {
                const msgEl = document.getElementById("newsAltMessage");
                if (msgEl) {
                    msgEl.textContent = "✅ عضویت شما با موفقیت انجام شد!";
                    msgEl.style.cssText = "color:#10B981;opacity:1;font-weight:700;margin-top:15px;";
                    setTimeout(() => msgEl.style.opacity = "0", 3000);
                }
                form.reset();
            } else {
                const msgEl = document.getElementById("newsAltMessage");
                if (msgEl) {
                    msgEl.textContent = "❌ لطفاً ایمیل معتبر وارد کنید";
                    msgEl.style.cssText = "color:#EF4444;opacity:1;font-weight:700;margin-top:15px;";
                    setTimeout(() => msgEl.style.opacity = "0", 3000);
                }
            }
        });
    }
}

function initFeaturedPost() {
    const featuredCard = document.querySelector(".featured-post-card");
    if (featuredCard) {
        featuredCard.addEventListener("click", (e) => {
            if (e.target.closest(".read-more-btn")) {
                const btn = e.target.closest(".read-more-btn");
                const postId = btn.dataset.postId;
                if (postId) {
                    localStorage.setItem("polarisBlogPostId", postId);
                    window.location.href = "blog-post.html";
                }
            }
        });
        
        const readMoreBtn = featuredCard.querySelector(".read-more-btn");
        if (readMoreBtn) {
            readMoreBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                const postId = readMoreBtn.dataset.postId;
                if (postId) {
                    localStorage.setItem("polarisBlogPostId", postId);
                    window.location.href = "blog-post.html";
                }
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initBlogCategories();
    renderBlogPosts();
    initLoadMore();
    initSinglePost();
    initBlogNewsletter();
    initFeaturedPost();
});