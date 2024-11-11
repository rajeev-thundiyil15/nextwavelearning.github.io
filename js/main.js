// Main JavaScript file that initializes all components
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    const nav = new Navigation();
    
    // Initialize testimonials slider
    const slider = new TestimonialsSlider({
        sliderId: 'testimonials-slider',
        autoplay: true,
        interval: 5000
    });
    
    // Initialize FAQ accordion
    const faq = new FaqAccordion();
    
    // Initialize forms
    const contactForm = new FormHandler('contactForm');
    const newsletterForm = new FormHandler('newsletterForm');
    
    // Initialize newsletter popup
    const popup = new NewsletterPopup({
        delay: 5000,
        cookieDuration: 7
    });
}); 