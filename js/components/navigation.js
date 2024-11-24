class Navigation {
    constructor() {
        this.menuBtn = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        
        console.log('Initial state:', {
            menuBtn: this.menuBtn,
            navMenu: this.navMenu
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
                    // Open menu
                    this.navMenu.classList.add('active');
                    this.menuBtn.classList.add('active');
                    console.log('Added active class');
                } else {
                    // Close menu
                    this.navMenu.classList.remove('active');
                    this.menuBtn.classList.remove('active');
                    console.log('Removed active class');
                }

                // Verify the change
                console.log('Current classes:', {
                    menu: this.navMenu.className,
                    button: this.menuBtn.className
                });
            } catch (error) {
                console.error('Error toggling menu:', error);
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const nav = new Navigation();
}); 