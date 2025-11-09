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
// Animated Stats Counter
// ========================================

const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const animateStats = () => {
    statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                // Format the number
                if (target >= 1) {
                    stat.textContent = current.toFixed(1);
                } else {
                    stat.textContent = Math.floor(current);
                }
                requestAnimationFrame(updateCount);
            } else {
                // Final value with proper formatting
                if (target === 1.5) {
                    stat.textContent = '$1.5M+';
                } else if (target === 8) {
                    stat.textContent = '8';
                } else if (target === 2.5) {
                    stat.textContent = '2.5M+';
                }
            }
        };
        
        updateCount();
    });
};

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateStats();
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

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
// Contact Form Handling with Formspree
// ========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get the submit button to show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Prepare form data
    const formData = new FormData(contactForm);
    
    try {
        // Submit to Formspree using AJAX
        const response = await fetch('https://formspree.io/f/myzlgpqe', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success! Show the success message
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
            
            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            
            // Remove success message after 7 seconds
            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transform = 'translateY(-20px)';
                successMessage.style.transition = 'all 0.3s ease';
                setTimeout(() => successMessage.remove(), 300);
            }, 7000);
            
        } else {
            // Error handling
            const errorData = await response.json();
            throw new Error(errorData.error || 'Form submission failed');
        }
        
    } catch (error) {
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.style.cssText = `
            background: #dc2626;
            color: white;
            padding: 1.25rem 2rem;
            border-radius: 12px;
            margin-top: 1.5rem;
            text-align: center;
            animation: fadeInUp 0.5s ease;
            font-weight: 600;
        `;
        errorMessage.textContent = 'Oops! Something went wrong. Please try again or email us directly at hello@pathwaysystemsstudio.com';
        
        // Remove any existing messages
        const existingMessage = contactForm.querySelector('.success-message, .error-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        errorMessage.className = 'error-message';
        contactForm.appendChild(errorMessage);
        
        // Reset button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        
        // Remove error message after 7 seconds
        setTimeout(() => {
            errorMessage.style.opacity = '0';
            errorMessage.style.transform = 'translateY(-20px)';
            errorMessage.style.transition = 'all 0.3s ease';
            setTimeout(() => errorMessage.remove(), 300);
        }, 7000);
        
        console.error('Form submission error:', error);
    }
});

// ========================================
// FAQ Accordion
// ========================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
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
