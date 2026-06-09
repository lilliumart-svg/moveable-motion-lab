// =============================================
// MoveAble Motion Lab — app.js
// =============================================

let selectedLang = 'ru';
let selectedGoal = null;

// ---- INIT ----

function initApp() {
  // Detect / load language
  selectedLang = getLang() || detectLang();
  setLang(selectedLang);

  if (!isOnboarded()) {
    showOnboarding();
  } else {
    showApp();
  }
}

// ---- ONBOARDING ----

function showOnboarding() {
  document.getElementById('onboarding').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');

  // Pre-select detected language
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === selectedLang);
  });
}

function selectLang(lang) {
  selectedLang = lang;
  setLang(lang);
  saveLang(lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function selectGoal(btn) {
  document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedGoal = btn.dataset.goal;
}

function nextStep(stepNum) {
  // Validate step 2 (name)
  if (stepNum === 3) {
    const nameVal = document.getElementById('onboard-name')?.value?.trim();
    if (!nameVal) {
      document.getElementById('onboard-name')?.focus();
      return;
    }
  }

  const current = document.querySelector('.onboard-step.active');
  const next = document.querySelector(`.onboard-step[data-step="${stepNum}"]`);

  if (current) current.classList.remove('active');
  if (next) next.classList.add('active');

  // Update dots
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.toggle('active', parseInt(dot.dataset.dot) <= stepNum);
  });
}

function finishOnboarding() {
  const name   = document.getElementById('onboard-name')?.value?.trim() || '';
  const age    = document.getElementById('onboard-age')?.value || '';
  const gender = document.getElementById('onboard-gender')?.value || '';
  const height = document.getElementById('onboard-height')?.value || '';
  const weight = document.getElementById('onboard-weight')?.value || '';

  saveUser({
    name,
    age:    age    ? parseInt(age)    : null,
    gender: gender || null,
    height: height ? parseInt(height) : null,
    weight: weight ? parseInt(weight) : null,
    goal:   selectedGoal || 'general',
    lang:   selectedLang,
    joinedAt: Date.now(),
    achievements: [],
    streak: 0,
    bestStreak: 0,
  });

  saveLang(selectedLang);
  setOnboarded();

  document.getElementById('onboarding').classList.add('hidden');
  showApp();
}

// ---- MAIN APP ----

function showApp() {
  document.getElementById('onboarding').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  // Re-apply translations
  setLang(selectedLang);

  renderHome();
}

function renderHome() {
  const user  = getUser();
  const stats = getStats();

  // Greeting with time of day
  const hour = new Date().getHours();
  let greetKey = 'good_morning';
  if (hour >= 12 && hour < 18) greetKey = 'good_afternoon';
  if (hour >= 18) greetKey = 'good_evening';

  const greetingEl = document.querySelector('.greeting__sub');
  if (greetingEl) greetingEl.textContent = t(greetKey);

  const nameEl = document.getElementById('greeting-name');
  if (nameEl) nameEl.textContent = user?.name || '—';

  // Streak
  const streakEl = document.getElementById('header-streak');
  if (streakEl) streakEl.textContent = stats.streak;

  // Stats
  const els = {
    'stat-streak':   stats.streak,
    'stat-sessions': stats.totalSessions,
    'stat-minutes':  stats.totalMinutes,
  };
  Object.entries(els).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // Today's date
  const today = new Date();
  const months = t('months');
  const dateEl = document.getElementById('today-date');
  if (dateEl && Array.isArray(months)) {
    dateEl.textContent = `${today.getDate()} ${months[today.getMonth()]}`;
  }

  // Today's plan
  const plan = getTodayPlan(selectedLang);
  if (plan) {
    const iconEl = document.querySelector('.today-card__icon');
    const titleEl = document.getElementById('today-title');
    const descEl  = document.getElementById('today-desc');
    if (iconEl) iconEl.textContent = plan.icon;
    if (titleEl) titleEl.textContent = plan.title;
    if (descEl && plan.cat === null) {
      descEl.textContent = selectedLang === 'en' ? 'Rest day — well deserved!' : 'День отдыха — заслуженно!';
    }
  }

  // Week strip
  renderWeekStrip();

  // Motivation
  const quotes = t('motivations');
  if (Array.isArray(quotes)) {
    const quoteEl = document.getElementById('motivation-quote');
    if (quoteEl) {
      const idx = new Date().getDate() % quotes.length;
      quoteEl.textContent = `"${quotes[idx]}"`;
    }
  }

  // Mark active nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === 'home');
  });
}

function renderWeekStrip() {
  const container = document.getElementById('week-strip');
  if (!container) return;

  const sessions  = getSessions();
  const sessionDates = new Set(sessions.map(s => s.date));
  const days = t('days_short');
  if (!Array.isArray(days)) return;

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  // Build Mon–Sun of current week
  const weekDays = [];
  const startOfWeek = new Date(today);
  const dow = today.getDay(); // 0=Sun
  const diff = dow === 0 ? -6 : 1 - dow; // Monday start
  startOfWeek.setDate(today.getDate() + diff);

  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    weekDays.push(d);
  }

  container.innerHTML = weekDays.map((d, i) => {
    const dateStr = d.toISOString().split('T')[0];
    const isToday = dateStr === todayStr;
    const isDone  = sessionDates.has(dateStr);
    return `
      <div class="week-day ${isToday ? 'today' : ''} ${isDone ? 'done' : ''}">
        <span class="week-day__label">${days[i]}</span>
        <span class="week-day__dot"></span>
      </div>`;
  }).join('');
}
