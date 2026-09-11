// ==========================================================================
// Mobile navigation toggle
// ==========================================================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('primary-navigation');

function closeNavMenu() {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

function toggleNavMenu() {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

navToggle.addEventListener('click', toggleNavMenu);

// Close the mobile menu after a link is clicked
navMenu.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', closeNavMenu);
});

// Close the mobile menu when clicking outside of it
document.addEventListener('click', (event) => {
  const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
  if (!isClickInsideNav && navMenu.classList.contains('open')) {
    closeNavMenu();
  }
});

// ==========================================================================
// Smooth scrolling with header offset
// ==========================================================================
const header = document.querySelector('.site-header');

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    event.preventDefault();
    const headerHeight = header.offsetHeight;
    const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    history.pushState(null, '', targetId);
  });
});

// ==========================================================================
// Active nav-link highlighting on scroll
// ==========================================================================
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeId = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
      });
    });
  },
  { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));

// ==========================================================================
// Scroll-to-top button
// ==========================================================================
const scrollTopButton = document.getElementById('scroll-top');
const heroSection = document.getElementById('home');

const heroObserver = new IntersectionObserver(
  ([entry]) => {
    scrollTopButton.hidden = entry.isIntersecting;
  },
  { threshold: 0 }
);

heroObserver.observe(heroSection);

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================================================
// Contact form validation (frontend-only — no data is sent anywhere)
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);
  const group = field.closest('.form-group');

  errorEl.textContent = message;
  group.classList.toggle('has-error', Boolean(message));
}

function validateContactForm() {
  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) {
    setFieldError('name', 'Please enter your name.');
    isValid = false;
  } else {
    setFieldError('name', '');
  }

  if (!email) {
    setFieldError('email', 'Please enter your email address.');
    isValid = false;
  } else if (!emailPattern.test(email)) {
    setFieldError('email', 'Please enter a valid email address.');
    isValid = false;
  } else {
    setFieldError('email', '');
  }

  if (!message) {
    setFieldError('message', 'Please enter a message.');
    isValid = false;
  } else {
    setFieldError('message', '');
  }

  return isValid;
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formSuccess.textContent = '';

  if (validateContactForm()) {
    formSuccess.textContent = 'Thanks for your message! (This is a demo form — no data was actually sent.)';
    contactForm.reset();
  }
});

// ==========================================================================
// Scroll-reveal on section content (CSS handles prefers-reduced-motion)
// ==========================================================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ==========================================================================
// Footer year
// ==========================================================================
document.getElementById('current-year').textContent = new Date().getFullYear();
