// Interactive figures for "Science begins with wondering". No libraries.
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function txt(parent, x, y, s, cls) {
    var t = el('text', { x: x, y: y }, parent);
    if (cls) t.setAttribute('class', cls);
    t.textContent = s;
    return t;
  }

  /* ---------------- 1. The discovery cycle ---------------- */
  var STAGES = [
    { id: 'curiosity', name: 'Curiosity', pair: 'wonder',
      does: 'Notices what is puzzling, an anomaly or something taken for granted, and keeps it only if one needs to know why.',
      story: 'Uranus strayed from its predicted orbit, and the mismatch itself pointed to something worth explaining.',
      today: 'Not yet. The frame is given to the systems, as a research goal, a code template or a dataset that people collected, and when agents meet something unexpected they seldom act on it.' },
    { id: 'creativity', name: 'Creativity', pair: 'wonder',
      does: 'Proposes what might explain the puzzle.',
      story: 'An unseen planet beyond Uranus, pulling it off its path.',
      today: 'Partly. This is where today’s systems join, once a person has given them the question. Ideas from a language model were rated as more novel and as less feasible in a large human study, and the outliers that machines find seem to lie in spaces that people defined.' },
    { id: 'causality', name: 'Causality', pair: 'discover',
      does: 'States what must follow if the proposal is true, and designs the test.',
      story: 'The unseen planet implied the place in the sky where it had to be, which made it testable by a targeted observation, since nobody can intervene on a planet.',
      today: 'Partly. Agents in controlled games and laboratories predict well but identify the mechanism poorly and often miss confounders.' },
    { id: 'criticism', name: 'Criticism', pair: 'discover',
      does: 'Lets a test decide whether the proposal survives, with failures and null results kept.',
      story: 'Neptune was found where it had been predicted. Vulcan, proposed in the same way for Mercury, was never found.',
      today: 'Partly. Language models tend to confirm a rule and to look for too few counter-examples.' },
    { id: 'comprehension', name: 'Comprehension', pair: 'understand',
      does: 'Explains why the result holds and how it fits with what is already known.',
      story: 'Mercury’s perihelion advanced 43 arcseconds per century more than Newton allowed. In 1915 general relativity gave the 43 arcseconds with no new planet, and returned Newton’s law as a limit.',
      today: 'Not yet, with less confidence. Machines find solutions and proofs whose reasoning we cannot follow, and I know of no system that has been put through a test of understanding.' },
    { id: 'communication', name: 'Communication', pair: 'understand',
      does: 'Passes the result on so that others can examine and use it, and the next cycle starts from it.',
      story: 'The community kept the puzzle of Mercury from 1859 to 1915, until someone could explain it.',
      today: 'Not yet, with less confidence. I found no study of whether what a machine reports is taken up and continued by others, and the next question comes back through a person.' }
  ];

  function initCycle() {
    var fig = document.getElementById('fig-cycle');
    if (!fig) return;
    var svg = fig.querySelector('svg');
    var info = fig.querySelector('.stage-info');
    var cx = 300, cy = 245, R = 152, r = 62;
    var angles = [-120, -60, 0, 60, 120, 180];
    var pos = angles.map(function (a) {
      var t = a * Math.PI / 180;
      return { x: cx + R * Math.cos(t), y: cy + R * Math.sin(t), a: t };
    });

    var defs = el('defs', {}, svg);
    ['edge', 'person'].forEach(function (k) {
      var m = el('marker', { id: 'arrow-' + k, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }, defs);
      el('path', { d: 'M0,0 L10,5 L0,10 z', style: 'fill:' + (k === 'edge' ? 'var(--faint)' : 'var(--warm)') }, m);
    });

    // Edges along the circle, from node i to node i+1.
    var edges = [];
    for (var i = 0; i < 6; i++) {
      var a0 = angles[i] * Math.PI / 180, a1 = angles[(i + 1) % 6] * Math.PI / 180;
      if (a1 < a0) a1 += 2 * Math.PI;
      var off = (r + 6) / R;
      var s = { x: cx + R * Math.cos(a0 + off), y: cy + R * Math.sin(a0 + off) };
      var e = { x: cx + R * Math.cos(a1 - off), y: cy + R * Math.sin(a1 - off) };
      edges.push(el('path', { d: 'M' + s.x + ',' + s.y + ' A' + R + ',' + R + ' 0 0 1 ' + e.x + ',' + e.y, 'class': 'edge', 'marker-end': 'url(#arrow-edge)' }, svg));
    }

    // Pair labels, outside the circle.
    // The pair of the selected stage, in the middle of the ring.
    var pairLabel = txt(svg, cx, cy + 8, '', 'arc-label');
    pairLabel.setAttribute('style', 'font-size:26px');

    // The person who hands over the question (today's systems).
    var person = el('g', { 'class': 'person', opacity: 0 }, svg);
    var px = 548, py = 92;
    el('circle', { cx: px, cy: py - 6, r: 8, style: 'fill:none;stroke:var(--warm);stroke-width:1.8' }, person);
    el('path', { d: 'M' + (px - 13) + ',' + (py + 18) + ' q13,-20 26,0', style: 'fill:none;stroke:var(--warm);stroke-width:1.8' }, person);
    txt(person, px, py - 26, 'a person', '');
    var cre = pos[1];
    el('path', { d: 'M' + (px - 18) + ',' + (py + 4) + ' L' + (cre.x + r + 6) + ',' + cre.y, 'class': 'person-edge', 'marker-end': 'url(#arrow-person)' }, person);
    txt(person, px - 62, py + 30, 'the question', 'q');
    var com = pos[5];
    el('path', { d: 'M' + (com.x - r - 2) + ',' + com.y + ' C' + (com.x - r - 40) + ',' + 20 + ' ' + 330 + ',' + (-30) + ' ' + (px - 16) + ',' + (py - 40), 'class': 'person-edge', 'marker-end': 'url(#arrow-person)', 'stroke-dasharray': '5 4' }, person);

    var nodes = STAGES.map(function (st, i) {
      var g = el('g', { 'class': 'node', tabindex: 0, role: 'button', 'aria-label': st.name }, svg);
      el('circle', { cx: pos[i].x, cy: pos[i].y, r: r }, g);
      txt(g, pos[i].x, pos[i].y, st.name, '');
      g.addEventListener('click', function () { select(i); });
      g.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); select(i); } });
      return g;
    });

    var mode = 'scientist', current = 0;
    function select(i) {
      current = i;
      nodes.forEach(function (n, j) { n.classList.toggle('active', j === i); });
      var st = STAGES[i];
      pairLabel.textContent = st.pair;
      info.innerHTML = '';
      var h = document.createElement('h4');
      h.textContent = st.name + ' · ' + st.pair;
      info.appendChild(h);
      var dl = document.createElement('dl');
      [['What it does', st.does], ['Neptune and Vulcan', st.story], ['Today’s systems', st.today]].forEach(function (row) {
        var dt = document.createElement('dt'); dt.textContent = row[0];
        var dd = document.createElement('dd'); dd.textContent = row[1];
        dl.appendChild(dt); dl.appendChild(dd);
      });
      info.appendChild(dl);
    }
    function setMode(m) {
      mode = m;
      fig.querySelectorAll('.seg button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.mode === m ? 'true' : 'false'); });
      var today = m === 'today';
      nodes[0].classList.toggle('missing', today);
      edges[5].classList.toggle('hidden', today);   // communication back to curiosity
      edges[0].classList.toggle('hidden', today);   // curiosity to creativity
      person.setAttribute('opacity', today ? 1 : 0);
      select(today ? 1 : current);
    }
    fig.querySelectorAll('.seg button').forEach(function (b) {
      b.addEventListener('click', function () { setMode(b.dataset.mode); });
    });
    select(0);
  }

  /* ---------------- 2. Direction against speed ---------------- */
  function initRace() {
    var fig = document.getElementById('fig-race');
    if (!fig) return;
    var svg = fig.querySelector('svg');
    var N = 100, x0 = 118, x1 = 570;
    var pIn = document.getElementById('race-p'), kIn = document.getElementById('race-k');
    var pOut = document.getElementById('race-p-out'), kOut = document.getElementById('race-k-out');
    var btn = document.getElementById('race-run'), readout = document.getElementById('race-readout');
    var X = function (v) { return x0 + (x1 - x0) * v / N; };

    var lanes = [{ y: 42, label: 'faster', cls: 'a' }, { y: 108, label: 'with direction', cls: 'b' }];
    lanes.forEach(function (l) {
      txt(svg, 0, l.y + 4, l.label, 'lane-label');
      el('line', { x1: x0, y1: l.y, x2: x1, y2: l.y, 'class': 'track' }, svg);
      el('line', { x1: x1, y1: l.y - 14, x2: x1, y2: l.y + 14, 'class': 'goal' }, svg);
      el('line', { x1: x0, y1: l.y - 10, x2: x0, y2: l.y + 10, style: 'stroke:var(--faint);stroke-width:2' }, svg);
      l.trail = el('rect', { x: x0, y: l.y - 6, width: 0, height: 12, 'class': 'trail-' + l.cls, rx: 6 }, svg);
      l.dot = el('circle', { cx: x0, cy: l.y, r: 8, 'class': 'walker-' + l.cls }, svg);
    });
    txt(svg, x1, 140, 'target', 'lane-label').setAttribute('text-anchor', 'middle');
    txt(svg, x0, 140, 'start', 'lane-label').setAttribute('text-anchor', 'middle');

    var raf = null;
    function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
    function expected() {
      var p = +pIn.value, k = +kIn.value;
      // Exact expected times with the wall at the start: N(N + 1) steps without direction, and the sum of e_x with a lean p.
      var e = 1 / p, tot = e;
      for (var x = 1; x < N; x++) { e = 1 / p + (1 - p) / p * e; tot += e; }
      return 'Expected time on average, ' + fmt(N * (N + 1) / k) + ' for the faster searcher and ' + fmt(tot) + ' for the one with direction.';
    }
    function labels() {
      pOut.textContent = (+pIn.value).toFixed(2);
      kOut.textContent = kIn.value + '×';
      if (!raf) readout.textContent = expected();
    }
    pIn.addEventListener('input', labels);
    kIn.addEventListener('input', labels);

    // One run is luck. Many runs with the same settings show what to expect.
    function tally(p, k) {
      var RUNS = 500, wins = 0, ties = 0, sa = 0, sb = 0;
      function hit(prob) { var x = 0, n = 0; while (x < N) { n++; if (Math.random() < prob) x++; else if (x > 0) x--; } return n; }
      for (var r = 0; r < RUNS; r++) {
        var ta = Math.ceil(hit(0.5) / k), tb = hit(p);
        sa += ta; sb += tb;
        if (tb < ta) wins++; else if (tb === ta) ties++;
      }
      return { share: Math.round(100 * (wins + ties / 2) / RUNS), a: sa / RUNS, b: sb / RUNS, runs: RUNS };
    }
    function run() {
      if (raf) cancelAnimationFrame(raf);
      var p = +pIn.value, k = +kIn.value;
      var a = { x: 0, max: 0, steps: 0, done: false }, b = { x: 0, max: 0, steps: 0, done: false };
      var t = 0, PER_FRAME = 6, LIMIT = 40000;
      function step(w, prob) {
        if (Math.random() < prob) w.x++;
        else if (w.x > 0) w.x--;
        w.steps++;
        if (w.x > w.max) w.max = w.x;
        if (w.x >= N) w.done = true;
      }
      function frame() {
        for (var s = 0; s < PER_FRAME; s++) {
          if (a.done && b.done) break;
          t++;
          if (!b.done) step(b, p);
          for (var j = 0; j < k && !a.done; j++) step(a, 0.5);
          if (a.done && a.time === undefined) a.time = t;
          if (b.done && b.time === undefined) b.time = t;
        }
        [[lanes[0], a], [lanes[1], b]].forEach(function (lw) {
          lw[0].dot.setAttribute('cx', X(lw[1].x));
          lw[0].trail.setAttribute('width', X(lw[1].max) - x0);
        });
        var line = 'Time ' + fmt(t) + '. ';
        line += a.done ? 'The faster searcher arrived at time ' + fmt(a.time) + '. ' : 'The faster searcher is at ' + a.x + '. ';
        line += b.done ? 'The one with direction arrived at time ' + fmt(b.time) + '.' : 'The one with direction is at ' + b.x + '.';
        readout.textContent = line;
        if ((a.done && b.done) || t > LIMIT) {
          raf = null;
          if (t > LIMIT && !a.done) line += ' Stopped at time ' + fmt(LIMIT) + ', since the faster searcher may need much longer.';
          else if (a.time < b.time) line += ' This time the faster one got lucky.';
          var m = tally(p, k);
          readout.textContent = line + ' But one run is luck. Over ' + m.runs + ' runs with these settings, the one with direction arrived first in ' + m.share + '% of them, on average at time ' + fmt(m.b) + ' against ' + fmt(m.a) + '.';
          btn.textContent = 'Run again';
          return;
        }
        raf = requestAnimationFrame(frame);
      }
      btn.textContent = 'Running';
      raf = requestAnimationFrame(frame);
    }
    btn.addEventListener('click', run);
    labels();
  }

  /* ---------------- 3. Doubt: information gain against how firmly an assumption is held ---------------- */
  function initDoubt(D) {
    var fig = document.getElementById('fig-doubt');
    if (!fig || !D) return;
    var svg = fig.querySelector('svg');
    var W = 600, H = 290, L = 64, Rm = 20, T = 14, B = 52;
    var q = D.one_minus_p, n = q.length;
    var lx0 = Math.log10(q[0]), lx1 = Math.log10(q[n - 1]);
    var ly0 = Math.log10(5e-4), ly1 = Math.log10(3);
    var X = function (qq) { return L + (W - L - Rm) * (Math.log10(qq) - lx0) / (lx1 - lx0); };
    var Y = function (g) { return T + (H - T - B) * (1 - (Math.log10(Math.max(g, 5e-4)) - ly0) / (ly1 - ly0)); };

    var ax = el('g', { 'class': 'axis' }, svg);
    el('line', { x1: L, y1: H - B, x2: W - Rm, y2: H - B }, ax);
    el('line', { x1: L, y1: T, x2: L, y2: H - B }, ax);
    [[0.5, '0.5'], [0.1, '0.9'], [0.01, '0.99'], [0.001, '0.999'], [0.0001, '0.9999']].forEach(function (tk) {
      var x = X(tk[0]);
      el('line', { x1: x, y1: H - B, x2: x, y2: H - B + 5 }, ax);
      txt(ax, x, H - B + 19, tk[1], '').setAttribute('text-anchor', 'middle');
    });
    txt(ax, (L + W - Rm) / 2, H - 8, 'p, the probability with which the assumption is held', '').setAttribute('text-anchor', 'middle');
    [[0.001, '0.001'], [0.01, '0.01'], [0.1, '0.1'], [1, '1']].forEach(function (tk) {
      var y = Y(tk[0]);
      el('line', { x1: L - 5, y1: y, x2: L, y2: y }, ax);
      txt(ax, L - 9, y + 4, tk[1], '').setAttribute('text-anchor', 'end');
    });
    var yl = txt(ax, 14, (T + H - B) / 2, 'gain in nats', '');
    yl.setAttribute('transform', 'rotate(-90 14 ' + (T + H - B) / 2 + ')');
    yl.setAttribute('text-anchor', 'middle');

    var lo = D.C + D.work_end_min, hi = D.C + D.work_max;
    el('rect', { x: L, y: Y(hi), width: W - L - Rm, height: Y(lo) - Y(hi), 'class': 'band' }, svg);
    txt(svg, W - Rm - 4, Y(hi) - 6, 'cost of a test plus the best other gain', 'band-label').setAttribute('text-anchor', 'end');

    function path(arr) {
      return arr.map(function (g, i) { return (i ? 'L' : 'M') + X(q[i]).toFixed(1) + ',' + Y(g).toFixed(1); }).join(' ');
    }
    el('path', { d: path(D.bound), 'class': 'curve-bound' }, svg);
    el('path', { d: path(D.eig), 'class': 'curve-exact' }, svg);

    var mline = el('line', { y1: T, y2: H - B, 'class': 'marker-line' }, svg);
    var mark = el('circle', { r: 6, 'class': 'marker' }, svg);

    var input = document.getElementById('doubt-i'), out = document.getElementById('doubt-out'), verdict = document.getElementById('doubt-verdict');
    input.max = n - 1;
    function pStr(qq) {
      var p = 1 - qq;
      var d = Math.max(2, Math.ceil(-Math.log10(qq)) + 1);
      return p.toFixed(Math.min(d, 5));
    }
    function update() {
      var i = +input.value, qq = q[i], g = D.eig[i];
      mline.setAttribute('x1', X(qq)); mline.setAttribute('x2', X(qq));
      mark.setAttribute('cx', X(qq)); mark.setAttribute('cy', Y(g));
      out.textContent = 'p = ' + pStr(qq);
      var v;
      if (g > hi) v = '<strong>It tests the assumption.</strong> A test promises ' + g.toFixed(3) + ' nats, more than its cost plus anything else the agent could do.';
      else if (g >= lo) v = '<strong>On the edge.</strong> A test promises ' + g.toFixed(3) + ' nats, about what the cost plus ordinary work is worth, so whether and when it tests depends on its past observations and on how long it has worked.';
      else v = '<strong>It keeps working and does not test the assumption in any of its 50 steps.</strong> A test promises only ' + g.toFixed(4) + ' nats.';
      verdict.innerHTML = v;
    }
    input.addEventListener('input', update);
    // Start at p = 0.99.
    var best = 0;
    q.forEach(function (qq, i) { if (Math.abs(Math.log10(qq) + 2) < Math.abs(Math.log10(q[best]) + 2)) best = i; });
    input.value = best;
    update();

    // Results table from the pre-registered run.
    var tbl = document.getElementById('doubt-table');
    var Ks = [1, 4, 16, 64];
    function rates(agent, p) {
      return Ks.map(function (K) {
        var r = D.e1.filter(function (e) { return e.agent === agent && e.p === p && e.K === K; })[0];
        return r ? r.tested : null;
      });
    }
    var rows = [
      ['Information gain, p = 0.9', rates('eig', 0.9)],
      ['Information gain, p = 0.99', rates('eig', 0.99)],
      ['Information gain, p = 0.999', rates('eig', 0.999)],
      ['Information gain, assumption not in its model', rates('eig_fixed', 0.99)],
      ['Novelty bonus, any p', rates('novelty', 0.999)],
      ['Schedule of doubt (control), any p', rates('doubter', 0.999)]
    ];
    var html = '<thead><tr><th>Agent</th>' + Ks.map(function (K) { return '<th>K = ' + K + '</th>'; }).join('') + '</tr></thead><tbody>';
    rows.forEach(function (row) {
      html += '<tr><td>' + row[0] + '</td>' + row[1].map(function (v) {
        return '<td' + (v === 0 ? ' class="zero"' : '') + '>' + (v === null ? '' : Math.round(v * 100) + '%') + '</td>';
      }).join('') + '</tr>';
    });
    tbl.innerHTML = html + '</tbody>';
  }


  /* ---------------- Terms ("?") and side notes ---------------- */
  function initTerms() {
    var pop = document.getElementById('q-pop');
    if (!pop) return;
    var open = null, pinned = false;
    var hover = window.matchMedia('(hover: hover)');
    function show(btn) {
      pop.textContent = btn.getAttribute('data-def');
      pop.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      var r = btn.getBoundingClientRect();
      var w = Math.min(300, window.innerWidth - 24);
      pop.style.maxWidth = w + 'px';
      var left = Math.max(window.scrollX + 12, Math.min(r.left + window.scrollX - 24, window.scrollX + window.innerWidth - w - 12));
      pop.style.left = left + 'px';
      pop.style.top = (r.bottom + window.scrollY + 8) + 'px';
      open = btn;
    }
    function hide() {
      if (open) open.setAttribute('aria-expanded', 'false');
      pop.hidden = true;
      open = null; pinned = false;
    }
    document.querySelectorAll('button.q').forEach(function (b) {
      b.removeAttribute('title');
      b.setAttribute('aria-expanded', 'false');
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        if (open === b && pinned) { hide(); return; }
        hide(); show(b); pinned = true;
      });
      b.addEventListener('mouseenter', function () { if (hover.matches && !pinned) { hide(); show(b); } });
      b.addEventListener('mouseleave', function () { if (hover.matches && !pinned) hide(); });
    });
    document.addEventListener('click', hide);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
    window.addEventListener('resize', hide);

    // On wide screens the side notes sit in the margin, and hovering the letter lights its note.
    document.querySelectorAll('.sn-ref').forEach(function (l) {
      var note = l.nextElementSibling && l.nextElementSibling.nextElementSibling;
      if (!note) return;
      l.addEventListener('mouseenter', function () { note.classList.add('hot'); });
      l.addEventListener('mouseleave', function () { note.classList.remove('hot'); });
    });
  }

  /* ---------------- The search space ---------------- */
  // An illustration with made-up settings, not a model from the paper. Sub search spaces are the nodes of a graph
  // that is generated chunk by chunk from a fixed seed, so the space has no edge. A searcher moves from a sub search
  // space to a neighbouring one, and what it explores joins what is known. Taste is a sense of which way the goal
  // lies, right only some of the time.
  function initSpace() {
    var fig = document.getElementById('fig-space');
    if (!fig) return;
    var canvas = document.getElementById('space-canvas'), g = canvas.getContext('2d');
    var kIn = document.getElementById('space-k'), tIn = document.getElementById('space-t');
    var kOut = document.getElementById('space-k-out'), tOut = document.getElementById('space-t-out');
    var runBtn = document.getElementById('space-run'), resetBtn = document.getElementById('space-reset'), zoomBtn = document.getElementById('space-zoom');
    var legend = document.getElementById('space-legend');
    var CH = 40, PER = 3, LINK = 36, KNOWN_R = 80, GOAL_D = 560, T_MAX = 1500, TICKS_PER_SEC = 8, RUNS = 30;

    function mulberry(seed) {
      return function () {
        seed |= 0; seed = seed + 0x6D2B79F5 | 0;
        var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }
    function hash(a, b) { var h = Math.imul(a, 374761393) ^ Math.imul(b, 668265263) ^ 0x9e3779b9; h = Math.imul(h ^ h >>> 13, 1274126177); return (h ^ h >>> 16) >>> 0; }

    var chunks = {}, nodes = [];
    function chunk(cx, cy) {
      var key = cx + ',' + cy;
      if (chunks[key]) return chunks[key];
      var r = mulberry(hash(cx, cy)), list = [];
      for (var i = 0; i < PER; i++) {
        var n = { id: nodes.length, x: (cx + 0.08 + 0.84 * r()) * CH, y: (cy + 0.08 + 0.84 * r()) * CH, star: false, known: false, nb: null };
        n.star = r() < 0.07 && Math.hypot(n.x, n.y) > KNOWN_R + 30;
        n.known = Math.hypot(n.x, n.y) < KNOWN_R;
        n.known0 = n.known;
        list.push(n); nodes.push(n);
      }
      chunks[key] = list;
      return list;
    }
    function near(x, y, R) {
      var out = [];
      for (var cx = Math.floor((x - R) / CH); cx <= Math.floor((x + R) / CH); cx++)
        for (var cy = Math.floor((y - R) / CH); cy <= Math.floor((y + R) / CH); cy++)
          Array.prototype.push.apply(out, chunk(cx, cy));
      return out;
    }
    function neighbours(n) {
      if (!n.nb) n.nb = near(n.x, n.y, LINK).filter(function (m) { return m !== n && Math.hypot(m.x - n.x, m.y - n.y) < LINK; });
      return n.nb;
    }
    function closest(x, y) {
      var c = near(x, y, CH), best = null, bd = 1e9;
      c.forEach(function (n) { var d = Math.hypot(n.x - x, n.y - y); if (d < bd) { bd = d; best = n; } });
      return best;
    }

    // The goal, and the node at the edge of what is known where everyone starts.
    var ga = -0.35, goal = closest(GOAL_D * Math.cos(ga), GOAL_D * Math.sin(ga));
    goal.star = false;
    var start = closest((KNOWN_R - 6) * Math.cos(ga + 0.5), (KNOWN_R - 6) * Math.sin(ga + 0.5));

    var SPEC = [
      { id: 'person', name: 'A person with taste', color: '--warm', fast: false, taste: true, seed: 3 },
      { id: 'machine', name: 'A machine without direction', color: '--faint', fast: true, taste: false, seed: 5 },
      { id: 'both', name: 'Together, fast and with taste', color: '--accent', fast: true, taste: true, seed: 7 }
    ];
    var S, time, viewW, raf = null, last = 0, acc = 0, explored = {};

    function reset() {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      nodes.forEach(function (n) { n.known = n.known0; n.by = null; });
      explored = {};
      S = SPEC.map(function (sp) {
        return { spec: sp, at: start, path: [start], stars: 0, hops: 0, reached: null, rng: mulberry(sp.seed) };
      });
      time = 0;
      viewW = 2 * GOAL_D + 220;
      runBtn.textContent = 'Run';
      draw(); stats();
    }

    function hop(s, t) {
      var nb = neighbours(s.at);
      var next;
      if (s.spec.taste && s.rng() < t) {
        // A sense of direction: the neighbour that looks closest to the goal, judged with some noise.
        var best = null, bd = 1e9;
        nb.forEach(function (m) { var d = Math.hypot(m.x - goal.x, m.y - goal.y) + 30 * (s.rng() - 0.5); if (d < bd) { bd = d; best = m; } });
        next = best;
      } else {
        next = nb[Math.floor(s.rng() * nb.length)];
      }
      s.at = next; s.hops++;
      s.path.push(next);
      if (s.path.length > 4000) s.path = s.path.filter(function (_, i) { return i % 2 === 0 || i > s.path.length - 50; });
      if (!next.known) { next.known = true; next.by = s.spec.id; }
      var key = s.spec.id + ':' + next.id;
      if (!explored[key]) { explored[key] = true; if (next.star) s.stars++; }
      if (next === goal && s.reached === null) s.reached = time;
    }

    // The same searchers, run RUNS times with other seeds, to show that the order is not luck.
    function race(sp, seed, k, t) {
      var rng = mulberry(seed), at = start, steps = sp.fast ? k : 1;
      for (var time = 1; time <= T_MAX; time++) {
        for (var i = 0; i < steps; i++) {
          var nb = neighbours(at), next;
          if (sp.taste && rng() < t) {
            var best = null, bd = 1e9;
            nb.forEach(function (m) { var d = Math.hypot(m.x - goal.x, m.y - goal.y) + 30 * (rng() - 0.5); if (d < bd) { bd = d; best = m; } });
            next = best;
          } else next = nb[Math.floor(rng() * nb.length)];
          at = next;
          if (at === goal) return time;
        }
      }
      return null;
    }
    var summary = '', sumTimer = null;
    function summarise() {
      var k = +kIn.value, t = +tIn.value, parts = [], meds = [];
      SPEC.forEach(function (sp, j) {
        var ts = [], miss = 0;
        for (var r = 0; r < RUNS; r++) { var x = race(sp, 1000 + 97 * r + j, k, t); if (x === null) miss++; else ts.push(x); }
        ts.sort(function (a, b) { return a - b; });
        var med = miss * 2 >= RUNS ? null : (ts.concat(Array(miss).fill(Infinity)))[Math.floor(RUNS / 2)];
        meds.push(med);
        parts.push('<span style="color:var(' + sp.color + ')">●</span> ' + sp.name.toLowerCase() + ': ' +
          (med === null ? 'did not reach it in most runs' : 'median time ' + med) + (miss && med !== null ? ' (missed in ' + miss + ')' : ''));
      });
      var bestJ = -1, bestV = Infinity;
      meds.forEach(function (m, j) { if (m !== null && m < bestV) { bestV = m; bestJ = j; } });
      summary = '<div class="total"><strong>Over ' + RUNS + ' runs with these settings</strong>' +
        (k === 1 ? '. At 1\u00d7 the machine adds no speed, so the person and the pair are the same searcher and differ only by chance.' : bestJ >= 0 ? ', the fastest to the star is ' + SPEC[bestJ].name.toLowerCase() + '.' : ', nobody reaches the star in most runs.') +
        '<br>' + parts.join('<br>') + '</div>';
      stats();
    }
    function resummarise() { clearTimeout(sumTimer); sumTimer = setTimeout(summarise, 150); }

    function tick() {
      var k = +kIn.value, t = +tIn.value;
      time++;
      S.forEach(function (s) {
        if (s.reached !== null) return;
        var n = s.spec.fast ? k : 1;
        for (var i = 0; i < n && s.reached === null; i++) hop(s, t);
      });
    }

    function css(v) { return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }

    function star(x, y, r, col, stroke) {
      g.beginPath();
      for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; g.lineTo(x + rr * Math.cos(a), y + rr * Math.sin(a)); }
      g.closePath(); g.fillStyle = col; g.fill();
      if (stroke) { g.strokeStyle = stroke; g.lineWidth = 1.5; g.stroke(); }
    }

    function draw() {
      var dpr = window.devicePixelRatio || 1, w = canvas.clientWidth, h = w * 0.625;
      if (canvas.width !== Math.round(w * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, w, h);
      var sc = w / viewW, vh = h / sc;
      var cxw = GOAL_D * Math.cos(ga) / 2, cyw = GOAL_D * Math.sin(ga) / 2;
      var X = function (x) { return w / 2 + (x - cxw) * sc; }, Y = function (y) { return h / 2 + (y - cyw) * sc; };
      var ink = css('--ink'), faint = css('--faint'), muted = css('--muted'), warm = css('--warm');
      var vis = near(cxw, cyw, Math.max(viewW, vh) / 2 + CH);
      var rr = Math.max(1.4, Math.min(7, 8 * sc));

      // Edges of what is known: between known neighbours.
      g.strokeStyle = muted; g.lineWidth = 1; g.globalAlpha = 0.35;
      vis.forEach(function (n) {
        if (!n.known) return;
        neighbours(n).forEach(function (m) { if (m.known && m.id > n.id) { g.beginPath(); g.moveTo(X(n.x), Y(n.y)); g.lineTo(X(m.x), Y(m.y)); g.stroke(); } });
      });
      g.globalAlpha = 1;

      // Sub search spaces: dotted when unexplored, filled when they have joined what is known.
      vis.forEach(function (n) {
        var x = X(n.x), y = Y(n.y);
        if (x < -10 || y < -10 || x > w + 10 || y > h + 10) return;
        g.beginPath(); g.arc(x, y, rr, 0, 2 * Math.PI);
        if (n.known) { g.fillStyle = n.known0 ? ink : (n.by ? css(SPEC.filter(function (q) { return q.id === n.by; })[0].color) : muted); g.globalAlpha = n.known0 ? 0.8 : 0.35; g.fill(); g.globalAlpha = 1; }
        else { g.strokeStyle = faint; g.globalAlpha = 0.28; g.lineWidth = 1; g.stroke(); g.globalAlpha = 1; }
        if (n.star && n.known && !n.known0) star(x, y, Math.max(3.5, rr * 0.9), '#e0a100');
      });

      // Paths.
      S.forEach(function (s) {
        var col = css(s.spec.color);
        g.strokeStyle = col; g.lineWidth = 1.6; g.globalAlpha = 0.8; g.beginPath();
        s.path.forEach(function (n, i) { if (i) g.lineTo(X(n.x), Y(n.y)); else g.moveTo(X(n.x), Y(n.y)); });
        g.stroke(); g.globalAlpha = 1;
      });
      S.forEach(function (s) {
        g.beginPath(); g.arc(X(s.at.x), Y(s.at.y), 5.5, 0, 2 * Math.PI); g.fillStyle = css(s.spec.color); g.fill();
        g.strokeStyle = css('--panel'); g.lineWidth = 1.5; g.stroke();
      });

      // Labels, the known region and the goal.
      g.beginPath(); g.arc(X(0), Y(0), KNOWN_R * sc, 0, 2 * Math.PI); g.strokeStyle = ink; g.globalAlpha = 0.3; g.lineWidth = 1; g.stroke(); g.globalAlpha = 1;
      g.font = '12px -apple-system, BlinkMacSystemFont, Inter, sans-serif'; g.textAlign = 'center'; g.fillStyle = muted;
      g.fillStyle = css('--panel'); g.globalAlpha = 0.85; g.fillRect(X(0) - 44, Y(KNOWN_R) + 4, 88, 16); g.globalAlpha = 1; g.fillStyle = ink; g.fillText('what is known', X(0), Y(KNOWN_R) + 16);
      star(X(goal.x), Y(goal.y), 13, warm, css('--panel'));
      g.fillStyle = warm; g.font = '600 12.5px -apple-system, BlinkMacSystemFont, Inter, sans-serif';
      g.fillText('where we want to go', X(goal.x), Y(goal.y) + 28);
      g.textAlign = 'right'; g.fillStyle = muted; g.font = '12px -apple-system, BlinkMacSystemFont, Inter, sans-serif';
      g.fillText('the space goes on beyond the edge', w - 10, h - 10);
    }

    function stats() {
      var html = '';
      S.forEach(function (s) {
        var where = s.reached !== null ? '<strong>reached the star at time ' + s.reached + '</strong>' : 'still searching';
        html += '<div><div class="who"><span class="sw" style="background:var(' + s.spec.color + ')"></span>' + s.spec.name + '</div>' +
          '<div class="stat">' + where + ', ' + s.hops + ' steps, ' + s.stars + ' smaller ' + (s.stars === 1 ? 'find' : 'finds') + ' on the way</div></div>';
      });
      var grown = nodes.filter(function (n) { return n.known && !n.known0; }).length;
      html += '<div class="total">Time ' + time + (time >= T_MAX ? ' (stopped)' : '') + '. What is known has grown by ' + grown + ' sub search spaces.</div>';
      legend.innerHTML = html + summary;
    }

    function frame(ts) {
      if (!last) last = ts;
      acc += (ts - last) / 1000 * TICKS_PER_SEC; last = ts;
      while (acc >= 1 && time < T_MAX) { tick(); acc -= 1; }
      draw(); stats();
      var done = S.every(function (s) { return s.reached !== null; });
      if (done || time >= T_MAX) { raf = null; runBtn.textContent = 'Run'; return; }
      raf = requestAnimationFrame(frame);
    }

    runBtn.addEventListener('click', function () {
      if (raf) { cancelAnimationFrame(raf); raf = null; runBtn.textContent = 'Run'; return; }
      if (time >= T_MAX || S.every(function (s) { return s.reached !== null; })) reset();
      runBtn.textContent = 'Pause'; last = 0; acc = 0;
      raf = requestAnimationFrame(frame);
    });
    resetBtn.addEventListener('click', reset);
    zoomBtn.addEventListener('click', function () {
      viewW = viewW > 4 * (2 * GOAL_D + 220) ? 2 * GOAL_D + 220 : viewW * 2;
      zoomBtn.textContent = viewW > 4 * (2 * GOAL_D + 220) ? 'Zoom in' : 'Zoom out';
      draw();
    });
    function labels() { kOut.textContent = kIn.value + '×'; tOut.textContent = (+tIn.value).toFixed(2); }
    kIn.addEventListener('input', function () { labels(); resummarise(); }); tIn.addEventListener('input', function () { labels(); resummarise(); });
    window.addEventListener('resize', function () { draw(); });
    new MutationObserver(function () { draw(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    labels(); reset(); summarise();
  }

  /* ---------------- Three stories, animated ---------------- */
  // Illustrations of the three stories in the opening, not to scale. Newton: the pull that brings down the apple
  // also holds the Moon in its orbit. Einstein: riding alongside a light wave, at the speed of light the wave would
  // stand still. Feynman: a plate thrown in the air wobbles as it spins.
  function initStories() {
    var fig = document.getElementById('fig-stories');
    if (!fig) return;
    var NS = 'http://www.w3.org/2000/svg';
    function el(parent, tag, attrs, text) {
      var e = document.createElementNS(NS, tag);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      if (text) e.textContent = text;
      parent.appendChild(e);
      return e;
    }
    var playBtn = document.getElementById('st-play');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var playing = !reduce, visible = false, raf = null, last = 0, T = 0;

    function face(parent, src, cx, cy, r, label) {
      var g = sv(parent, 'g', {});
      var im = sv(g, 'image', { href: src, x: cx - r, y: cy - r, width: 2 * r, height: 2 * r });
      im.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', src);
      sv(g, 'circle', { cx: cx, cy: cy, r: r, style: 'fill:none;stroke:var(--panel);stroke-width:2' });
      if (label) sv(g, 'title', {}, label);
      return g;
    }
    // Newton, sitting under the tree in the evening, sees an apple fall, and the Moon hangs in the sky.
    var SVGNS = 'http://www.w3.org/2000/svg';
    var sN = document.getElementById('st-newton');
    var G0 = 170;
    [[150, 22], [204, 70], [132, 50], [196, 16], [20, 30]].forEach(function (p) { sv(sN, 'circle', { cx: p[0], cy: p[1], r: 1.2, style: 'fill:var(--faint)' }); });
    sv(sN, 'circle', { cx: 184, cy: 40, r: 13, style: 'fill:#e0a100;fill-opacity:.85' });
    sv(sN, 'circle', { cx: 191, cy: 35, r: 12, style: 'fill:var(--page)' });
    var moonArrow = sv(sN, 'line', { x1: 184, y1: 60, x2: 184, y2: 150, 'marker-end': 'url(#st-arrow-n)', style: 'stroke:var(--warm);stroke-width:1.6;stroke-dasharray:3 3' });
    var defsN = sv(sN, 'defs', {});
    var mkN = sv(defsN, 'marker', { id: 'st-arrow-n', viewBox: '0 0 10 10', refX: '8', refY: '5', markerWidth: '6', markerHeight: '6', orient: 'auto' });
    sv(mkN, 'path', { d: 'M0,0 L10,5 L0,10 z', style: 'fill:var(--warm)' });
    var samePull = sv(sN, 'text', { x: 214, y: 190, 'text-anchor': 'end', class: 'st-lbl st-warm' }, 'the same pull?');
    sv(sN, 'line', { x1: 8, x2: 212, y1: G0, y2: G0, style: 'stroke:var(--muted);stroke-width:1.5' });
    sv(sN, 'path', { d: 'M70,' + G0 + ' L72,92 L80,92 L83,' + G0 + ' Z', style: 'fill:var(--muted)' });
    [[76, 64, 40], [50, 78, 24], [104, 76, 24], [76, 40, 24]].forEach(function (c) { sv(sN, 'circle', { cx: c[0], cy: c[1], r: c[2], style: 'fill:#5c8a4a;fill-opacity:.55' }); });
    var hanging = [[58, 70], [92, 58], [64, 96]].map(function (p) { return sv(sN, 'circle', { cx: p[0], cy: p[1], r: 3.6, style: 'fill:#c8402a' }); });
    // Newton's face at the foot of the tree (Godfrey Kneller, 1689, public domain).
    var nFace = face(sN, 'img/newton.png', 104, 146, 21, 'Isaac Newton, painted by Godfrey Kneller in 1689');
    var bub = [[124, 124, 2.5], [131, 114, 3.5]].map(function (b) { return sv(sN, 'circle', { cx: b[0], cy: b[1], r: b[2], style: 'fill:var(--warm)' }); });
    var qN = sv(sN, 'text', { x: 136, y: 104, class: 'an-q', style: 'fill:var(--warm)' }, '?');
    var apple = sv(sN, 'circle', { cx: 150, cy: 84, r: 3.8, style: 'fill:#c8402a' });
    var fallArrow = sv(sN, 'line', { 'marker-end': 'url(#st-arrow-n)', style: 'stroke:var(--warm);stroke-width:1.6' });
    function drawNewton(t) {
      var c = t % 7, land = G0 - 4, y0 = 84;
      var u = clamp01((c - 0.8) / 0.9), y = c < 0.8 ? y0 : y0 + (land - y0) * u * u;
      apple.setAttribute('cy', y.toFixed(2));
      apple.setAttribute('cx', (150 + (c > 1.7 ? Math.min(6, (c - 1.7) * 8) : 0)).toFixed(2));
      apple.style.opacity = c > 6.5 ? (7 - c) / 0.5 : c < 0.3 ? c / 0.3 : 1;
      fallArrow.setAttribute('x1', 159); fallArrow.setAttribute('x2', 159);
      fallArrow.setAttribute('y1', (y - 6).toFixed(1)); fallArrow.setAttribute('y2', (y + 8).toFixed(1));
      fallArrow.style.opacity = c > 0.9 && c < 1.7 ? 1 : 0;
      var look = c < 0.8 ? 0 : c < 1.7 ? -10 * clamp01((c - 0.8) / 0.3) : c < 3 ? -10 + 18 * clamp01((c - 1.7) / 0.4) : 8 - 8 * clamp01((c - 5.6) / 0.6);
      nFace.setAttribute('transform', 'rotate(' + look.toFixed(1) + ' 104 146)');
      bub.forEach(function (b, i) { b.style.opacity = clamp01((c - 1.9 - 0.2 * i) / 0.3) * (c > 6.5 ? (7 - c) / 0.5 : 1); });
      qN.style.opacity = clamp01((c - 2.1) / 0.4) * (c > 6.5 ? (7 - c) / 0.5 : 1);
      var m = clamp01((c - 3.2) / 0.5) * (c > 6.5 ? (7 - c) / 0.5 : 1);
      moonArrow.style.opacity = m; samePull.style.opacity = clamp01((c - 3.8) / 0.5) * (c > 6.5 ? (7 - c) / 0.5 : 1);
    }

    // Einstein
    var sE = document.getElementById('st-einstein');
    var wave = el(sE, 'path', { style: 'fill:none;stroke:var(--warm);stroke-width:2.4' });
    var ticks = el(sE, 'g', {});
    var tickEls = [];
    for (var i = 0; i < 11; i++) tickEls.push(el(ticks, 'line', { y1: 142, y2: 148, style: 'stroke:var(--faint);stroke-width:1.5' }));
    el(sE, 'line', { x1: 10, x2: 210, y1: 148, y2: 148, style: 'stroke:var(--line)' });
    var eFace = face(sE, 'img/einstein.png', 110, 124, 17, 'Albert Einstein, photographed by Ferdinand Schmutzer in 1921');
    el(sE, 'text', { x: 132, y: 128, class: 'st-lbl' }, 'riding along');
    el(sE, 'text', { x: 14, y: 30, class: 'st-lbl' }, 'a beam of light');
    var frozen = el(sE, 'text', { x: 110, y: 52, 'text-anchor': 'middle', class: 'st-lbl st-warm st-big' }, 'the wave stands still?');
    el(sE, 'rect', { x: 30, y: 168, width: 160, height: 6, rx: 3, style: 'fill:var(--line)' });
    var bar = el(sE, 'rect', { x: 30, y: 168, width: 0, height: 6, rx: 3, style: 'fill:var(--accent)' });
    var speedTxt = el(sE, 'text', { x: 110, y: 192, 'text-anchor': 'middle', class: 'st-lbl' }, '');
    var phase = 0, ground = 0;
    function drawEinstein(t, dt) {
      var c = t % 9, v = c < 6 ? 0.5 - 0.5 * Math.cos(Math.PI * c / 6) : 1;
      phase += (1 - v) * 80 * dt; ground += v * 80 * dt;
      var d = '';
      for (var x = 10; x <= 210; x += 3) d += (x === 10 ? 'M' : 'L') + x + ',' + (90 + 24 * Math.sin(2 * Math.PI * (x - phase) / 68)).toFixed(2);
      wave.setAttribute('d', d);
      tickEls.forEach(function (e, j) { var x = 12 + ((j * 18 - ground) % 198 + 198) % 198; e.setAttribute('x1', x.toFixed(1)); e.setAttribute('x2', x.toFixed(1)); });
      bar.setAttribute('width', (160 * v).toFixed(1));
      speedTxt.textContent = 'you move at ' + (v > 0.995 ? 'the speed of light' : (v.toFixed(2) + ' of the speed of light'));
      frozen.style.opacity = v > 0.995 ? Math.min(1, (c - 6) * 2) : 0;
      eFace.setAttribute('transform', 'translate(0,' + (1.5 * Math.sin(5 * t) * (1 - v)).toFixed(2) + ') rotate(' + (v > 0.995 ? -6 : 0) + ' 110 124)');
    }

    // Feynman
    var sF = document.getElementById('st-feynman');
    el(sF, 'line', { x1: 10, x2: 210, y1: 182, y2: 182, style: 'stroke:var(--line)' });
    var trail = el(sF, 'path', { style: 'fill:none;stroke:var(--faint);stroke-dasharray:2 4' });
    var plate = el(sF, 'path', { style: 'fill:var(--panel);stroke:var(--ink);stroke-width:1.4' });
    var ring = el(sF, 'path', { style: 'fill:none;stroke:var(--faint)' });
    var medal = el(sF, 'circle', { r: 4, style: 'fill:#c8402a' });
    el(sF, 'text', { x: 8, y: 22, class: 'st-lbl' }, 'it wobbles as it spins');
    var fFace = face(sF, 'img/feynman.png', 30, 156, 20, 'Richard Feynman, Los Alamos ID badge photograph, about 1943');
    var R = 30, EL = 0.72;
    function proj(X, Y, Z) { return [X, -(Z * Math.cos(EL) + Y * Math.sin(EL))]; }
    function drawFeynman(t) {
      var F = 3.6, c = t % F, s = c / F;
      var cx = 70 + 120 * s, cy = 160 - 120 * 4 * s * (1 - s);
      var w = 2.4, alpha = 0.32, psi = 2 * w * t, th = w * t;
      var n = [Math.sin(alpha) * Math.cos(psi), Math.sin(alpha) * Math.sin(psi), Math.cos(alpha)];
      var u = [n[1], -n[0], 0], ul = Math.hypot(u[0], u[1]) || 1; u = [u[0] / ul, u[1] / ul, 0];
      var v = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]];
      function rim(rr, a) { var X = rr * (Math.cos(a) * u[0] + Math.sin(a) * v[0]), Y = rr * (Math.cos(a) * u[1] + Math.sin(a) * v[1]), Z = rr * (Math.cos(a) * u[2] + Math.sin(a) * v[2]); var p = proj(X, Y, Z); return [cx + p[0], cy + p[1]]; }
      function loop(rr) { var d = ''; for (var k = 0; k <= 40; k++) { var p = rim(rr, k / 40 * 2 * Math.PI); d += (k ? 'L' : 'M') + p[0].toFixed(2) + ',' + p[1].toFixed(2); } return d + 'Z'; }
      plate.setAttribute('d', loop(R)); ring.setAttribute('d', loop(R * 0.68));
      var m = rim(R * 0.42, th - psi);
      medal.setAttribute('cx', m[0].toFixed(2)); medal.setAttribute('cy', m[1].toFixed(2));
      var d = '';
      for (var k = 0; k <= 30; k++) { var q = k / 30 * s; d += (k ? 'L' : 'M') + (70 + 120 * q).toFixed(1) + ',' + (160 - 480 * q * (1 - q)).toFixed(1); }
      trail.setAttribute('d', d);
      var fade = c > F - 0.3 ? (F - c) / 0.3 : c < 0.3 ? c / 0.3 : 1;
      plate.style.opacity = ring.style.opacity = medal.style.opacity = fade;
      fFace.setAttribute('transform', 'rotate(' + (-14 + 26 * s).toFixed(1) + ' 30 156)');
    }

    function draw(dt) { drawNewton(T); drawEinstein(T, dt); drawFeynman(T); }
    function frame(ts) {
      var dt = last ? Math.min(0.05, (ts - last) / 1000) : 0; last = ts;
      T += dt; draw(dt);
      raf = (playing && visible) ? requestAnimationFrame(frame) : null;
    }
    function kick() { if (playing && visible && !raf) { last = 0; raf = requestAnimationFrame(frame); } }
    playBtn.textContent = playing ? 'Pause' : 'Play';
    playBtn.addEventListener('click', function () {
      playing = !playing; playBtn.textContent = playing ? 'Pause' : 'Play';
      if (!playing && raf) { cancelAnimationFrame(raf); raf = null; }
      kick();
    });
    T = 4.2; draw(0);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; kick(); }).observe(fig);
    } else { visible = true; kick(); }
  }

  // Copy buttons in the "Cite this post" box.
  function initCite() {
    Array.prototype.forEach.call(document.querySelectorAll('.cite-box button[data-copy]'), function (b) {
      b.addEventListener('click', function () {
        var t = document.getElementById(b.getAttribute('data-copy')).textContent;
        var done = function () { var o = b.textContent; b.textContent = 'Copied'; setTimeout(function () { b.textContent = o; }, 1400); };
        if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, function () {});
        else { var r = document.createRange(); r.selectNodeContents(document.getElementById(b.getAttribute('data-copy'))); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }
      });
    });
  }

  /* ---------------- Concept animations ---------------- */
  // Small looping illustrations of the post's ideas. They run only while on screen, can be paused, and stay still
  // for readers who ask for reduced motion.
  var SVGNS = 'http://www.w3.org/2000/svg';
  function sv(parent, tag, attrs, text) {
    var e = document.createElementNS(SVGNS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    parent.appendChild(e);
    return e;
  }
  function pic(parent, src, cx, cy, r, label, square) {
    var g = sv(parent, 'g', {});
    var im = sv(g, 'image', { href: src, x: cx - r, y: cy - r, width: 2 * r, height: 2 * r });
    im.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', src);
    if (!square) sv(g, 'circle', { cx: cx, cy: cy, r: r, style: 'fill:none;stroke:var(--line);stroke-width:1.5' });
    if (label) sv(g, 'title', {}, label);
    return g;
  }
  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function animFig(id, init) {
    var fig = document.getElementById(id);
    if (!fig) return null;
    var svg = fig.querySelector('svg'), btn = fig.querySelector('.anim-play');
    var a = init(svg, fig);
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var playing = !reduce, visible = false, raf = null, last = 0, T = reduce ? a.still : 0;
    function frame(ts) {
      var dt = last ? Math.min(0.05, (ts - last) / 1000) : 0; last = ts;
      T += dt; a.draw(T, dt);
      raf = (playing && visible) ? requestAnimationFrame(frame) : null;
    }
    function kick() { if (playing && visible && !raf) { last = 0; raf = requestAnimationFrame(frame); } }
    if (btn) {
      btn.textContent = playing ? 'Pause' : 'Play';
      btn.addEventListener('click', function () {
        playing = !playing; btn.textContent = playing ? 'Pause' : 'Play';
        if (!playing && raf) { cancelAnimationFrame(raf); raf = null; }
        kick();
      });
    }
    a.draw(T, 0);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; kick(); }).observe(fig);
    else { visible = true; kick(); }
    return { restart: function () { T = reduce ? a.still : 0; a.draw(T, 0); kick(); } };
  }

  // 1. Handed or noticed.
  function initInquiry() {
    animFig('fig-inquiry', function (svg) {
      sv(svg, 'line', { x1: 300, x2: 300, y1: 14, y2: 196, style: 'stroke:var(--line)' });
      sv(svg, 'text', { x: 150, y: 26, 'text-anchor': 'middle', class: 'an-h' }, 'exogenous');
      sv(svg, 'text', { x: 450, y: 26, 'text-anchor': 'middle', class: 'an-h' }, 'endogenous');
      sv(svg, 'text', { x: 150, y: 192, 'text-anchor': 'middle', class: 'an-lbl' }, 'a person hands in the question');
      sv(svg, 'text', { x: 450, y: 192, 'text-anchor': 'middle', class: 'an-lbl' }, 'the question comes from its own observation');
      pic(svg, '../../images/mark-icon-round.png', 62, 102, 24, 'a person (my own face)');
      sv(svg, 'text', { x: 62, y: 150, 'text-anchor': 'middle', class: 'an-lbl' }, 'a person');
      function machine(x) {
        sv(svg, 'rect', { x: x, y: 80, width: 76, height: 46, rx: 9, style: 'fill:var(--panel);stroke:var(--ink);stroke-width:1.5' });
        pic(svg, 'img/claude.svg', x + 38, 103, 15, 'a machine (the Claude symbol)', true);
        sv(svg, 'text', { x: x + 38, y: 143, 'text-anchor': 'middle', class: 'an-lbl' }, 'machine');
      }
      machine(186); machine(352);
      var card = sv(svg, 'g', {});
      sv(card, 'rect', { x: -13, y: -10, width: 26, height: 20, rx: 3, style: 'fill:var(--panel);stroke:var(--accent);stroke-width:1.5' });
      sv(card, 'text', { x: 0, y: 5, 'text-anchor': 'middle', class: 'an-q', style: 'fill:var(--accent)' }, '?');
      var work = [0, 1, 2].map(function (i) { return sv(svg, 'circle', { cx: 210 + 14 * i, cy: 160, r: 3.5, style: 'fill:var(--accent)' }); });
      sv(svg, 'path', { d: 'M428,92 L592,52 L592,152 L428,114 Z', style: 'fill:var(--accent);fill-opacity:.07' });
      var pts = [];
      for (var i = 0; i < 9; i++) pts.push(sv(svg, 'circle', { r: 5 }));
      var q = sv(svg, 'text', { x: 390, y: 68, 'text-anchor': 'middle', class: 'an-q', style: 'fill:var(--warm)' }, '?');
      return {
        still: 2.6,
        draw: function (T) {
          var c = T % 6, u = clamp01(c / 1.6);
          var x = 78 + (224 - 78) * u, y = 88 + (66 - 88) * u - 8 * 4 * u * (1 - u);
          card.setAttribute('transform', 'translate(' + (c < 1.6 ? x : 224) + ',' + (c < 1.6 ? y : 66) + ')');
          card.style.opacity = c < 1.6 ? 1 : c < 2 ? 1 - (c - 1.6) / 0.4 : 0;
          work.forEach(function (w, i) { w.style.opacity = c > 2 && c < 5.6 ? (0.25 + 0.75 * (Math.sin(6 * T - i) > 0.3)) : 0; });
          var near = 0;
          pts.forEach(function (e, k) {
            var pos = k * 20 + T * 28, id = k + 9 * Math.floor(pos / 180), px = 610 - (pos % 180);
            var odd = id % 7 === 3, py = odd ? 66 : 103 + 3 * Math.sin(id * 1.7);
            e.setAttribute('cx', px.toFixed(1)); e.setAttribute('cy', py.toFixed(1));
            e.style.fill = odd && px < 590 ? 'var(--warm)' : 'var(--faint)';
            e.style.opacity = clamp01((px - 432) / 24);
            if (odd && px < 585 && px > 436) near = Math.max(near, clamp01((585 - px) / 30));
          });
          q.style.opacity = near;
        }
      };
    });
  }

  // 2. You need the dots first.
  function initDots() {
    animFig('fig-dots', function (svg) {
      var rng = (function (seed) { return function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }; })(11);
      var P = [];
      while (P.length < 28) {
        var x = 230 + 175 * (2 * rng() - 1), y = 110 + 70 * (2 * rng() - 1);
        if (Math.pow((x - 230) / 175, 2) + Math.pow((y - 110) / 70, 2) > 1) continue;
        if (P.some(function (p) { return Math.hypot(p[0] - x, p[1] - y) < 26; })) continue;
        P.push([x, y]);
      }
      var E = [];
      P.forEach(function (a, i) { P.forEach(function (b, j) { if (j > i && Math.hypot(a[0] - b[0], a[1] - b[1]) < 60) E.push([i, j]); }); });
      E.sort(function (e1, e2) { return (P[e1[0]][0] + P[e1[1]][0]) - (P[e2[0]][0] + P[e2[1]][0]); });
      var Q = [505, 104];
      var near = P.map(function (p, i) { return [Math.hypot(p[0] - Q[0], p[1] - Q[1]), i]; }).sort(function (a, b) { return a[0] - b[0]; }).slice(0, 2);
      var edgeEls = E.map(function (e) { return sv(svg, 'line', { x1: P[e[0]][0], y1: P[e[0]][1], x2: P[e[1]][0], y2: P[e[1]][1], style: 'stroke:var(--muted);stroke-width:1.2' }); });
      var qLines = near.map(function (n) { return sv(svg, 'line', { x1: P[n[1]][0], y1: P[n[1]][1], x2: Q[0], y2: Q[1], style: 'stroke:var(--warm);stroke-width:1.4;stroke-dasharray:4 4' }); });
      var dotEls = P.map(function (p) { return sv(svg, 'circle', { cx: p[0], cy: p[1], r: 5.5, style: 'fill:var(--ink)' }); });
      var ring = sv(svg, 'circle', { cx: Q[0], cy: Q[1], r: 16, style: 'fill:none;stroke:var(--warm);stroke-width:1.6' });
      var qm = sv(svg, 'text', { x: Q[0], y: Q[1] + 7, 'text-anchor': 'middle', class: 'an-q', style: 'fill:var(--warm)' }, '?');
      var phase = sv(svg, 'text', { x: 14, y: 26, class: 'an-h' }, '');
      sv(svg, 'text', { x: 230, y: 202, 'text-anchor': 'middle', class: 'an-lbl' }, 'what I know');
      return {
        still: 10,
        draw: function (T) {
          var c = T % 12.5, fade = c > 11.8 ? 1 - (c - 11.8) / 0.7 : 1;
          dotEls.forEach(function (d, i) { var a = clamp01((c - i * 0.11) / 0.3); d.style.opacity = a * fade; d.setAttribute('r', (5.5 * (0.4 + 0.6 * a)).toFixed(2)); });
          edgeEls.forEach(function (e, i) { e.style.opacity = 0.6 * clamp01((c - 3.6 - 3.4 * i / E.length) / 0.3) * fade; });
          var qa = clamp01((c - 7.6) / 0.6) * fade;
          qLines.forEach(function (l) { l.style.opacity = qa; });
          qm.style.opacity = qa;
          ring.style.opacity = qa;
          ring.setAttribute('r', (16 + (c > 8 ? 4 * Math.sin(5 * T) : 0)).toFixed(2));
          phase.textContent = c < 3.6 ? 'first, the dots' : c < 7.6 ? 'then, connecting them' : 'then, a question at the edge of what I know';
          phase.style.opacity = fade;
        }
      };
    });
  }

  // 3. Two levels of wondering: Uranus strays from its predicted orbit (anomaly), the apple falls as always and is
  // questioned anyway (doubt).
  function initWonder() {
    var mode = 'anomaly', api;
    api = animFig('fig-wonder', function (svg) {
      function smooth(x) { x = clamp01(x); return x * x * (3 - 2 * x); }
      var A = sv(svg, 'g', {}), D = sv(svg, 'g', {});
      // Anomaly: the Sun, the predicted orbit, and Uranus drifting off it.
      var SX = 170, SY = 98, OR = 70;
      sv(A, 'circle', { cx: SX, cy: SY, r: OR, style: 'fill:none;stroke:var(--faint);stroke-width:1.5;stroke-dasharray:4 5' });
      sv(A, 'circle', { cx: SX, cy: SY, r: 11, style: 'fill:#e0a100' });
      sv(A, 'text', { x: SX, y: SY + 28, 'text-anchor': 'middle', class: 'an-lbl' }, 'Sun');
      sv(A, 'text', { x: SX, y: SY - OR - 10, 'text-anchor': 'middle', class: 'an-lbl' }, 'where it should be');
      var trail = sv(A, 'path', { style: 'fill:none;stroke:var(--accent);stroke-width:2' });
      var gap = sv(A, 'line', { style: 'stroke:var(--warm);stroke-width:2' });
      var planet = sv(A, 'circle', { r: 7, style: 'fill:var(--accent)' });
      var pl = sv(A, 'text', { class: 'an-lbl' }, 'Uranus');
      var qa = sv(A, 'text', { class: 'an-q', style: 'fill:var(--warm)' }, '?');
      // Doubt: an apple tree, apples that fall as always, and a question anyway.
      var TX = 170, G = 172;
      sv(D, 'line', { x1: 40, x2: 300, y1: G, y2: G, style: 'stroke:var(--line);stroke-width:2' });
      sv(D, 'rect', { x: TX - 5, y: 100, width: 10, height: G - 100, style: 'fill:var(--muted)' });
      sv(D, 'circle', { cx: TX, cy: 72, r: 44, style: 'fill:var(--muted);fill-opacity:.35' });
      var AX = [TX - 24, TX + 18, TX + 34], apples = AX.map(function (x) { return sv(D, 'circle', { r: 5.5, style: 'fill:#c8402a' }); });
      var qd = sv(D, 'text', { x: TX + 58, y: 40, class: 'an-q', style: 'fill:var(--warm)' }, '?');
      var dn = sv(D, 'text', { x: TX, y: 196, 'text-anchor': 'middle', class: 'an-lbl' }, '');
      // The words on the right.
      var head = sv(svg, 'text', { x: 372, y: 52, class: 'an-h' }, '');
      var rows = [0, 1, 2].map(function (i) { return sv(svg, 'text', { x: 372, y: 84 + 28 * i, class: 'an-lbl' }, ''); });
      var result = sv(svg, 'text', { x: 372, y: 182, class: 'an-h st-warm' }, '');
      return {
        still: 9,
        draw: function (T) {
          var c = T % 11, anomaly = mode === 'anomaly', fade = c > 10.4 ? 1 - (c - 10.4) / 0.6 : 1;
          A.style.opacity = anomaly ? fade : 0; D.style.opacity = anomaly ? 0 : fade;
          var t0;
          if (anomaly) {
            var drift = function (u) { return 16 * smooth((u - 3) / 3); }, th = function (u) { return -2.6 + 0.62 * Math.min(u, 7.5); };
            var d = '';
            for (var u = 0; u <= Math.min(c, 7.5); u += 0.1) { var r = OR + drift(u), a = th(u); d += (u ? 'L' : 'M') + (SX + r * Math.cos(a)).toFixed(1) + ',' + (SY + r * Math.sin(a)).toFixed(1); }
            trail.setAttribute('d', d);
            var cu = Math.min(c, 7.5), rr = OR + drift(cu), aa = th(cu), px = SX + rr * Math.cos(aa), py = SY + rr * Math.sin(aa);
            planet.setAttribute('cx', px.toFixed(1)); planet.setAttribute('cy', py.toFixed(1));
            var low = py > SY + 40; pl.setAttribute('text-anchor', low ? 'end' : 'start'); pl.setAttribute('x', (low ? px - 11 : px + 11).toFixed(1)); pl.setAttribute('y', (py + 4).toFixed(1));
            gap.setAttribute('x1', (SX + OR * Math.cos(aa)).toFixed(1)); gap.setAttribute('y1', (SY + OR * Math.sin(aa)).toFixed(1));
            gap.setAttribute('x2', px.toFixed(1)); gap.setAttribute('y2', py.toFixed(1));
            gap.style.opacity = clamp01((drift(cu) - 4) / 4);
            qa.setAttribute('x', (low ? px + 10 : px - 6).toFixed(1)); qa.setAttribute('y', (low ? py + 5 : py - 14).toFixed(1));
            qa.style.opacity = clamp01((drift(cu) - 9) / 4);
            t0 = 5.4;
            head.textContent = 'curiosity is';
            ['a surprise,', 'in my own observation,', 'and a need to know why'].forEach(function (x, i) { rows[i].textContent = x; });
            result.textContent = 'the first level, an anomaly';
          } else {
            apples.forEach(function (ap, i) {
              var st = 0.6 + 1.5 * i, u = clamp01((c - st) / 0.8), y0 = 64 + 12 * i;
              ap.setAttribute('cx', AX[i]); ap.setAttribute('cy', (y0 + (G - 6 - y0) * u * u).toFixed(1));
              ap.style.opacity = c > st - 0.4 ? 1 : 0;
            });
            dn.textContent = c < 4.4 ? '' : c < 5.6 ? 'every apple falls, as always' : 'nothing failed, yet why does it fall at all?';
            qd.style.opacity = clamp01((c - 5.6) / 0.5);
            t0 = 5.6;
            head.textContent = 'doubt is';
            ['no surprise,', 'something taken for granted,', 'and a question anyway'].forEach(function (x, i) { rows[i].textContent = x; });
            result.textContent = 'the second level, doubt';
          }
          head.style.opacity = clamp01((c - t0 - 0.3) / 0.4) * fade;
          rows.forEach(function (r, i) { r.style.opacity = clamp01((c - t0 - 0.9 - 0.6 * i) / 0.4) * fade; });
          result.style.opacity = clamp01((c - t0 - 3) / 0.4) * fade;
        }
      };
    });
    var fig = document.getElementById('fig-wonder');
    if (!fig) return;
    Array.prototype.forEach.call(fig.querySelectorAll('[data-wmode]'), function (b) {
      b.addEventListener('click', function () {
        mode = b.getAttribute('data-wmode');
        Array.prototype.forEach.call(fig.querySelectorAll('[data-wmode]'), function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        if (api) api.restart();
      });
    });
  }

  // 4. A chain of cycles.
  function initChain() {
    animFig('fig-chain', function (svg) {
      var CX = [76, 224, 372, 520], CY = 86, R = 34, D = 2.6, H = 0.9;
      // A real chain: each one began from the result of the one before.
      var PEOPLE = [['brahe', 'Tycho Brahe', 'measures the planets', 'engraving by Jacques de Gheyn II, 1586'],
                    ['kepler', 'Johannes Kepler', 'orbits are ellipses', '1910 copy by August Köhler of a portrait from 1627'],
                    ['newton', 'Isaac Newton', 'one law of gravity', 'painted by Godfrey Kneller, 1689'],
                    ['einstein', 'Albert Einstein', "explains Mercury's orbit", 'photographed by Ferdinand Schmutzer, 1921']];
      var PASSED = ['his measurements', 'his laws', 'his theory'];
      var rings = CX.map(function (x, i) {
        var g = { ring: sv(svg, 'circle', { cx: x, cy: CY, r: R, style: 'fill:none;stroke-width:2' }), dots: [] };
        for (var k = 0; k < 6; k++) { var a = -Math.PI / 2 + k * Math.PI / 3; g.dots.push(sv(svg, 'circle', { cx: x + R * Math.cos(a), cy: CY + R * Math.sin(a), r: 4.5 })); }
        var who = PEOPLE[i];
        pic(svg, 'img/' + who[0] + '.png', x, CY, R - 9, who[1] + ', ' + who[3]);
        sv(svg, 'text', { x: x, y: CY + R + 22, 'text-anchor': 'middle', class: 'an-lbl', style: 'fill:var(--ink)' }, who[1]);
        sv(svg, 'text', { x: x, y: CY + R + 40, 'text-anchor': 'middle', class: 'an-lbl' }, who[2]);
        return g;
      });
      var arcs = [0, 1, 2].map(function (i) {
        var x0 = CX[i], x1 = CX[i + 1];
        return { path: sv(svg, 'path', { d: 'M' + x0 + ',' + (CY - R) + ' Q' + (x0 + x1) / 2 + ',' + (CY - R - 34) + ' ' + x1 + ',' + (CY - R), style: 'fill:none;stroke:var(--warm);stroke-width:1.5;stroke-dasharray:4 4' }),
                 lbl: sv(svg, 'text', { x: (x0 + x1) / 2, y: CY - R - 22, 'text-anchor': 'middle', class: 'an-lbl st-warm' }, PASSED[i]) };
      });
      var tok = sv(svg, 'circle', { r: 7, style: 'fill:var(--warm)' });
      var per = D + H, total = 3 * per + D + 1.2;
      return {
        still: 2 * per + 1.3,
        draw: function (T) {
          var c = T % total, seg = Math.min(3, Math.floor(c / per)), u = c - seg * per;
          var inCycle = u < D || seg === 3;
          rings.forEach(function (g, i) {
            var state = i < seg ? 'done' : i === seg ? 'now' : 'next';
            g.ring.style.stroke = state === 'now' ? 'var(--warm)' : state === 'done' ? 'var(--ink)' : 'var(--line)';
            g.ring.style.strokeDasharray = state === 'next' ? '3 5' : 'none';
            g.dots.forEach(function (d, k) {
              var lit = state === 'done' || (state === 'now' && clamp01(u / D) * 6 > k);
              d.style.fill = lit ? (state === 'now' ? 'var(--warm)' : 'var(--ink)') : 'var(--faint)';
            });
          });
          arcs.forEach(function (a, i) { var on = i < seg || (i === seg && !inCycle); a.path.style.opacity = on ? 0.9 : 0; a.lbl.style.opacity = on ? 1 : 0; });
          var x, y;
          if (inCycle) { var ang = -Math.PI / 2 + 2 * Math.PI * clamp01(u / D); x = CX[seg] + R * Math.cos(ang); y = CY + R * Math.sin(ang); }
          else { var v = (u - D) / H, x0 = CX[seg], x1 = CX[seg + 1], cx = (x0 + x1) / 2, cy = CY - R - 34; x = (1 - v) * (1 - v) * x0 + 2 * (1 - v) * v * cx + v * v * x1; y = (1 - v) * (1 - v) * (CY - R) + 2 * (1 - v) * v * cy + v * v * (CY - R); }
          tok.setAttribute('cx', x.toFixed(1)); tok.setAttribute('cy', y.toFixed(1));
          tok.style.opacity = c > total - 0.6 ? (total - c) / 0.6 : 1;
        }
      };
    });
  }

  initTerms();
  initStories();
  initInquiry();
  initDots();
  initWonder();
  initChain();
  initCite();
  initSpace();
  initCycle();
  initRace();
  if (window.BLOG_DATA) initDoubt(window.BLOG_DATA);
  else { var v = document.getElementById('doubt-verdict'); if (v) v.textContent = 'The figure could not load its data.'; }
})();
