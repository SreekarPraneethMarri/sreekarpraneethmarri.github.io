/* ===== Publications — final (Book Chapter / Conference / Journal) ===== */

const PUBLICATIONS = [
  // --- Book Chapter — CRC / ICONIC 2023 ---
  {
    title: "Kalman Integration with ARIMA & LSTM",
    authors: ["H. S. Chilakala", "N. Preeti", "Sreekar Praneeth Marri", "K. Murali"],
    year: 2024,
    type: "book_chapter",
    venue: "Advances in Networks, Intelligence and Computing - CRC Press",
    conference: "ICONIC 2023 - International Conference on Networks, Intelligence and Computing",
    series: "Advances in Networks, Intelligence and Computing (CRC Press)",
    //chapter: "57",
    publisher: "CRC Press",
    doi: "10.1201/9781003430421-57",
    pdf: "https://doi.org/10.1201/9781003430421-57",
    bibtex:
`@incollection{chilakala2024kalman,
  title        = {Kalman Integration with ARIMA & LSTM},
  author       = {Chilakala, H. S. and Preeti, N. and Marri, Sreekar Praneeth and Murali, K.},
  booktitle    = {Advances in Networks, Intelligence and Computing},
  publisher    = {CRC Press},
  year         = {2024},
  doi          = {10.1201/9781003430421-57}
}`
  },

  // --- Book Chapter — Springer / ICISSC 2022 (first online 2023) ---
  {
    title: "SVM Versus KNN: Prediction of Best Image Classifier",
    authors: ["Sreekar Praneeth Marri", "Boda Venkata Nikith", "Nagandla Krishna Sai Keerthan", "Sarada Jayan"],
    year: 2022,                 // conference year (matches Scholar)
    pub_year: 2023,             // first online year
    first_online: "03 Oct 2023",
    type: "book_chapter",
    venue: "Intelligent Systems and Sustainable Computing - Springer",
    conference: "ICISSC 2022 - International Conference on Intelligent Systems and Sustainable Computing",
    series: "Smart Innovation, Systems and Technologies (SIST)",
    series_volume: "363",
    chapter: "14",
    publisher: "Springer Nature Singapore",
    doi: "10.1007/978-981-99-4717-1_14",
    pdf: "https://doi.org/10.1007/978-981-99-4717-1_14",
    bibtex:
`@InProceedings{10.1007/978-981-99-4717-1_14,
author="Marri, Sreekar Praneeth
and Nikith, Boda Venkata
and Keerthan, Nagandla Krishna Sai
and Jayan, Sarada",
editor="Reddy, V. Sivakumar
and Prasad, V. Kamakshi
and Wang, Jiacun
and Rao Dasari, Naga Mallikarjuna",
title="SVM Versus KNN: Prediction of Best Image Classifier",
booktitle="Intelligent Systems and Sustainable Computing",
year="2023",
publisher="Springer Nature Singapore",
address="Singapore",
pages="147--157",
isbn="978-981-99-4717-1"
}`
  },

  // --- Journal — Elsevier Procedia / ICMLDE ---
  {
    title: "Leaf Disease Detection and Classification",
    authors: ["B.V. Nikith", "N.K.S. Keerthan", "M.S. Praneeth", "Dr. T Amrita"],
    year: 2023,
    type: "journal",
    venue: "Procedia Computer Science",
    conference: "International Conference on Machine Learning and Data Engineering (ICMLDE)",
    publisher: "Elsevier",
    doi: "10.1016/j.procs.2023.01.011",
    pdf: "https://doi.org/10.1016/j.procs.2023.01.011",
    bibtex:
`@article{NIKITH2023291,
title = {Leaf Disease Detection and Classification},
journal = {Procedia Computer Science},
volume = {218},
pages = {291-300},
year = {2023},
note = {International Conference on Machine Learning and Data Engineering},
issn = {1877-0509},
doi = {https://doi.org/10.1016/j.procs.2023.01.011},
url = {https://www.sciencedirect.com/science/article/pii/S187705092300011X},
author = {B.V. Nikith and N.K.S. Keerthan and M.S. Praneeth and Dr. T Amrita},
keywords = {SVM, KNN, kernels, HOG, CNN}
}`
  },

  // --- Conference — IEEE INOCON 2024 ---
  {
    title: "RealTime Object Detection using Mobile Robot Captured Images: A Deep Learning Approach",
    authors: ["Hema Srivarshini Ch", "N. Preeti", "Sreekar Praneeth Marri", "Suja Palaniswamy", "Peeta Basa Pati"],
    year: 2024,
    type: "conference",
    venue: "2024 3rd International Conference for Innovation in Technology (INOCON), Bangalore, India",
    publisher: "IEEE",
    doi: "10.1109/INOCON60754.2024.10511303",
    pdf: "https://doi.org/10.1109/INOCON60754.2024.10511303",
    bibtex:
`@INPROCEEDINGS{10511303,
  author={Ch, Hema Srivarshini and Preeti, N and Marri, Sreekar Praneeth and Palaniswamy, Suja and Pati, Peeta Basa},
  booktitle={2024 3rd International Conference for Innovation in Technology (INOCON)}, 
  title={Real-Time Object Detection using Mobile Robot Captured Images: A Deep Learning Approach}, 
  year={2024},
  pages={1-6},
  doi={10.1109/INOCON60754.2024.10511303}}`
  },

  // --- Conference — IEEE TEMSMET 2023 ---
  {
    title: "Analysis of Key Based Cryptographic Algorithms and its Applications",
    authors: ["Nagandla Krishna Sai Keerthan", "Sreekar Praneeth Marri", "Manju Khanna"],
    year: 2023,
    type: "conference",
    venue: "2023 IEEE 3rd International Conference on Technology, Engineering, Management for Societal Impact using Marketing, Entrepreneurship and Talent (TEMSMET), Mysuru, India",
    publisher: "IEEE",
    doi: "10.1109/TEMSMET56707.2023.10150061",
    pdf: "https://doi.org/10.1109/TEMSMET56707.2023.10150061",
    bibtex:
`@INPROCEEDINGS{10150061,
  author={Keerthan, Nagandla Krishna Sai and Marri, Sreekar Praneeth and Khanna, Manju.},
  booktitle={2023 IEEE 3rd International Conference on Technology, Engineering, Management for Societal impact using Marketing, Entrepreneurship and Talent (TEMSMET)}, 
  title={Analysis of Key Based Cryptographic Algorithms and its Applications}, 
  year={2023},
  pages={1-4},
  doi={10.1109/TEMSMET56707.2023.10150061}}`
  }
];

/* Labels */
const TYPE_LABEL = {
  book_chapter: "Book Chapter (Conference Proceedings)",
  conference:   "Conference",
  journal:      "Journal",
  preprint:     "Preprint"
};

(function initPubs(){
  const pubListEl = document.getElementById('pub-list');
  if (!pubListEl) return;

  const typeSel  = document.getElementById('pub-type');
  const yearSel  = document.getElementById('pub-year');
  const searchEl = document.getElementById('pub-search');
  const pubMeta  = document.getElementById('pub-meta');

  /* ✅ ONLY change: reduce space BETWEEN YEARS (do NOT touch footer spacing here) */
  pubListEl.classList.remove('grid'); // removes outer grid gap between year blocks

  if (!document.getElementById('pub-tight-spacing')) {
    const st = document.createElement('style');
    st.id = 'pub-tight-spacing';
    st.textContent = `
      #pub-list { display:block; }
      #pub-list .year-group { margin: 0 0 14px; }
      #pub-list .year-group:last-child { margin-bottom: 0; }
    `;
    document.head.appendChild(st);
  }

  // Build type filter (order you want)
  if (typeSel) {
    const ORDER = ["book_chapter","conference","journal","preprint"];
    typeSel.innerHTML =
      `<option value="all">All</option>` +
      ORDER.map(t => `<option value="${t}">${TYPE_LABEL[t]}</option>`).join('');
  }

  // Scholar note
  const cfgScholar = document.getElementById('cfg-gscholar');
  const scholarHref = (cfgScholar?.href && cfgScholar.href !== location.href + '#')
    ? cfgScholar.href
    : 'https://scholar.google.com/citations?user=9nziCwEAAAAJ';
  if (!document.getElementById('scholar-note')) {
    const note = document.createElement('div');
    note.id = 'scholar-note';
    note.className = 'scholar-note';
    note.innerHTML = `You can also find my articles on my <a href="${scholarHref}" target="_blank" rel="noopener">Google Scholar profile</a>.`;
    pubListEl.parentNode.insertBefore(note, pubListEl);
  }

  // Year filter
  const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a,b)=>b-a);
  if (yearSel) yearSel.innerHTML += years.map(y => `<option value="${y}">${y}</option>`).join('');

  const matchesQuery = (p, q) => {
    if (!q) return true;
    const hay = (p.title + ' ' + p.authors.join(' ') + ' ' + p.venue + ' ' +
                (p.tags||[]).join(' ') + ' ' + (p.series||'') + ' ' +
                (p.conference||'') + ' ' + (p.publisher||'')).toLowerCase();
    return hay.includes(q.toLowerCase());
  };

  // Only ONE DOI (button). No pages in details.
  const renderActions = (p) => `
    ${p.pdf ? `<a class="action" href="${p.pdf}" target="_blank" rel="noopener"><i class='fa fa-link'></i> DOI</a>` : ''}
    <button class="action copy-btn" data-bibtex="${encodeURIComponent(p.bibtex)}"><i class='fa fa-copy'></i> BibTeX</button>
  `;

  const detailsBlock = (p) => {
    const rows = [];
    if (p.publisher)   rows.push(`<li><strong>Publisher:</strong> ${p.publisher}</li>`);
    if (p.conference)  rows.push(`<li><strong>Conference:</strong> ${p.conference}</li>`);
    if (p.series)      rows.push(`<li><strong>Series:</strong> ${p.series}${p.series_volume ? `, vol. ${p.series_volume}` : ''}</li>`);
    if (p.chapter)     rows.push(`<li><strong>Chapter:</strong> ${p.chapter}</li>`);
    return rows.length ? `<ul class="details">${rows.join('')}</ul>` : '';
  };

  function render(){
    const t = typeSel ? typeSel.value : 'all';
    const y = yearSel ? yearSel.value : 'all';
    const q = searchEl ? searchEl.value.trim() : '';

    const filtered = PUBLICATIONS
      .filter(p => (t === 'all' || p.type === t) &&
                   (y === 'all' || String(p.year) === y) &&
                   matchesQuery(p, q))
      .sort((a,b)=> b.year - a.year || a.title.localeCompare(b.title));

    if (pubMeta) pubMeta.textContent = `${filtered.length} result${filtered.length!==1?'s':''}`;

    const groups = {};
    filtered.forEach(p => { (groups[p.year] ||= []).push(p); });

    pubListEl.innerHTML = '';
    Object.keys(groups).sort((a,b)=> b-a).forEach(year => {
      const yWrap = document.createElement('div');
      yWrap.className = 'year-group';
      yWrap.innerHTML = `<div class="year-heading">${year}</div>`;

      groups[year].forEach(p => {
        const el = document.createElement('div'); el.className = 'pub';
        const typeBadge = `<span class="badge type-${p.type}">${TYPE_LABEL[p.type]}</span>`;
        const tags = (p.tags||[]).map(t=>`<span class='tag'>${t}</span>`).join('');

        el.innerHTML = `
          <div class="pub-main">
            <div class="title">${p.title}</div>
            <div class="meta authors">${(p.authors||[]).join(', ')}</div>
            <div class="meta venue"><em>${p.venue}</em> · ${typeBadge}</div>
            ${detailsBlock(p)}
            ${tags ? `<div class="tags">${tags}</div>` : ''}
          </div>
          <div class="actions">
            ${renderActions(p)}
          </div>
        `;
        yWrap.appendChild(el);
      });

      pubListEl.appendChild(yWrap);
    });
  }

  // Events + Copy BibTeX
  let deb;
  if (searchEl) searchEl.addEventListener('input', () => { clearTimeout(deb); deb = setTimeout(render, 150); });
  if (typeSel)  typeSel.addEventListener('change', render);
  if (yearSel)  yearSel.addEventListener('change', render);
  pubListEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const bib = decodeURIComponent(btn.dataset.bibtex || '');
    navigator.clipboard.writeText(bib).then(()=>{
      const prev = btn.innerHTML;
      btn.textContent = 'Copied!';
      setTimeout(()=> btn.innerHTML = prev, 900);
    });
  });

  render();
})();
