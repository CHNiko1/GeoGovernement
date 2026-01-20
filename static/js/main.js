/**
 * Georgian Government Website - Main JavaScript
 * Handles theme switching, search, navigation, and interactions
 */

// ================================================================
// THEME MANAGEMENT
// ================================================================

const THEME_KEY = 'gg-theme';
const LANG_KEY = 'gg-language';

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    }
}

function setTheme(theme) {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        localStorage.setItem(THEME_KEY, 'dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem(THEME_KEY, 'light');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem(THEME_KEY) || 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ================================================================
// LANGUAGE MANAGEMENT
// ================================================================

const TRANSLATIONS = {
    en: {
        'search-placeholder': 'Search news and services... (Ctrl+K)',
        'close': 'Close',
        'menu': 'Menu'
    },
    ka: {
        'search-placeholder': 'ძებნა ახ ნინებებისა და სერვისების... (Ctrl+K)',
        'close': 'დახურვა',
        'menu': 'მენიუ'
    }
};

function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    // Update current language UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.setAttribute('aria-current', 'page');
        } else {
            btn.removeAttribute('aria-current');
        }
    });
}

function getLanguage() {
    return localStorage.getItem(LANG_KEY) || 'en';
}

// ================================================================
// SEARCH FUNCTIONALITY
// ================================================================

function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchToggle) return;
    
    // Toggle search overlay
    searchToggle.addEventListener('click', () => openSearch());
    searchClose.addEventListener('click', () => closeSearch());
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', debounce(performSearch, 300));
    
    // Keyboard shortcut (Ctrl+K or Cmd+K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
    });
    
    function openSearch() {
        searchOverlay.classList.add('active');
        searchInput.focus();
    }
    
    function closeSearch() {
        searchOverlay.classList.remove('active');
        searchResults.innerHTML = '';
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        fetch(`/api/search?q=${encodeURIComponent(query)}`)
            .then(r => r.json())
            .then(data => {
                renderSearchResults(data, query);
            })
            .catch(err => console.error('Search error:', err));
    }
    
    function renderSearchResults(data, query) {
        let html = '';
        
        if (data.news && data.news.length > 0) {
            html += `<div class="search-results-group">
                <div class="search-results-group-title">News</div>`;
            data.news.forEach(item => {
                html += `<a href="/news/${item.slug}" class="search-result-item">${item.title}</a>`;
            });
            html += `</div>`;
        }
        
        if (data.services && data.services.length > 0) {
            html += `<div class="search-results-group">
                <div class="search-results-group-title">Services</div>`;
            data.services.forEach(item => {
                html += `<a href="/services" class="search-result-item">${item.name}</a>`;
            });
            html += `</div>`;
        }
        
        if (!html) {
            html = '<div class="search-results-group"><p style="padding: 1rem; color: var(--color-text-secondary);">No results found</p></div>';
        }
        
        searchResults.innerHTML = html;
    }
}

// ================================================================
// NAVIGATION MENU (MOBILE)
// ================================================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    if (!menuToggle) return;
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

function toggleMenu() {
    const menu = document.getElementById('menuToggle');
    const navMain = document.querySelector('.nav-main');
    
    if (menu.classList.contains('active')) {
        closeMenu();
    } else {
        menu.classList.add('active');
        navMain.style.display = 'flex';
    }
}

function closeMenu() {
    const menu = document.getElementById('menuToggle');
    const navMain = document.querySelector('.nav-main');
    menu.classList.remove('active');
    navMain.style.display = '';
}

// ================================================================
// TOAST NOTIFICATIONS
// ================================================================

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.innerHTML = '✕';
    closeBtn.setAttribute('aria-label', 'Close notification');
    closeBtn.addEventListener('click', () => toast.remove());
    
    toast.textContent = message;
    toast.appendChild(closeBtn);
    container.appendChild(toast);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 4000);
}

// ================================================================
// ANNOUNCEMENT BAR
// ================================================================

function closeAnnouncement() {
    const bar = document.getElementById('announcementBar');
    bar.style.display = 'none';
    localStorage.setItem('announcement-dismissed', 'true');
}

function initAnnouncement() {
    const bar = document.getElementById('announcementBar');
    if (!bar) return;
    
    if (localStorage.getItem('announcement-dismissed')) {
        bar.style.display = 'none';
    }
}

// ================================================================
// FORM HANDLING
// ================================================================

function initForms() {
    const forms = document.querySelectorAll('form[id$="Form"]');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}

function handleFormSubmit(e) {
    // Forms submit naturally, toast will show if there's success
    const form = e.target;
    if (form.id === 'contactForm') {
        // Validation is done server-side and client-side
        const formData = new FormData(form);
        // Form will submit normally
    }
}

// ================================================================
// CATEGORY FILTER
// ================================================================

function filterByCategory(category) {
    const cards = document.querySelectorAll('[data-category]');
    cards.forEach(card => {
        if (card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ================================================================
// MODAL MANAGEMENT
// ================================================================

function openServiceModal(title, description) {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('serviceModal');
        if (modal && modal.classList.contains('active')) {
            closeServiceModal();
        }
    }
});

// ================================================================
// SMOOTH SCROLLING & ANIMATIONS
// ================================================================

function initAnimations() {
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply to cards and sections
    document.querySelectorAll('.card, .news-card, .official-card, .service-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ================================================================
// UTILITY FUNCTIONS
// ================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function slugify(text) {
    return text.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[-\s]+/g, '-');
}

// ================================================================
// ACCESSIBILITY HELPERS
// ================================================================

function initAccessibility() {
    // Add focus visible styles
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('tab-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('tab-navigation');
    });
    
    // Handle skiplinks
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    skipLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ================================================================
// INITIALIZATION
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initTheme();
    initAnnouncement();
    initSearch();
    initMobileMenu();
    initForms();
    initAnimations();
    initAccessibility();
    
    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    
    // Modal close buttons
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });
});

// ================================================================
// ADDITIONAL UTILITIES FOR TEMPLATES
// ================================================================

function sendMessage(officialName) {
    showToast(`Composing message to ${officialName}...`);
}

function shareArticle(platform) {
    const title = document.querySelector('.article-header h1')?.textContent || 'Article';
    const url = window.location.href;
    
    let shareUrl;
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank');
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy link', 'error');
    });
}

// ================================================================
// PERFORMANCE MONITORING (Optional)
// ================================================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    });
}
