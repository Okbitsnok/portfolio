// ── Scroll Reveal ──
const revEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: .1 });
revEls.forEach(el => io.observe(el));

// ── Skill Bars ──
const bars = document.querySelectorAll('.bar-fill');
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: .3 });
bars.forEach(b => barObs.observe(b));
