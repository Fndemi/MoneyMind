document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", () => {
      const isOpen = answer.style.maxHeight;

      // Close all
      document.querySelectorAll(".faq-answer").forEach((a) => a.style.maxHeight = null);
      document.querySelectorAll(".faq-question").forEach((q) => q.classList.remove("active"));

      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.classList.add("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");

  scrollLeftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  });
});


  // LocalStorage Visitor Counter
  const count = localStorage.getItem('visitorCount') || 0;
  const newCount = parseInt(count) + 1;
  localStorage.setItem('visitorCount', newCount);
  document.getElementById('visitorCount').textContent = newCount.toLocaleString();

  // Back to top scroll
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Show/hide back-to-top button
  window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
