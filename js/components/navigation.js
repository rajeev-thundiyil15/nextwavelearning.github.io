class Navigation {
    constructor() {
        this.menuBtn = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        // Toggle menu on button click
        this.menuBtn.addEventListener('click', () => {
            console.log('Menu clicked');
            this.menuBtn.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                this.menuBtn.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
}); 