const LANG_KEY = "lang";

/* =========================
   TRANSLATIONS
========================= */
const translations = {
  ar: {
  site_title: "Elmahdi Dev | المهدي - مطور برمجيات",
  meta_desc: "Elmahdi Dev - مطور برمجيات من السودان | مواقع، تطبيقات، أنظمة ومشاريع تخرج بجودة احترافية.",
  meta_keywords: "Elmahdi Dev, برمجة, السودان, تطوير مواقع, تطبيقات, Flutter, React Native",
  og_title: "Elmahdi Dev | المهدي",
  og_desc: "نحوّل الأفكار إلى حلول رقمية حقيقية قابلة للاستخدام والتطوير.",

  nav_home: "الرئيسية",
  nav_services: "الخدمات",
  nav_portfolio: "أعمالي",
  nav_about: "من أنا",
  nav_contact: "تواصل",

  hero_title: "عندك مشروع قرب يسلّم ولسه ما اكتمل؟",
  hero_desc: "أساعدك في إكمال مشروعك أو بناء نظام كامل جاهز للاستخدام — بكود نظيف وشرح واضح لكل التفاصيل.",
  proof_text: "+50 مشروع تم تسليمه بنجاح",
  hero_cta: "ابدأ مشروعك الآن",

  services_title: "الخدمات التي أقدمها",

  service1_title: "مشاريع الطلاب",
  service1_desc: "تنفيذ مشاريع التخرج والبحوث مع شرح كامل للكود خطوة بخطوة، عشان تفهم مشروعك وتعرضه بثقة.",

  service2_title: "أنظمة الأعمال",
  service2_desc: "تطوير مواقع وتطبيقات وأنظمة إدارة مثل POS ولوحات التحكم وواجهات API حسب احتياجك.",

  service3_title: "تطبيقات الموبايل",
  service3_desc: "بناء تطبيقات حديثة باستخدام Flutter وReact Native تعمل على Android وiOS بكود واحد.",

  service4_title: "تحويل الأفكار إلى منتجات",
  service4_desc: "لو عندك فكرة فقط، أحولها إلى منتج رقمي حقيقي جاهز للنشر والاستخدام.",

  order_btn: "اطلب الخدمة",

  portfolio_title: "بعض أعمالي",

  about_title: "من أنا",
  about_text:
    "أنا المهدي، مطور برمجيات من السودان وطالب طب في المراحل الأخيرة.\n\nبدأت رحلتي مع البرمجة منذ عام 2018، واشتغلت على بناء أنظمة حقيقية قابلة للاستخدام في السوق المحلي.\n\nأعمل حالياً على تطوير تطبيقات الويب باستخدام PHP وJavaScript، مع اهتمام متزايد بـ Flutter وReact Native وDart لبناء تطبيقات حديثة متعددة المنصات.\n\nأستهدف السوق المحلي في السودان بالإضافة إلى فرص عالمية، بهدف تحويل الأفكار إلى منتجات رقمية بسيطة، قوية وقابلة للتوسع.",

  badge: "منذ 2018 | طالب طب + مطور برمجيات",

  about_cta: "خلينا نبني مشروعك القادم مع بعض",

  contact_title: "تواصل معي",
  contact_desc: "متاح عبر واتساب والبريد الإلكتروني لأي استفسار أو مشروع",
  contact_btn: "واتساب",
  email_label: "البريد الإلكتروني",

  footer_text: "Elmahdi Dev - 2026",

  wa_message: "مشروع"
},
en: {
  site_title: "Elmahdi Dev | Software Developer",
  meta_desc: "Elmahdi Dev - Sudanese software developer specializing in web apps, mobile apps, systems, and graduation projects.",
  meta_keywords: "Elmahdi Dev, developer, Sudan, web development, mobile apps, Flutter, React Native",
  og_title: "Elmahdi Dev | Software Developer",
  og_desc: "Turning ideas into real, scalable digital solutions.",

  nav_home: "Home",
  nav_services: "Services",
  nav_portfolio: "Portfolio",
  nav_about: "About",
  nav_contact: "Contact",

  hero_title: "Is your project deadline approaching and still unfinished?",
  hero_desc: "I help you complete your project or build a fully working system — with clean code and clear explanations.",
  proof_text: "+50 successfully delivered projects",
  hero_cta: "Start your project now",

  services_title: "What I offer",

  service1_title: "Student Projects",
  service1_desc: "Full implementation of graduation projects and research with step-by-step code explanations for better understanding and presentation.",

  service2_title: "Business Systems",
  service2_desc: "Websites, applications, and management systems (POS, dashboards, APIs) tailored to your business needs.",

  service3_title: "Mobile Applications",
  service3_desc: "Modern cross-platform apps using Flutter and React Native for Android and iOS with a single codebase.",

  service4_title: "Idea to Product",
  service4_desc: "I turn your idea into a real digital product ready for deployment and real-world use.",

  order_btn: "Order Service",

  portfolio_title: "My Work",

  about_title: "About Me",
  about_text:
    "I'm Elmahdi, a Sudanese software developer and final-year medical student.\n\nI started my journey in 2018, building real-world systems for practical use in local markets.\n\nI specialize in web development using PHP and JavaScript, and I'm currently expanding into Flutter, React Native, and Dart for modern cross-platform applications.\n\nMy focus is both local (Sudan) and global, aiming to transform ideas into simple, powerful, and scalable digital products.",

  badge: "Since 2018 | Med Student + Software Developer",

  about_cta: "Let’s build your next project together",

  contact_title: "Get in Touch",
  contact_desc: "Available via WhatsApp and email for inquiries or projects",
  contact_btn: "WhatsApp",
  email_label: "Email",

  footer_text: "Elmahdi Dev - 2026",

  wa_message: "Project"
}
  };

/* =========================
   SAFE GET
========================= */
function t(lang, key) {
    return translations?.[lang]?.[key] || key;
}

/* =========================
   DETECT LANGUAGE
========================= */
function detectLanguage() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && translations[saved]) return saved;

    const browser = navigator.language || "ar";
    return browser.startsWith("en") ? "en" : "ar";
}

/* =========================
   APPLY TRANSLATION
========================= */
function setLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // TEXT CONTENT SAFE BINDING
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        const value = dict[key];

        if (!value) return;

        // preserve formatting (safe improvement)
        el.innerHTML = value.replace(/\n/g, "<br>");
    });

    // META SAFE
    const metaMap = {
        description: dict.meta_desc,
        keywords: dict.meta_keywords
    };

    Object.entries(metaMap).forEach(([name, value]) => {
        const el = document.querySelector(`meta[name="${name}"]`);
        if (el && value) el.setAttribute("content", value);
    });

    // OG tags
    const ogMap = {
        "og:title": dict.og_title,
        "og:description": dict.og_desc
    };

    Object.entries(ogMap).forEach(([prop, value]) => {
        const el = document.querySelector(`meta[property="${prop}"]`);
        if (el && value) el.setAttribute("content", value);
    });

    // LANGUAGE SETTINGS
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // WhatsApp ONLY scoped
    document.querySelectorAll("[data-wa]").forEach(el => {
        const msg = lang === "ar" ? "مشروع" : "Project";
        const base = "https://wa.me/249993452125?text=";
        el.href = base + encodeURIComponent(msg);
    });

    localStorage.setItem(LANG_KEY, lang);
}

/* =========================
   PORTFOLIO SAFE LOADER
========================= */
async function loadWorks(lang) {
    const container = document.getElementById("works-container");
    if (!container) return;

    try {
        const res = await fetch("/api/works.php");

        if (!res.ok) throw new Error("API Error");

        const data = await res.json();

        const works = Array.isArray(data?.[lang]) ? data[lang] : [];

        container.innerHTML = works.length
            ? works.map(w => `
                <div class="card project">
                    <img src="${w.image || ''}" alt="${w.title || ''}" loading="lazy">
                    <h3>${w.title || ''}</h3>
                    <p>${w.description || ''}</p>
                    <a href="${w.link || '#'}" class="btn small" target="_blank">View</a>
                </div>
            `).join("")
            : "<p>No projects available</p>";

    } catch (err) {
        console.error("Portfolio load failed:", err);
        container.innerHTML = "<p>Failed to load projects</p>";
    }
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const lang = detectLanguage();

    setLang(lang);
    loadWorks(lang);
});