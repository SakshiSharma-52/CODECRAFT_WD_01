// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Contact form alert demo
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! We’ll get back to you soon.");
});
