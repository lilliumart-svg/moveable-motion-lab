// exercises-page.js
let currentLangEx = 'ru';
let selectedExercise = null;

function initExercisesPage() {
  currentLangEx = getLang() || detectLang();
  setLang(currentLangEx);
  applyTranslations();

  // Check URL param
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat') || 'all';

  if (cat !== 'all') {
    const tab = document.querySelector(`[data-cat="${cat}"]`);
    if (tab) filterExercises(cat, tab);
  } else {
    renderExercises(EXERCISES);
  }
}

function filterExercises(cat, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderExercises(getExercisesByCategory(cat));
}

function renderExercises(list) {
  const container = document.getElementById('exercise-list');
  if (!container) return;

  const lang = currentLangEx;
  const diffMap = {
    ru: { easy: 'Лёгкое', medium: 'Среднее', hard: 'Сложное' },
    en: { easy: 'Easy', medium: 'Medium', hard: 'Hard' },
  };
  const diffs = diffMap[lang] || diffMap.ru;

  container.innerHTML = list.map(ex => {
    const name = ex[lang]?.name || ex.ru.name;
    const desc = ex[lang]?.desc || ex.ru.desc;
    return `
      <div class="exercise-card" onclick="openModal('${ex.id}')">
        <span class="ex-icon">${ex.icon}</span>
        <div class="ex-info">
          <div class="ex-name">${name}</div>
          <div class="ex-desc">${desc}</div>
        </div>
        <span class="ex-badge badge-${ex.difficulty}">${diffs[ex.difficulty]}</span>
      </div>`;
  }).join('');
}

function openModal(id) {
  const ex = getExerciseById(id);
  if (!ex) return;
  selectedExercise = ex;

  const lang = currentLangEx;
  const name = ex[lang]?.name || ex.ru.name;
  const desc = ex[lang]?.desc || ex.ru.desc;
  const steps = ex.instructions?.[lang] || ex.instructions?.ru || [];

  document.getElementById('modal-icon').textContent = ex.icon;
  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-desc').textContent = desc;

  // Meta tags
  const meta = [];
  if (ex.sets) meta.push(`${ex.sets} ${lang==='en'?'sets':'подх.'}`);
  if (ex.reps) meta.push(`${ex.reps} ${lang==='en'?'reps':'повт.'}`);
  if (ex.durationSec) meta.push(`${ex.durationSec} ${lang==='en'?'sec':'сек'}`);
  if (ex.restSec) meta.push(`${lang==='en'?'Rest':'Отдых'}: ${ex.restSec} ${lang==='en'?'sec':'сек'}`);
  document.getElementById('modal-meta').innerHTML = meta.map(m => `<span class="meta-tag">${m}</span>`).join('');

  // Steps
  document.getElementById('modal-steps').innerHTML = steps.map((s, i) => `
    <div class="step-item">
      <span class="step-num">${i+1}</span>
      <span class="step-text">${s}</span>
    </div>`).join('');

  document.getElementById('modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  selectedExercise = null;
}

function startExercise() {
  if (!selectedExercise) return;
  localStorage.setItem('mv_current_exercise', selectedExercise.id);
  localStorage.setItem('mv_session_cat', selectedExercise.category);
  window.location = 'session.html';
}
