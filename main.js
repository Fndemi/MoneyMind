// Define scrollToTop function GLOBALLY (outside DOMContentLoaded)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Toggle function for audience section
function showAudience(type) {
  const studentsBtn = document.getElementById('studentsBtn');
  const mentorsBtn = document.getElementById('mentorsBtn');
  const studentsContent = document.getElementById('studentsContent');
  const mentorsContent = document.getElementById('mentorsContent');

  if (type === 'students') {
    studentsBtn.classList.add('active');
    mentorsBtn.classList.remove('active');
    studentsContent.classList.add('active');
    mentorsContent.classList.remove('active');
  } else {
    mentorsBtn.classList.add('active');
    studentsBtn.classList.remove('active');
    mentorsContent.classList.add('active');
    studentsContent.classList.remove('active');
  }
}

// Toggle mobile menu function
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  
  navLinks.classList.toggle("active");
  
  if (navLinks.classList.contains("active")) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = answer.style.maxHeight;
      document.querySelectorAll(".faq-answer").forEach((a) => (a.style.maxHeight = null));
      document.querySelectorAll(".faq-question").forEach((q) => q.classList.remove("active"));
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.classList.add("active");
      }
    });
  });

  // Carousel Scroll
  const carousel = document.getElementById("carousel");
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");

  if (carousel && scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -320, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: 320, behavior: "smooth" });
    });
  }

  // Visitor Counter
  const count = localStorage.getItem("visitorCount") || 0;
  const newCount = parseInt(count) + 1;
  localStorage.setItem("visitorCount", newCount);
  const counterEl = document.getElementById("visitorCount");
  if (counterEl) {
    counterEl.textContent = newCount.toLocaleString();
  }

  // Back to Top Scroll - Show/Hide button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
  }

  // Nav Links Close on Click
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".mobile-menu-toggle");

  if (navLinks && menuToggle) {
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Click Outside Menu to Close
    document.addEventListener("click", (e) => {
      const navContainer = document.querySelector(".nav-container");
      if (!navContainer.contains(e.target) && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }
});