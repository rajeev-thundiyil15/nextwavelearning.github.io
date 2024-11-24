class Navigation {
    constructor() {
        this.nav = document.querySelector('.navbar');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        
        this.init();
    }
    
    init() {
        // Handle scroll effects
        this.handleScroll();
        
        // Handle mobile menu
        this.handleMobileMenu();
        
        // Handle smooth scrolling
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
        this.mobileMenuBtn?.addEventListener('click', () => {
            this.navLinks.classList.toggle('active');
            this.mobileMenuBtn.classList.toggle('active');
        });
    }
    
    handleSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                target?.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                this.navLinks.classList.remove('active');
                this.mobileMenuBtn?.classList.remove('active');
            });
        });
    }
} 

document.addEventListener('DOMContentLoaded', function() {
    // Get the menu button and nav links elements
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Add click event to menu button
    menuBtn.addEventListener('click', function() {
        // Toggle active class on both elements
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Update aria-expanded attribute
        const isExpanded = menuBtn.classList.contains('active');
        menuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}); 