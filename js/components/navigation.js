class Navigation {
    constructor() {
        this.menuBtn = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        
        console.log('Initial state:', {
            menuBtn: this.menuBtn,
            navMenu: this.navMenu,
            navLinks: this.navLinks
        });
        
        this.init();
    }

    init() {
        if (!this.menuBtn || !this.navMenu) {
            console.error('Required elements not found');
            return;
        }

        let isMenuOpen = false;

        this.menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            console.log('Menu clicked, setting to:', isMenuOpen);

            try {
                if (isMenuOpen) {
                    this.navMenu.classList.add('active');
                    this.menuBtn.classList.add('active');
                } else {
                    this.navMenu.classList.remove('active');
                    this.menuBtn.classList.remove('active');
                }
            } catch (error) {
                console.error('Error toggling menu:', error);
            }
        });

        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Nav link clicked, closing menu');
                isMenuOpen = false;
                this.navMenu.classList.remove('active');
                this.menuBtn.classList.remove('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const nav = new Navigation();
}); 