// Global utilities and functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeComponents();
    
    // Add intersection observer for animations
    setupScrollAnimations();
    
    // Initialize form handlers
    setupFormHandlers();
});

function initializeComponents() {
    // Add loading states to buttons
    document.querySelectorAll('button, a').forEach(button => {
        if (button.getAttribute('href') || button.type === 'submit') {
            button.addEventListener('click', function(e) {
                if (!this.classList.contains('no-loading')) {
                    this.classList.add('loading');
                    this.innerHTML = '<div class="loading-spinner"></div>';
                    setTimeout(() => {
                        this.classList.remove('loading');
                    }, 2000);
                }
            });
        }
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .hover-lift, .service-card').forEach(el => {
        observer.observe(el);
    });
}

function setupFormHandlers() {
    // Handle all forms with WhatsApp submission
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Format message for WhatsApp
            const message = formatWhatsAppMessage(data);
            
            // Open WhatsApp with pre-filled message
            const phoneNumber = '+224620670758';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Show success message and redirect
            showNotification('Formulaire envoyé ! Redirection vers WhatsApp...', 'success');
            
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                form.reset();
            }, 1000);
        });
    });
}

function formatWhatsAppMessage(data) {
    return `🔷 NOUVELLE DEMANDE BONPLAN ARCHITECTURE

👤 Nom: ${data.name || 'Non spécifié'}
📧 Email: ${data.email || 'Non spécifié'}
📱 Téléphone: ${data.phone || 'Non spécifié'}
🏗️ Type de projet: ${data.project_type || 'Non spécifié'}
💰 Budget: ${data.budget || 'Non spécifié'}
📍 Localisation: ${data.location || 'Non spécifié'}

📝 Message:
${data.message || 'Aucun message'}

---
Site web: ArchiTech Blueprints`;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-600 text-white' : 
        type === 'error' ? 'bg-red-600 text-white' : 
        'bg-blue-600 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Smooth scroll to sections
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add event listeners for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScrollTo(this.getAttribute('href'));
    });
});