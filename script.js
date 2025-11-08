// ========================================
// Pathway Systems Studio - Interactions
// ========================================

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    const navbarHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in animation to cards and elements
const animateElements = document.querySelectorAll(
    '.service-card, .pillar-card, .approach-step, .philosophy-card'
);

animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========================================
// Parallax Effect on Hero Gradient
// ========================================

const heroGradient = document.querySelector('.hero-gradient');

if (heroGradient) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroGradient.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// ========================================
// Contact Form Handling
// ========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        organization: document.getElementById('organization').value,
        message: document.getElementById('message').value
    };
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        background: linear-gradient(135deg, #0077B6 0%, #FFA500 100%);
        color: white;
        padding: 1.25rem 2rem;
        border-radius: 12px;
        margin-top: 1.5rem;
        text-align: center;
        animation: fadeInUp 0.5s ease;
        font-weight: 600;
    `;
    successMessage.textContent = 'Thank you for reaching out! We\'ll respond within 48 hours to begin exploring how we can help.';
    
    // Remove any existing success messages
    const existingMessage = contactForm.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    successMessage.className = 'success-message';
    contactForm.appendChild(successMessage);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 7 seconds
    setTimeout(() => {
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(-20px)';
        successMessage.style.transition = 'all 0.3s ease';
        setTimeout(() => successMessage.remove(), 300);
    }, 7000);
    
    // Log form data (in production, send this to your backend)
    console.log('Contact form submitted:', formData);
    
    // SETUP NOTE: To actually send emails, integrate with:
    // - Formspree: https://formspree.io
    // - EmailJS: https://www.emailjs.com
    // - Netlify Forms (if deploying on Netlify)
    // - Or your own backend server
});

// ========================================
// Smooth Reveal for Approach Quote
// ========================================

const approachQuote = document.querySelector('.approach-quote');

if (approachQuote) {
    const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    approachQuote.style.opacity = '0';
    approachQuote.style.transform = 'translateY(30px)';
    approachQuote.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    quoteObserver.observe(approachQuote);
}

// ========================================
// Service Card Hover Effects Enhancement
// ========================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// Scroll Progress Indicator (Optional)
// ========================================

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #0077B6 0%, #FFA500 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Uncomment to enable scroll progress indicator
// createScrollProgress();

// ========================================
// Console Branding
// ========================================

console.log(
    '%c🌊 Pathway Systems Studio',
    'font-size: 24px; font-weight: bold; color: #0077B6; text-shadow: 2px 2px 4px rgba(0,119,182,0.2);'
);

console.log(
    '%cDesigning systems for human transformation',
    'font-size: 14px; color: #FFA500; font-style: italic;'
);

console.log(
    '%c\n💡 Built with care • Scientific yet soulful • Clean yet adventurous • Structured yet alive\n',
    'font-size: 12px; color: #465362;'
);

// ========================================
// Logo Error Handling Enhancement
// ========================================

window.addEventListener('load', () => {
    const logoImage = document.querySelector('.logo-image');
    const logoText = document.querySelector('.logo-text');
    
    if (logoImage && logoImage.complete && logoImage.naturalHeight === 0) {
        // Logo failed to load, ensure text logo is visible
        logoImage.style.display = 'none';
        if (logoText) {
            logoText.style.display = 'flex';
        }
    }
});

// ========================================
// Debounce Helper for Performance
// ========================================

function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler for better performance
const debouncedScroll = debounce(() => {
    // Any expensive scroll operations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ========================================
// Accessibility Enhancements
// ========================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Focus management for mobile menu
hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        const firstLink = navMenu.querySelector('a');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }
});

// ========================================
// Page Load Animation
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Dynamic Copyright Year
// ========================================

const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Pathway Systems Studio. All rights reserved.`;
}
