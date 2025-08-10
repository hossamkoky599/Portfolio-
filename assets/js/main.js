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

// Skills data for enhanced animations
const skillsData = {
    frontend: [
        { name: "React", percentage: 85, icon: "fab fa-react" },
        { name: "ES6+", percentage: 80, icon: "fab fa-js-square" },
        { name: "TypeScript", percentage: 75, icon: "fab fa-js-square" },
        { name: "Tailwind", percentage: 88, icon: "fas fa-wind" },
        { name: "Bootstrap", percentage: 90, icon: "fab fa-bootstrap" }
    ],
    backend: [
        { name: "Python", percentage: 90, icon: "fab fa-python" },
        { name: "PHP", percentage: 85, icon: "fab fa-php" },
        { name: "Django", percentage: 88, icon: "fab fa-python" },
        { name: "Flask", percentage: 82, icon: "fas fa-flask" },
        { name: "PostgreSQL", percentage: 80, icon: "fas fa-database" },
        { name: "MySQL", percentage: 85, icon: "fas fa-database" },
        { name: "Laravel", percentage: 83, icon: "fab fa-laravel" }
    ],
    tools: [
        { name: "Git", percentage: 90, icon: "fab fa-git-alt" },
        { name: "Figma", percentage: 78, icon: "fab fa-figma" },
        { name: "Docker", percentage: 75, icon: "fab fa-docker" },
        { name: "Apache", percentage: 80, icon: "fas fa-server" },
        { name: "Agile", percentage: 85, icon: "fas fa-project-diagram" }
    ]
};

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
    initEnhancedSkillBars();
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
        initSkillsInteraction();
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
                    entry.target.classList.contains('portfolio-item') ||
                    entry.target.classList.contains('skill-category')) {
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

// Enhanced skill bars animation with better performance
function initEnhancedSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width') + '%';
                
                // Reset width
                bar.style.width = '0%';
                
                // Animate after a short delay for better effect
                setTimeout(() => {
                    bar.style.width = width;
                    
                    // Add pulse effect on completion
                    setTimeout(() => {
                        bar.style.transform = 'scale(1.02)';
                        setTimeout(() => {
                            bar.style.transform = 'scale(1)';
                        }, 200);
                    }, 1500);
                }, 300);
                
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Skills interaction effects
function initSkillsInteraction() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        const skillItems = category.querySelectorAll('.skill-item');
        
        skillItems.forEach((item, index) => {
            // Add hover effect with delay
            item.addEventListener('mouseenter', function() {
                const skillProgress = this.querySelector('.skill-progress');
                const skillIcon = this.querySelector('.skill-icon');
                
                // Enhance progress bar on hover
                if (skillProgress) {
                    skillProgress.style.filter = 'brightness(1.1) saturate(1.2)';
                    skillProgress.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
                }
                
                // Add icon animation
                if (skillIcon) {
                    skillIcon.style.transform = 'scale(1.1) rotate(5deg)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const skillProgress = this.querySelector('.skill-progress');
                const skillIcon = this.querySelector('.skill-icon');
                
                if (skillProgress) {
                    skillProgress.style.filter = '';
                    skillProgress.style.boxShadow = '';
                }
                
                if (skillIcon) {
                    skillIcon.style.transform = '';
                }
            });
            
            // Add click effect for mobile
            item.addEventListener('click', function() {
                this.classList.add('skill-clicked');
                setTimeout(() => {
                    this.classList.remove('skill-clicked');
                }, 300);
            });
        });
    });
    
    // Add CSS for click effect
    if (!document.querySelector('#skill-click-styles')) {
        const style = document.createElement('style');
        style.id = 'skill-click-styles';
        style.textContent = `
            .skill-clicked {
                transform: scale(0.98) !important;
                transition: transform 0.1s ease !important;
            }
        `;
        document.head.appendChild(style);
    }
}
// Start section Skill tabs ////////////

// Enhanced Skills Tab functionality
function initSkillsTabs() {
    const tabButtons = document.querySelectorAll('.skill-tab-btn');
    const tabContents = document.querySelectorAll('.skill-tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Re-trigger skill bar animations for the new tab
            setTimeout(() => {
                animateSkillBarsInTab(targetTab);
            }, 200);
            
            // Add click effect
            createTabClickEffect(this);
        });
    });
    
    // Initialize with first tab
    if (tabButtons.length > 0) {
        setTimeout(() => {
            animateSkillBarsInTab('frontend');
        }, 500);
    }
}

// Animate skill bars in specific tab
function animateSkillBarsInTab(tabId) {
    const tabContent = document.getElementById(tabId);
    if (!tabContent) return;
    
    const skillBars = tabContent.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        // Reset width
        bar.style.width = '0%';
        
        // Animate after delay
        setTimeout(() => {
            const width = bar.getAttribute('data-width') + '%';
            bar.style.width = width;
            
            // Add completion effect
            setTimeout(() => {
                bar.style.filter = 'brightness(1.1)';
                setTimeout(() => {
                    bar.style.filter = '';
                }, 200);
            }, 1300);
        }, index * 100 + 300);
    });
}

// Create tab click effect
function createTabClickEffect(button) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: tabRipple 0.6s linear;
        pointer-events: none;
        z-index: 10;
    `;
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = rect.width / 2 - size / 2 + 'px';
    ripple.style.top = rect.height / 2 - size / 2 + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Enhanced skill bar animations with intersection observer
function initEnhancedSkillBarsWithTabs() {
    const skillsSection = document.querySelector('.skills-section');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation for active tab
                const activeTab = document.querySelector('.skill-tab-content.active');
                if (activeTab) {
                    animateSkillBarsInTab(activeTab.id);
                }
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}

// Add keyboard navigation for tabs
function initTabKeyboardNavigation() {
    const tabButtons = document.querySelectorAll('.skill-tab-btn');
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            let nextIndex = index;
            
            switch(e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    nextIndex = (index + 1) % tabButtons.length;
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    button.click();
                    return;
                case 'Home':
                    e.preventDefault();
                    nextIndex = 0;
                    break;
                case 'End':
                    e.preventDefault();
                    nextIndex = tabButtons.length - 1;
                    break;
                default:
                    return;
            }
            
            tabButtons[nextIndex].focus();
        });
    });
}

// Add smooth transitions between tab switches
function initTabTransitionEffects() {
    const tabContents = document.querySelectorAll('.skill-tab-content');
    
    tabContents.forEach(content => {
        content.addEventListener('animationend', function() {
            // Remove any lingering animation classes
            this.style.animationDelay = '';
        });
    });
}

// Add CSS for tab animations if not exists
function addTabAnimationStyles() {
    if (!document.querySelector('#tab-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'tab-animation-styles';
        style.textContent = `
            @keyframes tabRipple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .skill-tab-btn {
                position: relative;
                overflow: hidden;
            }
            
            .skill-tab-content {
                transform-origin: center top;
            }
            
            .skill-tab-btn:focus {
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
                border-radius: 12px;
            }
            
            .skill-tab-btn:focus:not(:focus-visible) {
                outline: none;
            }
            
            /* Enhanced hover effects */
            .skill-tab-btn:not(.active):hover {
                background: rgba(99, 102, 241, 0.08);
                color: var(--primary-color);
            }
            
            /* Loading animation for tab switch */
            .skills-content.loading {
                position: relative;
                overflow: hidden;
            }
            
            .skills-content.loading::after {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
                animation: loading-sweep 1s infinite;
            }
            
            @keyframes loading-sweep {
                0% { left: -100%; }
                100% { left: 100%; }
            }
            
            /* Staggered skill item animations */
            .skill-item.animate-in {
                animation: skillItemSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                opacity: 0;
                transform: translateY(30px) scale(0.8);
            }
            
            @keyframes skillItemSlideIn {
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            /* Progress bar glow effect */
            .skill-progress.animate-glow {
                box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
                animation: progressGlow 2s ease-in-out infinite alternate;
            }
            
            @keyframes progressGlow {
                from { box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3); }
                to { box-shadow: 0 0 20px rgba(99, 102, 241, 0.6), 0 0 30px rgba(99, 102, 241, 0.3); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced skill item interactions
function initAdvancedSkillInteractions() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        // Add magnetic effect on mouse move
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 0.1;
            this.style.transform = `translateY(-5px) scale(1.02) translateX(${x * strength}px) translateY(${y * strength}px)`;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Add click animation for mobile
        item.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        item.addEventListener('touchend', function() {
            this.style.transform = '';
        });
        
        // Add skill details on long press (mobile)
        let pressTimer;
        item.addEventListener('touchstart', function() {
            pressTimer = setTimeout(() => {
                showSkillTooltip(this);
            }, 500);
        });
        
        item.addEventListener('touchend', function() {
            clearTimeout(pressTimer);
        });
        
        item.addEventListener('touchmove', function() {
            clearTimeout(pressTimer);
        });
    });
}

// Show skill tooltip
function showSkillTooltip(skillItem) {
    const skillName = skillItem.querySelector('.skill-name').textContent;
    const skillPercentage = skillItem.querySelector('.skill-percentage').textContent;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip-popup';
    tooltip.innerHTML = `
        <div class="tooltip-content">
            <h4>${skillName}</h4>
            <p>Proficiency Level: ${skillPercentage}</p>
            <div class="tooltip-progress">
                <div class="tooltip-progress-bar" style="width: ${skillPercentage}"></div>
            </div>
        </div>
    `;
    
    tooltip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--dark-bg);
        color: white;
        padding: 1.5rem;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: tooltipFadeIn 0.3s ease;
        max-width: 250px;
        text-align: center;
    `;
    
    document.body.appendChild(tooltip);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        tooltip.style.animation = 'tooltipFadeOut 0.3s ease';
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.remove();
            }
        }, 300);
    }, 3000);
    
    // Add tooltip styles if not exists
    if (!document.querySelector('#tooltip-styles')) {
        const style = document.createElement('style');
        style.id = 'tooltip-styles';
        style.textContent = `
            @keyframes tooltipFadeIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            
            @keyframes tooltipFadeOut {
                from {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
                to {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
            }
            
            .tooltip-progress {
                width: 100%;
                height: 6px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 3px;
                margin-top: 1rem;
                overflow: hidden;
            }
            
            .tooltip-progress-bar {
                height: 100%;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                border-radius: 3px;
                transition: width 0.5s ease;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize all skills functionality
function initAllSkillsFeatures() {
    initSkillsTabs();
    initEnhancedSkillBarsWithTabs();
    initTabKeyboardNavigation();
    initTabTransitionEffects();
    initAdvancedSkillInteractions();
    addTabAnimationStyles();
}

// Call this function when DOM is loaded (add to your existing DOMContentLoaded event)
document.addEventListener('DOMContentLoaded', function() {
    // ... other existing initializations ...
    initAllSkillsFeatures();
});

// End section skill tabs ////////////
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
        
        // Skills section parallax
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach((category, index) => {
            const rect = category.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                const translateY = (progress - 0.5) * 20 * (index % 2 === 0 ? 1 : -1);
                category.style.transform = `translateY(${translateY}px)`;
            }
        });
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

function initTypingEffect() {
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
}

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

// Enhanced skill animation with counter effect
function initSkillCounters() {
    const skillPercentages = document.querySelectorAll('.skill-percentage');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetValue = parseInt(element.textContent);
                let currentValue = 0;
                const increment = targetValue / 50; // Adjust speed
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        currentValue = targetValue;
                        clearInterval(counter);
                    }
                    element.textContent = Math.round(currentValue) + '%';
                }, 30);
                
                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    skillPercentages.forEach(el => {
        counterObserver.observe(el);
    });
}

// Add floating animation to skill category icons
function initFloatingIcons() {
    const categoryIcons = document.querySelectorAll('.category-icon');
    
    categoryIcons.forEach((icon, index) => {
        const delay = index * 0.5;
        icon.style.animationDelay = `${delay}s`;
        
        // Add random floating motion
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 10;
            const randomY = (Math.random() - 0.5) * 10;
            
            icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                icon.style.transform = 'translate(0, 0)';
            }, 1000);
        }, 3000 + (index * 500));
    });
}

// Enhanced progress bar animation with wave effect
function initWaveProgressBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        bar.addEventListener('mouseenter', function() {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(255, 255, 255, 0.3) 50%, 
                    transparent 100%);
                animation: wave 1s ease-in-out;
                pointer-events: none;
            `;
            
            this.appendChild(wave);
            
            setTimeout(() => {
                if (wave.parentNode) {
                    wave.remove();
                }
            }, 1000);
        });
    });
    
    // Add wave animation CSS
    if (!document.querySelector('#wave-styles')) {
        const style = document.createElement('style');
        style.id = 'wave-styles';
        style.textContent = `
            @keyframes wave {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add skill tooltips
function initSkillTooltips() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const tooltip = document.createElement('div');
        const skillName = item.querySelector('.skill-name').textContent;
        const skillPercentage = item.querySelector('.skill-percentage').textContent;
        
        tooltip.className = 'skill-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <strong>${skillName}</strong><br>
                Proficiency: ${skillPercentage}
            </div>
        `;
        tooltip.style.cssText = `
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--dark-bg);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.8rem;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            z-index: 100;
            white-space: nowrap;
        `;
        
        item.style.position = 'relative';
        item.appendChild(tooltip);
        
        item.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateX(-50%) translateY(0)';
        });
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
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .skill-item, .skill-category');
    
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

// Add skill category switching animation
function initSkillCategoryAnimations() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, index) => {
        // Stagger the entrance animation
        category.style.animationDelay = `${index * 0.2}s`;
        
        // Add category-specific color schemes
        const categoryHeader = category.querySelector('.category-header');
        const skillItems = category.querySelectorAll('.skill-item');
        
        if (index === 0) { // Frontend
            category.dataset.category = 'frontend';
        } else if (index === 1) { // Backend
            category.dataset.category = 'backend';
        } else { // Tools
            category.dataset.category = 'tools';
        }
        
        // Add hover effects for the entire category
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
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
    initSkillCounters();
    initFloatingIcons();
    initWaveProgressBars();
    initSkillTooltips();
    initSkillCategoryAnimations();
});

// Export functions for global access
window.openGallery = openGallery;
window.closeGallery = closeGallery;
window.nextImage = nextImage;
window.prevImage = prevImage;// Portfolio data with professional images
