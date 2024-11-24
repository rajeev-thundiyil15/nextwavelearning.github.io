class Navigation {
    constructor() {
        this.nav = document.querySelector('.navbar');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        
        console.log('Mobile Menu Button:', this.mobileMenuBtn);
        console.log('Nav Links:', this.navLinks);
        
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
        if (!this.mobileMenuBtn) {
            console.error('Mobile menu button not found');
            return;
        }
        
        this.mobileMenuBtn.addEventListener('click', (e) => {
            console.log('Mobile menu clicked');
            
            this.navLinks.classList.toggle('active');
            this.mobileMenuBtn.classList.toggle('active');
            
            const isExpanded = this.mobileMenuBtn.classList.contains('active');
            this.mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
            
            e.preventDefault();
            e.stopPropagation();
        });
    }
    
    handleSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    
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

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Navigation');
    new Navigation();
}); 