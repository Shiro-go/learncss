// ==========================
// SMOOTH SCROLL (NAV LINKS)
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ==========================
// FADE-IN SECTIONS ON SCROLL
// ==========================

// select all sections
const sections = document.querySelectorAll(".section");

// observer options
const observerOptions = {
  threshold: 0.2
};

// observer callback
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// apply initial hidden state + observe
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease";

  observer.observe(section);
});
