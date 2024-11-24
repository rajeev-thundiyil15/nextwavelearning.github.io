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
            e.preventDefault();
            console.log('Button clicked');
            
            // Explicitly add/remove the active class
            if (this.navMenu.classList.contains('active')) {
                this.navMenu.classList.remove('active');
                this.menuBtn.classList.remove('active');
                console.log('Removing active class');
            } else {
                this.navMenu.classList.add('active');
                this.menuBtn.classList.add('active');
                console.log('Adding active class');
            }
            
            // Log the updated state
            console.log('Menu classes after toggle:', this.navMenu.classList.value);
            console.log('Button classes after toggle:', this.menuBtn.classList.value);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
}); 