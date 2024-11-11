class FaqAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }
    
    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question?.addEventListener('click', () => this.toggleItem(item));
        });
    }
    
    toggleItem(item) {
        const isOpen = item.classList.contains('active');
        
        // Close all items
        this.faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it was closed
        if (!isOpen) {
            item.classList.add('active');
        }
    }
} 