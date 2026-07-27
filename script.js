// Cookie Management
function initCookieConsent() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');

    // Check if user has already accepted cookies
    if (localStorage.getItem('vertigenics_cookies_accepted')) {
        cookieBanner.classList.add('hidden');
        return;
    }

    // Accept cookies and redirect to affiliate link
    acceptBtn.addEventListener('click', () => {
        // Set cookie acceptance in localStorage
        localStorage.setItem('vertigenics_cookies_accepted', 'true');

        // Set actual cookies for tracking
        document.cookie = "vertigenics_consent=accepted; path=/; max-age=" + (365 * 24 * 60 * 60);
        document.cookie = "vertigenics_timestamp=" + new Date().getTime() + "; path=/; max-age=" + (365 * 24 * 60 * 60);

        // Track the action
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cookie_consent', {
                'consent_status': 'accepted'
            });
        }

        // Hide banner with animation
        cookieBanner.style.animation = 'slideDown 0.5s ease reverse';
        setTimeout(() => {
            cookieBanner.classList.add('hidden');
            // Redirect to affiliate link after banner closes
            window.location.href = 'https://getmyvertigenics24.com/text.php#aff=willsantos95';
        }, 500);
    });

    // Decline cookies
    declineBtn.addEventListener('click', () => {
        localStorage.setItem('vertigenics_cookies_declined', 'true');
        document.cookie = "vertigenics_consent=declined; path=/; max-age=" + (365 * 24 * 60 * 60);

        if (typeof gtag !== 'undefined') {
            gtag('event', 'cookie_consent', {
                'consent_status': 'declined'
            });
        }

        cookieBanner.style.animation = 'slideDown 0.5s ease reverse';
        setTimeout(() => {
            cookieBanner.classList.add('hidden');
        }, 500);
    });
}

// Scroll to Order Form
function scrollToForm() {
    const formSection = document.getElementById('orderForm');
    formSection.scrollIntoView({ behavior: 'smooth' });
}

// Select Package
function selectPackage(bottles) {
    const selectElement = document.querySelector('.form-container select');
    if (bottles === 1) {
        selectElement.value = '1 Bottle - $69';
    } else if (bottles === 3) {
        selectElement.value = '3 Bottles - $49 each + Free Shipping';
    } else if (bottles === 6) {
        selectElement.value = '6 Bottles - $39 each + 2 Free Bonuses';
    }
    scrollToForm();
}

// Handle Form Submission
function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Get form values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const address = form.querySelectorAll('input[type="text"]')[1].value;
    const package_selected = form.querySelector('select').value;

    // Simple validation
    if (name && email && phone && address && package_selected) {
        // Show success message
        alert(`Thank you, ${name}! Your order has been received.\n\nWe'll contact you soon at ${phone} to confirm your order.`);

        // In a real application, you would send this data to a backend server
        console.log({
            name,
            email,
            phone,
            address,
            package: package_selected,
            timestamp: new Date().toISOString()
        });

        // Reset form
        form.reset();
    } else {
        alert('Please fill in all fields to complete your order.');
    }
}

// Countdown Timer
function startCountdown() {
    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        // Set deadline to 24 hours from now
        const deadline = new Date(now + 24 * 60 * 60 * 1000).getTime();

        const timeRemaining = deadline - now;

        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (timeRemaining < 0) {
            clearInterval(countdownTimer);
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }, 1000);
}

// Track page analytics (for Google Ads conversion tracking)
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view');
    }
}

function trackCTAClick() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
            'event_category': 'engagement',
            'event_label': 'order_now'
        });
    }
}

// Add click tracking to all CTA buttons
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cookie consent
    initCookieConsent();

    // Start countdown timer
    startCountdown();

    // Track page view
    trackPageView();

    // Add event listeners to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', trackCTAClick);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
    }
});

// Mobile menu toggle (if needed for future navigation)
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Form validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}
