// Project data for lightbox
const projectsData = {
    1: {
        title: "Independent Housing",
        description: "A modern residental building with sustainable features and smart technology integration. This project showcases our commitment to innovative design and environmental responsibility.",
        image: "https://lh3.googleusercontent.com/p/AF1QipPy7czzpDEqTdOqffbE3bp72LBuDwvKJWHaoXNX=s1360-w1360-h1020-rw",
        details: [
            "Location: Shamshabad, Hyderabad",
            "Completion Date: 2022",
            "Total Area: 333 sqyd",
            "Floors: 2",
            "BHK : 3"
        ],
        features: [
            "Terrace Swimming Pool",
            "Smart building automation system",
            "Solar panel installation",
            "Car Parking Space",
            "Area surrounding garden",
            "High-speed fiber optic connectivity"
        ]
    },
    2: {
        title: "Apartment Constructions",
        description: "A luxury apartment development, each flat is designed with unique architectural elements while maintaining community cohesion.",
        image: "https://lh3.googleusercontent.com/p/AF1QipPI4y55BpGKJ9b_0h0BNnGikZUQ6GL_Q3cY-8kx=s1360-w1360-h1020-rw",
        details: [
            "Location: Alkapoor, Hyderabad",
            "Completion Date: 2023",
            "Total Units: 30+ flats",
            "Community Area: 3808 sqyd",
            "BHK: 2"
        ],
        features: [
            "Waterfront properties with private docks",
            "Community clubhouse and pool",
            "Walking trails and parks",
            "Underground utilities",
            "Smart home integration",
            "24/7 security surveillance"
        ]
    },
    3: {
        title: "Villa Housing",
        description: "A 1000 sq ft villa with advanced logistics and distribution capabilities. This state-of-the-art facility incorporates the latest in industrial automation and efficiency.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwOokD3eoKAwZQJ8TUlgFA4-nUm8NuUXt_NxJHD_bnLKnQpYEYJZ55RqyUa1NMOpYKbZwjoOZn4B3NYhkIfHcLhG6QsITdtNeqQC2Y5MhRDB6cLIGMnfPSgsU2FRnAuXbyCkRFD=s1360-w1360-h1020-rw",
        details: [
            "Location: Manikonda, Hyderabad",
            "Completion Date: 2024",
            "Total Area: 1000 sq ft",
            "Clear Height: 50 feet",
            "BHK : 4"
        ],
        features: [
            "Automated storage and retrieval system",
            "Climate-controlled sections",
            "Solar-powered facility",
            "Advanced fire suppression system",
            "Custom racking solutions"
        ]
    }
};

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (nav) nav.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Lightbox functionality
    const lightbox = document.getElementById('projectLightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Open lightbox when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openLightbox(projectId);
        });
    });
    
    // Close lightbox when X is clicked
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Close lightbox when clicking outside content
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function openLightbox(projectId) {
        const project = projectsData[projectId];
        if (!project) return;
        
        // Populate lightbox with project data
        document.getElementById('lightboxImg').src = project.image;
        document.getElementById('lightboxImg').alt = project.title;
        document.getElementById('lightboxTitle').textContent = project.title;
        document.getElementById('lightboxDescription').textContent = project.description;
        
        // Populate details
        const detailsList = document.getElementById('lightboxDetails');
        detailsList.innerHTML = '';
        project.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            detailsList.appendChild(li);
        });
        
        // Populate features
        const featuresList = document.getElementById('lightboxFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Show lightbox
        if (lightbox) {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }
    
    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission
            showFormMessage('Sending your message...', 'info');
            
            // In a real application, you would send the data to a server here
            setTimeout(() => {
                showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            }, 1500);
        });
    }
    
    function showFormMessage(text, type) {
        if (!formMessage) return;
        
        formMessage.textContent = text;
        formMessage.style.display = 'block';
        
        // Reset classes
        formMessage.className = '';
        
        // Add appropriate class based on type
        if (type === 'error') {
            formMessage.style.backgroundColor = '#fed7d7';
            formMessage.style.color = '#c53030';
        } else if (type === 'success') {
            formMessage.style.backgroundColor = '#c6f6d5';
            formMessage.style.color = '#2d784d';
        } else {
            formMessage.style.backgroundColor = '#bee3f8';
            formMessage.style.color = '#2c5282';
        }
    }
    
    // Animated counter for stats
    const statItems = document.querySelectorAll('.stat-item h3');
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    }
    
    // Intersection Observer for stats animation
    const statsSection = document.querySelector('.stats');
    
    if (statsSection && statItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statItems.forEach(item => {
                        const target = parseInt(item.getAttribute('data-count'));
                        animateCounter(item, target);
                        item.classList.add('counting');
                    });
                    observer.unobserve(statsSection);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(26, 54, 93, 0.95)';
                header.style.backdropFilter = 'blur(5px)';
            } else {
                header.style.backgroundColor = '#1a365d';
                header.style.backdropFilter = 'none';
            }
        }
    });
    
    // Add animation to service cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (serviceCards.length > 0) {
        const serviceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                    serviceObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            serviceObserver.observe(card);
        });
    }

});
