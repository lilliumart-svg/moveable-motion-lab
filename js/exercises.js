// =============================================
// MoveAble Motion Lab — Exercise Database
// =============================================

const EXERCISES = [

  // ---- ARMS & SHOULDERS ----
  {
    id: 'arm_01', category: 'arms', difficulty: 'easy',
    icon: '💪',
    ru: { name: 'Сгибание запястий', desc: 'Улучшает гибкость и силу запястий. Выполняется сидя.' },
    en: { name: 'Wrist Curls',       desc: 'Improves wrist flexibility and strength. Performed seated.' },
    sets: 3, reps: 12, restSec: 30,
    instructions: {
      ru: ['Положите руки на колени ладонями вверх','Медленно согните запястья вверх','Опустите в исходное положение','Повторите на обе руки'],
      en: ['Rest hands on knees, palms up','Slowly curl wrists upward','Return to start position','Repeat on both hands'],
    }
  },
  {
    id: 'arm_02', category: 'arms', difficulty: 'easy',
    icon: '🤲',
    ru: { name: 'Вращение запястий', desc: 'Восстанавливает подвижность запястного сустава.' },
    en: { name: 'Wrist Rotations',   desc: 'Restores wrist joint mobility.' },
    sets: 2, reps: 10, restSec: 20,
    instructions: {
      ru: ['Вытяните руки вперед','Вращайте запястья по часовой стрелке 10 раз','Затем против часовой стрелки'],
      en: ['Extend arms forward','Rotate wrists clockwise 10 times','Then counter-clockwise'],
    }
  },
  {
    id: 'arm_03', category: 'arms', difficulty: 'easy',
    icon: '🙌',
    ru: { name: 'Подъём плеч', desc: 'Снимает напряжение в плечах и шее.' },
    en: { name: 'Shoulder Shrugs',   desc: 'Relieves tension in shoulders and neck.' },
    sets: 3, reps: 10, restSec: 20,
    instructions: {
      ru: ['Опустите руки вдоль тела','Медленно поднимите плечи к ушам','Задержитесь 2 секунды','Медленно опустите'],
      en: ['Let arms hang at sides','Slowly raise shoulders to ears','Hold 2 seconds','Slowly lower'],
    }
  },
  {
    id: 'arm_04', category: 'arms', difficulty: 'medium',
    icon: '💪',
    ru: { name: 'Вращение плеч', desc: 'Восстанавливает амплитуду движений в плечевом суставе.' },
    en: { name: 'Arm Circles',       desc: 'Restores range of motion in the shoulder joint.' },
    sets: 2, reps: 10, restSec: 30,
    instructions: {
      ru: ['Вытяните руки в стороны','Делайте круговые движения вперёд — 10 раз','Затем назад — 10 раз'],
      en: ['Extend arms to the sides','Make forward circles — 10 times','Then backward — 10 times'],
    }
  },
  {
    id: 'arm_05', category: 'arms', difficulty: 'medium',
    icon: '🤜',
    ru: { name: 'Растяжка бицепса', desc: 'Растягивает переднюю часть плеча и бицепс.' },
    en: { name: 'Bicep Stretch',     desc: 'Stretches the front of the shoulder and bicep.' },
    sets: 2, restSec: 20, durationSec: 30,
    instructions: {
      ru: ['Вытяните руку в сторону','Разверните ладонь назад','Мягко отведите руку назад','Удерживайте 30 секунд'],
      en: ['Extend arm to the side','Turn palm backward','Gently pull arm back','Hold for 30 seconds'],
    }
  },

  // ---- LEGS (SEATED) ----
  {
    id: 'leg_01', category: 'legs', difficulty: 'easy',
    icon: '🦵',
    ru: { name: 'Подъём ног сидя', desc: 'Укрепляет мышцы бедра. Выполняется на стуле или коляске.' },
    en: { name: 'Seated Leg Raises', desc: 'Strengthens thigh muscles. Performed in chair or wheelchair.' },
    sets: 3, reps: 10, restSec: 30,
    instructions: {
      ru: ['Сядьте прямо, ноги согнуты','Медленно выпрямите одну ногу','Задержитесь 2 секунды','Опустите и повторите на другую ногу'],
      en: ['Sit straight, legs bent','Slowly straighten one leg','Hold 2 seconds','Lower and repeat on other leg'],
    }
  },
  {
    id: 'leg_02', category: 'legs', difficulty: 'easy',
    icon: '🦶',
    ru: { name: 'Вращение стоп', desc: 'Улучшает кровообращение и подвижность голеностопа.' },
    en: { name: 'Ankle Rotations',   desc: 'Improves circulation and ankle mobility.' },
    sets: 2, reps: 10, restSec: 20,
    instructions: {
      ru: ['Слегка приподнимите ногу','Вращайте стопой по часовой стрелке','Затем против часовой стрелки','Повторите на другую ногу'],
      en: ['Slightly lift your foot','Rotate ankle clockwise','Then counter-clockwise','Repeat on other foot'],
    }
  },
  {
    id: 'leg_03', category: 'legs', difficulty: 'easy',
    icon: '🦶',
    ru: { name: 'Подъём на носки', desc: 'Укрепляет икроножные мышцы и улучшает баланс.' },
    en: { name: 'Calf Raises',       desc: 'Strengthens calf muscles and improves balance.' },
    sets: 3, reps: 15, restSec: 30,
    instructions: {
      ru: ['Поставьте ноги на пол','Медленно поднимитесь на носки','Задержитесь 2 секунды','Опустите пятки на пол'],
      en: ['Place feet flat on floor','Slowly rise onto toes','Hold 2 seconds','Lower heels back to floor'],
    }
  },
  {
    id: 'leg_04', category: 'legs', difficulty: 'medium',
    icon: '🦵',
    ru: { name: 'Сгибание коленей сидя', desc: 'Укрепляет мышцы задней поверхности бедра.' },
    en: { name: 'Seated Knee Bends',     desc: 'Strengthens hamstring muscles.' },
    sets: 3, reps: 12, restSec: 30,
    instructions: {
      ru: ['Сядьте на край стула','Медленно согните колено назад под стул','Задержитесь 2 секунды','Вернитесь в исходное положение'],
      en: ['Sit on edge of chair','Slowly bend knee backward under chair','Hold 2 seconds','Return to start'],
    }
  },
  {
    id: 'leg_05', category: 'legs', difficulty: 'medium',
    icon: '🏋️',
    ru: { name: 'Растяжка задней поверхности бедра', desc: 'Снимает напряжение и улучшает гибкость ног.' },
    en: { name: 'Hamstring Stretch', desc: 'Relieves tension and improves leg flexibility.' },
    sets: 2, restSec: 20, durationSec: 30,
    instructions: {
      ru: ['Вытяните ногу вперед на подставку','Наклонитесь вперед к ноге','Удерживайте 30 секунд','Повторите на другую ногу'],
      en: ['Extend leg forward on a footrest','Lean forward toward your leg','Hold 30 seconds','Repeat on other leg'],
    }
  },

  // ---- NECK ----
  {
    id: 'neck_01', category: 'neck', difficulty: 'easy',
    icon: '🧠',
    ru: { name: 'Наклоны головы', desc: 'Снимает напряжение в шее и боковых мышцах.' },
    en: { name: 'Head Tilts',     desc: 'Relieves neck tension and side muscles.' },
    sets: 2, reps: 8, restSec: 20,
    instructions: {
      ru: ['Смотрите вперёд','Медленно наклоните голову к плечу','Удерживайте 10 секунд','Повторите в другую сторону'],
      en: ['Look straight ahead','Slowly tilt head toward shoulder','Hold 10 seconds','Repeat to other side'],
    }
  },
  {
    id: 'neck_02', category: 'neck', difficulty: 'easy',
    icon: '↔️',
    ru: { name: 'Повороты головы', desc: 'Восстанавливает подвижность шейного отдела позвоночника.' },
    en: { name: 'Neck Rotations',  desc: 'Restores cervical spine mobility.' },
    sets: 2, reps: 8, restSec: 20,
    instructions: {
      ru: ['Смотрите вперёд','Медленно повернитесь вправо','Задержитесь 5 секунд','Повторите влево'],
      en: ['Look straight ahead','Slowly turn right','Hold 5 seconds','Repeat to the left'],
    }
  },
  {
    id: 'neck_03', category: 'neck', difficulty: 'easy',
    icon: '⬇️',
    ru: { name: 'Подбородок к груди', desc: 'Растягивает задние мышцы шеи.' },
    en: { name: 'Chin to Chest',       desc: 'Stretches the posterior neck muscles.' },
    sets: 2, reps: 6, restSec: 20,
    instructions: {
      ru: ['Сидите прямо','Медленно опустите подбородок к груди','Удерживайте 10 секунд','Медленно поднимите голову'],
      en: ['Sit straight','Slowly lower chin to chest','Hold 10 seconds','Slowly raise head'],
    }
  },

  // ---- BACK ----
  {
    id: 'back_01', category: 'back', difficulty: 'easy',
    icon: '🔙',
    ru: { name: 'Прогиб спины сидя', desc: 'Укрепляет мышцы-разгибатели спины.' },
    en: { name: 'Seated Back Extension', desc: 'Strengthens back extensor muscles.' },
    sets: 3, reps: 10, restSec: 30,
    instructions: {
      ru: ['Сядьте прямо, руки на поясе','Медленно прогните спину назад','Задержитесь 3 секунды','Вернитесь в исходное положение'],
      en: ['Sit straight, hands on hips','Slowly arch back backward','Hold 3 seconds','Return to start'],
    }
  },
  {
    id: 'back_02', category: 'back', difficulty: 'easy',
    icon: '🔄',
    ru: { name: 'Скручивания корпуса', desc: 'Улучшает подвижность грудного отдела позвоночника.' },
    en: { name: 'Trunk Rotations',     desc: 'Improves thoracic spine mobility.' },
    sets: 2, reps: 8, restSec: 30,
    instructions: {
      ru: ['Скрестите руки на груди','Медленно повернитесь вправо','Задержитесь 3 секунды','Повторите влево'],
      en: ['Cross arms on chest','Slowly rotate right','Hold 3 seconds','Repeat to the left'],
    }
  },
  {
    id: 'back_03', category: 'back', difficulty: 'medium',
    icon: '🏋️',
    ru: { name: 'Кошка-корова (сидя)', desc: 'Мобилизует позвоночник и снимает боль в спине.' },
    en: { name: 'Cat-Cow (Seated)',    desc: 'Mobilizes the spine and relieves back pain.' },
    sets: 2, reps: 10, restSec: 30,
    instructions: {
      ru: ['Руки на коленях','Округлите спину (кошка) — подбородок к груди','Прогнитесь (корова) — взгляд вперёд','Чередуйте плавно'],
      en: ['Hands on knees','Round your back (cat) — chin to chest','Arch your back (cow) — look forward','Alternate smoothly'],
    }
  },

  // ---- CORE ----
  {
    id: 'core_01', category: 'core', difficulty: 'easy',
    icon: '⚡',
    ru: { name: 'Втягивание живота', desc: 'Активирует глубокие мышцы кора.' },
    en: { name: 'Abdominal Breathing', desc: 'Activates deep core muscles.' },
    sets: 3, reps: 10, restSec: 20,
    instructions: {
      ru: ['Сядьте прямо','Глубоко вдохните','На выдохе втяните живот','Удерживайте 5 секунд'],
      en: ['Sit straight','Take a deep breath in','On exhale, pull belly in','Hold 5 seconds'],
    }
  },
  {
    id: 'core_02', category: 'core', difficulty: 'medium',
    icon: '⚡',
    ru: { name: 'Боковые наклоны корпуса', desc: 'Укрепляет боковые мышцы корпуса.' },
    en: { name: 'Seated Side Bends',         desc: 'Strengthens lateral core muscles.' },
    sets: 2, reps: 10, restSec: 30,
    instructions: {
      ru: ['Руки за головой','Медленно наклонитесь вправо','Вернитесь в центр','Повторите влево'],
      en: ['Hands behind head','Slowly bend right','Return to center','Repeat left'],
    }
  },

  // ---- SHOULDERS ----
  {
    id: 'sho_01', category: 'arms', difficulty: 'easy',
    icon: '🤷',
    ru: { name: 'Растяжка плеч', desc: 'Снимает боль и напряжение в плечевом поясе.' },
    en: { name: 'Shoulder Stretch', desc: 'Relieves shoulder pain and tension.' },
    sets: 2, restSec: 20, durationSec: 30,
    instructions: {
      ru: ['Вытяните руку поперёк груди','Другой рукой мягко прижмите её','Удерживайте 30 секунд','Повторите на другую руку'],
      en: ['Extend arm across chest','Gently press it with other hand','Hold 30 seconds','Repeat on other arm'],
    }
  },

  // ---- FULL BODY WARMUP ----
  {
    id: 'full_01', category: 'full', difficulty: 'easy',
    icon: '✨',
    ru: { name: 'Дыхательная разминка', desc: 'Подготавливает тело и ум к тренировке.' },
    en: { name: 'Breathing Warm-up',   desc: 'Prepares body and mind for exercise.' },
    sets: 1, reps: 5, restSec: 10,
    instructions: {
      ru: ['Сядьте удобно, закройте глаза','Медленно вдохните через нос — 4 счёта','Задержите дыхание — 4 счёта','Выдохните через рот — 4 счёта'],
      en: ['Sit comfortably, close eyes','Slowly inhale through nose — 4 counts','Hold breath — 4 counts','Exhale through mouth — 4 counts'],
    }
  },
  {
    id: 'full_02', category: 'full', difficulty: 'easy',
    icon: '🌀',
    ru: { name: 'Разминка плечевого пояса', desc: 'Разогревает плечи, шею и руки.' },
    en: { name: 'Upper Body Warm-up',        desc: 'Warms up shoulders, neck, and arms.' },
    sets: 1, reps: 10, restSec: 20,
    instructions: {
      ru: ['Вращайте плечами вперёд — 10 раз','Вращайте плечами назад — 10 раз','Повороты головы — 5 раз в каждую сторону'],
      en: ['Roll shoulders forward — 10 times','Roll shoulders backward — 10 times','Head rotations — 5 times each side'],
    }
  },
  {
    id: 'full_03', category: 'full', difficulty: 'easy',
    icon: '🦶',
    ru: { name: 'Разминка ног', desc: 'Активирует кровообращение в нижних конечностях.' },
    en: { name: 'Leg Warm-up',  desc: 'Activates circulation in lower limbs.' },
    sets: 1, reps: 10, restSec: 20,
    instructions: {
      ru: ['Поочерёдно поднимайте колени','Вращайте стопами','Подъём на носки и пятки','Лёгкие хлопки по бёдрам'],
      en: ['Alternately raise knees','Rotate ankles','Rise on toes then heels','Light taps on thighs'],
    }
  },
];

// ---- HELPERS ----

function getExercisesByCategory(cat) {
  if (!cat || cat === 'all') return EXERCISES;
  return EXERCISES.filter(e => e.category === cat);
}

function getExerciseById(id) {
  return EXERCISES.find(e => e.id === id) || null;
}

function getSessionPlan(cat, lang) {
  const exercises = getExercisesByCategory(cat).slice(0, 5);
  return exercises.map(e => ({
    ...e,
    displayName: e[lang]?.name || e.ru.name,
    displayDesc: e[lang]?.desc || e.ru.desc,
    steps: e.instructions?.[lang] || e.instructions?.ru || [],
  }));
}
