  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false
    });
  });

  const skillCards = document.querySelectorAll('.skill-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.bar');
        const percent = entry.target.getAttribute('data-percent');
        bar.style.width = percent + '%';
      }
    });
  }, { threshold: 0.5 });

  skillCards.forEach(card => observer.observe(card));

  // Fade-in animation for project cards
  const projectCards = document.querySelectorAll('.project-card');
  const revealProjects = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.3 });

  projectCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "opacity 1s ease, transform 1s ease";
    revealProjects.observe(card);
  });

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-btn.next");
  const prevButton = document.querySelector(".carousel-btn.prev");

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
});





