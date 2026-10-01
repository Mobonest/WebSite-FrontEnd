const iconEye = `<svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
const iconPlay = `<svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5v14l11-7z"/></svg>`;

function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('closeModal')?.addEventListener('click', closeModal);
document.getElementById('imageModal')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('imageModal')) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// قالب‌های تخصصی
const templatesData = [
    { title: "قالب نقاشی حرفه‌ای", desc: "آموزش رنگ روغن، آبرنگ، طراحی و ترکیب‌بندی", img: "assets/image/image-1.png", demoPath: "project/Art-Polaris/" },
    { title: "قالب ترید حرفه‌ای", desc: "آموزش فارکس، ارز دیجیتال و تحلیل تکنیکال", img: "assets/image/image-2.png", demoPath: "project/Trade-Polaris/" },
    { title: "قالب زبان متافور", desc: "آموزش مکالمه، آیلتس و تافل با اساتید Native", img: "assets/image/image-3.png", demoPath: "project/Lang-Polaris/" },
    { title: "قالب زبان پولاریس", desc: "دوره‌های فشرده و فوق‌فشرده آیلتس و مکالمه", img: "assets/image/image-4.png", demoPath: "project/Polaris-Academy/" },
    { title: "قالب اسکیت حرفه‌ای", desc: "آموزش فری‌استایل، اسپید و اسللم", img: "assets/image/image-5.png", demoPath: "project/Skate-Polaris/" },
    { title: "قالب آموزش سازها", desc: "گیتار، ویولن، پیانو، تار و سه‌تار", img: "assets/image/image-6.png", demoPath: "project/Polaris-Music/" },
    { title: "قالب کوهنوردی حرفه‌ای", desc: "آموزش سنگ‌نوردی، یخ‌نوردی و نجات در کوهستان", img: "assets/image/image-7.png", demoPath: "project/Polaris-Mount/" },
    { title: "قالب برنامه‌نویسی", desc: "دوره‌های فرانت‌اند، بک‌اند و فول‌استک", img: "assets/image/image-8.png", demoPath: "project/Code-Polaris/" },
    { title: "قالب گیتار اختصاصی", desc: "دوره تخصصی گیتار الکتریک، آکوستیک و کلاسیک", img: "assets/image/image-9.png", demoPath: "project/Guitar-Polaris/" }
];

const coursesContainer = document.getElementById('coursesGrid');
if (coursesContainer) {
    coursesContainer.innerHTML = templatesData.map(c => `
        <div class="course-card">
            <div class="course-card__img" onclick="openImageModal('${c.img}')">
                <img src="${c.img}" alt="${c.title}" onerror="this.src='https://placehold.co/600x400/2c2c3a/ffffff?text=${encodeURIComponent(c.title)}'">
                <div class="course-img-title"><h3>${c.title}</h3></div>
            </div>
            <p>${c.desc}</p>
            <div class="course-card__actions">
                <a href="${c.demoPath}" class="btn-demo" target="_blank">${iconPlay} مشاهده دمو</a>
                <button class="btn-view-img" onclick="openImageModal('${c.img}')">${iconEye} دیدن عکس</button>
            </div>
        </div>
    `).join('');
}

// شطرنج
const chessTopArr = [
    { title: "شطرنج فارسی - تم تاریک", img: "assets/image/image-site-1.png", demoPath: "project/Chess-Polaris/chess-1/indexFa.html" },
    { title: "شطرنج فارسی - تم روشن", img: "assets/image/image-site-2.png", demoPath: "project/Chess-Polaris/chess-1/indexFaLight.html" },
    { title: "شطرنج انگلیسی - تم تاریک", img: "assets/image/image-site-3.png", demoPath: "project/Chess-Polaris/chess-1/indexEn.html" }
];

const chessBottomArr = [
    { title: "شطرنج انگلیسی - تم روشن", img: "assets/image/image-site-5.png", demoPath: "project/Chess-Polaris/chess-1/indexEnLight.html" },
    { title: "بازی آنلاین شطرنج", img: "assets/image/image-site-game.png", demoPath: "project/Chess-Polaris/chess-game/" }
];

const chessTopRow = document.getElementById('chessTopRow');
if (chessTopRow) {
    chessTopRow.innerHTML = chessTopArr.map(c => `
        <div class="chess-card">
            <div class="chess-card__img" onclick="openImageModal('${c.img}')">
                <img src="${c.img}" alt="${c.title}">
            </div>
            <h3>${c.title}</h3>
            <div class="chess-card__actions">
                <a href="${c.demoPath}" class="btn-demo" target="_blank">${iconPlay} مشاهده دمو</a>
                <button class="btn-view-img" onclick="openImageModal('${c.img}')">${iconEye} دیدن عکس</button>
            </div>
        </div>
    `).join('');
}

const chessBottomRow = document.getElementById('chessBottomRow');
if (chessBottomRow) {
    chessBottomRow.innerHTML = chessBottomArr.map(c => `
        <div class="chess-card">
            <div class="chess-card__img" onclick="openImageModal('${c.img}')">
                <img src="${c.img}" alt="${c.title}">
            </div>
            <h3>${c.title}</h3>
            <div class="chess-card__actions">
                <a href="${c.demoPath}" class="btn-demo" target="_blank">${iconPlay} مشاهده دمو</a>
                <button class="btn-view-img" onclick="openImageModal('${c.img}')">${iconEye} دیدن عکس</button>
            </div>
        </div>
    `).join('');
}

// بلاگ
const blogPostsData = [
    { cat: "آموزش هنر", title: "نقاشی مدرن و تکنیک‌های جدید آبرنگ", img: "assets/image/blog-1.png" },
    { cat: "تحلیل بازار", title: "تحلیل تکنیکال بازارهای مالی و فارکس", img: "assets/image/blog-2.png" },
    { cat: "موسیقی", title: "آموزش گیتار از صفر تا صد حرفه‌ای", img: "assets/image/blog-3.png" },
    { cat: "شطرنج", title: "تکنیک‌های مات سریع در شطرنج", img: "assets/image/blog-post-1.png" },
    { cat: "برنامه‌نویسی", title: "آموزش ری اکت و نکات کلیدی", img: "assets/image/blog-post-2.png" },
    { cat: "زبان انگلیسی", title: "روش‌های سریع آیلتس و تافل", img: "assets/image/blog-post-3.png" },
    { cat: "طراحی وب", title: "ترفندهای مدرن CSS Grid و Flexbox", img: "assets/image/blog-post-4.png" },
    { cat: "سئو", title: "بهینه‌سازی سایت برای گوگل", img: "assets/image/blog-post-5.png" },
    { cat: "بازاریابی", title: "بازاریابی محتوا و شبکه‌های اجتماعی", img: "assets/image/blog-post-6.png" },
    { cat: "توسعه فردی", title: "مدیریت زمان برای برنامه‌نویسان", img: "assets/image/blog-post-7.png" },
    { cat: "هوش مصنوعی", title: "آشنایی با هوش مصنوعی و کاربردها", img: "assets/image/blog-post-8.png" },
    { cat: "امنیت", title: "امنیت سایبری و رمزنگاری", img: "assets/image/blog-post-9.png" }
];

const blogContainer = document.getElementById('blogGrid');
if (blogContainer) {
    blogContainer.innerHTML = blogPostsData.map(post => `
        <div class="blog-card">
            <div class="blog-card__img" onclick="openImageModal('${post.img}')">
                <img src="${post.img}" alt="${post.title}" style="object-position: top;">
            </div>
            <div class="blog-category">📘 ${post.cat}</div>
            <h3>${post.title}</h3>
            <div class="blog-card__actions">
                <button class="btn-view-img" onclick="openImageModal('${post.img}')">${iconEye} مشاهده عکس</button>
            </div>
        </div>
    `).join('');
}

// صفحات داخلی
const site1Images = [1, 2, 3, 4, 5, 6, 7].map(i => ({
    title: `صفحه داخلی ${i}`,
    img: `assets/image/image-site-1-${i}.png`
}));

const site2Images = [1, 2, 3, 4, 5, 6, 7, 8].map(i => ({
    title: `صفحه داخلی ${i}`,
    img: `assets/image/image-site-2-${i}.png`
}));

const site3Images = [
    { title: "صفحه داخلی", img: "assets/image/image-site-3-1.png" },
];

function renderSites(containerId, items) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = items.map(item => `
            <div class="site-card">
                <div class="site-card__img" onclick="openImageModal('${item.img}')">
                    <img src="${item.img}" alt="${item.title}" onerror="this.src='https://placehold.co/400x200/2a2a3a/ffffff?text=${encodeURIComponent(item.title)}'">
                </div>
                <h4>${item.title}</h4>
                <button class="btn-sm" onclick="openImageModal('${item.img}')">${iconEye} مشاهده عکس</button>
            </div>
        `).join('');
    }
}

renderSites('site1Grid', site1Images);
renderSites('site2Grid', site2Images);
renderSites('site3Grid', site3Images);

// تم
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') !== 'light';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeToggle.innerHTML = isDark ? '☀️' : '🌙';
    });
}

// منوی موبایل
const mobileToggle = document.getElementById('mobileToggle');
const navList = document.querySelector('.nav__list');
if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
}

// اسکرول فعال
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});