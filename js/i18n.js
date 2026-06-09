// =============================================
// MoveAble Motion Lab — i18n (RU / EN)
// =============================================

const TRANSLATIONS = {
  ru: {
    continue: 'Продолжить',
    start: 'Начать!',
    whats_your_name: 'Как вас зовут?',
    name_hint: 'Мы будем обращаться к вам по имени',
    your_name: 'Ваше имя',
    your_goal: 'Ваша цель',
    goal_hint: 'Это поможет подобрать упражнения',
    about_you: 'О вас',
    optional_hint: 'Необязательно, но помогает',
    age: 'Возраст',
    gender: 'Пол',
    not_specified: 'Не указан',
    male: 'Мужской',
    female: 'Женский',
    height: 'Рост, см',
    weight: 'Вес, кг',
    goal_mobility: 'Мобильность',
    goal_strength: 'Сила мышц',
    goal_pain: 'Снижение боли',
    goal_balance: 'Баланс',
    goal_recovery: 'Реабилитация',
    goal_general: 'Общее здоровье',

    nav_home: 'Главная',
    nav_exercises: 'Упражнения',
    nav_progress: 'Прогресс',
    nav_profile: 'Профиль',

    good_morning: 'Доброе утро,',
    good_afternoon: 'Добрый день,',
    good_evening: 'Добрый вечер,',

    today_plan: 'План на сегодня',
    today_arms: 'Руки и плечи',
    today_desc: '5 упражнений · 15 минут',
    start_btn: 'Начать',
    days_streak: 'дней подряд',
    total_sessions: 'тренировок',
    total_minutes: 'минут',
    week_schedule: 'Расписание недели',
    categories: 'Категории',

    cat_arms: 'Руки',
    cat_legs: 'Ноги',
    cat_neck: 'Шея',
    cat_back: 'Спина',
    cat_core: 'Корпус',
    cat_full: 'Разминка',

    days_short: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    months: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],

    motivations: [
      'Каждое движение — это шаг к себе.',
      'Тело помнит каждое усилие, которое ты вкладываешь.',
      'Прогресс не всегда виден сразу, но он есть.',
      'Вы сильнее, чем думаете.',
      'Маленькие шаги складываются в большой путь.',
      'Движение — это жизнь. Ты уже на правильном пути.',
      'Сегодня лучше, чем вчера — этого достаточно.',
    ],

    // Exercises
    ex_page_title: 'Упражнения',
    ex_all: 'Все',
    ex_arms: 'Руки',
    ex_legs: 'Ноги',
    ex_neck: 'Шея',
    ex_back: 'Спина',
    ex_core: 'Корпус',
    ex_full: 'Разминка',
    ex_reps: 'повторений',
    ex_sets: 'подходов',
    ex_seconds: 'секунд',
    ex_start: 'Начать упражнение',
    difficulty_easy: 'Лёгкое',
    difficulty_medium: 'Среднее',
    difficulty_hard: 'Сложное',

    // Session
    session_title: 'Тренировка',
    session_next: 'Следующее',
    session_complete: 'Завершить',
    session_skip: 'Пропустить',
    session_rest: 'Отдых',
    session_done_title: 'Отлично!',
    session_done_msg: 'Тренировка завершена',
    session_done_btn: 'На главную',

    // Profile
    profile_title: 'Мой профиль',
    profile_edit: 'Редактировать',
    profile_save: 'Сохранить',
    profile_name: 'Имя',
    profile_goal: 'Цель',
    profile_achievements: 'Достижения',
    profile_history: 'История тренировок',
    no_sessions_yet: 'Тренировок пока нет.\nНачни первую прямо сейчас!',

    // Progress
    progress_title: 'Прогресс',
    progress_week: 'Эта неделя',
    progress_month: 'Месяц',
    progress_all: 'Всё время',
    streak_label: 'Текущая серия',
    best_streak: 'Лучшая серия',
    completed_label: 'Выполнено',

    // Achievements
    ach_first_step: 'Первый шаг',
    ach_first_step_desc: 'Завершена первая тренировка',
    ach_week_warrior: 'Воин недели',
    ach_week_warrior_desc: '7 дней подряд',
    ach_mover: 'В движении',
    ach_mover_desc: '10 тренировок выполнено',
    ach_dedicated: 'Преданность',
    ach_dedicated_desc: '30 дней подряд',
  },

  en: {
    continue: 'Continue',
    start: 'Let\'s go!',
    whats_your_name: 'What\'s your name?',
    name_hint: 'We\'ll address you by name',
    your_name: 'Your name',
    your_goal: 'Your goal',
    goal_hint: 'This helps us pick the right exercises',
    about_you: 'About you',
    optional_hint: 'Optional, but helpful',
    age: 'Age',
    gender: 'Gender',
    not_specified: 'Not specified',
    male: 'Male',
    female: 'Female',
    height: 'Height, cm',
    weight: 'Weight, kg',
    goal_mobility: 'Mobility',
    goal_strength: 'Muscle strength',
    goal_pain: 'Pain relief',
    goal_balance: 'Balance',
    goal_recovery: 'Rehabilitation',
    goal_general: 'General health',

    nav_home: 'Home',
    nav_exercises: 'Exercises',
    nav_progress: 'Progress',
    nav_profile: 'Profile',

    good_morning: 'Good morning,',
    good_afternoon: 'Good afternoon,',
    good_evening: 'Good evening,',

    today_plan: "Today's plan",
    today_arms: 'Arms & Shoulders',
    today_desc: '5 exercises · 15 minutes',
    start_btn: 'Start',
    days_streak: 'day streak',
    total_sessions: 'sessions',
    total_minutes: 'minutes',
    week_schedule: 'Weekly schedule',
    categories: 'Categories',

    cat_arms: 'Arms',
    cat_legs: 'Legs',
    cat_neck: 'Neck',
    cat_back: 'Back',
    cat_core: 'Core',
    cat_full: 'Warm-up',

    days_short: ['Mo','Tu','We','Th','Fr','Sa','Su'],
    months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

    motivations: [
      'Every movement is a step toward yourself.',
      'Your body remembers every effort you put in.',
      'Progress isn\'t always visible right away, but it\'s there.',
      'You are stronger than you think.',
      'Small steps add up to a long journey.',
      'Movement is life. You\'re already on the right path.',
      'Better today than yesterday — that\'s enough.',
    ],

    ex_page_title: 'Exercises',
    ex_all: 'All',
    ex_arms: 'Arms',
    ex_legs: 'Legs',
    ex_neck: 'Neck',
    ex_back: 'Back',
    ex_core: 'Core',
    ex_full: 'Warm-up',
    ex_reps: 'reps',
    ex_sets: 'sets',
    ex_seconds: 'seconds',
    ex_start: 'Start exercise',
    difficulty_easy: 'Easy',
    difficulty_medium: 'Medium',
    difficulty_hard: 'Hard',

    session_title: 'Session',
    session_next: 'Next',
    session_complete: 'Complete',
    session_skip: 'Skip',
    session_rest: 'Rest',
    session_done_title: 'Great job!',
    session_done_msg: 'Session complete',
    session_done_btn: 'Home',

    profile_title: 'My Profile',
    profile_edit: 'Edit',
    profile_save: 'Save',
    profile_name: 'Name',
    profile_goal: 'Goal',
    profile_achievements: 'Achievements',
    profile_history: 'Session history',
    no_sessions_yet: 'No sessions yet.\nStart your first one now!',

    progress_title: 'Progress',
    progress_week: 'This week',
    progress_month: 'Month',
    progress_all: 'All time',
    streak_label: 'Current streak',
    best_streak: 'Best streak',
    completed_label: 'Completed',

    ach_first_step: 'First step',
    ach_first_step_desc: 'Completed first session',
    ach_week_warrior: 'Week warrior',
    ach_week_warrior_desc: '7 days in a row',
    ach_mover: 'On the move',
    ach_mover_desc: '10 sessions completed',
    ach_dedicated: 'Dedication',
    ach_dedicated_desc: '30 days in a row',
  }
};

// Active language
let currentLang = 'ru';

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS['ru']?.[key] || key;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  applyTranslations();
}

function detectLang() {
  const saved = localStorage.getItem('mv_lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  const browser = navigator.language?.substring(0, 2).toLowerCase();
  if (browser === 'en') return 'en';
  return 'ru'; // default RU
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });
}

// Auto-detect on load
(function() {
  currentLang = detectLang();
})();
