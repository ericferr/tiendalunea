document.addEventListener('DOMContentLoaded', function () {
  // FAQ
  document.querySelectorAll('.lunea-faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.lunea-faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.lunea-faq-item.open').forEach(function (el) { el.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Fade up
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.lunea-fade').forEach(function (el) { observer.observe(el); });
});
