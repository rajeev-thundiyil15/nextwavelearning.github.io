class Navigation {
    constructor() {
        this.menuBtn = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        
        // Debug logs
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
            console.log('Button clicked');
            this.menuBtn.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            console.log('Nav menu classes:', this.navMenu.classList);
        });

        // Close menu when clicking links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                this.menuBtn.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
}); 