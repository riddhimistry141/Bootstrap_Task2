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
