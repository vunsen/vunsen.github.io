const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".card").forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = `opacity 0.4s ease, transform 0.4s ease`;
    card.style.transitionDelay = `${i * 60}ms`;
    observer.observe(card);
});
