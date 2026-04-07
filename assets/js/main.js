// Theme toggle
const html = document.documentElement;
const btn = document.querySelector('.theme-toggle');

if (btn) {
  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

if (sections.length > 0 && navLinks.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.site-nav a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -65% 0px' });

  sections.forEach(s => observer.observe(s));
}

// Publications filter & sort
(function () {
  const list = document.querySelector('.pub-list');
  if (!list) return;

  const items = Array.from(list.querySelectorAll('.pub'));
  const empty = document.querySelector('.pub-empty');
  const sortSelect = document.querySelector('.pub-sort');
  const searchInput = document.querySelector('.pub-search');
  const countEl = document.querySelector('.pub-count');
  const clearBtn = document.querySelector('.pub-clear-filters');

  const activeFilters = {
    status: new Set(),
    tags: new Set()
  };
  let activeSort = 'status';
  let searchQuery = '';

  // Build a search index per item (title, authors, venue, tags, abstract)
  items.forEach(item => {
    const title = (item.dataset.title || '').toLowerCase();
    const tagsStr = (item.dataset.tags || '').toLowerCase().replace(/\|/g, ' ');
    const authorsEl = item.querySelector('.pub-authors');
    const venueEl = item.querySelector('.pub-venue');
    const abstractEl = item.querySelector('details p');
    const authors = authorsEl ? authorsEl.textContent.toLowerCase() : '';
    const venue = venueEl ? venueEl.textContent.toLowerCase() : '';
    const abstract = abstractEl ? abstractEl.textContent.toLowerCase() : '';
    item.dataset.searchHaystack = [title, tagsStr, authors, venue, abstract].join(' ');
  });

  const statusOrder = {
    'Published': 0,
    'Accepted': 1,
    'Under Revision': 2,
    'Under Review': 3,
    'Preprint': 4,
    'PoC': 5,
    'In Progress': 6
  };

  function applyFilters() {
    let visible = 0;
    items.forEach(item => {
      const status = item.dataset.status;
      const tags = (item.dataset.tags || '').split('|').filter(Boolean);

      let matches = true;
      if (activeFilters.status.size > 0) {
        matches = matches && activeFilters.status.has(status);
      }
      if (activeFilters.tags.size > 0) {
        matches = matches && tags.some(t => activeFilters.tags.has(t));
      }
      if (searchQuery) {
        matches = matches && (item.dataset.searchHaystack || '').includes(searchQuery);
      }

      item.hidden = !matches;
      if (matches) visible++;
    });

    if (empty) empty.hidden = visible > 0;
    if (countEl) {
      countEl.textContent = visible === items.length
        ? items.length + ' projects'
        : visible + ' of ' + items.length;
    }
  }

  function applySort() {
    const sorted = items.slice().sort((a, b) => {
      switch (activeSort) {
        case 'year-desc':
          return (parseInt(b.dataset.year) - parseInt(a.dataset.year)) || a.dataset.title.localeCompare(b.dataset.title);
        case 'year-asc':
          return (parseInt(a.dataset.year) - parseInt(b.dataset.year)) || a.dataset.title.localeCompare(b.dataset.title);
        case 'title':
          return a.dataset.title.localeCompare(b.dataset.title);
        case 'status':
        default: {
          const sa = statusOrder[a.dataset.status] != null ? statusOrder[a.dataset.status] : 999;
          const sb = statusOrder[b.dataset.status] != null ? statusOrder[b.dataset.status] : 999;
          if (sa !== sb) return sa - sb;
          return parseInt(b.dataset.year) - parseInt(a.dataset.year);
        }
      }
    });
    sorted.forEach(item => list.appendChild(item));
  }

  function update() {
    applyFilters();
    applySort();
  }

  function clearAll() {
    activeFilters.status.clear();
    activeFilters.tags.clear();
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.pub-controls .pub-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.filterValue === 'all');
    });
    document.querySelectorAll('.pub-chip-tag').forEach(c => {
      c.dataset.active = 'false';
    });
    update();
  }

  // Status chips and "All" chips (button.pub-chip inside any filter group)
  document.querySelectorAll('.pub-controls [data-filter-type] .pub-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const group = chip.parentElement;
      const filterType = group.dataset.filterType;
      const value = chip.dataset.filterValue;

      if (value === 'all') {
        activeFilters[filterType].clear();
        group.querySelectorAll('.pub-chip').forEach(c => c.classList.remove('active'));
        group.querySelectorAll('.pub-chip-tag').forEach(c => { c.dataset.active = 'false'; });
        chip.classList.add('active');
      } else {
        if (activeFilters[filterType].has(value)) {
          activeFilters[filterType].delete(value);
          chip.classList.remove('active');
        } else {
          activeFilters[filterType].add(value);
          chip.classList.add('active');
        }
        const allChip = group.querySelector('[data-filter-value="all"]');
        if (allChip) {
          allChip.classList.toggle('active', activeFilters[filterType].size === 0);
        }
      }
      update();
    });
  });

  // Topic tag chips (button.pub-chip-tag with .tag class)
  document.querySelectorAll('.pub-chip-tag').forEach(chip => {
    chip.addEventListener('click', () => {
      const value = chip.dataset.filterValue;
      const group = chip.parentElement;

      if (chip.dataset.active === 'true') {
        chip.dataset.active = 'false';
        activeFilters.tags.delete(value);
      } else {
        chip.dataset.active = 'true';
        activeFilters.tags.add(value);
      }

      const allChip = group.querySelector('[data-filter-value="all"]');
      if (allChip) {
        allChip.classList.toggle('active', activeFilters.tags.size === 0);
      }
      update();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', e => {
      activeSort = e.target.value;
      update();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value.trim().toLowerCase();
      update();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', clearAll);
  }

  // Initial render: set the count
  update();
})();

// BibTeX copy button
document.querySelectorAll('.bibtex-copy').forEach(copyBtn => {
  copyBtn.addEventListener('click', async () => {
    const wrapper = copyBtn.closest('.bibtex-wrapper');
    const pre = wrapper && wrapper.querySelector('pre.bibtex');
    if (!pre) return;
    const text = pre.textContent.trim();
    const label = copyBtn.querySelector('.bibtex-copy-label');
    const original = label ? label.textContent : '';

    const setCopied = () => {
      copyBtn.classList.add('copied');
      if (label) label.textContent = 'Copied';
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        if (label) label.textContent = original;
      }, 1500);
    };

    try {
      await navigator.clipboard.writeText(text);
      setCopied();
    } catch (err) {
      // Fallback for older browsers / insecure contexts
      const range = document.createRange();
      range.selectNodeContents(pre);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      try {
        document.execCommand('copy');
        setCopied();
      } catch (e) {
        if (label) label.textContent = 'Press Cmd+C';
      }
      sel.removeAllRanges();
    }
  });
});
