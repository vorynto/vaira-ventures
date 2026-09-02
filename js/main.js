// =========================================================
// Vaira Ventures — Shared Site Script
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  /* --- Header scroll state --- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    const backTop = document.querySelector('.back-to-top');
    if (backTop) {
      if (window.scrollY > 500) backTop.classList.add('show');
      else backTop.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* --- Mobile menu --- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');

  const closeMenu = () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    overlay?.classList.remove('show');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.toggle('open');
    hamburger.classList.toggle('open', !!isOpen);
    overlay?.classList.toggle('show', !!isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  /* --- Scroll reveal animations --- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* --- Animated counters --- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterIO.observe(el));
  }

  /* --- Back to top --- */
  document.querySelector('.back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* --- Footer year --- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Contact form (front-end only) --- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const phone = contactForm.querySelector('#phone').value.trim();
      const message = contactForm.querySelector('#message').value.trim();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9+\-\s]{7,15}$/;

      if (!name || !email || !phone || !message) {
        msg.textContent = 'Please fill in all fields before submitting.';
        msg.className = 'form-msg error';
        return;
      }
      if (!emailPattern.test(email)) {
        msg.textContent = 'Please enter a valid email address.';
        msg.className = 'form-msg error';
        return;
      }
      if (!phonePattern.test(phone)) {
        msg.textContent = 'Please enter a valid phone number.';
        msg.className = 'form-msg error';
        return;
      }

      msg.textContent = `Thanks, ${name.split(' ')[0]}! Your message has been received. Our team will get back to you shortly.`;
      msg.className = 'form-msg success';
      contactForm.reset();
    });
  }
});
