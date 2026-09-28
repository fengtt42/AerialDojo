const SCENES = [{"id": "D_Earthquake_0", "family": "Disaster", "name": "Earthquake", "variant": 0, "src": "assets/D_Earthquake_0.webp"}, {"id": "D_Earthquake_1", "family": "Disaster", "name": "Earthquake", "variant": 1, "src": "assets/D_Earthquake_1.webp"}, {"id": "D_Explosion_0", "family": "Disaster", "name": "Explosion", "variant": 0, "src": "assets/D_Explosion_0.webp"}, {"id": "D_Explosion_1", "family": "Disaster", "name": "Explosion", "variant": 1, "src": "assets/D_Explosion_1.webp"}, {"id": "D_Flood_0", "family": "Disaster", "name": "Flood", "variant": 0, "src": "assets/D_Flood_0.webp"}, {"id": "D_Flood_1", "family": "Disaster", "name": "Flood", "variant": 1, "src": "assets/D_Flood_1.webp"}, {"id": "I_Bridge_0", "family": "Infrastructure", "name": "Bridge", "variant": 0, "src": "assets/I_Bridge_0.webp"}, {"id": "I_Bridge_1", "family": "Infrastructure", "name": "Bridge", "variant": 1, "src": "assets/I_Bridge_1.webp"}, {"id": "I_Harbor_0", "family": "Infrastructure", "name": "Harbor", "variant": 0, "src": "assets/I_Harbor_0.webp"}, {"id": "I_Harbor_1", "family": "Infrastructure", "name": "Harbor", "variant": 1, "src": "assets/I_Harbor_1.webp"}, {"id": "I_RailCorridor_0", "family": "Infrastructure", "name": "Rail corridor", "variant": 0, "src": "assets/I_RailCorridor_0.webp"}, {"id": "I_RailCorridor_1", "family": "Infrastructure", "name": "Rail corridor", "variant": 1, "src": "assets/I_RailCorridor_1.webp"}, {"id": "N_Coast_0", "family": "Natural", "name": "Coast", "variant": 0, "src": "assets/N_Coast_0.webp"}, {"id": "N_Coast_1", "family": "Natural", "name": "Coast", "variant": 1, "src": "assets/N_Coast_1.webp"}, {"id": "N_Desert_0", "family": "Natural", "name": "Desert", "variant": 0, "src": "assets/N_Desert_0.webp"}, {"id": "N_Desert_1", "family": "Natural", "name": "Desert", "variant": 1, "src": "assets/N_Desert_1.webp"}, {"id": "N_Forest_0", "family": "Natural", "name": "Forest", "variant": 0, "src": "assets/N_Forest_0.webp"}, {"id": "N_Forest_1", "family": "Natural", "name": "Forest", "variant": 1, "src": "assets/N_Forest_1.webp"}, {"id": "N_Island_0", "family": "Natural", "name": "Island", "variant": 0, "src": "assets/N_Island_0.webp"}, {"id": "N_Island_1", "family": "Natural", "name": "Island", "variant": 1, "src": "assets/N_Island_1.webp"}, {"id": "N_Mountain_0", "family": "Natural", "name": "Mountain", "variant": 0, "src": "assets/N_Mountain_0.webp"}, {"id": "N_Mountain_1", "family": "Natural", "name": "Mountain", "variant": 1, "src": "assets/N_Mountain_1.webp"}, {"id": "N_Snowfield_0", "family": "Natural", "name": "Snowfield", "variant": 0, "src": "assets/N_Snowfield_0.webp"}, {"id": "N_Snowfield_1", "family": "Natural", "name": "Snowfield", "variant": 1, "src": "assets/N_Snowfield_1.webp"}, {"id": "U_Alley_0", "family": "Urban", "name": "Alley", "variant": 0, "src": "assets/U_Alley_0.webp"}, {"id": "U_Alley_1", "family": "Urban", "name": "Alley", "variant": 1, "src": "assets/U_Alley_1.webp"}, {"id": "U_Community_0", "family": "Urban", "name": "Community", "variant": 0, "src": "assets/U_Community_0.webp"}, {"id": "U_Community_1", "family": "Urban", "name": "Community", "variant": 1, "src": "assets/U_Community_1.webp"}, {"id": "U_ConstructionSite_0", "family": "Urban", "name": "Construction site", "variant": 0, "src": "assets/U_ConstructionSite_0.webp"}, {"id": "U_ConstructionSite_1", "family": "Urban", "name": "Construction site", "variant": 1, "src": "assets/U_ConstructionSite_1.webp"}, {"id": "U_Factory_0", "family": "Urban", "name": "Factory", "variant": 0, "src": "assets/U_Factory_0.webp"}, {"id": "U_Factory_1", "family": "Urban", "name": "Factory", "variant": 1, "src": "assets/U_Factory_1.webp"}, {"id": "U_Mall_0", "family": "Urban", "name": "Mall", "variant": 0, "src": "assets/U_Mall_0.webp"}, {"id": "U_Mall_1", "family": "Urban", "name": "Mall", "variant": 1, "src": "assets/U_Mall_1.webp"}, {"id": "U_Neighborhood_0", "family": "Urban", "name": "Neighborhood", "variant": 0, "src": "assets/U_Neighborhood_0.webp"}, {"id": "U_Neighborhood_1", "family": "Urban", "name": "Neighborhood", "variant": 1, "src": "assets/U_Neighborhood_1.webp"}, {"id": "U_Park_0", "family": "Urban", "name": "Amusement park", "variant": 0, "src": "assets/U_Park_0.webp"}, {"id": "U_Park_1", "family": "Urban", "name": "Amusement park", "variant": 1, "src": "assets/U_Park_1.webp"}, {"id": "U_ParkingLot_0", "family": "Urban", "name": "Parking lot", "variant": 0, "src": "assets/U_ParkingLot_0.webp"}, {"id": "U_ParkingLot_1", "family": "Urban", "name": "Parking lot", "variant": 1, "src": "assets/U_ParkingLot_1.webp"}, {"id": "U_Stadium_0", "family": "Urban", "name": "Stadium", "variant": 0, "src": "assets/U_Stadium_0.webp"}, {"id": "U_Stadium_1", "family": "Urban", "name": "Stadium", "variant": 1, "src": "assets/U_Stadium_1.webp"}];
const RESULTS = {"Base": [{"model": "Qwen3-VL-4B", "group": "Open-source", "values": [[0.71, 0.81], [1.5, 1.33], [0.51, 0.6], [16.24, 1.85], [22.17, 14.32], [3.85, 2.92], [7.99, 3.93]]}, {"model": "InternVL3.5-8B", "group": "Open-source", "values": [[0.16, 0.3], [3.41, 2.36], [0.11, 0.22], [25.42, 11.63], [62.06, 16.89], [1.54, 1.74], [12.04, 4.47]]}, {"model": "Ministral 3 8B", "group": "Open-source", "values": [[0.17, 0.31], [1.28, 1.48], [0.09, 0.21], [16.23, 3.43], [51.63, 24.41], [1.64, 1.18], [11.37, 5.2]]}, {"model": "Phi-4-multimodal", "group": "Open-source", "values": [[0.13, 0.35], [0.6, 1.01], [0.09, 0.25], [23.52, 7.47], [37.96, 16.67], [1.65, 1.79], [9.22, 6.17]]}, {"model": "MiniCPM-V 4.6", "group": "Open-source", "values": [[0.19, 0.53], [1.35, 2.41], [0.15, 0.43], [20.26, 6.44], [42.47, 11.07], [1.47, 1.98], [9.91, 3.84]]}, {"model": "GPT-5.6 Sol", "group": "Closed-source", "values": [[2.81, 2.42], [3.06, 2.44], [2.2, 1.87], [17.9, 4.01], [32.91, 14.45], [8.16, 3.78], [11.22, 4.23]]}, {"model": "Grok-4.5", "group": "Closed-source", "values": [[0.25, 0.69], [0.49, 1.39], [0.25, 0.69], [15.46, 1.81], [22.18, 12.44], [2.46, 2.28], [3.69, 2.65]]}, {"model": "Gemini 3.8 Flash", "group": "Closed-source", "values": [[2.4, 2.23], [3.68, 4.32], [2.37, 2.21], [21.61, 7.07], [33.95, 12.21], [11.16, 8.27], [17.9, 8.25]]}, {"model": "Claude Opus 5", "group": "Closed-source", "values": [[3.2, 2.04], [7.84, 4.6], [2.83, 2.04], [19.69, 5.97], [58.96, 15.94], [7.38, 3.73], [18.48, 5.64]]}], "Standard": [{"model": "GPT-5.6 Sol", "group": "Closed-source", "values": [[0.26, 0.72], [0.26, 0.72], [0.2, 0.57], [37.66, 5.47], [36.57, 16.79], [2.3, 2.02], [2.3, 2.02]]}, {"model": "Claude Opus 5", "group": "Closed-source", "values": [[0.49, 0.91], [1.32, 2.33], [0.4, 0.73], [36.49, 8.89], [56.3, 21.31], [1.29, 1.91], [2.61, 3.84]]}]};
(() => {
  'use strict';
  const qs = s => document.querySelector(s);
  const qsa = s => [...document.querySelectorAll(s)];
  const links = window.AERIALDOJO_LINKS || {};
  qsa('[data-resource]').forEach(link => {
    const url = links[link.dataset.resource];
    if (url) {
      link.href = url; link.target = '_blank'; link.rel = 'noopener';
      link.removeAttribute('aria-disabled'); link.removeAttribute('title');
    } else {
      const explain = event => {event.preventDefault(); const status = qs('#resource-status'); status.hidden = false; status.textContent = link.title + '.';};
      link.addEventListener('click', explain);
      link.addEventListener('keydown', event => {if (event.key === 'Enter') explain(event);});
    }
  });
  let family = 'All';
  function updateScenes() {
    const split = qs('#scene-split').value;
    qsa('.scene').forEach(card => {card.hidden = !((family === 'All' || card.dataset.family === family) && (split === 'all' || card.dataset.split === split));});
  }
  qsa('button[data-family]').forEach(button => button.addEventListener('click', () => {
    family = button.dataset.family;
    qsa('button[data-family]').forEach(b => {b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button));});
    updateScenes();
  }));
  qs('#scene-split').addEventListener('change', updateScenes);
  const dialog = qs('#scene-dialog');
  qsa('.scene-open').forEach(button => button.addEventListener('click', () => {
    const scene = SCENES[Number(button.dataset.index)];
    qs('#dialog-image').src = scene.src;
    qs('#dialog-image').alt = `${scene.name}, ${scene.family} simulation scene`;
    qs('#scene-dialog-title').textContent = scene.name;
    qs('#scene-dialog-detail').textContent = `${scene.family} · ${scene.variant === 0 ? 'In-distribution (ID)' : 'Out-of-distribution (OOD)'}`;
    dialog.showModal(); document.body.style.overflow = 'hidden';
  }));
  qs('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {document.body.style.overflow = '';});
  dialog.addEventListener('click', event => {if (event.target === dialog) {const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();}});
  let setting = 'Base', radius = 3;
  const championBadge = '<span class="champion-mark" title="Rank 1"><svg viewBox="0 0 24 24" role="img" aria-label="Champion"><path d="M7 5H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4" fill="none" stroke="#b58932" stroke-width="1.6" stroke-linecap="round"/><path d="M7 3h10v6a5 5 0 0 1-10 0Z" fill="#e8b74e" stroke="#b58932" stroke-width="1.2"/><path d="M12 14v5m-4 2h8m-7-2h6" fill="none" stroke="#b58932" stroke-width="2" stroke-linecap="round"/><path d="m12 5 1 2 2.2.3-1.6 1.6.4 2.1-2-1-2 1 .4-2.1-1.6-1.6L11 7Z" fill="#fff5cf"/></svg></span>';
  function renderResults() {
    const sr = radius === 3 ? 0 : 5;
    const rows = [...RESULTS[setting]].sort((a,b) => b.values[sr][0] - a.values[sr][0]);
    const indices = radius === 3 ? [0,1,2,3,4] : [5,6];
    const names = ['SR (%) ↑','OSR (%) ↑','SPL (%) ↑','DTS (m) ↓','CR (%) ↓','SR (%) ↑','OSR (%) ↑'];
    const best = indices.map(i => (i === 3 || i === 4 ? Math.min : Math.max)(...rows.map(r => r.values[i][0])));
    qs('#results-table thead').innerHTML = '<tr><th scope="col">Rank</th><th scope="col">Model</th>'+indices.map(i => `<th scope="col"${i === sr ? ' aria-sort="descending"' : ''}>${names[i]}</th>`).join('')+'</tr>';
    qs('#results-table tbody').innerHTML = rows.map((row,rank) => `<tr><td class="rank"><span>${rank+1}</span></td><th scope="row"><span class="model-name">${row.model}${rank === 0 ? championBadge : ''}</span></th>`+indices.map((i,j) => `<td class="${row.values[i][0] === best[j] ? 'best' : ''}">${row.values[i][0].toFixed(2)}</td>`).join('')+'</tr>').join('');
    qs('#results-title').textContent = `${setting} tasks · ${radius} m success radius`;
  }
  ['setting','radius'].forEach(key => qsa(`button[data-${key}]`).forEach(button => button.addEventListener('click', () => {
    if (key === 'setting') setting = button.dataset.setting; else radius = Number(button.dataset.radius);
    qsa(`button[data-${key}]`).forEach(b => {b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button));});
    renderResults();
  })));
  renderResults();
  qs('#copy-citation').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(qs('#bibtex').textContent);
      qs('#copy-status').textContent = 'BibTeX copied.';
    } catch {
      const range = document.createRange(); range.selectNodeContents(qs('#bibtex'));
      const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      qs('#copy-status').textContent = 'Citation selected. Press Ctrl+C or use Download .bib.';
    }
  });
})();
