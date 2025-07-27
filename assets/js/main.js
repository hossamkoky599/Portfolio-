// Portfolio data with professional images
const portfolioData = [
    {
        title: "Movie Discovery App",
        description: "React-based movie discovery application with API integration featuring dynamic search, detailed movie information, and responsive design.",
        image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
        liveDemo: "https://movie-app-4n6i.vercel.app/",
        codeLink: "#",
        technologies: ["React", "API Integration", "Responsive Design"]
    },
    {
        title: "Crowdfunding Platform",
        description: "Full-stack crowdfunding platform built with React and Django, featuring user authentication, project management, and secure payment processing.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
        liveDemo: "https://crowd-funding-react-iti.vercel.app/",
        codeLink: "#",
        technologies: ["React", "Django", "Payment Gateway"]
    },
    {
        title: "E-commerce Platform",
        description: "Modern e-commerce website with shopping cart functionality, product catalog, user management, and order processing system.",
        image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
        liveDemo: "https://ecommerce-react-lab.vercel.app/",
        codeLink: "#",
        technologies: ["React", "Shopping Cart", "Payment Integration"]
    },
    {
        title: "Coffee Shop Design",
        description: "Responsive coffee shop website with modern design, interactive menu, location finder, and smooth animations throughout.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
        liveDemo: "https://hossamkoky599.github.io/Ecommerce-Design/",
        codeLink: "#",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
        title: "Frontend Template",
        description: "Clean and modern frontend template with animations, featuring component-based architecture and customizable design system.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
        liveDemo: "https://hossamkoky599.github.io/front-template/",
        codeLink: "#",
        technologies: ["HTML", "CSS", "JavaScript", "Animations"]
    },
    {
        title: "Coffee Design v2",
        description: "Enhanced coffee shop design with improved UX, advanced animations, customer reviews system, and integrated booking functionality.",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
        liveDemo: "https://hossamkoky599.github.io/Ecommerce-Design/",
        codeLink: "#",
        technologies: ["HTML", "CSS", "JavaScript", "UX/UI"]
    }
];

// Global variables
let currentGalleryIndex = 0;
let isGalleryOpen = false;

// Initialize EmailJS
(function () {
    emailjs.init("W7zNsZAhAbL_7jVEe");
})();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initPreloader();
    initThemeToggle();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initSmoothScrolling();
    initParallaxEffects();
    initGallery();
    
    // Initialize additional effects after page load
    setTimeout(() => {
        initTypingEffect();
        initPortfolioEffects();
        initCVDownload();
        initParticleSystem();
        initServiceCardEffects();
        initSectionAnimations();
        initImageLoading();
    }, 100);
});

// Preloader functionality
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressFill = document.querySelector('.progress-fill');
    let progress = 0;
    
    // Simulate loading progress
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Hide preloader after loading is complete
            setTimeout(() => {
                preloader.classList.add('fade-out');
                document.body.style.overflow = 'visible';
                
                // Remove preloader from DOM after animation
                setTimeout(() => {
                    if (preloader) preloader.remove();
                }, 500);
            }, 500);
        }
        if (progressFill) progressFill.style.width = progress + '%';
    }, 100);
    
    // Hide body overflow during preloading
    document.body.style.overflow = 'hidden';
    
    // Ensure preloader hides even if something goes wrong
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'visible';
            setTimeout(() => {
                if (preloader) preloader.remove();
            }, 500);
        }
    }, 5000);
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (!themeToggle) return;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeToggle(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply theme with smooth transition
        html.style.transition = 'all 0.3s ease';
        html.setAttribute('data-theme', newTheme);
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
        updateThemeToggle(newTheme);
        
        // Remove transition after theme change
        setTimeout(() => {
            html.style.transition = '';
        }, 300);
        
        createRippleEffect(themeToggle);
    });
}

function updateThemeToggle(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    
    const track = toggle.querySelector('.theme-toggle-track');
    if (track) {
        if (theme === 'dark') {
            track.style.background = 'linear-gradient(135deg, #1e293b, #334155)';
        } else {
            track.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
        }
    }
}

function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = rect.width / 2 - size / 2 + 'px';
    ripple.style.top = rect.height / 2 - size / 2 + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Add ripple animation keyframes if not exists
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Navigation functionality
function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (menuToggle && navCenter) {
        menuToggle.addEventListener('click', function() {
            navCenter.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            
            if (navCenter.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navCenter) navCenter.classList.remove('active');
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', debounce(() => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }, 10));
    
    // Active nav link on scroll
    window.addEventListener('scroll', debounce(() => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 10));
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('portfolio-item')) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 300);
                
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.querySelector('.form-message');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        if (formMessage) {
            formMessage.textContent = 'Sending message...';
            formMessage.style.color = '#94a3b8';
            formMessage.style.display = 'block';
        }
        
        // Send email using EmailJS
        emailjs.sendForm('service_kd8t4fp', 'template_bwqe1qt', contactForm)
            .then(function(response) {
                if (formMessage) {
                    formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
                    formMessage.style.color = '#10b981';
                    formMessage.style.animation = 'bounce 0.5s ease-in-out';
                }
                contactForm.reset();
                
                setTimeout(() => {
                    if (formMessage) {
                        formMessage.style.display = 'none';
                        formMessage.style.animation = '';
                    }
                }, 5000);
            })
            .catch(function(error) {
                console.error('EmailJS error:', error);
                if (formMessage) {
                    formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again.';
                    formMessage.style.color = '#ef4444';
                }
                
                setTimeout(() => {
                    if (formMessage) formMessage.style.display = 'none';
                }, 5000);
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
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
}

// Parallax effects
function initParallaxEffects() {
    window.addEventListener('scroll', debounce(() => {
        const scrolled = window.pageYOffset;
        
        // CV section parallax
        const cvMockup = document.querySelector('.cv-mockup');
        if (cvMockup) {
            const cvSection = document.getElementById('cv');
            if (cvSection) {
                const cvRect = cvSection.getBoundingClientRect();
                
                if (cvRect.top < window.innerHeight && cvRect.bottom > 0) {
                    const progress = (window.innerHeight - cvRect.top) / (window.innerHeight + cvRect.height);
                    const translateY = (progress - 0.5) * 50;
                    cvMockup.style.transform = `perspective(1000px) rotateY(-15deg) rotateX(10deg) translateY(${translateY}px)`;
                }
            }
        }
    }, 16));
}

// Gallery functionality
function initGallery() {
    createThumbnails();
    
    // Close gallery when clicking outside
    const galleryModal = document.getElementById('portfolio-gallery');
    if (galleryModal) {
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                closeGallery();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!isGalleryOpen) return;
            
            switch(e.key) {
                case 'Escape':
                    closeGallery();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        });
    }
}

function createThumbnails() {
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    if (!thumbnailsContainer) return;
    
    thumbnailsContainer.innerHTML = '';
    
    portfolioData.forEach((item, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
        thumbnail.addEventListener('click', () => {
            currentGalleryIndex = index;
            updateGalleryContent();
            updateThumbnails();
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function openGallery(index) {
    currentGalleryIndex = index;
    isGalleryOpen = true;
    
    const galleryModal = document.getElementById('portfolio-gallery');
    if (galleryModal) {
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        updateGalleryContent();
        updateThumbnails();
    }
}

function closeGallery() {
    isGalleryOpen = false;
    
    const galleryModal = document.getElementById('portfolio-gallery');
    if (galleryModal) {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'visible';
    }
}

function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % portfolioData.length;
    updateGalleryContent();
    updateThumbnails();
}

function prevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + portfolioData.length) % portfolioData.length;
    updateGalleryContent();
    updateThumbnails();
}

function updateGalleryContent() {
    const item = portfolioData[currentGalleryIndex];
    
    const galleryImg = document.getElementById('gallery-img');
    const galleryTitle = document.getElementById('gallery-title');
    const galleryDescription = document.getElementById('gallery-description');
    const galleryLinks = document.getElementById('gallery-links');
    
    if (galleryImg) galleryImg.src = item.image;
    if (galleryTitle) galleryTitle.textContent = item.title;
    if (galleryDescription) galleryDescription.textContent = item.description;
    
    if (galleryLinks) {
        galleryLinks.innerHTML = `
            <a href="${item.liveDemo}" class="portfolio-link primary" target="_blank">Live Demo</a>
            <a href="${item.codeLink}" class="portfolio-link secondary">View Code</a>
        `;
    }
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentGalleryIndex);
    });
}

// Typing effect for hero title
// function initTypingEffect() {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.innerHTML;
//         heroTitle.innerHTML = '';
        
//         let i = 0;
//         const typeWriter = () => {
//             if (i < originalText.length) {
//                 heroTitle.innerHTML += originalText.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, 80);
//             }
//         };
        
//         setTimeout(typeWriter, 1000);
//     }
// }
class AnimatedTyping {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = Array.isArray(texts) ? texts : [texts];
        this.options = {
            typeSpeed: 80,
            showCursor: true,
            cursorChar: '|',
            loop: false,
            ...options
        };
        
        this.currentCharIndex = 0;
        this.init();
    }
    
    init() {
        if (this.options.showCursor) {
            this.addCursor();
        }
        this.type();
    }
    
    addCursor() {
        this.cursor = document.createElement('span');
        this.cursor.className = 'typing-cursor';
        this.cursor.innerHTML = this.options.cursorChar;
        this.cursor.style.color = '#6366f1';
        this.cursor.style.animation = 'blink 1s infinite';
    }
    
    type() {
        const currentText = this.texts[0];
        
        if (this.currentCharIndex <= currentText.length) {
            const textToShow = currentText.substring(0, this.currentCharIndex);
            // Use innerHTML instead of textContent to render HTML tags
            this.element.innerHTML = textToShow;
            
            if (this.options.showCursor) {
                this.element.appendChild(this.cursor);
            }
            
            this.currentCharIndex++;
            setTimeout(() => this.type(), this.options.typeSpeed);
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Clear the existing content first
        heroTitle.innerHTML = '';
        
        // Start the typing animation with HTML content
        new AnimatedTyping(heroTitle, ['Hossam <span class="gradient-text">Hassan</span>'], {
            typeSpeed: 80,
            showCursor: true
        });
    }
});

// Portfolio item hover effects
function initPortfolioEffects() {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// CV download tracking
function initCVDownload() {
    const cvButton = document.querySelector('.cv-download-btn');
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            // Add download animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Track download
            console.log('CV downloaded');
            
            // Show success message
            showSuccessMessage('<i class="fas fa-download"></i> CV download started!');
        });
    }
}

function showSuccessMessage(message) {
    const successMsg = document.createElement('div');
    successMsg.innerHTML = message;
    successMsg.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            successMsg.remove();
        }, 300);
    }, 3000);
}

// Particle system for hero section
function initParticleSystem() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: linear-gradient(135deg, #6366f1, #06b6d4);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.7;
            animation: float-particle 6s ease-in-out infinite;
            z-index: 1;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        hero.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 6000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
    
    // Add particle animation CSS if not exists
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float-particle {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 0.7;
                }
                90% {
                    opacity: 0.7;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Service card tilt effect
function initServiceCardEffects() {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Add section animations
function initSectionAnimations() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        sectionObserver.observe(section);
    });
    
    // Add animation keyframes
    if (!document.querySelector('#section-animations')) {
        const style = document.createElement('style');
        style.id = 'section-animations';
        style.textContent = `
            @keyframes slideInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add loading animations to portfolio images
function initImageLoading() {
    const images = document.querySelectorAll('.portfolio-image img, .profile-image img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        // Set initial state
        img.style.opacity = '0';
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'all 0.5s ease';
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }
    });
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'T' to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) themeToggle.click();
        }
    }
    
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        const navCenter = document.querySelector('.nav-center');
        const menuToggle = document.getElementById('menu-toggle');
        
        if (navCenter && navCenter.classList.contains('active')) {
            navCenter.classList.remove('active');
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }
    }
});

// Performance optimization: Debounce function
function debounce(func, wait) {
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

// Intersection Observer for better performance
function createIntersectionObserver(callback, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}

// Add smooth reveal animations for cards
function initCardAnimations() {
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .skill-item');
    
    const cardObserver = createIntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
}

// Add loading state management
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// Enhanced error handling for EmailJS
function handleEmailError(error) {
    console.error('Email sending failed:', error);
    
    let errorMessage = 'Failed to send message. Please try again.';
    
    if (error.status === 400) {
        errorMessage = 'Invalid email format. Please check your email address.';
    } else if (error.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
    } else if (error.status >= 500) {
        errorMessage = 'Server error. Please try again later.';
    }
    
    return errorMessage;
}

// Add viewport meta tag management for mobile
function initMobileViewport() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        // Prevent zoom on input focus for iOS
        let viewportContent = viewport.getAttribute('content');
        if (!/maximum-scale/.test(viewportContent)) {
            viewport.setAttribute('content', viewportContent + ', maximum-scale=1.0');
        }
    }
}

// Add touch support for mobile gallery navigation
function initTouchSupport() {
    const galleryModal = document.getElementById('portfolio-gallery');
    if (!galleryModal) return;
    
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    galleryModal.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });
    
    galleryModal.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Swipe detection
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                prevImage(); // Swipe right
            } else {
                nextImage(); // Swipe left
            }
        }
    }, { passive: true });
}

// Initialize performance monitoring
function initPerformanceMonitoring() {
    // Monitor loading performance
    window.addEventListener('load', function() {
        const perfData = performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    });
    
    // Monitor scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                scrollTimeout = null;
                // Perform scroll-based operations here
            }, 16); // ~60fps
        }
    }, { passive: true });
}

// Initialize accessibility features
function initAccessibility() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (button.querySelector('i.fa-bars')) {
            button.setAttribute('aria-label', 'Toggle navigation menu');
        } else if (button.querySelector('i.fa-times')) {
            button.setAttribute('aria-label', 'Close navigation menu');
        } else if (button.classList.contains('view-btn')) {
            button.setAttribute('aria-label', 'View project details');
        }
    });
}

// Initialize lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add error boundary for JavaScript errors
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // You could send error reports to a logging service here
    // analytics.track('javascript_error', { message: e.message, stack: e.error.stack });
});

// Add unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    
    // Prevent the default browser console error
    e.preventDefault();
});

// Initialize all additional features
document.addEventListener('DOMContentLoaded', function() {
    initMobileViewport();
    initTouchSupport();
    initPerformanceMonitoring();
    initAccessibility();
    initLazyLoading();
    initCardAnimations();
});

// Export functions for global access
window.openGallery = openGallery;
window.closeGallery = closeGallery;
window.nextImage = nextImage;
window.prevImage = prevImage;