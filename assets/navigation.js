/**
 * Immigration Leads - Sistema de Navegación Global
 * Transiciones suaves y ayudas para usuarios no técnicos
 */

// ==========================================
// 1. SISTEMA DE TRANSICIONES ENTRE PÁGINAS
// ==========================================

class PageTransition {
    constructor() {
        this.loader = this.createLoader();
        this.setupNavigationInterceptor();
    }
    
    createLoader() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(loader);
        return loader;
    }
    
    setupNavigationInterceptor() {
        // Interceptar todos los clicks en links internos
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            
            if (!link) return;
            
            const href = link.getAttribute('href');
            
            // Solo interceptar links internos (.html)
            if (href && href.endsWith('.html') && !link.target) {
                e.preventDefault();
                this.navigateTo(href);
            }
        });
    }
    
    navigateTo(url) {
        // Mostrar loader
        this.loader.classList.add('active');
        
        // Pequeño delay para que se vea la animación
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }
}

// ==========================================
// 2. NAVEGACIÓN GLOBAL
// ==========================================

class GlobalNavigation {
    constructor() {
        this.currentPage = this.detectCurrentPage();
        this.render();
    }
    
    detectCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('index.html') || path.endsWith('/')) return 'home';
        if (path.includes('landing.html')) return 'landing';
        if (path.includes('venta.html')) return 'venta';
        if (path.includes('app.html')) return 'app';
        if (path.includes('dashboard.html')) return 'dashboard';
        if (path.includes('ai-assistant.html')) return 'ai-assistant';
        return 'home';
    }
    
    render() {
        const nav = document.createElement('nav');
        nav.className = 'global-nav';
        nav.innerHTML = `
            <div class="global-nav-container">
                <a href="index.html" class="nav-brand">
                    <span class="nav-brand-icon">⚖️</span>
                    <span>Immigration Leads</span>
                </a>
                <div class="nav-links">
                    <a href="app.html" class="nav-link ${this.currentPage === 'app' ? 'active' : ''}" 
                       data-tooltip="Gestiona tus leads">
                        <span>📋</span> Panel
                    </a>
                    <a href="dashboard.html" class="nav-link ${this.currentPage === 'dashboard' ? 'active' : ''}"
                       data-tooltip="Ver estadísticas">
                        <span>📊</span> Analytics
                    </a>
                    <a href="ai-assistant.html" class="nav-link ${this.currentPage === 'ai-assistant' ? 'active' : ''}"
                       data-tooltip="Sugerencias inteligentes">
                        <span>🤖</span> IA
                    </a>
                </div>
            </div>
        `;
        
        // Insertar al principio del body
        document.body.insertBefore(nav, document.body.firstChild);
        
        // Agregar breadcrumbs
        this.renderBreadcrumbs();
    }
    
    renderBreadcrumbs() {
        const breadcrumbsMap = {
            'home': [{ text: 'Inicio', url: 'index.html', active: true }],
            'landing': [
                { text: 'Inicio', url: 'index.html' },
                { text: 'Landing', active: true }
            ],
            'venta': [
                { text: 'Inicio', url: 'index.html' },
                { text: 'Precios', active: true }
            ],
            'app': [
                { text: 'Inicio', url: 'index.html' },
                { text: 'Panel de Leads', active: true }
            ],
            'dashboard': [
                { text: 'Inicio', url: 'index.html' },
                { text: 'Analytics', active: true }
            ],
            'ai-assistant': [
                { text: 'Inicio', url: 'index.html' },
                { text: 'AI Assistant', active: true }
            ]
        };
        
        const items = breadcrumbsMap[this.currentPage] || breadcrumbsMap['home'];
        
        const breadcrumbs = document.createElement('div');
        breadcrumbs.className = 'breadcrumbs';
        breadcrumbs.innerHTML = `
            <div class="breadcrumbs-container">
                ${items.map((item, index) => `
                    ${index > 0 ? '<span class="breadcrumb-separator">›</span>' : ''}
                    ${item.active 
                        ? `<span class="breadcrumb-item active">${item.text}</span>`
                        : `<a href="${item.url}" class="breadcrumb-item">${item.text}</a>`
                    }
                `).join('')}
            </div>
        `;
        
        const nav = document.querySelector('.global-nav');
        nav.after(breadcrumbs);
    }
}

// ==========================================
// 3. SISTEMA DE AYUDA (PARA NO TÉCNICOS)
// ==========================================

class HelpSystem {
    constructor() {
        this.render();
        this.setupOnboarding();
    }
    
    render() {
        const helpBadge = document.createElement('div');
        helpBadge.className = 'help-badge tooltip';
        helpBadge.setAttribute('data-tooltip', '¿Necesitas ayuda?');
        helpBadge.innerHTML = '?';
        helpBadge.onclick = () => this.showHelp();
        document.body.appendChild(helpBadge);
    }
    
    showHelp() {
        const helpMessages = {
            'home': {
                title: '👋 ¡Bienvenido!',
                text: 'Este es el portal principal. Haz click en cualquier tarjeta para acceder a esa sección.'
            },
            'app': {
                title: '📋 Panel de Leads',
                text: 'Aquí puedes ver y gestionar todos tus leads. Los leads con borde verde son viables (contacta primero a estos).'
            },
            'dashboard': {
                title: '📊 Dashboard',
                text: 'Aquí ves estadísticas de tus leads. Las gráficas se actualizan automáticamente.'
            },
            'ai-assistant': {
                title: '🤖 AI Assistant',
                text: 'Selecciona un lead de la izquierda y la IA te dirá exactamente qué hacer con él.'
            }
        };
        
        const currentPage = new GlobalNavigation().detectCurrentPage();
        const message = helpMessages[currentPage] || helpMessages['home'];
        
        const overlay = document.createElement('div');
        overlay.className = 'onboarding-overlay active';
        overlay.innerHTML = `
            <div class="onboarding-card">
                <div class="onboarding-icon">${message.title.split(' ')[0]}</div>
                <h2 class="onboarding-title">${message.title.split(' ').slice(1).join(' ')}</h2>
                <p class="onboarding-text">${message.text}</p>
                <div class="onboarding-actions">
                    <button class="btn btn-primary" onclick="this.closest('.onboarding-overlay').remove()">
                        ¡Entendido!
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Click fuera cierra
        overlay.onclick = (e) => {
            if (e.target === overlay) overlay.remove();
        };
    }
    
    setupOnboarding() {
        // Mostrar onboarding solo la primera vez
        const hasSeenOnboarding = localStorage.getItem('immigration-onboarding-seen');
        
        if (!hasSeenOnboarding) {
            setTimeout(() => {
                this.showOnboarding();
                localStorage.setItem('immigration-onboarding-seen', 'true');
            }, 1000);
        }
    }
    
    showOnboarding() {
        const overlay = document.createElement('div');
        overlay.className = 'onboarding-overlay active';
        overlay.innerHTML = `
            <div class="onboarding-card">
                <div class="onboarding-icon">👋</div>
                <h2 class="onboarding-title">¡Bienvenido a Immigration Leads!</</h2>
                <p class="onboarding-text">
                    Este sistema te ayuda a gestionar leads de inmigración de forma inteligente.
                    <br><br>
                    <strong>Tip:</strong> Haz click en el botón <strong>?</strong> en cualquier momento si necesitas ayuda.
                </p>
                <div class="onboarding-actions">
                    <button class="btn btn-primary" onclick="this.closest('.onboarding-overlay').remove()">
                        ¡Empecemos!
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
    }
}

// ==========================================
// 4. ANIMACIONES DE ENTRADA
// ==========================================

class ContentAnimator {
    constructor() {
        this.animateOnScroll();
        this.animateOnLoad();
    }
    
    animateOnLoad() {
        // Animar todos los elementos visibles al cargar
        const elements = document.querySelectorAll('.card, .stat-card, .lead-card, .pricing-card');
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                el.style.transition = 'all 0.4s ease-out';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100); // Efecto cascada
        });
    }
    
    animateOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });
        
        // Observar elementos que entran en viewport
        document.querySelectorAll('section, .card').forEach(el => {
            observer.observe(el);
        });
    }
}

// ==========================================
// 5. MEJORAS DE TOOLTIPS
// ==========================================

class TooltipManager {
    constructor() {
        this.initTooltips();
    }
    
    initTooltips() {
        // Agregar tooltips automáticos a elementos importantes
        const tooltipTargets = {
            '.lead-score': 'Puntuación de viabilidad del lead (0-100)',
            '.status-badge': 'Estado actual del lead',
            '.btn-contact': 'Marcar como contactado',
            '.btn-schedule': 'Agendar cita con este lead',
            '.filter-tab': 'Filtrar leads por categoría'
        };
        
        Object.entries(tooltipTargets).forEach(([selector, text]) => {
            document.querySelectorAll(selector).forEach(el => {
                if (!el.hasAttribute('data-tooltip')) {
                    el.classList.add('tooltip');
                    el.setAttribute('data-tooltip', text);
                }
            });
        });
    }
}

// ==========================================
// 6. INICIALIZACIÓN AUTOMÁTICA
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Solo inicializar si no estamos en landing/venta (páginas de marketing)
    const isMarketingPage = window.location.pathname.includes('landing.html') || 
                           window.location.pathname.includes('venta.html');
    
    if (!isMarketingPage) {
        new PageTransition();
        new GlobalNavigation();
        new HelpSystem();
        new ContentAnimator();
        new TooltipManager();
    }
    
    console.log('🚀 Immigration Leads inicializado');
});

// ==========================================
// 7. UTILIDADES GLOBALES
// ==========================================

// Función para navegar con transición (accesible globalmente)
window.navigateTo = function(url) {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.classList.add('active');
        setTimeout(() => window.location.href = url, 300);
    } else {
        window.location.href = url;
    }
};

// Función para mostrar tooltips programáticamente
window.showTooltip = function(element, text) {
    element.classList.add('tooltip');
    element.setAttribute('data-tooltip', text);
};
