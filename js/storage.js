// =============================================
// MoveAble Motion Lab — Storage (localStorage)
// =============================================

const KEYS = {
  USER:     'mv_user',
  SESSIONS: 'mv_sessions',
  LANG:     'mv_lang',
  ONBOARD:  'mv_onboarded',
};

// ---- USER PROFILE ----

function getUser() {
  try {
    return JSON.parse(localStorage.getItem(KEYS.USER)) || null;
  } catch { return null; }
}

function saveUser(data) {
  const existing = getUser() || {};
  const updated = { ...existing, ...data, updatedAt: Date.now() };
  localStorage.setItem(KEYS.USER, JSON.stringify(updated));
  return updated;
}

function isOnboarded() {
  return !!localStorage.getItem(KEYS.ONBOARD);
}

function setOnboarded() {
  localStorage.setItem(KEYS.ONBOARD, '1');
}

// ---- SESSIONS ----

function getSessions() {
  try {
    return JSON.parse(localStorage.getItem(KEYS.SESSIONS)) || [];
  } catch { return []; }
}

function saveSession(session) {
  // session: { id, date, category, exercises[], durationMin, completedAt }
  const sessions = getSessions();
  const newSession = {
    id: Date.now(),
    completedAt: Date.now(),
    date: new Date().toISOString().split('T')[0],
    ...session,
  };
  sessions.unshift(newSession);
  localStorage.setItem(KEYS.SESSIONS, JSON.stringify(sessions));
  updateStreak();
  return newSession;
}

// ---- STREAK ----

function getStreakData() {
  const sessions = getSessions();
  if (!sessions.length) return { current: 0, best: 0 };

  const today = new Date().toISOString().split('T')[0];
  const dates = [...new Set(sessions.map(s => s.date))].sort().reverse();

  let current = 0;
  let checkDate = new Date();

  for (let i = 0; i < dates.length; i++) {
    const d = checkDate.toISOString().split('T')[0];
    if (dates[i] === d) {
      current++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else if (i === 0 && dates[0] !== today) {
      // Last session wasn't today — streak might be broken
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (dates[0] !== yesterday.toISOString().split('T')[0]) break;
      current++;
      checkDate.setDate(checkDate.getDate() - 1);
      i--;
    } else {
      break;
    }
  }

  // Best streak
  let best = 0;
  let run = 1;
  const sorted = [...dates].sort();
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i-1]);
    const curr = new Date(sorted[i]);
    const diff = (curr - prev) / (1000 * 60 * 60 * 24);
    if (diff === 1) { run++; best = Math.max(best, run); }
    else run = 1;
  }
  best = Math.max(best, current);

  return { current, best };
}

function updateStreak() {
  const user = getUser() || {};
  const { current, best } = getStreakData();
  saveUser({ streak: current, bestStreak: Math.max(best, user.bestStreak || 0) });
}

// ---- STATS ----

function getStats() {
  const sessions = getSessions();
  const { current, best } = getStreakData();
  const totalMinutes = sessions.reduce((sum, s) => sum + (s.durationMin || 0), 0);
  return {
    totalSessions: sessions.length,
    totalMinutes,
    streak: current,
    bestStreak: best,
  };
}

// ---- ACHIEVEMENTS ----

function checkAchievements() {
  const stats = getStats();
  const user = getUser() || {};
  const earned = user.achievements || [];
  const newlyEarned = [];

  const checks = [
    { id: 'first_step',    condition: stats.totalSessions >= 1 },
    { id: 'week_warrior',  condition: stats.streak >= 7 },
    { id: 'mover',         condition: stats.totalSessions >= 10 },
    { id: 'dedicated',     condition: stats.streak >= 30 },
  ];

  checks.forEach(({ id, condition }) => {
    if (condition && !earned.includes(id)) {
      earned.push(id);
      newlyEarned.push(id);
    }
  });

  if (newlyEarned.length) {
    saveUser({ achievements: earned });
  }

  return { all: earned, new: newlyEarned };
}

// ---- WEEKLY PLAN ----

const WEEKLY_PLAN = {
  ru: {
    1: { icon: '💪', title: 'Руки и плечи',   cat: 'arms' },
    2: { icon: '🦵', title: 'Ноги',            cat: 'legs' },
    3: { icon: '🔙', title: 'Спина',           cat: 'back' },
    4: { icon: '😴', title: 'Отдых',           cat: null   },
    5: { icon: '⚡', title: 'Корпус',          cat: 'core' },
    6: { icon: '✨', title: 'Полная разминка',  cat: 'full' },
    0: { icon: '😴', title: 'Отдых',           cat: null   },
  },
  en: {
    1: { icon: '💪', title: 'Arms & Shoulders', cat: 'arms' },
    2: { icon: '🦵', title: 'Legs',             cat: 'legs' },
    3: { icon: '🔙', title: 'Back',             cat: 'back' },
    4: { icon: '😴', title: 'Rest',             cat: null   },
    5: { icon: '⚡', title: 'Core',             cat: 'core' },
    6: { icon: '✨', title: 'Full warm-up',     cat: 'full' },
    0: { icon: '😴', title: 'Rest',             cat: null   },
  }
};

function getTodayPlan(lang) {
  const day = new Date().getDay(); // 0=Sun
  const plan = WEEKLY_PLAN[lang] || WEEKLY_PLAN['ru'];
  return plan[day];
}

// ---- LANG ----

function getLang() {
  return localStorage.getItem(KEYS.LANG) || null;
}

function saveLang(lang) {
  localStorage.setItem(KEYS.LANG, lang);
}

// ---- RESET ----

function resetAll() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
}
