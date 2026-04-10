/**
 * Explainer page interactions.
 * Scroll-reveal, count-up, circuit animation, neuron bars, phase chart.
 */

(function () {
  'use strict';

  // ── Scroll reveal ──────────────────────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  // ── Circuit stages staggered animation ─────────────────
  var circuitContainer = document.querySelector('.circuit-container');
  if (circuitContainer) {
    var circuitObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var stages = document.querySelectorAll('.circuit-stage');
          var arrows = document.querySelectorAll('.circuit-arrow');
          stages.forEach(function (s, i) {
            setTimeout(function () { s.classList.add('animate-in'); }, i * 400);
          });
          arrows.forEach(function (a, i) {
            setTimeout(function () { a.classList.add('animate-in'); }, i * 400 + 200);
          });
        }
      });
    }, { threshold: 0.2 });
    circuitObserver.observe(circuitContainer);
  }

  // ── Neuron bar animation ───────────────────────────────
  var neuronObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.neuron-bar').forEach(function (bar) {
          var w = bar.getAttribute('data-width');
          setTimeout(function () { bar.style.width = w + '%'; }, 200);
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.card').forEach(function (c) {
    if (c.querySelector('.neuron-bar')) neuronObserver.observe(c);
  });

  // ── Phase chart animation ──────────────────────────────
  var phaseChart = document.getElementById('phase-chart');
  if (phaseChart) {
    var phaseObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.phase-bar').forEach(function (bar, i) {
            var h = bar.getAttribute('data-height');
            setTimeout(function () { bar.style.height = (h / 100 * 190) + 'px'; }, i * 60);
          });
        }
      });
    }, { threshold: 0.3 });
    phaseObserver.observe(phaseChart);
  }

  // ── Count-up animation ─────────────────────────────────
  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !entry.target.getAttribute('data-counted')) {
        entry.target.setAttribute('data-counted', 'true');
        var target = parseFloat(entry.target.getAttribute('data-target'));
        var isDecimal = target % 1 !== 0;
        var duration = 1200;
        var start = performance.now();
        function tick(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = target * eased;
          entry.target.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
          if (progress < 1) requestAnimationFrame(tick);
          else entry.target.textContent = isDecimal ? target.toFixed(1) : String(target);
        }
        requestAnimationFrame(tick);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count-up').forEach(function (el) { countObserver.observe(el); });
})();
