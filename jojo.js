// Hamburger menu toggle
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');
        
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        
        
    // Select all portfolio images
    const images = document.querySelectorAll('.portfolio-item img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('blurred');
        });
    });
    
    
    
   // Initialize EmailJS
emailjs.init("Zkcfd3XFJMRX8ognz");

document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    try {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        const response = await emailjs.sendForm(
            'service_dhd8ajj', 
            'template_xkev1mi', 
            this
        );
        
        alert('Message sent successfully!');
        this.reset();
        
    } catch (error) {
        console.error('EmailJS Error:', error);
        alert(`Failed to send message: ${error.text || 'Please try again.'}`);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
