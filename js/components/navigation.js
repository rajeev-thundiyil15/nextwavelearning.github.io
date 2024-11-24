class Navigation {
    constructor() {
        this.menuBtn = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        
        // Debug logs
        console.log('Navigation initialized');
        console.log('Menu Button:', this.menuBtn);
        console.log('Nav Menu:', this.navMenu);
        
        if (this.menuBtn && this.navMenu) {
            this.init();
        } else {
            console.error('Required elements not found');
        }
    }

    init() {
        this.menuBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default behavior
            console.log('Button clicked');
            this.menuBtn.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            console.log('Menu state:', this.navMenu.classList.contains('active'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && 
                !this.menuBtn.contains(e.target) && 
                this.navMenu.classList.contains('active')) {
                this.menuBtn.classList.remove('active');
                this.navMenu.classList.remove('active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
}); 