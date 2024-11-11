class NewsletterPopup {
    constructor(options) {
        this.popup = document.getElementById('newsletterPopup');
        this.delay = options.delay;
        this.cookieDuration = options.cookieDuration;
        
        if (this.popup) {
            this.init();
        }
    }
    
    init() {
        if (!this.getCookie('newsletter_shown')) {
            setTimeout(() => this.showPopup(), this.delay);
        }
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        const closeBtn = this.popup.querySelector('.close-popup');
        closeBtn?.addEventListener('click', () => this.hidePopup());
        
        // Close on outside click
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.hidePopup();
            }
        });
    }
    
    showPopup() {
        this.popup.style.display = 'flex';
        setTimeout(() => this.popup.classList.add('active'), 10);
    }
    
    hidePopup() {
        this.popup.style.display = 'none';
        this.popup.classList.remove('active');
    }
    
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
} 