document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    // Initialize the slider
    function initSlider() {
        // Show the first slide
        showSlide(currentSlide);
        
        // Start auto-sliding
        startSlideTimer();
        
        // Add event listeners for slider controls
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Show a specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Add active class to current slide
        slides[index].classList.add('active');
    }

    // Go to the next slide
    function nextSlide() {
        // Reset the timer
        resetSlideTimer();
        
        // Increment current slide index
        currentSlide++;
        
        // If reached the end, go back to first slide
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        // Show the current slide
        showSlide(currentSlide);
    }

    // Go to the previous slide
    function prevSlide() {
        // Reset the timer
        resetSlideTimer();
        
        // Decrement current slide index
        currentSlide--;
        
        // If at the beginning, go to last slide
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        
        // Show the current slide
        showSlide(currentSlide);
    }

    // Start the auto-slide timer
    function startSlideTimer() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Reset the auto-slide timer
    function resetSlideTimer() {
        clearInterval(slideInterval);
        startSlideTimer();
    }

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const interestInput = document.getElementById('interest');
            
            // Validate inputs
            let isValid = true;
            let errorMessage = '';
            
            // Validate name
            if (!nameInput.value.trim()) {
                isValid = false;
                errorMessage += '- Please enter your name\n';
                nameInput.style.borderColor = 'red';
            } else {
                nameInput.style.borderColor = '#ddd';
            }
            
            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
                isValid = false;
                errorMessage += '- Please enter a valid email address\n';
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '#ddd';
            }
            
            // Validate interest
            if (!interestInput.value) {
                isValid = false;
                errorMessage += '- Please select what you are interested in\n';
                interestInput.style.borderColor = 'red';
            } else {
                interestInput.style.borderColor = '#ddd';
            }
            
            // If form is valid, submit it
            if (isValid) {
                // Here you would typically send the data to a server
                alert('Thank you for contacting us! We will get back to you within 24 hours.');
                contactForm.reset();
            } else {
                // Show error message
                alert('Please correct the following errors:\n' + errorMessage);
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                event.preventDefault();
                
                // Calculate the target position
                const targetPosition = targetSection.offsetTop - 80; // Adjust for header height
                
                // Smooth scroll to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize slider
    if (slides.length > 0) {
        initSlider();
    }

    // Mobile Navigation Toggle
    const header = document.querySelector('header');
    const container = header.querySelector('.container');
    
    // Add resize event to adjust padding for mobile
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            document.body.style.paddingTop = header.offsetHeight + 'px';
        } else {
            document.body.style.paddingTop = '0';
        }
    });

    // Initial call to set padding
    if (window.innerWidth <= 768) {
        document.body.style.paddingTop = header.offsetHeight + 'px';
    }
});