document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (!toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove('open');
    toggle.classList.remove('active');
    if (dropdownToggle) {
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
    if (dropdownMenu) {
      dropdownMenu.classList.remove('open');
    }
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    if (!isOpen) {
      closeMenu();
    }
  });

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = dropdownMenu.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#navbar')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      links.classList.remove('open');
      toggle.classList.remove('active');
      dropdownMenu?.classList.remove('open');
      dropdownToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});
