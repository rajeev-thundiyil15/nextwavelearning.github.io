class TestimonialsSlider {
    constructor(options) {
        this.slider = document.querySelector(`#${options.sliderId}`);
        this.slides = this.slider?.querySelectorAll('.testimonial-card');
        this.currentSlide = 0;
        this.autoplay = options.autoplay;
        this.interval = options.interval;
        this.intervalId = null;
        
        if (this.slider) {
            this.init();
        }
    }
    
    init() {
        this.createControls();
        this.showSlide(0);
        
        if (this.autoplay) {
            this.startAutoplay();
        }
    }
    
    createControls() {
        const controls = document.createElement('div');
        controls.className = 'slider-controls';
        
        controls.innerHTML = `
            <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
            <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
        `;
        
        this.slider.appendChild(controls);
        
        controls.querySelector('.prev-btn').addEventListener('click', () => this.prevSlide());
        controls.querySelector('.next-btn').addEventListener('click', () => this.nextSlide());
    }
    
    showSlide(index) {
        this.slides.forEach(slide => slide.style.display = 'none');
        this.slides[index].style.display = 'block';
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    startAutoplay() {
        this.intervalId = setInterval(() => this.nextSlide(), this.interval);
    }
    
    stopAutoplay() {
        clearInterval(this.intervalId);
    }
} 