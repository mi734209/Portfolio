// Portfolio filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

requestAnimationFrame(() => {
  document.body.classList.add('page-loaded');
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedFilter = button.getAttribute('data-filter');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (selectedFilter === 'all' || cardCategory === selectedFilter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Update project count
function updateProjectCount() {
  const projectCount = document.querySelectorAll('.project-card').length;
  const projectCountEl = document.getElementById('projectCount');
  if (projectCountEl) {
    projectCountEl.textContent = projectCount;
  }
}

updateProjectCount();

// Update technology count
function updateTechCount() {
  const techCount = document.querySelectorAll('.tech-tag').length;
  const techCountEl = document.getElementById('techCount');
  if (techCountEl) {
    techCountEl.textContent = techCount;
  }
}

updateTechCount();

// Active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
