// ============================================
// VERITAS CONSULTING - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ---------- Mobile Hamburger Menu ----------
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('mainNav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('open');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Close menu on link click (mobile)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('open');
                const icon = hamburger?.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // ---------- Header Scroll Effect ----------
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ---------- Contact Form ----------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name')?.value || '';
            const organisation = document.getElementById('organisation')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const phone = document.getElementById('phone')?.value || '';
            const area = document.getElementById('areaOfInterest')?.value || '';
            const message = document.getElementById('message')?.value || '';

            const subject = `Consultation Request from ${name}`;
            const body = `Name: ${name}\nOrganisation: ${organisation}\nEmail: ${email}\nPhone: ${phone}\nArea of Interest: ${area}\n\nMessage:\n${message}`;

            window.location.href = `mailto:infovc@veritasconsul.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            alert('Thank you for reaching out! Your request has been sent to infovc@veritasconsul.com. We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // ---------- Smooth Scroll for Anchor Links ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---------- Scroll Animation ----------
    const observerOptions = {
        threshold: 0.0001,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.tile, .industry-tile, .article-tile, .stat-item, .service-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

});