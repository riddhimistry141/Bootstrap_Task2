// Navigation active-link management
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar .nav-link');

    function setActiveByHash() {
        const hash = window.location.hash || '#home';
        let matched = false;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
                matched = true;
            } else {
                link.classList.remove('active');
            }
        });
        if (!matched) {
            const homeLink = document.querySelector('.navbar .nav-link[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    window.addEventListener('hashchange', setActiveByHash);

    if (window.location.hash !== '#home') {
        window.location.replace(window.location.pathname + '#home');
    } else {
        setActiveByHash();
    }
});

// Scroll animation for stats section — observe individual counters and run once
const statsSection = document.getElementById('stats-section');
if (statsSection) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statsSection.classList.add('animate-in');
                // stop observing this target so animation runs only once
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    observer.observe(statsSection);
}