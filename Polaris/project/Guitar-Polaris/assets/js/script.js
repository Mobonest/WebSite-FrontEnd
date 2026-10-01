// ==================== فایل: assets/js/script.js ====================
// آکادمی پولاریس - تمامی قابلیت‌های تعاملی

// ==================== لودر ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader-wrapper');
        if (loader) loader.classList.add('hidden');
    }, 1500);
});

// ==================== تم دارک/لایت ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

// ==================== ترجمه دوزبانه کامل (فارسی و انگلیسی) ====================
const translations = {
    fa: {
        // ==================== هدر و نوار بالایی ====================
        phone: '+۴۴ ۲۰ ۷۹۴۶ ۰۹۵۸',
        email: 'info@polarisacademy.com',
        marquee: '🔥 ثبت‌نام ترم تابستان با ۲۵٪ تخفیف ویژه | 🎸 دوره فشرده گیتار فلامنکو | 🌍 کلاس‌های آنلاین با اساتید بین‌المللی | ⭐ ۹۸٪ رضایت هنرجویان | 🏆 برنده جایزه بهترین آکادمی موسیقی ۲۰۲۴',
        
        // ==================== منوها ====================
        home: 'خانه',
        courses: 'دوره‌ها',
        masters: 'اساتید',
        workshops: 'کارگاه‌ها',
        online: 'کلاس آنلاین',
        store: 'فروشگاه',
        blog: 'وبلاگ',
        about: 'درباره ما',
        contact: 'تماس',
        getQuote: 'ثبت‌نام آنلاین',
        
        // ==================== مودال جستجو ====================
        searchTitle: 'جستجو',
        searchPlaceholder: 'نام دوره، استاد یا سبک...',
        searchBtn: 'جستجو',
        
        // ==================== مودال کاربر ====================
        loginTitle: 'ورود به حساب کاربری',
        registerTitle: 'ثبت‌نام در آکادمی',
        loginTab: 'ورود',
        registerTab: 'ثبت‌نام',
        usernamePlaceholder: 'شماره موبایل یا ایمیل',
        passwordPlaceholder: 'رمز عبور',
        rememberMe: 'مرا به خاطر بسپار',
        forgotPassword: 'فراموشی رمز',
        loginBtn: 'ورود',
        namePlaceholder: 'نام و نام خانوادگی',
        phonePlaceholder: 'شماره موبایل',
        emailPlaceholder: 'ایمیل',
        registerBtn: 'ثبت‌نام',
        
        // ==================== هیرو (اسلایدر) ====================
        heroBadge1: '🎸 معتبرترین آکادمی گیتار خاورمیانه',
        heroTitle1: 'آموزش حرفه‌ای گیتار<br>با اساتید بین‌المللی',
        heroSub1: 'از مبتدی تا استادی، در کنار بهترین‌های جهان گیتار بیاموزید. بیش از ۱۵۰۰۰ هنرجو در ۳۲ کشور جهان به ما اعتماد کرده‌اند. با متدهای اختصاصی و پیشرفته، در کوتاه‌ترین زمان به یک گیتاریست حرفه‌ای تبدیل شوید.',
        
        heroBadge2: '🎸 ۵۲۰+ دوره تخصصی',
        heroTitle2: 'هر سبکی که دوست داری<br>همین حالا شروع کن',
        heroSub2: 'کلاسیک، الکتریک، فلامنکو، فینگراستایل، بلوز، جاز و بیش از ۵۲۰ دوره تخصصی با بهترین متدهای روز دنیا',
        
        heroBadge3: '🌍 آموزش در ۳۲ کشور جهان',
        heroTitle3: 'یک گیتاریست بین‌المللی<br>شو',
        heroSub3: 'با گواهی معتبر بین‌المللی آکادمی پولاریس، در هر جای جهان که هستی، حرفه‌ای یاد بگیر',
        
        heroBadge4: '⭐ ۹۸٪ رضایت هنرجویان',
        heroTitle4: 'به خانواده بزرگ<br>پولاریس بپیوند',
        heroSub4: 'بیش از ۱۵۰۰۰ هنرجوی موفق در سراسر جهان به ما اعتماد کرده‌اند. تو هم به ما بپیوند',
        
        startLearning: 'شروع یادگیری',
        freeConsult: 'مشاوره رایگان',
        activeStudents: 'هنرجوی فعال',
        countriesWorld: 'کشور جهان',
        expertMasters: 'استاد مجرب',
        specialCourses: 'دوره تخصصی',
        
        // ==================== بخش دوره‌ها ====================
        coursesTitle: 'دوره‌های محبوب آکادمی پولاریس',
        coursesSubtitle: 'پرطرفدارترین دوره‌های آموزشی با بالاترین رضایت هنرجویان - بیش از ۵۲۰ دوره تخصصی',
        
        course1Title: 'گیتار کلاسیک متد استرادا',
        course1Desc: 'آموزش تکنیک‌های پایه تا کنسرت‌نوازی حرفه‌ای. شامل ۱۲ اتود اختصاصی از باخ تا تارگا، آشنایی با رپرتوار کلاسیک جهانی',
        
        course2Title: 'الکتریک راک متال پرو',
        course2Desc: 'سویپ، تپینگ، اسپید پیکینگ و تکنیک‌های دو دست. همراه با آنالیز سولوهای استیو وای، پتروچی، متالیکا و دریم تیتر',
        
        course3Title: 'فلامنکو اصیل آندلس',
        course3Desc: 'آموزش راسگئادو، پیکادو، آلزپورا و تکنیک‌های ضربی. همراه با آنالیز قطعات پاکو د لوسیا، ویسنته آمیگو و توماسیتو',
        
        course4Title: 'فینگراستایل مدرن کوبه‌ای',
        course4Desc: 'نوازی همزمان ملودی، بیس و ضرب با هر دو دست. متد اختصاصی توماس لوب، مایک دوز، اندی مک کی و سان لین',
        
        course5Title: 'بلوز و جاز ایمپرووایزیشن',
        course5Desc: 'آموزش بداهه‌نوازی، پنتاتونیک، مدهای مختلف و لیک‌های معروف از بی‌بی کینگ، اریک کلپتون، جیمی هندریکس و جو پاس',
        
        course6Title: 'آکوستیک فینگرپیکینگ',
        course6Desc: 'تکنیک‌های پیشرفته انگشتی روی گیتار آکوستیک، ترانه‌سرایی، هارمونی و آرپژهای حرفه‌ای',
        
        course7Title: 'شرد گیتار تکنیکال',
        course7Desc: 'تکنیک‌های سولو نویسی نئوکلاسیک، اکونومی پیکینگ، لگاتو، وایبراتو حرفه‌ای و سرعت بالای ۲۴۰ BMP',
        
        course8Title: 'ترانه‌سرایی و آهنگسازی',
        course8Desc: 'آموزش اصول آهنگسازی، ساخت ملودی، هارمونی پیشرفته، تنظیم و میکس و مسترینگ با نرم‌افزارهای حرفه‌ای',
        
        course9Title: 'بیس گیتار حرفه‌ای',
        course9Desc: 'تکنیک‌های اسلپ، پاپینگ، فینگراستایل و والیوم نویسی، همراه با ریتم‌های فانک، راک و جاز',
        
        course10Title: 'تئوری موسیقی و سلفژ',
        course10Desc: 'آموزش کامل نت‌خوانی، فواصل، گام‌ها، آکوردشناسی، ریتم‌خوانی و تربیت شنوایی برای همه نوازندگان',
        
        course11Title: 'کلاسیک پیشرفته کنسرت‌نوازی',
        course11Desc: 'آماده‌سازی برای کنسرت، تکنیک‌های صحنه، مدیریت استرس و رپرتوار سخت‌ترین قطعات کلاسیک',
        
        course12Title: 'گیتار لاتین و سامبا',
        course12Desc: 'ریتم‌های برزیلی، بوسا نوا، سامبا، تانگو و سالسا روی گیتار - تکنیک‌های منحصربه‌فرد',
        
        sessions: 'جلسه',
        students: 'هنرجو',
        registerCourse: 'ثبت‌نام',
        bestSeller: 'پرفروش‌ترین',
        new: 'جدید',
        special: 'خاص',
        popular: 'محبوب',
        exclusive: 'ویژه',
        trendy: 'پرطرفدار',
        advanced: 'فوق پیشرفته',
        creativity: 'خلاقیت',
        basic: 'پایه',
        express: 'اکسپرس',
        
        // ==================== بخش اساتید ====================
        mastersTitle: 'اساتید بین‌المللی آکادمی پولاریس',
        mastersSubtitle: 'آموزش با برترین گیتاریست‌های جهان از ۱۲ کشور مختلف - بیش از ۱۲۸ استاد مجرب',
        
        master1Name: 'فرانسیسکو دلگادو',
        master1Country: 'اسپانیا',
        master1Desc: 'استاد برجسته گیتار فلامنکو، برنده جایزه گرمی ۲۰۱۹، شاگرد پاکو د لوسیا، مدرس کنسرواتوار مادرید',
        
        master2Name: 'سارا جانسون',
        master2Country: 'آمریکا',
        master2Desc: 'نوازنده تکنیکال گیتار الکتریک، همکاری با متالیکا، دریم تیتر و جو ساتریانی، مدرس برکلی کالج',
        
        master3Name: 'یوکی یاماموتو',
        master3Country: 'ژاپن',
        master3Desc: 'استاد فینگراستایل، مبتکر تکنیک هایبرید پیکینگ، برنده مسابقات جهانی گیتار آکوستیک ۲۰۱۷',
        
        master4Name: 'محمد رضا لطفی',
        master4Country: 'ایران',
        master4Desc: 'پیشکسوت گیتار کلاسیک ایران، مدرس دانشگاه هنر تهران، بنیانگذار سبک تلفیقی ایرانی-کلاسیک',
        
        master5Name: 'النا مارتینز',
        master5Country: 'اسپانیا',
        master5Desc: 'نوازنده حرفه‌ای گیتار فلامنکو، برنده جایزه بهترین نوازنده زن فلامنکو ۲۰۲۰، مدرس بین‌المللی',
        
        master6Name: 'مارکوس میلر',
        master6Country: 'فرانسه',
        master6Desc: 'استاد گیتار جاز و فیوژن، برنده ۳ جایزه گرمی، همکاری با مایلز دیویس و هربی هنکاک',
        
        master7Name: 'آناهیتا قاسمی',
        master7Country: 'کانادا',
        master7Desc: 'نوازنده بین‌المللی گیتار آکوستیک، تخصص در سبک فینگراستایل، مدرس دانشگاه تورنتو',
        
        master8Name: 'لیلا کریمی',
        master8Country: 'ایران',
        master8Desc: 'نوازنده بین‌المللی گیتار کلاسیک، برنده جایزه بهترین نوازنده زن خاورمیانه ۲۰۲۲، مدرس کنسرواتوار تهران',
        
        // ==================== بخش کارگاه‌ها ====================
        workshopsTitle: 'کارگاه‌های تخصصی و مسترکلاس‌ها',
        workshopsSubtitle: 'رویدادهای آنلاین و حضوری با حضور اساتید بزرگ جهان - ظرفیت محدود',
        
        workshop1Title: 'تکنیک‌های سولو نویسی پیشرفته',
        workshop1Desc: 'همراه با جو ساتریانی به صورت آنلاین زنده - آموزش فرازها، لیک‌ها و ساختارهای سولو حرفه‌ای',
        workshop1Date: '۲۵ تیر ۱۴۰۴',
        workshop1Meta: '۴ ساعت | ظرفیت: ۲۵۰ نفر',
        
        workshop2Title: 'رازهای فلامنکو؛ راسگئادو تا آلزپورا',
        workshop2Desc: 'کارگاه فشرده با فرانسیسکو دلگادو در تهران - تکنیک‌های اصیل آندلسی و اجرای زنده',
        workshop2Date: '۱۲ مرداد ۱۴۰۴',
        workshop2Meta: '۸ ساعت | ظرفیت: ۱۰۰ نفر',
        
        workshop3Title: 'فینگراستایل مدرن؛ ضرب‌های کوبه‌ای',
        workshop3Desc: 'مسترکلاس با یوکی یاماموتو - تکنیک‌های ضربی همزمان با ملودی‌نوازی و استفاده از بدنه گیتار',
        workshop3Date: '۵ شهریور ۱۴۰۴',
        workshop3Meta: '۳ ساعت | ظرفیت: ۵۰۰ نفر',
        
        workshop4Title: 'بلوز ایمپرووایزیشن؛ از پنتاتونیک تا مودال',
        workshop4Desc: 'کارگاه بداهه‌نوازی با سبک بلوز و جاز - همراه با آنالیز لیک‌های اسطوره‌ها',
        workshop4Date: '۲۰ شهریور ۱۴۰۴',
        workshop4Meta: '۵ ساعت | ظرفیت: ۲۰۰ نفر',
        
        workshop5Title: 'تکنیک‌های ضبط و میکس گیتار در استودیو',
        workshop5Desc: 'آموزش حرفه‌ای ضبط گیتار، تنظیم آمپ، افکت‌ها و میکس و مسترینگ با مدرسان مجرب',
        workshop5Date: '۲ مهر ۱۴۰۴',
        workshop5Meta: '۶ ساعت | ظرفیت: ۱۵۰ نفر',
        
        workshop6Title: 'لوتینگ و تعمیرات گیتار حرفه‌ای',
        workshop6Desc: 'کارگاه عملی تعمیر و تنظیم گیتار، تعویض فرت، تنظیم دسته و الکترونیک',
        workshop6Date: '۱۸ مهر ۱۴۰۴',
        workshop6Meta: '۱۲ ساعت | ظرفیت: ۵۰ نفر',
        
        registerWorkshop: 'ثبت‌نام کارگاه',
        
        // ==================== بخش کلاس آنلاین لوکس ====================
        onlineBadge: 'پخش زنده • کیفیت 4K',
        onlineTitle: 'کلاس‌های آنلاین زنده',
        onlineTitleGold: 'با کیفیت استودیویی',
        onlineDesc: 'از هر کجای جهان، در بهترین کلاس‌های گیتار با اساتید بین‌المللی شرکت کنید. تجربه‌ای متفاوت از آموزش آنلاین با کیفیت تصویر 4K و صدای دالبی اتموس',
        
        feature1Title: 'کیفیت استودیویی',
        feature1Desc: 'تصویر 4K + صدای دالبی اتموس',
        feature2Title: 'پرسش و پاسخ زنده',
        feature2Desc: 'ارتباط مستقیم با استاد',
        feature3Title: 'ضبط خودکار جلسات',
        feature3Desc: 'دسترسی یک ساله به فیلم‌ها',
        feature4Title: 'گواهی بین‌المللی',
        feature4Desc: 'قابل ترجمه و تایید جهانی',
        
        onlineStudents: 'هنرجوی آنلاین',
        onlineCountries: 'کشور جهان',
        onlineSatisfaction: 'رضایت کاربران',
        
        startFreeClass: 'شروع کلاس رایگان',
        viewSchedule: 'مشاهده برنامه کلاس‌ها',
        
        // ==================== بخش فروشگاه ====================
        storeTitle: 'فروشگاه تخصصی گیتار و تجهیزات',
        storeSubtitle: 'بهترین برندهای گیتار، آمپلیفایر و افکت‌ها با گارانتی اصل - موجود در آکادمی با بهترین قیمت‌ها',
        
        product1Name: 'گیتار کلاسیک آلارا مدل AC-50 حرفه‌ای',
        product1Desc: 'ساخت دست اسپانیا، صفحه از چوب سدار، دسته آبنوس، فیشرمن پیکاپ اصلی، کیف حمل حرفه‌ای',
        
        product2Name: 'فندر استرتوکاستر آمریکا (American Pro II)',
        product2Desc: 'اصالت آمریکا، سیستم نویزلس، وینتیج پیکاپ، گارانتی ۵ ساله، رنگ سانبرست، بدنه آلدر',
        
        product3Name: 'گیبسون لس پال استاندارد ۶۰',
        product3Desc: 'صدای افسانه‌ای راک و بلوز، با بورباکس پیکاپ، ساخت آمریکا، بدنه ماهوگانی، دسته روزوود',
        
        product4Name: 'PRS Custom 24 - SE',
        product4Desc: 'گیتار الکتریک نیمه‌حرفه‌ای، پیکاپ ۸۵/۱۵، سیستم ترمولو، ساخت کره، رنگ توباکو برست',
        
        product5Name: 'مارتین D-28 آکوستیک',
        product5Desc: 'گیتار آکوستیک افسانه‌ای، ساخت آمریکا، بدنه رزروود، صفحه سیتکا اسپروس، صدای قدرتمند',
        
        product6Name: 'تیلور 214CE آکوستیک الکتریک',
        product6Desc: 'گیتار آکوستیک الکتریک نیمه‌حرفه‌ای، ساخت مکزیک، پیکاپ اکسپرسیون سیستم ۲، کیف استاندارد',
        
        product7Name: 'ایبانز RG550 GENESIS',
        product7Desc: 'گیتار الکتریک متال و راک، دسته بسیار نازک، پیکاپ دیمارزیو، سیستم فلوید رز، ساخت ژاپن',
        
        product8Name: 'رامیرز 4NE گیتار کلاسیک حرفه‌ای',
        product8Desc: 'ساخت دست اسپانیا، برند معروف رامیرز، صفحه سدار، دسته آبنوس، کیف سخت حرفه‌ای، صدای گرم و بینظیر',
        
        product9Name: 'فندر پرشن بیس (Player Series)',
        product9Desc: 'گیتار بیس ۴ سیم حرفه‌ای، ساخت مکزیک، پیکاپ آلنکو، صدای کلاسیک پرشن بیس، کیف حمل',
        
        inStock: '✅ موجود در آکادمی',
        
        // ==================== بخش وبلاگ ====================
        blogTitle: 'مجله تخصصی آکادمی پولاریس',
        blogSubtitle: 'جدیدترین مقالات و آموزش‌های رایگان گیتار - هر هفته با محتوای جدید',
        
        blogCat1: 'آموزشی',
        blogTitle1: '۱۰ تکنیک طلایی برای افزایش سرعت نوازندگی (از ۸۰ تا ۲۰۰ BMP)',
        blogDesc1: 'با تمرینات روزانه ۱۵ دقیقه‌ای و متد کرونومتر، سرعت خود را تا ۳ برابر افزایش دهید. همراه با تمرینات اختصاصی و فایل صوتی',
        
        blogCat2: 'معرفی ساز',
        blogTitle2: 'بهترین گیتارهای الکتریک زیر ۱۰۰ میلیون تومان (نیمه دوم ۲۰۲۴)',
        blogDesc2: 'راهنمای خرید برای نوازندگان مبتدی و حرفه‌ای همراه با تست صدا، بررسی تخصصی و مقایسه برندها',
        
        blogCat3: 'تکنیک',
        blogTitle3: 'آشنایی کامل با مدهای یونانی در گیتار (Modal Masterclass)',
        blogDesc3: 'همراه با تبلچر، دیاگرام و تمرین‌های کاربردی برای تسلط بر ۷ مد اصلی به همراه آهنگ‌های معروف هر مد',
        
        blogCat4: 'استادان',
        blogTitle4: 'گفتگوی اختصاصی با استاد فرانسیسکو دلگادو',
        blogDesc4: 'از سبک فلامنکو تا همکاری با نوازندگان بزرگ جهان و رازهای تمرین روزانه یک نوازنده حرفه‌ای',
        
        blogCat5: 'آموزشی',
        blogTitle5: 'آکوردشناسی پیشرفته: از آکوردهای ساده تا جایگزینی و گسترش',
        blogDesc5: 'آموزش کامل آکوردهای ماژور، مینور، هفتم، نهم، یازدهم، سیزدهم و کاربرد آن‌ها در آهنگسازی',
        
        blogCat6: 'تجهیزات',
        blogTitle6: 'راهنمای خرید آمپلیفایر: تیوب در مقابل ترانزیستور و مدلینگ',
        blogDesc6: 'مقایسه کامل انواع آمپلیفایر، بهترین انتخاب برای سبک‌های مختلف و بودجه‌های متفاوت',
        
        blogCat7: 'اخبار',
        blogTitle7: 'برگزاری اولین جشنواره بین‌المللی گیتار پولاریس',
        blogDesc7: 'جزئیات کامل جشنواره، جوایز، داوران، شرایط شرکت و مهلت ثبت‌نام تا ۳۰ شهریور',
        
        blogCat8: 'تمرین',
        blogTitle8: 'برنامه تمرینی ۳۰ روزه برای تبدیل شدن به نوازنده حرفه‌ای',
        blogDesc8: 'یک برنامه تمرینی کامل و ساختارمند برای هر سطح از مبتدی تا پیشرفته به همراه چک‌لیست روزانه',
        
        readMore: 'ادامه مطلب',
        
        // ==================== بخش افتخارات هنرجویان ====================
        successTitle: 'افتخارات هنرجویان آکادمی پولاریس',
        successSubtitle: 'موفقیت‌های درخشان هنرجویان ما در عرصه‌های بین‌المللی - بیش از ۵۰۰ هنرجوی موفق در سطح جهان',
        
        success1Text: 'بعد از ۱۸ ماه آموزش در آکادمی پولاریس، موفق به کسب مقام سوم جشنواره بین‌المللی گیتار وین شدم. این مدال را مدیون اساتید بزرگ این آکادمی هستم.',
        success1User: 'امیرحسین کرمی | هنرجوی دوره فلامنکو',
        
        success2Text: 'اساتید فوق‌العاده حرفه‌ای و پشتیبانی عالی تیم پولاریس. الان ۲ ساله که توی گروه موسیقی بین‌المللی خودم مشغول تدریس و اجرا هستم.',
        success2User: 'سارا محمدی | هنرجوی گیتار الکتریک',
        
        success3Text: 'از صفر مطلق گیتار شروع کردم و الان تونستم اولین آلبوم مستقل خودم رو با ۸ قطعه منتشر کنم. بی‌نهایت سپاسگزارم از خانواده پولاریس.',
        success3User: 'علی نوری | هنرجوی فینگراستایل',
        
        success4Text: 'به لطف آموزش‌های حرفه‌ای پولاریس، تونستم بورسیه تحصیلی کنسرواتوار سلطنتی لندن رو دریافت کنم.',
        success4User: 'مریم احمدی | هنرجوی گیتار کلاسیک',
        
        success5Text: 'بعد از اتمام دوره‌های پولاریس، تونستم شرکت تولید محتوای موسیقی خودم رو تاسیس کنم.',
        success5User: 'رضا کریمی | هنرجوی آهنگسازی',
        
        success6Text: 'اساتید بین‌المللی پولاریس، من رو به یک گیتاریست حرفه‌ای تبدیل کردن. الان توی لس‌آنجلس اجرا دارم.',
        success6User: 'نوید صالحی | هنرجوی راک متال',
        
        // ==================== بخش آمار ====================
        statActiveStudents: 'هنرجوی فعال',
        statCountries: 'کشور جهان',
        statMasters: 'استاد مجرب',
        statCourses: 'دوره تخصصی',
        statSatisfaction: 'رضایت هنرجویان',
        statRating: 'امتیاز از ۵',
        
        // ==================== بخش کشورها ====================
        countriesTitle: 'هنرجویان آکادمی پولاریس در سراسر جهان',
        countriesSubtitle: 'بیش از ۳۲ کشور جهان با ما همراه هستند - جامعه پولاریس در حال گسترش به سراسر کره زمین',
        
        // ==================== بخش رویدادها ====================
        eventsTitle: 'رویدادهای پیش‌رو',
        eventsSubtitle: 'کنسرت‌ها، مسترکلاس‌ها و مسابقات گیتار - فرصت‌های استثنایی برای یادگیری و شبکه‌سازی',
        
        event1Title: 'کنسرت آنلاین استیو وای - اجرای زنده',
        event1Desc: 'اجرای اختصاصی با کیفیت ۴K و صدای دالبی - به همراه پرسش و پاسخ زنده',
        
        event2Title: 'مسابقه بزرگ گیتار پولاریس',
        event2Desc: 'جوایز نقدی تا ۱۰۰ میلیون تومان + قرارداد هنری با آکادمی پولاریس',
        
        event3Title: 'مسترکلاس تامی امانوئل - فینگراستایل',
        event3Desc: 'تکنیک‌های پیشرفته فینگراستایل با اسطوره زنده گیتار جهان',
        
        event4Title: 'نمایشگاه تخصصی گیتار و تجهیزات',
        event4Desc: 'بازدید از جدیدترین محصولات برندهای معروف با تخفیف ویژه و تست حرفه‌ای',
        
        event5Title: 'کارگاه تخصصی تولید محتوا برای نوازندگان',
        event5Desc: 'آموزش ضبط، ادیت و انتشار ویدیوهای حرفه‌ای در شبکه‌های اجتماعی',
        
        event6Title: 'جشنواره نوازندگان جوان پولاریس',
        event6Desc: 'فرصت اجرا برای هنرجویان مستعد در برابر اساتید بزرگ و داوران حرفه‌ای',
        
        // ==================== بخش تماس با ما ====================
        contactTitle: 'تماس با ما',
        contactDesc: 'پاسخگویی ۲۴ ساعته، ۷ روز هفته حتی در تعطیلات - تیم پشتیبانی ما همیشه آماده خدمت به شماست',
        
        londonPhone: '+۴۴ ۲۰ ۷۹۴۶ ۰۹۵۸ (لندن)',
        tehranPhone: '+۹۸ ۲۱ ۸۸۵۶ ۱۲۳۴ (تهران)',
        supportPhone: '+۹۸ ۹۱۲ ۱۲۳ ۴۵۶۷ (پشتیبانی)',
        emailInfo: 'info@polarisacademy.com',
        emailSupport: 'support@polarisacademy.com',
        tehranAddress: 'تهران - خیابان ولیعصر - پلاک ۱۲۳',
        londonAddress: 'لندن - کنزینگتون - شماره ۴۲',
        tehranHours: 'شنبه تا پنجشنبه ۹ صبح تا ۸ شب (به وقت تهران)',
        londonHours: 'دوشنبه تا شنبه ۱۰ صبح تا ۶ عصر (به وقت لندن)',
        
        contactFormTitle: 'ارسال پیام سریع',
        fullName: 'نام و نام خانوادگی',
        email: 'ایمیل',
        city: 'شهر',
        province: 'استان',
        subject: 'موضوع پیام',
        phone: 'شماره تماس',
        message: 'متن پیام شما...',
        sendMessage: 'ارسال پیام',
        
        // ==================== بخش پرسش و پاسخ ====================
        faqTitle: 'پرسش‌های پرتکرار',
        faqSubtitle: 'پاسخ به سوالات رایج شما - اگر سوال دیگری دارید، فرم زیر را پر کنید',
        
        faq1Question: 'چگونه می‌توانم در دوره ثبت‌نام کنم؟',
        faq1Answer: 'برای ثبت‌نام کافی است روی دکمه ثبت‌نام در هدر کلیک کرده و فرم را پر کنید. کارشناسان ما ظرف ۲۴ ساعت با شما تماس می‌گیرند و مراحل ثبت‌نام را راهنمایی می‌کنند.',
        
        faq2Question: 'آیا گواهی پایان دوره بین‌المللی است؟',
        faq2Answer: 'بله، تمام گواهی‌های آکادمی پولاریس با تایید ۳۲ کشور جهان صادر می‌شود و قابل ترجمه رسمی و استفاده در دانشگاه‌ها و موسسات بین‌المللی است.',
        
        faq3Question: 'چند درصد هنرجویان موفق به کسب مهارت حرفه‌ای می‌شوند؟',
        faq3Answer: 'طبق نظرسنجی‌های انجام شده از ۱۵۰۰۰ هنرجوی ما، بیش از ۹۴٪ هنرجویان پس از اتمام دوره‌های ما به سطح حرفه‌ای می‌رسند و توانایی اجرای کنسرت و تدریس را پیدا می‌کنند.',
        
        faq4Question: 'آیا کلاس‌ها به صورت حضوری هم برگزار می‌شود؟',
        faq4Answer: 'بله، هم به صورت حضوری در تهران و لندن و هم به صورت آنلاین برای سراسر جهان برگزار می‌شود. شما می‌توانید با توجه به موقعیت خود یکی از این دو روش را انتخاب کنید.',
        
        faq5Question: 'آیا امکان اقساط وجود دارد؟',
        faq5Answer: 'بله، دوره‌ها تا ۶ ماه اقساط بدون بهره ارائه می‌شوند. برای دوره‌های پیشرفته تا ۱۲ ماه اقساط نیز امکان‌پذیر است.',
        
        faq6Question: 'آیا گیتار برای شروع لازم است؟',
        faq6Answer: 'برای هنرجویان مبتدی، آکادمی گیتار اجاره‌ای با کیفیت بالا و قیمت مناسب ارائه می‌دهد. همچنین راهنمای خرید گیتار مناسب برای هنرجویان ارائه می‌شود.',
        
        faqFormTitle: 'سوال دیگری دارید؟',
        faqFormDesc: 'پاسخگوی شما هستیم. فرم زیر را پر کنید تا در اسرع وقت پاسخ خود را دریافت کنید.',
        askQuestion: 'سوال خود را بنویسید...',
        sendQuestion: 'ارسال سوال',
        
        // ==================== فوتر ====================
        footerDesc: 'بزرگترین آکادمی تخصصی گیتار در خاورمیانه با بیش از ۱۵ سال تجربه و همکاری با برترین اساتید جهان. بیش از ۱۵ هزار هنرجوی موفق در ۳۲ کشور جهان.',
        footerDesc2: 'آکادمی پولاریس با بهره‌گیری از مدرن‌ترین متدهای آموزشی روز دنیا و اساتید بین‌المللی، مسیر پیشرفت شما را هموار می‌کند.',
        
        quickAccess: 'دسترسی سریع',
        specialCourses: 'دوره‌های ویژه',
        contactInfo: 'اطلاعات تماس',
        
        copyright: 'تمامی حقوق برای آکادمی بین‌المللی گیتار پولاریس محفوظ است. طراحی و توسعه توسط تیم حرفه‌ای پولاریس',
        copyrightEn: 'Polaris Academy - International Guitar Education Since 2009',
        
        // ==================== دکمه‌ها و پیام‌های عمومی ====================
        cartAlert: '🛒 سبد خرید شما در حال حاضر ۳ محصول دارد.\n\nمحصولات:\n- گیتار کلاسیک آلارا\n- فندر استرتوکاستر\n- مارشال DSL-40CR',
        workshopAlert: '🎸 با تشکر! اطلاعات کارگاه برای شما ارسال شد.\nکارشناسان ما ظرف ۲۴ ساعت با شما تماس می‌گیرند.\n\nشماره تماس: +۴۴ ۲۰ ۷۹۴۶ ۰۹۵۸',
        freeClassAlert: '🎸 برای شروع کلاس رایگان، لطفاً ابتدا ثبت‌نام کنید.\n\nپس از ثبت‌نام، لینک کلاس برای شما ایمیل می‌شود.',
        contactSuccess: '✅ پیام شما با موفقیت ارسال شد.\n\n',
        contactSuccessEnd: ' عزیز، کارشناسان ما به زودی با شما تماس می‌گیرند.\n\nشماره پیگیری: ',
        contactError: '❌ لطفاً نام و نام خانوادگی خود را وارد کنید.',
        searchResult: '🔍 نتایج جستجو برای ',
        searchResultEnd: ':\n\n🎸 دوره گیتار کلاسیک متد استرادا\n🎸 دوره گیتار الکتریک راک متال\n🎸 کارگاه فلامنکو با فرانسیسکو دلگادو\n🎸 مسترکلاس فینگراستایل با یوکی یاماموتو\n🎸 فروشگاه گیتار و تجهیزات\n🎸 وبلاگ آموزش تکنیک‌های پیشرفته\n\n',
        searchEmpty: '❌ لطفاً عبارت جستجو را وارد کنید.',
        blogAlert: '📝 در حال آماده‌سازی مقاله جدید...\nبه زودی در مجله پولاریس\n\nبرای اطلاع از جدیدترین مقالات، ما را دنبال کنید.',
        productAlert: '✅ ',
        productAlertMid: '\n\n💰 قیمت: ',
        productAlertEnd: '\n\n✅ این محصول در آکادمی پولاریس موجود است.\n\nبرای خرید و مشاوره با کارشناسان ما تماس بگیرید:\n📞 +۴۴ ۲۰ ۷۹۴۶ ۰۹۵۸\n📞 +۹۸ ۲۱ ۸۸۵۶ ۱۲۳۴',
        eventAlert: '🎵 ',
        eventAlertMid: '\n\n📅 تاریخ: ',
        eventAlertEnd: '\n\nبرای ثبت‌نام و اطلاعات بیشتر با ما تماس بگیرید.\nظرفیت محدود - ثبت‌نام زودهنگام با ۲۰٪ تخفیف\n\n📞 +۴۴ ۲۰ ۷۹۴۶ ۰۹۵۸',
        faqSuccess: '✅ سوال شما با موفقیت ارسال شد.\n\n',
        faqSuccessMid: ' عزیز، پاسخ سوال شما ظرف ۲۴ ساعت به ایمیلتان ارسال می‌شود.\n\nشماره پیگیری: ',
        faqError: '❌ لطفاً نام و سوال خود را وارد کنید.',
        comingSoon: '🔜 این بخش به زودی تکمیل می‌شود.\n\nبرای اطلاعات بیشتر با ما تماس بگیرید.',
        pagePreparing: '🔜 این صفحه در حال آماده‌سازی است.\nبه زودی محتوای کامل آن ارائه خواهد شد.',
        loginRequired: 'برای ثبت‌نام در دوره لطفاً ابتدا وارد حساب کاربری خود شوید.',
        // ==================== اضافات برای اسلایدر هیرو ====================
        heroSlide0Badge: '🎸 معتبرترین آکادمی گیتار خاورمیانه',
        heroSlide0Title: 'آموزش حرفه‌ای گیتار<br>با اساتید بین‌المللی',
        heroSlide0Sub: 'از مبتدی تا استادی، در کنار بهترین‌های جهان گیتار بیاموزید. بیش از ۱۵۰۰۰ هنرجو در ۳۲ کشور جهان',

        heroSlide1Badge: '🎸 ۵۲۰+ دوره تخصصی',
        heroSlide1Title: 'هر سبکی که دوست داری<br>همین حالا شروع کن',
        heroSlide1Sub: 'کلاسیک، الکتریک، فلامنکو، فینگراستایل، بلوز، جاز و بیش از ۵۲۰ دوره تخصصی با بهترین متدهای روز دنیا',

        heroSlide2Badge: '🌍 آموزش در ۳۲ کشور جهان',
        heroSlide2Title: 'یک گیتاریست بین‌المللی<br>شو',
        heroSlide2Sub: 'با گواهی معتبر بین‌المللی آکادمی پولاریس، در هر جای جهان که هستی، حرفه‌ای یاد بگیر',

        heroSlide3Badge: '⭐ ۹۸٪ رضایت هنرجویان',
        heroSlide3Title: 'به خانواده بزرگ<br>پولاریس بپیوند',
        heroSlide3Sub: 'بیش از ۱۵۰۰۰ هنرجوی موفق در سراسر جهان به ما اعتماد کرده‌اند. تو هم به ما بپیوند', 
    },
    
    // ==================== نسخه انگلیسی ====================
    en: {
        // Header & Top Bar
        phone: '+44 20 7946 0958',
        email: 'info@polarisacademy.com',
        marquee: '🔥 Summer Term Registration with 25% Discount | 🎸 Intensive Flamenco Guitar Course | 🌍 Online Classes with International Masters | ⭐ 98% Student Satisfaction | 🏆 Winner of Best Music Academy 2024',
        
        // Menu
        home: 'Home',
        courses: 'Courses',
        masters: 'Masters',
        workshops: 'Workshops',
        online: 'Online Class',
        store: 'Store',
        blog: 'Blog',
        about: 'About Us',
        contact: 'Contact',
        getQuote: 'Register Now',
        
        // Search Modal
        searchTitle: 'Search',
        searchPlaceholder: 'Course name, master or genre...',
        searchBtn: 'Search',
        
        // User Modal
        loginTitle: 'Login to Account',
        registerTitle: 'Register at Academy',
        loginTab: 'Login',
        registerTab: 'Sign Up',
        usernamePlaceholder: 'Phone Number or Email',
        passwordPlaceholder: 'Password',
        rememberMe: 'Remember Me',
        forgotPassword: 'Forgot Password?',
        loginBtn: 'Login',
        namePlaceholder: 'Full Name',
        phonePlaceholder: 'Phone Number',
        emailPlaceholder: 'Email',
        registerBtn: 'Sign Up',
        
        // Hero Slider
        heroBadge1: '🎸 Most Prestigious Guitar Academy in Middle East',
        heroTitle1: 'Professional Guitar Training<br>with International Masters',
        heroSub1: 'From beginner to pro, learn guitar with the world\'s best. Over 15,000 students in 32 countries trust us. With exclusive and advanced methods, become a professional guitarist in the shortest time.',
        
        heroBadge2: '🎸 520+ Specialized Courses',
        heroTitle2: 'Whatever Style You Love<br>Start Now',
        heroSub2: 'Classical, Electric, Flamenco, Fingerstyle, Blues, Jazz and over 520 specialized courses with the world\'s best methods',
        
        heroBadge3: '🌍 Teaching in 32 Countries',
        heroTitle3: 'Become an International<br>Guitarist',
        heroSub3: 'With Polaris Academy\'s valid international certificate, learn professionally anywhere in the world',
        
        heroBadge4: '⭐ 98% Student Satisfaction',
        heroTitle4: 'Join the Big<br>Polaris Family',
        heroSub4: 'Over 15,000 successful students worldwide trust us. Join us too',
        
        startLearning: 'Start Learning',
        freeConsult: 'Free Consultation',
        activeStudents: 'Active Students',
        countriesWorld: 'Countries',
        expertMasters: 'Expert Masters',
        specialCourses: 'Specialized Courses',
        
        // Courses Section
        coursesTitle: 'Popular Polaris Academy Courses',
        coursesSubtitle: 'Most popular courses with highest student satisfaction - over 520 specialized courses',
        
        course1Title: 'Classical Guitar - Estrada Method',
        course1Desc: 'Basic techniques to professional concert performance. Includes 12 exclusive etudes from Bach to Tárrega, introduction to classical repertoire',
        
        course2Title: 'Electric Guitar - Rock Metal Pro',
        course2Desc: 'Sweep, tapping, speed picking and two-hand techniques. Analysis of solos by Steve Vai, Petrucci, Metallica and Dream Theater',
        
        course3Title: 'Authentic Andalusian Flamenco',
        course3Desc: 'Teaching rasgueado, picado, alzapúa and rhythmic techniques. Analysis of pieces by Paco de Lucía, Vicente Amigo and Tomatito',
        
        course4Title: 'Modern Percussive Fingerstyle',
        course4Desc: 'Simultaneous playing of melody, bass and percussion with both hands. Exclusive method by Thomas Leeb, Mike Dawes, Andy McKee and Sungha Jung',
        
        course5Title: 'Blues & Jazz Improvisation',
        course5Desc: 'Improvisation, pentatonic, different modes and famous licks from BB King, Eric Clapton, Jimi Hendrix and Joe Pass',
        
        course6Title: 'Acoustic Fingerpicking',
        course6Desc: 'Advanced finger techniques on acoustic guitar, songwriting, harmony and professional arpeggios',
        
        course7Title: 'Technical Shred Guitar',
        course7Desc: 'Neoclassical solo techniques, economy picking, legato, professional vibrato and speeds above 240 BPM',
        
        course8Title: 'Songwriting & Composition',
        course8Desc: 'Composition principles, melody creation, advanced harmony, arrangement, mixing and mastering with professional software',
        
        course9Title: 'Professional Bass Guitar',
        course9Desc: 'Slap, popping, fingerstyle and pick techniques, along with funk, rock and jazz rhythms',
        
        course10Title: 'Music Theory & Solfège',
        course10Desc: 'Complete note reading, intervals, scales, chord recognition, rhythm reading and ear training for all musicians',
        
        course11Title: 'Advanced Classical Concert Performance',
        course11Desc: 'Concert preparation, stage techniques, stress management and the most challenging classical repertoire',
        
        course12Title: 'Latin & Samba Guitar',
        course12Desc: 'Brazilian rhythms, Bossa Nova, Samba, Tango and Salsa on guitar - unique techniques',
        
        sessions: 'sessions',
        students: 'students',
        registerCourse: 'Register',
        bestSeller: 'Best Seller',
        new: 'New',
        special: 'Special',
        popular: 'Popular',
        exclusive: 'Exclusive',
        trendy: 'Trending',
        advanced: 'Advanced',
        creativity: 'Creativity',
        basic: 'Basic',
        express: 'Express',
        
        // Masters Section
        mastersTitle: 'International Masters of Polaris Academy',
        mastersSubtitle: 'Learn with the world\'s best guitarists from 12 different countries - over 128 expert masters',
        
        master1Name: 'Francisco Delgado',
        master1Country: 'Spain',
        master1Desc: 'Prominent flamenco guitar master, Grammy winner 2019, student of Paco de Lucía, professor at Madrid Conservatory',
        
        master2Name: 'Sarah Johnson',
        master2Country: 'USA',
        master2Desc: 'Technical electric guitarist, collaboration with Metallica, Dream Theater and Joe Satriani, professor at Berklee College of Music',
        
        master3Name: 'Yuki Yamamoto',
        master3Country: 'Japan',
        master3Desc: 'Fingerstyle master, inventor of hybrid picking technique, winner of World Acoustic Guitar Championship 2017',
        
        master4Name: 'Mohammad Reza Lotfi',
        master4Country: 'Iran',
        master4Desc: 'Pioneer of classical guitar in Iran, professor at Tehran University of Arts, founder of Persian-classical fusion style',
        
        master5Name: 'Elena Martinez',
        master5Country: 'Spain',
        master5Desc: 'Professional flamenco guitarist, winner of Best Female Flamenco Artist 2020, international instructor',
        
        master6Name: 'Marcus Miller',
        master6Country: 'France',
        master6Desc: 'Jazz and fusion guitar master, winner of 3 Grammy awards, collaboration with Miles Davis and Herbie Hancock',
        
        master7Name: 'Anahita Ghasemi',
        master7Country: 'Canada',
        master7Desc: 'International acoustic guitarist, specializing in fingerstyle and country, professor at University of Toronto',
        
        master8Name: 'Leila Karimi',
        master8Country: 'Iran',
        master8Desc: 'International classical guitarist, winner of Best Female Musician in Middle East 2022, professor at Tehran Conservatory',
        
        // Workshops Section
        workshopsTitle: 'Specialized Workshops & Masterclasses',
        workshopsSubtitle: 'Online and in-person events with world-renowned masters - limited capacity',
        
        workshop1Title: 'Advanced Solo Techniques',
        workshop1Desc: 'Live online with Joe Satriani - Teaching phrases, licks and professional solo structures',
        workshop1Date: 'July 16, 2025',
        workshop1Meta: '4 hours | Capacity: 250 people',
        
        workshop2Title: 'Secrets of Flamenco; Rasgueado to Alzapúa',
        workshop2Desc: 'Intensive workshop with Francisco Delgado in Tehran - Authentic Andalusian techniques and live performance',
        workshop2Date: 'August 3, 2025',
        workshop2Meta: '8 hours | Capacity: 100 people',
        
        workshop3Title: 'Modern Fingerstyle; Percussive Beats',
        workshop3Desc: 'Masterclass with Yuki Yamamoto - Rhythmic techniques along with melody playing and using guitar body',
        workshop3Date: 'August 27, 2025',
        workshop3Meta: '3 hours | Capacity: 500 people',
        
        workshop4Title: 'Blues Improvisation; from Pentatonic to Modal',
        workshop4Desc: 'Improvisation workshop with blues and jazz style - Analysis of legends\' licks',
        workshop4Date: 'September 11, 2025',
        workshop4Meta: '5 hours | Capacity: 200 people',
        
        workshop5Title: 'Guitar Recording & Mixing Techniques',
        workshop5Desc: 'Professional guitar recording, amp setup, effects, mixing and mastering with expert instructors',
        workshop5Date: 'September 24, 2025',
        workshop5Meta: '6 hours | Capacity: 150 people',
        
        workshop6Title: 'Professional Guitar Lutherie & Repair',
        workshop6Desc: 'Practical workshop for guitar repair and setup, fret replacement, neck adjustment and electronics',
        workshop6Date: 'October 10, 2025',
        workshop6Meta: '12 hours | Capacity: 50 people',
        
        registerWorkshop: 'Register Workshop',
        
        // Online Luxury Class Section
        onlineBadge: 'Live Streaming • 4K Quality',
        onlineTitle: 'Live Online Classes',
        onlineTitleGold: 'with Studio Quality',
        onlineDesc: 'Join the best guitar classes with international masters from anywhere in the world. A different online learning experience with 4K video quality and Dolby Atmos sound',
        
        feature1Title: 'Studio Quality',
        feature1Desc: '4K Video + Dolby Atmos Sound',
        feature2Title: 'Live Q&A',
        feature2Desc: 'Direct communication with master',
        feature3Title: 'Auto Recording',
        feature3Desc: 'One-year access to recordings',
        feature4Title: 'International Certificate',
        feature4Desc: 'Translatable and globally valid',
        
        onlineStudents: 'Online Students',
        onlineCountries: 'Countries',
        onlineSatisfaction: 'User Satisfaction',
        
        startFreeClass: 'Start Free Class',
        viewSchedule: 'View Schedule',
        
        // Store Section
        storeTitle: 'Specialized Guitar & Equipment Store',
        storeSubtitle: 'Best guitar brands, amplifiers and effects with original warranty - available at the academy with best prices',
        
        product1Name: 'Alhambra AC-50 Professional Classical Guitar',
        product1Desc: 'Handmade in Spain, cedar top, ebony fingerboard, Fishman original pickup, professional gig bag',
        
        product2Name: 'Fender American Professional II Stratocaster',
        product2Desc: 'Made in USA, noise reduction system, vintage pickup, 5-year warranty, sunburst color, alder body',
        
        product3Name: 'Gibson Les Paul Standard 60s',
        product3Desc: 'Legendary rock and blues sound, Burstbucker pickups, made in USA, mahogany body, rosewood fingerboard',
        
        product4Name: 'PRS Custom 24 - SE',
        product4Desc: 'Semi-professional electric guitar, 85/15 pickups, tremolo system, made in Korea, tobacco burst color',
        
        product5Name: 'Martin D-28 Acoustic',
        product5Desc: 'Legendary acoustic guitar, made in USA, rosewood body, Sitka spruce top, powerful sound',
        
        product6Name: 'Taylor 214CE Acoustic Electric',
        product6Desc: 'Semi-professional acoustic-electric guitar, made in Mexico, Expression System 2 pickup, standard case',
        
        product7Name: 'Ibanez RG550 GENESIS',
        product7Desc: 'Metal and rock electric guitar, very thin neck, DiMarzio pickups, Floyd Rose system, made in Japan',
        
        product8Name: 'Ramirez 4NE Professional Classical Guitar',
        product8Desc: 'Handmade in Spain, famous Ramirez brand, cedar top, ebony fingerboard, hard shell case, warm and unique sound',
        
        product9Name: 'Fender Precision Bass (Player Series)',
        product9Desc: 'Professional 4-string bass guitar, made in Mexico, Alnico pickups, classic Precision Bass sound, gig bag',
        
        inStock: '✅ Available at Academy',
        
        // Blog Section
        blogTitle: 'Polaris Academy Specialized Magazine',
        blogSubtitle: 'Latest articles and free guitar lessons - new content every week',
        
        blogCat1: 'Educational',
        blogTitle1: '10 Golden Techniques to Increase Playing Speed (from 80 to 200 BPM)',
        blogDesc1: 'Increase your speed up to 3x with 15-minute daily exercises and chronometer method. Includes exclusive exercises and audio files',
        
        blogCat2: 'Instrument Introduction',
        blogTitle2: 'Best Electric Guitars Under 100 Million Tomans (Late 2024)',
        blogDesc2: 'Buying guide for beginner and professional players with sound test, expert review and brand comparison',
        
        blogCat3: 'Technique',
        blogTitle3: 'Complete Introduction to Greek Modes on Guitar (Modal Masterclass)',
        blogDesc3: 'With tablature, diagrams and practical exercises to master 7 main modes along with famous songs for each mode',
        
        blogCat4: 'Masters',
        blogTitle4: 'Exclusive Interview with Master Francisco Delgado',
        blogDesc4: 'From flamenco style to collaboration with world\'s greatest musicians and secrets of a professional musician\'s daily practice',
        
        blogCat5: 'Educational',
        blogTitle5: 'Advanced Chordology: From Simple Chords to Substitution and Expansion',
        blogDesc5: 'Complete teaching of major, minor, seventh, ninth, eleventh, thirteenth chords and their application in songwriting',
        
        blogCat6: 'Equipment',
        blogTitle6: 'Amplifier Buying Guide: Tube vs Transistor vs Modeling',
        blogDesc6: 'Complete comparison of different amplifier types, best choice for different styles and budgets',
        
        blogCat7: 'News',
        blogTitle7: 'First International Polaris Guitar Festival',
        blogDesc7: 'Complete festival details, prizes, judges, participation conditions and registration deadline until September 21',
        
        blogCat8: 'Practice',
        blogTitle8: '30-Day Practice Plan to Become a Professional Musician',
        blogDesc8: 'A complete structured practice plan for every level from beginner to advanced with daily checklist',
        
        readMore: 'Read More',
        
        // Success Section
        successTitle: 'Polaris Academy Student Achievements',
        successSubtitle: 'Brilliant successes of our students in international arenas - over 500 successful students worldwide',
        
        success1Text: 'After 18 months of training at Polaris Academy, I won third place at the International Vienna Guitar Festival. I owe this medal to the great masters of this academy.',
        success1User: 'Amirhossein Karami | Flamenco Course Student',
        
        success2Text: 'Extremely professional masters and excellent support from Polaris team. I\'ve been teaching and performing with my own international music group for 2 years now.',
        success2User: 'Sara Mohammadi | Electric Guitar Student',
        
        success3Text: 'I started guitar from absolute zero and now I\'ve been able to release my first independent album with 8 tracks. I\'m infinitely grateful to the Polaris family.',
        success3User: 'Ali Noori | Fingerstyle Student',
        
        success4Text: 'Thanks to Polaris professional training, I received a scholarship to the Royal Conservatory of London.',
        success4User: 'Maryam Ahmadi | Classical Guitar Student',
        
        success5Text: 'After completing Polaris courses, I established my own music content production company.',
        success5User: 'Reza Karimi | Composition Student',
        
        success6Text: 'Polaris international masters transformed me into a professional guitarist. I now perform in Los Angeles.',
        success6User: 'Navid Salehi | Rock Metal Student',
        
        // Stats Section
        statActiveStudents: 'Active Students',
        statCountries: 'Countries',
        statMasters: 'Expert Masters',
        statCourses: 'Courses',
        statSatisfaction: 'Satisfaction',
        statRating: 'Rating out of 5',
        
        // Countries Section
        countriesTitle: 'Polaris Academy Students Worldwide',
        countriesSubtitle: 'Over 32 countries are with us - Polaris community is expanding across the globe',
        
        // Events Section
        eventsTitle: 'Upcoming Events',
        eventsSubtitle: 'Concerts, masterclasses and guitar competitions - exceptional opportunities for learning and networking',
        
        event1Title: 'Steve Vai Online Concert - Live Performance',
        event1Desc: 'Exclusive performance with 4K quality and Dolby sound - along with live Q&A',
        
        event2Title: 'Grand Polaris Guitar Competition',
        event2Desc: 'Cash prizes up to 100 million Tomans + artistic contract with Polaris Academy',
        
        event3Title: 'Tommy Emmanuel Masterclass - Fingerstyle',
        event3Desc: 'Advanced fingerstyle techniques with the living legend of guitar',
        
        event4Title: 'Specialized Guitar & Equipment Exhibition',
        event4Desc: 'View the latest products from famous brands with special discounts and professional testing',
        
        event5Title: 'Specialized Content Creation Workshop for Musicians',
        event5Desc: 'Learn recording, editing and publishing professional videos on social media',
        
        event6Title: 'Polaris Young Musicians Festival',
        event6Desc: 'Performance opportunity for talented students in front of great masters and professional judges',
        
        // Contact Section
        contactTitle: 'Contact Us',
        contactDesc: '24/7 support, 7 days a week even on holidays - our support team is always ready to serve you',
        
        londonPhone: '+44 20 7946 0958 (London)',
        tehranPhone: '+98 21 8856 1234 (Tehran)',
        supportPhone: '+98 912 123 4567 (Support)',
        emailInfo: 'info@polarisacademy.com',
        emailSupport: 'support@polarisacademy.com',
        tehranAddress: 'Tehran - Valiasr St. - No. 123',
        londonAddress: 'London - Kensington - No. 42',
        tehranHours: 'Saturday to Thursday 9 AM to 8 PM (Tehran time)',
        londonHours: 'Monday to Saturday 10 AM to 6 PM (London time)',
        
        contactFormTitle: 'Quick Message',
        fullName: 'Full Name',
        email: 'Email',
        city: 'City',
        province: 'Province',
        subject: 'Subject',
        phone: 'Phone Number',
        message: 'Your Message...',
        sendMessage: 'Send Message',
        
        // FAQ Section
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Answers to your common questions - if you have another question, fill out the form below',
        
        faq1Question: 'How can I register for a course?',
        faq1Answer: 'Simply click the registration button in the header and fill out the form. Our experts will contact you within 24 hours to guide you through the registration process.',
        
        faq2Question: 'Is the course certificate international?',
        faq2Answer: 'Yes, all Polaris Academy certificates are recognized in 32 countries and can be officially translated and used at international universities and institutions.',
        
        faq3Question: 'What percentage of students achieve professional skills?',
        faq3Answer: 'According to surveys of our 15,000 students, over 94% reach a professional level after completing our courses and gain the ability to perform concerts and teach.',
        
        faq4Question: 'Are classes held in-person as well?',
        faq4Answer: 'Yes, both in-person in Tehran and London, and online for the rest of the world. You can choose either method based on your location.',
        
        faq5Question: 'Is installment payment available?',
        faq5Answer: 'Yes, courses are offered with up to 6 months interest-free installments. For advanced courses, up to 12 months installments are also possible.',
        
        faq6Question: 'Is a guitar necessary to start?',
        faq6Answer: 'For beginner students, the academy offers high-quality rental guitars at reasonable prices. We also provide guidance on buying suitable guitars for students.',
        
        faqFormTitle: 'Have Another Question?',
        faqFormDesc: 'We are here to help. Fill out the form below and we will respond as soon as possible.',
        askQuestion: 'Write your question...',
        sendQuestion: 'Send Question',
        
        // Footer
        footerDesc: 'The largest specialized guitar academy in the Middle East with over 15 years of experience and collaboration with the world\'s best masters. Over 15,000 successful students in 32 countries.',
        footerDesc2: 'Polaris Academy uses the most modern educational methods and international masters to pave your path to success.',
        
        quickAccess: 'Quick Access',
        specialCourses: 'Specialized Courses',
        contactInfo: 'Contact Information',
        
        copyright: 'All rights reserved for Polaris International Guitar Academy. Design and development by Polaris professional team',
        copyrightEn: 'Polaris Academy - International Guitar Education Since 2009',
        
        // General Buttons & Messages
        cartAlert: '🛒 Your cart currently has 3 products.\n\nProducts:\n- Alhambra Classical Guitar\n- Fender Stratocaster\n- Marshall DSL-40CR',
        workshopAlert: '🎸 Thank you! Workshop information has been sent to you.\nOur experts will contact you within 24 hours.\n\nContact: +44 20 7946 0958',
        freeClassAlert: '🎸 To start a free class, please register first.\n\nAfter registration, the class link will be emailed to you.',
        contactSuccess: '✅ Your message has been successfully sent.\n\nDear ',
        contactSuccessEnd: ', our experts will contact you soon.\n\nTracking number: ',
        contactError: '❌ Please enter your full name.',
        searchResult: '🔍 Search results for "',
        searchResultEnd: '":\n\n🎸 Classical Guitar - Estrada Method\n🎸 Electric Guitar - Rock Metal Pro\n🎸 Flamenco Workshop with Francisco Delgado\n🎸 Fingerstyle Masterclass with Yuki Yamamoto\n🎸 Guitar & Equipment Store\n🎸 Advanced Techniques Blog\n\n',
        searchEmpty: '❌ Please enter a search term.',
        blogAlert: '📝 New article in preparation... Coming soon to Polaris Magazine\n\nFollow us for the latest articles.',
        productAlert: '✅ ',
        productAlertMid: '\n\n💰 Price: ',
        productAlertEnd: '\n\n✅ This product is available at Polaris Academy.\n\nFor purchase and consultation, contact our experts:\n📞 +44 20 7946 0958\n📞 +98 21 8856 1234',
        eventAlert: '🎵 ',
        eventAlertMid: '\n\n📅 Date: ',
        eventAlertEnd: '\n\nFor registration and more information, contact us.\nLimited capacity - early registration with 20% discount\n\n📞 +44 20 7946 0958',
        faqSuccess: '✅ Your question has been successfully sent.\n\nDear ',
        faqSuccessMid: ', your answer will be emailed within 24 hours.\n\nTracking number: ',
        faqError: '❌ Please enter your name and question.',
        comingSoon: '🔜 This section will be completed soon.\n\nContact us for more information.',
        pagePreparing: '🔜 This page is under preparation.\nFull content will be available soon.',
        loginRequired: 'Please log in to your account to register for the course.',
        // ==================== Additions for Hero Slider ====================
        heroSlide0Badge: '🎸 Most Prestigious Guitar Academy in Middle East',
        heroSlide0Title: 'Professional Guitar Training<br>with International Masters',
        heroSlide0Sub: 'From beginner to pro, learn guitar with the world\'s best. Over 15,000 students in 32 countries',

        heroSlide1Badge: '🎸 520+ Specialized Courses',
        heroSlide1Title: 'Whatever Style You Love<br>Start Now',
        heroSlide1Sub: 'Classical, Electric, Flamenco, Fingerstyle, Blues, Jazz and over 520 specialized courses with the world\'s best methods',

        heroSlide2Badge: '🌍 Teaching in 32 Countries',
        heroSlide2Title: 'Become an International<br>Guitarist',
        heroSlide2Sub: 'With Polaris Academy\'s valid international certificate, learn professionally anywhere in the world',

        heroSlide3Badge: '⭐ 98% Student Satisfaction',
        heroSlide3Title: 'Join the Big<br>Polaris Family',
        heroSlide3Sub: 'Over 15,000 successful students worldwide trust us. Join us too',
    }
};

let currentLang = 'fa';

function switchLanguage(lang) {
    currentLang = lang;
    
    const flags = { fa: '🇮🇷', en: '🇬🇧' };
    const langNames = { fa: 'FA', en: 'EN' };
    
    const selectedFlag = document.querySelector('.selected-flag');
    const selectedLang = document.querySelector('.selected-lang');
    
    if (selectedFlag && flags[lang]) {
        selectedFlag.innerHTML = flags[lang];
    }
    if (selectedLang && langNames[lang]) {
        selectedLang.textContent = langNames[lang];
    }
    
    // ترجمه عناصر دارای data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // تغییر جهت صفحه
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.body.style.direction = lang === 'fa' ? 'rtl' : 'ltr';
    
    localStorage.setItem('preferredLanguage', lang);
}

// تنظیم رویداد کلیک برای گزینه‌های زبان
document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
        switchLanguage(opt.dataset.lang);
    });
});

// بارگذاری زبان ذخیره شده
const savedLang = localStorage.getItem('preferredLanguage') || 'fa';
switchLanguage(savedLang);

// ==================== منوی موبایل ====================
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
}

// ==================== مودال‌ها ====================
const modals = {
    search: document.getElementById('searchModal'),
    user: document.getElementById('userModal')
};

// دکمه جستجو
const searchBtn = document.getElementById('searchBtn');
if (searchBtn && modals.search) {
    searchBtn.addEventListener('click', () => {
        modals.search.classList.add('active');
    });
}

// دکمه کاربر
const userBtn = document.getElementById('userBtn');
if (userBtn && modals.user) {
    userBtn.addEventListener('click', () => {
        modals.user.classList.add('active');
    });
}

// دکمه سبد خرید
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        alert('🛒 سبد خرید شما در حال حاضر ۳ محصول دارد.\n\nمحصولات:\n- گیتار کلاسیک آلارا\n- فندر استرتوکاستر\n- مارشال DSL-40CR');
    });
}

// دکمه ثبت‌نام در هدر
const registerHeaderBtn = document.getElementById('registerHeaderBtn');
if (registerHeaderBtn && modals.user) {
    registerHeaderBtn.addEventListener('click', () => {
        modals.user.classList.add('active');
        const registerTab = document.querySelector('.tab-btn[data-tab="register"]');
        if (registerTab) registerTab.click();
    });
}

// بستن مودال‌ها
document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay') || 
            e.target.classList.contains('modal-close') ||
            e.target.parentElement?.classList.contains('modal-close')) {
            document.querySelectorAll('.modal').forEach(m => {
                m.classList.remove('active');
            });
        }
    });
});

// بستن مودال با دکمه ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(m => {
            m.classList.remove('active');
        });
    }
});

// ==================== تب‌های مودال ====================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.closest('.modal-container');
        if (parent) {
            parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const targetForm = parent.querySelector(`#${btn.dataset.tab}Form`);
            if (targetForm) targetForm.classList.add('active');
        }
    });
});

// ==================== دکمه‌های هیرو ====================
const startCourseBtn = document.getElementById('startCourseBtn');
if (startCourseBtn) {
    startCourseBtn.addEventListener('click', () => {
        const coursesSection = document.querySelector('.courses');
        if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

const consultationBtn = document.getElementById('consultationBtn');
if (consultationBtn) {
    consultationBtn.addEventListener('click', () => {
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ==================== دکمه‌های دوره‌ها ====================
document.querySelectorAll('.course-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        if (modals.user) {
            modals.user.classList.add('active');
        } else {
            alert('برای ثبت‌نام در دوره لطفاً ابتدا وارد حساب کاربری خود شوید.');
        }
    });
});

// ==================== دکمه‌های کارگاه ====================
document.querySelectorAll('.workshop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('🎸 با تشکر! اطلاعات کارگاه برای شما ارسال شد.\nکارشناسان ما ظرف ۲۴ ساعت با شما تماس می‌گیرند.\n\nشماره تماس: +۴۴ ۲۰ ۷۹۴۶ ۰۹۵۸');
    });
});

// ==================== کلاس آنلاین ====================
const onlineBtn = document.querySelector('.online-btn');
if (onlineBtn) {
    onlineBtn.addEventListener('click', () => {
        if (modals.user) {
            modals.user.classList.add('active');
        } else {
            alert('🎸 برای شروع کلاس رایگان، لطفاً ابتدا ثبت‌نام کنید.\n\nپس از ثبت‌نام، لینک کلاس برای شما ایمیل می‌شود.');
        }
    });
}

// ==================== فرم تماس ====================
const submitBtn = document.querySelector('.contact-form .submit-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        const name = document.querySelector('.contact-form input[placeholder*="نام"]')?.value || 
                     document.querySelector('.contact-form input:first-child')?.value;
        
        if (name && name.trim()) {
            alert(`✅ پیام شما با موفقیت ارسال شد.\n\n${name} عزیز، کارشناسان ما به زودی با شما تماس می‌گیرند.\n\nشماره پیگیری: ${Math.floor(Math.random() * 100000)}`);
            
            inputs.forEach(input => {
                if (input.value) input.value = '';
            });
        } else {
            alert('❌ لطفاً نام و نام خانوادگی خود را وارد کنید.');
        }
    });
}

// ==================== فرم جستجو ====================
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.querySelector('.search-input-modal')?.value;
        if (query && query.trim()) {
            alert(`🔍 نتایج جستجو برای "${query}":\n\n` +
                  `🎸 دوره گیتار کلاسیک متد استرادا\n` +
                  `🎸 دوره گیتار الکتریک راک متال\n` +
                  `🎸 کارگاه فلامنکو با فرانسیسکو دلگادو\n` +
                  `🎸 مسترکلاس فینگراستایل با یوکی یاماموتو\n` +
                  `🎸 فروشگاه گیتار و تجهیزات\n` +
                  `🎸 وبلاگ آموزش تکنیک‌های پیشرفته\n\n` +
                  `${results.length} نتیجه یافت شد`);
            
            if (modals.search) modals.search.classList.remove('active');
        } else {
            alert('❌ لطفاً عبارت جستجو را وارد کنید.');
        }
    });
}

// ==================== دکمه‌های وبلاگ ====================
document.querySelectorAll('.blog-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('📝 در حال آماده‌سازی مقاله جدید...\nبه زودی در مجله پولاریس\n\nبرای اطلاع از جدیدترین مقالات، ما را دنبال کنید.');
    });
});

// ==================== اسلایدر هیرو (دات‌ها) ====================
const dots = document.querySelectorAll('.dot');
const heroContent = {
    0: {
        badge: '🎸 معتبرترین آکادمی گیتار خاورمیانه',
        title: 'آموزش حرفه‌ای گیتار<br>با اساتید بین‌المللی',
        sub: 'از مبتدی تا استادی، در کنار بهترین‌های جهان گیتار بیاموزید. بیش از ۱۵۰۰۰ هنرجو در ۳۲ کشور جهان'
    },
    1: {
        badge: '🎸 ۵۲۰+ دوره تخصصی',
        title: 'هر سبکی که دوست داری<br>همین حالا شروع کن',
        sub: 'کلاسیک، الکتریک، فلامنکو، فینگراستایل، بلوز، جاز و بیش از ۵۲۰ دوره تخصصی با بهترین متدهای روز دنیا'
    },
    2: {
        badge: '🌍 آموزش در ۳۲ کشور جهان',
        title: 'یک گیتاریست بین‌المللی<br>شو',
        sub: 'با گواهی معتبر بین‌المللی آکادمی پولاریس، در هر جای جهان که هستی، حرفه‌ای یاد بگیر'
    },
    3: {
        badge: '⭐ ۹۸٪ رضایت هنرجویان',
        title: 'به خانواده بزرگ<br>پولاریس بپیوند',
        sub: 'بیش از ۱۵۰۰۰ هنرجوی موفق در سراسر جهان به ما اعتماد کرده‌اند. تو هم به ما بپیوند'
    }
};

let currentSlide = 0;
let slideInterval;

function updateHeroContent(index) {
    const content = heroContent[index];
    if (content) {
        const heroBadge = document.querySelector('.hero-badge');
        const heroTitle = document.querySelector('.hero-content h1');
        const heroSub = document.querySelector('.hero-content p');
        
        if (heroBadge) heroBadge.innerHTML = content.badge;
        if (heroTitle) heroTitle.innerHTML = content.title;
        if (heroSub) heroSub.textContent = content.sub;
    }
}

function startSlideShow() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        if (dots.length > 0) {
            currentSlide = (currentSlide + 1) % dots.length;
            dots.forEach(d => d.classList.remove('active'));
            dots[currentSlide].classList.add('active');
            updateHeroContent(currentSlide);
        }
    }, 5000);
}

if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateHeroContent(currentSlide);
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            startSlideShow();
        });
    });
    startSlideShow();
}

// ==================== انیمیشن اسکرول ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.course-card, .master-card, .workshop-card, .product-card, .blog-card, .success-card, .country-card, .event-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ==================== آمار متحرک (شمارنده) ====================
const statNumbers = document.querySelectorAll('.stat-num');
let animated = false;

function animateNumbers() {
    if (animated) return;
    
    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const rawNumber = text.replace(/[^۰-۹0-9]/g, '');
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('٪') || text.includes('%');
        
        let target = parseInt(rawNumber, 10);
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 50;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                let finalText = Math.floor(target).toLocaleString('fa-IR');
                if (hasPlus) finalText += '+';
                if (hasPercent) finalText += '٪';
                stat.textContent = finalText;
                clearInterval(counter);
            } else {
                let val = Math.floor(current);
                let displayText = val.toLocaleString('fa-IR');
                if (hasPlus) displayText += '+';
                if (hasPercent && val !== target) displayText += '٪';
                stat.textContent = displayText;
            }
        }, 40);
    });
    
    animated = true;
}

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    statsObserver.observe(statsSection);
}

// ==================== محصولات فروشگاه (کلیک برای مشاهده موجودی) ====================
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h5')?.textContent || 'محصول';
        const productPrice = card.querySelector('.product-price')?.textContent || '';
        alert(`✅ ${productName}\n\n💰 قیمت: ${productPrice}\n\n✅ این محصول در آکادمی پولاریس موجود است.\n\nبرای خرید و مشاوره با کارشناسان ما تماس بگیرید:\n📞 +۴۴ ۲۰ ۷۹۴۶ ۰۹۵۸\n📞 +۹۸ ۲۱ ۸۸۵۶ ۱۲۳۴`);
    });
});

// ==================== رویدادها ====================
document.querySelectorAll('.event-card').forEach(event => {
    event.addEventListener('click', () => {
        const eventTitle = event.querySelector('h4')?.textContent || 'رویداد';
        const eventDate = event.querySelector('.event-date span:first-child')?.textContent || '';
        const eventMonth = event.querySelector('.event-date span:last-child')?.textContent || '';
        
        alert(`🎵 ${eventTitle}\n\n📅 تاریخ: ${eventDate} ${eventMonth}\n\nبرای ثبت‌نام و اطلاعات بیشتر با ما تماس بگیرید.\nظرفیت محدود - ثبت‌نام زودهنگام با ۲۰٪ تخفیف\n\n📞 +۴۴ ۲۰ ۷۹۴۶ ۰۹۵۸`);
    });
});

// ==================== اسکرول به بالای صفحه ====================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// دکمه اسکرول به بالا
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.addEventListener('click', scrollToTop);
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// ==================== FAQ آکاردئونی (پرسش و پاسخ) ====================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        if (faqItem) {
            // بستن سایر آیتم‌ها
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            faqItem.classList.toggle('active');
        }
    });
});

// ==================== فرم سوال در بخش FAQ ====================
const faqSubmitBtn = document.querySelector('.faq-form .submit-btn');
if (faqSubmitBtn) {
    faqSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.querySelector('.faq-form input[placeholder*="نام"]')?.value || 
                     document.querySelector('.faq-form input:first-child')?.value;
        const question = document.querySelector('.faq-form textarea')?.value;
        
        if (name && name.trim() && question && question.trim()) {
            alert(`✅ سوال شما با موفقیت ارسال شد.\n\n${name} عزیز، پاسخ سوال شما ظرف ۲۴ ساعت به ایمیلتان ارسال می‌شود.\n\nشماره پیگیری: ${Math.floor(Math.random() * 100000)}`);
            
            document.querySelectorAll('.faq-form input, .faq-form textarea').forEach(input => {
                if (input.value) input.value = '';
            });
        } else {
            alert('❌ لطفاً نام و سوال خود را وارد کنید.');
        }
    });
}

// ==================== نمایش سال جاری در فوتر ====================
const footerBottom = document.querySelector('.footer-bottom p:first-child');
if (footerBottom) {
    const currentYear = new Date().toLocaleDateString('fa-IR', { year: 'numeric' });
    footerBottom.innerHTML = footerBottom.innerHTML.replace('۱۴۰۴', currentYear);
}

// ==================== اضافه کردن کلاس به body برای ریسپانسیو ====================
function checkMobile() {
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
}

window.addEventListener('resize', checkMobile);
checkMobile();

// ==================== جلوگیری از کلیک روی لینک‌های خالی ====================
document.querySelectorAll('.footer-col a, .mobile-menu a, .menu-item > a').forEach(link => {
    if (link.getAttribute('href') === '#') {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (link.parentElement?.classList.contains('dropdown')) {
                // اجازه باز شدن مگامنو
                return;
            }
            if (link.closest('.footer-col')) {
                alert('🔜 این بخش به زودی تکمیل می‌شود.\n\nبرای اطلاعات بیشتر با ما تماس بگیرید.');
            } else {
                alert('🔜 این صفحه در حال آماده‌سازی است.\nبه زودی محتوای کامل آن ارائه خواهد شد.');
            }
        });
    }
});

// ==================== انیمیشن هدر هنگام اسکرول ====================
let lastScroll = 0;
const mainHeader = document.querySelector('.main-header');
const desktopMenu = document.querySelector('.desktop-menu');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        if (mainHeader) {
            mainHeader.style.boxShadow = 'var(--shadow)';
        }
        if (desktopMenu) {
            desktopMenu.style.boxShadow = 'var(--shadow)';
        }
    } else {
        if (mainHeader) {
            mainHeader.style.boxShadow = 'none';
        }
        if (desktopMenu) {
            desktopMenu.style.boxShadow = 'none';
        }
    }
    
    lastScroll = currentScroll;
});

// ==================== کنسول لاگ ====================
console.log('%c🎸 آکادمی پولاریس | آموزش بین‌المللی گیتار', 'font-size: 18px; color: #DAA520; background: #0A0A0F; padding: 12px 20px; border-radius: 12px; font-weight: bold;');
console.log('%cطراحی شده برای هنرجویان گیتار در سراسر جهان | بیش از ۱۵۰۰۰ هنرجوی موفق', 'font-size: 12px; color: #B8860B;');
console.log('%cنسخه: 3.0 | آخرین به‌روزرسانی: ۱۴۰۴', 'font-size: 10px; color: #666;');

// ==================== لود اولیه ====================
document.addEventListener('DOMContentLoaded', () => {
    // اطمینان از اعمال شدن زبان
    switchLanguage(currentLang);
    
    // اعمال انیمیشن اولیه برای عناصر قابل مشاهده
    setTimeout(() => {
        const visibleElements = document.querySelectorAll('.course-card, .master-card, .workshop-card');
        visibleElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }, 100);
});

// ==================== پیشگیری از خطاهای تصاویر ====================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        if (!this.hasAttribute('data-fallback')) {
            this.setAttribute('data-fallback', 'true');
            this.src = 'https://placehold.co/600x400/1A1A2E/DAA520?text=Polaris+Academy';
        }
    });
});

function updateHeroContent(index) {
    const content = heroContent[index];
    if (content) {
        const heroBadge = document.querySelector('.hero-badge');
        const heroTitle = document.querySelector('.hero-content h1');
        const heroSub = document.querySelector('.hero-content p');
        
        if (heroBadge) heroBadge.innerHTML = translations[currentLang][`heroSlide${index}Badge`] || content.badge;
        if (heroTitle) heroTitle.innerHTML = translations[currentLang][`heroSlide${index}Title`] || content.title;
        if (heroSub) heroSub.textContent = translations[currentLang][`heroSlide${index}Sub`] || content.sub;
    }
}