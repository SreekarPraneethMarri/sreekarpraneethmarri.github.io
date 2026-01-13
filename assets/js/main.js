/* assets/js/main.js */
(() => {
  'use strict';

  // ========= Basic config (edit here OR create assets/config.json to override) =========
  const SITE = {
    name: "Your Name",
    role: "Graduate Researcher · Robotics & AI",
    bio: "I’m a researcher working at the intersection of soft robotics, machine learning, and control.",
    email: "your.email@university.edu",
    gscholar: "https://scholar.google.com/",
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username/",
    twitter: "https://x.com/username",
    cv_url: "cv/SreekarPraneethMarri_CV.pdf"
  };

  // ========= Helpers =========
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Treat these as placeholders. If your HTML has other text, we won't overwrite it.
  const PLACEHOLDERS = new Set([
    "Your Name",
    "Graduate Researcher · Robotics & AI",
    "your.email@university.edu",
    "#"
  ]);

  const isEmptyOrPlaceholder = (el) => {
    if (!el) return true;
    const txt = (el.textContent || "").trim();
    if (!txt) return true;
    return PLACEHOLDERS.has(txt);
  };

  const isHrefUnset = (a) => {
    if (!a) return true;
    const href = (a.getAttribute('href') || "").trim();
    return !href || href === "#" || PLACEHOLDERS.has(href);
  };

  const setText = (sel, value, preferExisting = true) => {
    $$(sel).forEach(el => {
      if (!el) return;
      if (preferExisting && !isEmptyOrPlaceholder(el)) return;
      el.textContent = value || "";
    });
  };

  const setEmail = (sel, email, preferExisting = true) => {
    const el = $(sel);
    if (!el) return;
    if (preferExisting && !isEmptyOrPlaceholder(el)) return;
    el.textContent = email || "";
    el.href = email ? `mailto:${email}` : "#";
  };

  const setHref = (sel, url) => {
    const el = $(sel);
    if (!el || !url) return;
    if (isHrefUnset(el)) el.setAttribute('href', url);
  };

  const deepMerge = (target, src) => {
    if (!src || typeof src !== 'object') return target;
    for (const [k, v] of Object.entries(src)) {
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        if (!target[k] || typeof target[k] !== 'object') target[k] = {};
        deepMerge(target[k], v);
      } else {
        target[k] = v;
      }
    }
    return target;
  };

  // ========= Apply config to DOM =========
  const applySiteConfig = (cfg, opts = { preferExisting: true }) => {
    const { preferExisting } = opts;

    setText('#cfg-name', cfg.name, preferExisting);
    setText('#topbar-name', cfg.name, preferExisting);
    setText('#cfg-role', cfg.role, preferExisting);
    setText('#cfg-bio', cfg.bio, preferExisting);

    setEmail('#cfg-email', cfg.email, preferExisting);
    setText('#cfg-name-foot', cfg.name, preferExisting); // footer name if present

    // Socials
    setHref('#cfg-gscholar', cfg.gscholar);
    setHref('#cfg-github',   cfg.github);
    setHref('#cfg-linkedin', cfg.linkedin);
    setHref('#cfg-twitter',  cfg.twitter);

    // CV
    const cvBtn = $('#download-cv');
    if (cvBtn && cfg.cv_url) cvBtn.href = cfg.cv_url;

    // Year
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  };

  // ========= Theme toggle (persisted) =========
  const THEME_KEY = 'ap_theme_v1';
  const setTheme = (mode) => {
    document.documentElement.setAttribute('data-theme', mode);
    try { localStorage.setItem(THEME_KEY, mode); } catch {}
  };

  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved) return saved;
    } catch {}
    // Default to dark; uncomment to prefer system:
    // return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return 'dark';
  };

  const initTheme = () => {
    setTheme(getInitialTheme());
    const toggleBtn = $('#toggle-theme');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(cur === 'dark' ? 'light' : 'dark');
      });
    }
  };

  // ========= Mobile sidebar =========
  const initSidebarToggle = () => {
    const btnMenu = $('#btn-menu');
    if (btnMenu) {
      btnMenu.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-open');
        ensureSidebarOverlay();
      });
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) document.body.classList.remove('sidebar-open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') document.body.classList.remove('sidebar-open');
    });
  };

  const ensureSidebarOverlay = () => {
    let overlay = $('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      overlay.addEventListener('click', () => document.body.classList.remove('sidebar-open'));
      document.body.appendChild(overlay);
    }
    overlay.style.display = document.body.classList.contains('sidebar-open') ? 'block' : 'none';
  };

  // ========= Active nav highlight =========
  const highlightNav = () => {
    const path = (() => {
      // Normalize path: take last segment, treat "" or "/" as index.html
      let p = (location.pathname || '').split('/').filter(Boolean).pop() || 'index.html';
      // If query-based routing is used, strip query/hash
      p = p.split('?')[0].split('#')[0] || 'index.html';
      return p;
    })();

    $$('#nav a').forEach(a => {
      const href = (a.getAttribute('href') || '').split('?')[0].split('#')[0];
      const same = (href === path) ||
                   (href.endsWith('/index.html') && path === 'index.html') ||
                   (href === './' && path === 'index.html');
      a.classList.toggle('active', same);
    });
  };

  // ========= Optional external config (assets/config.json) =========
  const CONFIG_PATHS = ['assets/config.json', 'config.json', 'site.config.json'];
  const loadExternalConfig = async () => {
    for (const url of CONFIG_PATHS) {
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          return data;
        }
      } catch {
        // ignore and try next
      }
    }
    return null;
  };

  // ========= Boot =========
  const boot = async () => {
    // 1) Start with defaults
    let cfg = { ...SITE };

    // 2) Merge optional config.json if present
    const external = await loadExternalConfig();
    if (external) cfg = deepMerge(cfg, external);

    // 3) Apply to DOM (respect existing non-placeholder text in HTML)
    applySiteConfig(cfg, { preferExisting: true });

    // 4) Init behavior
    initTheme();
    initSidebarToggle();
    highlightNav();

    // Expose for debugging in console
    window.AP_SITE = cfg;
  };

  // Defer script loads with "defer", but just in case:
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
