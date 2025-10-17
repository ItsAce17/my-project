  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false
    });
  });
