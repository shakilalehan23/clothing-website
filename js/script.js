document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    // We only apply this complex logic if it has absolute-top class (like home page)
    if(navbar && navbar.classList.contains('absolute-top')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass', 'text-gray-900');
                navbar.classList.remove('bg-transparent', 'text-white', 'mix-blend-difference');
                
                // Update specific internal elements
                const brandLogo = navbar.querySelector('a.text-3xl');
                if(brandLogo) {
                    brandLogo.classList.remove('mix-blend-difference', 'text-white');
                    brandLogo.classList.add('text-gray-900');
                }
                
                const icons = navbar.querySelector('.mix-blend-difference');
                if(icons) {
                    icons.classList.remove('mix-blend-difference', 'text-white');
                    icons.classList.add('text-gray-900');
                }

            } else {
                navbar.classList.remove('glass', 'text-gray-900');
                navbar.classList.add('bg-transparent', 'text-white');
                
                const brandLogo = navbar.querySelector('a.text-3xl');
                if(brandLogo) {
                    brandLogo.classList.add('mix-blend-difference');
                }
            }
        });
    }

    // Simple scroll animation observer
    const faders = document.querySelectorAll('.fade-in-section');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
