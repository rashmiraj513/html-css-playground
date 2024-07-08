const yearElement = document.querySelector('.year');
const btnNavElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header');
const allLinks = document.querySelectorAll('a:link');
const sectionHeroElement = document.querySelector('.section-hero');

// Set current year
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Make mobile navigation work

btnNavElement.addEventListener('click', () => {
  headerElement.classList.toggle('nav-open');
});

// Add smooth scrolling to navigation links (Needed for older version of browsers)
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerElement.classList.toggle('nav-open');
    }
  });
});

// Sticky Navigation

const obsHelper = (entries) => {
  const ent = entries[0];

  if (ent.isIntersecting === false) {
    document.body.classList.add('sticky');
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove('sticky');
  }
};
const obs = new IntersectionObserver((entries) => obsHelper(entries), {
  root: null,
  threshold: [0],
  rootMargin: '-80px',
});

obs.observe(sectionHeroElement);
