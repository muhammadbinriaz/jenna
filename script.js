// Smooth trailing sticky mouse circle
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate the cursor to follow mouse with easing
function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;  // 0.15 controls smoothing speed (lower = smoother)
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Button hover effect handled by CSS, no JS needed here

// Navbar links expand on hover via CSS (no JS)








allNavLinks,uh





// Contact form email sending using EmailJS
const contactForm = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('your_service_id', 'your_template_id', this, 'your_public_key')
    .then(() => {
      statusMsg.textContent = "Message sent successfully!";
      statusMsg.style.color = "#0f0";
      contactForm.reset();
    }, (error) => {
      statusMsg.textContent = "Failed to send message.";
      statusMsg.style.color = "red";
      console.error(error);
    });
});










const lenis = new Lenis()

function raf(time){
    
    lenis.raf(time)
    requestAnimationFrame(raf)
}




requestAnimationFrame(raf);





// Highlight active nav link on scroll
const sections = document.querySelectorAll('section, div[id$="section"]');
const navLinks = document.querySelectorAll('#right a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});






// Only declare these once at the top of your script.js
const allSections = document.querySelectorAll('section, div[id$="section"]');
const allNavLinks = document.querySelectorAll('#right a');

window.addEventListener('scroll', () => {
  let current = '';
  allSections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  allNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});











// resposiveness


/* ====================== */
/* MOBILE MENU FUNCTIONALITY */
/* ====================== */
document.addEventListener('DOMContentLoaded', function() {
  // Create mobile menu toggle button
  const nav = document.getElementById('nav');
  const mobileToggle = document.createElement('button');
  mobileToggle.id = 'mobile-menu-toggle';
  mobileToggle.innerHTML = '☰';
  mobileToggle.style.display = 'none';
  mobileToggle.style.background = 'none';
  mobileToggle.style.border = 'none';
  mobileToggle.style.color = 'white';
  mobileToggle.style.fontSize = '24px';
  mobileToggle.style.cursor = 'pointer';
  
  // Insert toggle button
  const rightNav = document.getElementById('right');
  if (rightNav) {
    rightNav.parentNode.insertBefore(mobileToggle, rightNav);
  }

  // Toggle menu on click
  mobileToggle.addEventListener('click', function() {
    nav.classList.toggle('mobile-menu-active');
    rightNav.style.display = rightNav.style.display === 'flex' ? 'none' : 'flex';
  });

  // Show/hide based on screen size
  function handleResize() {
    if (window.innerWidth <= 992) {
      mobileToggle.style.display = 'block';
      rightNav.style.display = 'none';
    } else {
      mobileToggle.style.display = 'none';
      rightNav.style.display = 'flex';
      nav.classList.remove('mobile-menu-active');
    }
  }

  // Initial check
  handleResize();
  
  // Listen for resize events
  window.addEventListener('resize', handleResize);
});

/* ====================== */
/* SMOOTHER MOBILE INTERACTIONS */
/* ====================== */
document.addEventListener('touchstart', function() {}, {passive: true});

// Prevent zooming on double-tap
document.addEventListener('dblclick', function(e) {
  e.preventDefault();
}, { passive: false });
















































