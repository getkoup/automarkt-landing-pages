// Content and call/text links work without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('motion-reveal');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .benefit, .reason, .portfolio-grid figure, .story-copy, .quote-copy').forEach(element => observer.observe(element));
}
