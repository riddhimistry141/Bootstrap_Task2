// Scroll animation for stats section — observe individual counters and run once
const statsSection = document.getElementById('stats-section');
if (statsSection) {
    const targets = statsSection.querySelectorAll('.display-4');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // stop observing this target so animation runs only once
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    targets.forEach(t => observer.observe(t));
}