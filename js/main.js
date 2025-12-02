// Main JavaScript for Portfolio Website

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
      }
    });
  });
  
  // Set active navigation link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Add subtle fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe cards and sections for fade-in
  document.querySelectorAll('.card, .identity-card, .cross-link, .related-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Generate breadcrumbs
  generateBreadcrumbs();
});

// Breadcrumb generation
function generateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector('.breadcrumbs-container');
  if (!breadcrumbContainer) return;
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageMap = {
    'index.html': { name: 'Home', path: 'index.html' },
    'engineering.html': { name: 'Engineering', path: 'engineering.html' },
    'projects.html': { name: 'Projects', path: 'projects.html' },
    'ceramics.html': { name: 'Ceramics', path: 'ceramics.html' },
    'writing.html': { name: 'Writing', path: 'writing.html' },
    'about.html': { name: 'About', path: 'about.html' },
    'contact.html': { name: 'Contact', path: 'contact.html' }
  };
  
  // If home page, just show "Home" as current
  if (currentPage === '' || currentPage === 'index.html') {
    breadcrumbContainer.innerHTML = '<span class="breadcrumbs-current">Home</span>';
  } else if (pageMap[currentPage]) {
    // For other pages, show Home link + current page
    breadcrumbContainer.innerHTML = '<a href="index.html">Home</a>';
    breadcrumbContainer.innerHTML += '<span class="breadcrumbs-separator">/</span>';
    breadcrumbContainer.innerHTML += `<span class="breadcrumbs-current">${pageMap[currentPage].name}</span>`;
  }
}

