// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Contact form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit .btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    e.target.reset();
    document.getElementById('successMsg').style.display = 'block';
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1000);
}

// Animate on scroll (simple IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
});
