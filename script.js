function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add('show');
    } else {
      sec.classList.remove('show');
    }
  });
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    
    if (name && email && message) {
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}