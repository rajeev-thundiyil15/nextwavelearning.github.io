class Navigation {
    constructor() {
        this.nav = document.querySelector('.navbar');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        
        this.init();
    }
    
    init() {
        this.handleScroll();
        this.handleMobileMenu();
        this.handleSmoothScroll();
    }
    
    handleScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        });
    }
    
    handleMobileMenu() {
        if (!this.mobileMenuBtn) return;
        
        this.mobileMenuBtn.addEventListener('click', () => {
            this.navLinks.classList.toggle('active');
            this.mobileMenuBtn.classList.toggle('active');
            
            // Update aria-expanded
            const isExpanded = this.mobileMenuBtn.classList.contains('active');
            this.mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
    
    handleSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    
                    // Close mobile menu if open
                    this.navLinks.classList.remove('active');
                    if (this.mobileMenuBtn) {
                        this.mobileMenuBtn.classList.remove('active');
                        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    }
}

// Initialize the navigation
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
}); 