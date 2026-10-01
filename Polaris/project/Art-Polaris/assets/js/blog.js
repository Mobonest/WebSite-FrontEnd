/* =============================================
   پولاریس آکادمی - اسکریپت صفحه بلاگ
   Blog Page JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Category Filter ----------
    const categoryItems = document.querySelectorAll('.category-item');
    const blogPosts = document.querySelectorAll('.blog-post');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active from all
            categoryItems.forEach(cat => cat.classList.remove('active'));
            // Add active to clicked
            item.classList.add('active');

            const filter = item.dataset.filter;

            // Filter posts
            blogPosts.forEach(post => {
                if (filter === 'all') {
                    post.style.display = '';
                    setTimeout(() => {
                        post.style.opacity = '1';
                        post.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    const postCategory = post.dataset.category;
                    if (postCategory === filter) {
                        post.style.display = '';
                        setTimeout(() => {
                            post.style.opacity = '1';
                            post.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        post.style.opacity = '0';
                        post.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            post.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // ---------- Blog Search ----------
    const searchInput = document.getElementById('blogSearchInput');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim().toLowerCase();

            blogPosts.forEach(post => {
                const title = post.querySelector('.blog-post-title')?.textContent.toLowerCase() || '';
                const excerpt = post.querySelector('.blog-post-excerpt')?.textContent.toLowerCase() || '';
                const tags = Array.from(post.querySelectorAll('.blog-post-tags span'))
                    .map(tag => tag.textContent.toLowerCase())
                    .join(' ');

                const matches = title.includes(searchTerm) ||
                               excerpt.includes(searchTerm) ||
                               tags.includes(searchTerm);

                if (matches || searchTerm === '') {
                    post.style.display = '';
                    setTimeout(() => {
                        post.style.opacity = '1';
                        post.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    post.style.opacity = '0';
                    post.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        post.style.display = 'none';
                    }, 300);
                }
            });
        });
    }

    // ---------- Pagination ----------
    const paginationBtns = document.querySelectorAll('.pagination-btn:not(.pagination-next)');

    paginationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            paginationBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Scroll to top of articles
            document.getElementById('blogArticles').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // ---------- Scroll Progress Bar ----------
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
    });

    // ---------- Header Scroll Effect ----------
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollY > 700) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---------- Hamburger Menu ----------
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // ---------- Signup Modal ----------
    const signupModal = document.getElementById('signupModal');
    const btnSignup = document.getElementById('btnSignup');
    const signupModalClose = document.getElementById('signupModalClose');

    if (btnSignup) {
        btnSignup.addEventListener('click', () => {
            signupModal.classList.add('active');
        });
    }

    if (signupModalClose) {
        signupModalClose.addEventListener('click', () => {
            signupModal.classList.remove('active');
        });
    }

    if (signupModal) {
        signupModal.addEventListener('click', (e) => {
            if (e.target === signupModal) {
                signupModal.classList.remove('active');
            }
        });
    }

    // Auth Tabs
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === (target === 'login' ? 'loginForm' : 'registerForm')) {
                    form.classList.add('active');
                }
            });
        });
    });

    // ---------- Intersection Observer for Animations ----------
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate blog posts
    blogPosts.forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(40px)';
        post.style.transition = `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
        observer.observe(post);
    });

    // Animate sidebar widgets
    const sidebarWidgets = document.querySelectorAll('.sidebar-widget');
    sidebarWidgets.forEach((widget, index) => {
        widget.style.opacity = '0';
        widget.style.transform = 'translateX(30px)';
        widget.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.12}s`;
        observer.observe(widget);
    });

});