// Reveal sections and projects on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section, .project-box').forEach(el => observer.observe(el));

// Highlight active navbar link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


  const roles = [
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Java Developer",
    "Software Engineer"
  ];

  const typewriter = document.getElementById("typewriter");

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    const displayedText = currentRole.substring(0, charIndex);
    typewriter.textContent = displayedText;

    if (!isDeleting && charIndex < currentRole.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        roleIndex = (roleIndex + 1) % roles.length;
      }
      setTimeout(type, 1000);
    }
  }

  type(); 