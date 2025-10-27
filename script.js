// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to cards
const animateElements = document.querySelectorAll('.service-card, .result-card, .testimonial-card, .case-study');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        margin-top: 1rem;
        text-align: center;
        animation: fadeInUp 0.5s ease;
    `;
    successMessage.textContent = 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.';
    
    // Remove any existing success messages
    const existingMessage = contactForm.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    successMessage.className = 'success-message';
    contactForm.appendChild(successMessage);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.style.opacity = '0';
        setTimeout(() => successMessage.remove(), 300);
    }, 5000);
    
    // Log form data (in production, you'd send this to your backend)
    console.log('Form submitted:', formData);
    
    // Note: To actually send emails, you'll need to:
    // 1. Set up a backend server (Node.js, Python, etc.)
    // 2. Use an email service (SendGrid, Mailgun, AWS SES, etc.)
    // 3. Or use a form service like Formspree, Netlify Forms, or EmailJS
});

// Add active state to navigation based on scroll position
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
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// Add number counter animation for results
const resultNumbers = document.querySelectorAll('.result-number');

const animateNumbers = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const text = target.textContent;
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');
            const hasM = text.includes('M');
            
            // Extract number
            let number = parseFloat(text.replace(/[^0-9.]/g, ''));
            
            // Animate
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current);
                if (number % 1 !== 0) {
                    displayValue = current.toFixed(1);
                }
                
                target.textContent = displayValue + (hasM ? 'M' : '') + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
            }, 30);
            
            observer.unobserve(target);
        }
    });
};

const numberObserver = new IntersectionObserver(animateNumbers, {
    threshold: 0.5
});

resultNumbers.forEach(number => {
    numberObserver.observe(number);
});

// Log message for developers
console.log('%cApex Consulting Website', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #64748b;');
console.log('%cReady to customize and deploy!', 'font-size: 14px; color: #10b981;');
