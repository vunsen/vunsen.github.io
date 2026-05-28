const particleBg = document.getElementById("particle-bg");
for (let i = 0; i < 50; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDelay = Math.random() * 15 + "s";
  particle.style.animationDuration = 10 + Math.random() * 10 + "s";
  particle.style.opacity = Math.random() * 0.5 + 0.2;
  particleBg.appendChild(particle);
}

const cursorFollower = document.getElementById("cursor-follower");
document.addEventListener("mousemove", (e) => {
  cursorFollower.style.left = e.clientX + "px";
  cursorFollower.style.top = e.clientY + "px";
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.5s ease";
  observer.observe(card);
});


