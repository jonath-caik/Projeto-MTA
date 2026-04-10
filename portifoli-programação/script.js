
// ========================================
// DOM Elements
// ========================================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('contactForm');

// ========================================
// Mobile Navigation Toggle
// ========================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes to elements
const animateElements = document.querySelectorAll(
    '.skill-category, .project-card, .timeline-item, .contact-item'
);

animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// ========================================
// Add CSS for animations
// ========================================
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-links a.active {
        color: var(--primary-color);
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
    
    /* Stagger delays for better effect */
    .skill-category:nth-child(1) { transition-delay: 0.1s; }
    .skill-category:nth-child(2) { transition-delay: 0.2s; }
    .skill-category:nth-child(3) { transition-delay: 0.3s; }
    .skill-category:nth-child(4) { transition-delay: 0.4s; }
    
    .project-card:nth-child(1) { transition-delay: 0.1s; }
    .project-card:nth-child(2) { transition-delay: 0.2s; }
    .project-card:nth-child(3) { transition-delay: 0.3s; }
    .project-card:nth-child(4) { transition-delay: 0.4s; }
    .project-card:nth-child(5) { transition-delay: 0.5s; }
    .project-card:nth-child(6) { transition-delay: 0.6s; }
    
    .timeline-item:nth-child(1) { transition-delay: 0.1s; }
    .timeline-item:nth-child(2) { transition-delay: 0.2s; }
    .timeline-item:nth-child(3) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);

// ========================================
// Form Handling
// ========================================
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Show success message (you can customize this)
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
        submitBtn.style.background = '#27ca40';
        
        // Reset form
        this.reset();
        
        // Show alert (in production, you'd send this to a backend)
        console.log('Form data:', data);
        alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ========================================
// Typewriter Effect for Hero Section
// ========================================
const typewriterText = document.querySelector('.hero-title');
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 80);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// ========================================
// Particle Background Effect (Optional Enhancement)
// ========================================
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(100, 255, 218, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
        `;
        hero.appendChild(particle);
    }
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Uncomment to enable particles
// createParticles();

// ========================================
// Counter Animation for Stats
// ========================================
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ========================================
// Lazy Loading for Images
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Back to Top Button
// ========================================
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: var(--bg-dark);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
`;

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

document.body.appendChild(backToTopBtn);

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🎯 Portfólio Profissional', 'font-size: 20px; color: #64ffda; font-weight: bold;');
console.log('%cDesenvolvido por: Seu Nome', 'color: #8892b0;');
console.log('%cTecnologias: HTML, CSS, JavaScript', 'color: #8892b0;');
console.log('%c⭐ Não se esqueça de starred o repositório!', 'color: #64ffda;');

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio carregado com sucesso!');
});