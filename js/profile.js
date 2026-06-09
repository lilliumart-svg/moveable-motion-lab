// =============================================
// MoveAble — profile.js
// =============================================

function initProfile() {
  const lang = getLang() || detectLang();
  setLang(lang);
  applyTranslations();
  renderProfile();
}

function renderProfile() {
  const user  = getUser();
  const stats = getStats();
  const lang  = getLang() || 'ru';

  if (!user) { window.location = 'index.html'; return; }

  // Name & initials
  document.getElementById('profile-name-display').textContent = user.name || '—';
  const initials = (user.name || '?').split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();
  document.getElementById('avatar-initials').textContent = initials;

  // Goal label
  const goalMap = {
    ru: { mobility:'Мобильность', strength:'Сила мышц', pain:'Снижение боли', balance:'Баланс', recovery:'Реабилитация', general:'Общее здоровье' },
    en: { mobility:'Mobility', strength:'Muscle strength', pain:'Pain relief', balance:'Balance', recovery:'Rehabilitation', general:'General health' },
  };
  const goalLabel = (goalMap[lang] || goalMap.ru)[user.goal] || '';
  document.getElementById('profile-goal-display').textContent = goalLabel;

  // Stats
  document.getElementById('pstat-sessions').textContent = stats.totalSessions;
  document.getElementById('pstat-streak').textContent   = stats.streak;
  document.getElementById('pstat-minutes').textContent  = stats.totalMinutes;

  // Progress ring: based on weekly goal (7 sessions = full)
  const weekProgress = Math.min(stats.streak / 7, 1);
  const circumference = 339.29;
  const offset = circumference - weekProgress * circumference;
  const ring = document.getElementById('ring-progress');
  if (ring) {
    setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);
  }

  // Voice hint
  const supported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  const hintEl = document.getElementById('voice-hint-text');
  if (hintEl) {
    hintEl.textContent = supported
      ? (lang === 'en' ? 'Voice name input available' : 'Голосовой ввод имени доступен')
      : (lang === 'en' ? 'Voice input not supported in this browser' : 'Голосовой ввод недоступен в этом браузере');
  }

  // Achievements
  renderAchievements(user.achievements || [], lang);

  // History
  renderHistory(lang);
}

function renderAchievements(earned, lang) {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  const all = [
    { id: 'first_step',   icon: '👣', nameKey: 'ach_first_step',   descKey: 'ach_first_step_desc'   },
    { id: 'week_warrior', icon: '🏆', nameKey: 'ach_week_warrior', descKey: 'ach_week_warrior_desc' },
    { id: 'mover',        icon: '🚀', nameKey: 'ach_mover',        descKey: 'ach_mover_desc'        },
    { id: 'dedicated',    icon: '💎', nameKey: 'ach_dedicated',    descKey: 'ach_dedicated_desc'    },
  ];

  container.innerHTML = all.map(ach => {
    const isEarned = earned.includes(ach.id);
    return `
      <div class="achievement-card ${isEarned ? 'earned' : 'locked'}">
        <span class="ach-icon">${ach.icon}</span>
        <div class="ach-info">
          <div class="ach-name">${t(ach.nameKey)}</div>
          <div class="ach-desc">${t(ach.descKey)}</div>
        </div>
      </div>`;
  }).join('');
}

function renderHistory(lang) {
  const container = document.getElementById('session-history');
  if (!container) return;

  const sessions = getSessions();
  if (!sessions.length) {
    const msg = lang === 'en'
      ? 'No sessions yet.\nStart your first one now!'
      : 'Тренировок пока нет.\nНачни первую прямо сейчас!';
    container.innerHTML = `<div class="empty-state">${msg}</div>`;
    return;
  }

  const catIcons = { arms:'💪', legs:'🦵', back:'🔙', neck:'🧠', core:'⚡', full:'✨', rest:'😴' };
  const months = t('months');

  container.innerHTML = sessions.slice(0, 20).map(s => {
    const d = new Date(s.completedAt || s.date);
    const dateStr = Array.isArray(months)
      ? `${d.getDate()} ${months[d.getMonth()]}`
      : s.date;
    const icon = catIcons[s.category] || '✨';
    return `
      <div class="history-item">
        <span class="history-icon">${icon}</span>
        <div class="history-info">
          <div class="history-title">${s.title || s.category || '—'}</div>
          <div class="history-meta">${dateStr}</div>
        </div>
        <span class="history-duration">${s.durationMin || 0} мин</span>
      </div>`;
  }).join('');
}

// ---- EDIT ----

function toggleEdit() {
  const form = document.getElementById('edit-form');
  const isHidden = form.classList.contains('hidden');

  if (isHidden) {
    // Populate form
    const user = getUser() || {};
    document.getElementById('edit-name').value   = user.name   || '';
    document.getElementById('edit-age').value    = user.age    || '';
    document.getElementById('edit-gender').value = user.gender || '';
    document.getElementById('edit-height').value = user.height || '';
    document.getElementById('edit-weight').value = user.weight || '';
    document.getElementById('edit-goal').value   = user.goal   || 'general';
    form.classList.remove('hidden');
  } else {
    form.classList.add('hidden');
  }
}

function saveProfile() {
  const updates = {
    name:   document.getElementById('edit-name').value.trim(),
    age:    parseInt(document.getElementById('edit-age').value)    || null,
    gender: document.getElementById('edit-gender').value          || null,
    height: parseInt(document.getElementById('edit-height').value) || null,
    weight: parseInt(document.getElementById('edit-weight').value) || null,
    goal:   document.getElementById('edit-goal').value            || 'general',
  };

  saveUser(updates);
  document.getElementById('edit-form').classList.add('hidden');
  renderProfile();
}

// ---- VOICE INPUT ----

let recognition = null;

function startVoiceInput() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) return;

  const btn = document.getElementById('voice-btn');
  const input = document.getElementById('edit-name');
  const lang = getLang() || 'ru';

  if (recognition) {
    recognition.stop();
    recognition = null;
    btn.classList.remove('listening');
    return;
  }

  recognition = new SpeechRec();
  recognition.lang = lang === 'en' ? 'en-US' : 'ru-RU';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  btn.classList.add('listening');

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    input.value = transcript.trim();
    btn.classList.remove('listening');
    recognition = null;
  };

  recognition.onerror = () => {
    btn.classList.remove('listening');
    recognition = null;
  };

  recognition.onend = () => {
    btn.classList.remove('listening');
    recognition = null;
  };

  recognition.start();
}
