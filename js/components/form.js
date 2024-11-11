class FormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (this.form) {
            this.init();
        }
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await this.submitForm(data);
            this.showMessage('success', 'Thank you for your submission!');
            this.form.reset();
        } catch (error) {
            this.showMessage('error', 'Something went wrong. Please try again.');
        }
    }
    
    validateForm() {
        let isValid = true;
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                this.showError(input, 'This field is required');
                isValid = false;
            } else if (input.type === 'email' && !this.validateEmail(input.value)) {
                this.showError(input, 'Please enter a valid email address');
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }
    
    validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    async submitForm(data) {
        // Implement your form submission logic here
    }
    
    showMessage(type, message) {
        // Implement your message handling logic here
    }
} 