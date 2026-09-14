// ==========================================================================
// Dylan Akia Portfolio — Modern Frontend Interaction Logic
// Features: Theme Switcher, Mobile Nav Drawer, Scroll Spy, Diagram Switcher,
// Formspree Validation, Scroll-to-top, Scroll Reveal
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  function updateThemeToggle(theme) {
    if (!themeToggle) return;
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.setAttribute('aria-pressed', String(isDark));
  }

  if (themeToggle) {
    updateThemeToggle(htmlRoot.getAttribute('data-theme'));

    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeToggle(newTheme);
    });
  }

  // 2. Mobile navigation toggle & drawer
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('primary-navigation');

  function closeNavMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleNavMenu() {
    if (!navMenu || !navToggle) return;
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', toggleNavMenu);

    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', closeNavMenu);
    });

    document.addEventListener('click', (event) => {
      const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
      if (!isClickInsideNav && navMenu.classList.contains('open')) {
        closeNavMenu();
      }
    });
  }

  // 3. Smooth scrolling with sticky header offset
  const header = document.querySelector('.site-header');

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      const headerHeight = header ? header.offsetHeight : 70;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      history.pushState(null, '', targetId);
    });
  });

  // 4. Active nav-link highlighting on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && 'IntersectionObserver' in window) {
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
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // 5. Scroll-to-top button
  const scrollTopButton = document.getElementById('scroll-top');
  const heroSection = document.getElementById('home');

  if (scrollTopButton && heroSection && 'IntersectionObserver' in window) {
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
  }

  // 6. Interactive Network Architecture Diagram Switcher (AnimoTech Project)
  const diagramTabs = document.querySelectorAll('.diagram-tab');
  const activeDiagramImg = document.getElementById('animotech-active-img');
  const diagramCaption = document.getElementById('animotech-caption');

  if (diagramTabs.length > 0 && activeDiagramImg) {
    diagramTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        diagramTabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const newSrc = tab.getAttribute('data-img');
        const newCaption = tab.getAttribute('data-caption');

        // Smooth transition effect
        activeDiagramImg.style.opacity = '0.3';
        activeDiagramImg.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
          activeDiagramImg.src = newSrc;
          if (newCaption && diagramCaption) {
            diagramCaption.innerHTML = newCaption;
          }
          activeDiagramImg.style.opacity = '1';
          activeDiagramImg.style.transform = 'scale(1)';
        }, 150);
      });

      // Keyboard arrow navigation between tabs
      tab.addEventListener('keydown', (e) => {
        let targetIndex = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          targetIndex = (index + 1) % diagramTabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          targetIndex = (index - 1 + diagramTabs.length) % diagramTabs.length;
        }

        if (targetIndex !== null) {
          e.preventDefault();
          diagramTabs[targetIndex].focus();
          diagramTabs[targetIndex].click();
        }
      });
    });
  }

  // 7. Contact form validation and submission
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm && formSuccess) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setFieldError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorEl = document.getElementById(`${fieldId}-error`);
      if (!field || !errorEl) return;
      const group = field.closest('.form-group');

      errorEl.textContent = message;
      if (group) {
        group.classList.toggle('has-error', Boolean(message));
      }
    }

    // Live validation error clearance on input
    ['name', 'email', 'message'].forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', () => {
          setFieldError(fieldId, '');
        });
      }
    });

    function validateContactForm() {
      let isValid = true;
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name) {
        setFieldError('name', 'Please provide your name or organization.');
        isValid = false;
      } else {
        setFieldError('name', '');
      }

      if (!email) {
        setFieldError('email', 'Please provide a valid email address.');
        isValid = false;
      } else if (!emailPattern.test(email)) {
        setFieldError('email', 'Please enter a well-formed email (e.g. name@domain.com).');
        isValid = false;
      } else {
        setFieldError('email', '');
      }

      if (!message) {
        setFieldError('message', 'Please enter your message or opportunity details.');
        isValid = false;
      } else if (message.length < 10) {
        setFieldError('message', 'Message should be at least 10 characters.');
        isValid = false;
      } else {
        setFieldError('message', '');
      }

      return isValid;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      formSuccess.textContent = '';
      formSuccess.classList.remove('is-error');

      if (!validateContactForm()) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending Message...</span>';
      }

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          formSuccess.textContent = "Thank you! Your message has been routed to Dylan's personal inbox.";
          contactForm.reset();
        } else {
          formSuccess.textContent = 'Unable to send message automatically. Please reach out directly to dylanakia2002@gmail.com.';
          formSuccess.classList.add('is-error');
        }
      } catch (error) {
        formSuccess.textContent = 'Network error encountered. Please email me directly at dylanakia2002@gmail.com.';
        formSuccess.classList.add('is-error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          `;
        }
      }
    });
  }

  // 8. Scroll-reveal on section content (CSS handles prefers-reduced-motion)
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is unsupported
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 9. Dynamic Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
