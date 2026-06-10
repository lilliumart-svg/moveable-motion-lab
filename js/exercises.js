// =============================================
// MoveAble Motion Lab — Exercise Database v3
// Только крупные движения, надёжно отслеживаемые AI.
// Дыхание — разминка с таймером (без AI-счёта).
// Sources: Michigan Medicine PM&R, Teladoc, HUR, FLUX
// =============================================

const EXERCISES = [

  // ══════════ ARMS / SHOULDERS ══════════
  {
    id: 'shoulder_flexion', category: 'arms', difficulty: 'easy', icon: '🙋', hint: 'arm_raise',
    ru: { name: 'Подъём руки вперёд-вверх', desc: 'Классическое ROM-упражнение из реабилитационных программ.' },
    en: { name: 'Shoulder Flexion', desc: 'Classic ROM exercise from rehabilitation programs.' },
    sets: 2, reps: 8, restSec: 30,
    instructions: {
      ru: ['Начни с рукой вдоль тела', 'Медленно подними руку вперёд и вверх к потолку, локоть прямой', 'Подними насколько комфортно — в идеале до уха', 'Медленно опусти руку обратно вдоль тела'],
      en: ['Start with your arm by your side', 'Slowly lift your hand forward and up toward the ceiling, elbow straight', 'Go as high as comfortable — ideally next to your ear', 'Slowly bring your arm back down to your side'],
    }
  },
  {
    id: 'elbow_curl', category: 'arms', difficulty: 'easy', icon: '💪', hint: 'elbow',
    ru: { name: 'Сгибание локтя', desc: 'Укрепляет бицепс. Можно с лёгким весом — например, бутылкой воды.' },
    en: { name: 'Elbow Flexion (Bicep Curl)', desc: 'Strengthens biceps. Optionally hold a light weight or water bottle.' },
    sets: 3, reps: 10, restSec: 30,
    instructions: {
      ru: ['Рука вдоль тела, ладонь смотрит вперёд', 'Медленно согни локоть, поднимая ладонь к плечу', 'Плечо прижато к телу — двигается только предплечье', 'Медленно выпрями руку обратно'],
      en: ['Arm at your side, palm facing forward', 'Slowly bend your elbow, bringing your palm toward your shoulder', 'Keep upper arm against your body — only the forearm moves', 'Slowly straighten your arm back down'],
    }
  },
  {
    id: 'shoulder_shrug', category: 'arms', difficulty: 'easy', icon: '🤷', hint: 'shrug',
    ru: { name: 'Подъём плеч', desc: 'Снимает напряжение в шее и плечах.' },
    en: { name: 'Shoulder Shrugs', desc: 'Relieves neck and shoulder tension.' },
    sets: 2, reps: 10, restSec: 20,
    instructions: {
      ru: ['Сиди прямо, руки расслаблены', 'Подними оба плеча вверх к ушам', 'Задержи на 2 секунды', 'Медленно опусти и полностью расслабь плечи'],
      en: ['Sit tall, arms relaxed', 'Raise both shoulders up toward your ears', 'Hold for 2 seconds', 'Slowly lower and fully relax your shoulders'],
    }
  },
  {
    id: 'arm_circles', category: 'arms', difficulty: 'medium', icon: '🔄', hint: 'circles',
    ru: { name: 'Круги руками', desc: 'Разогревает плечевые суставы, улучшает кровообращение.' },
    en: { name: 'Arm Circles', desc: 'Warms up shoulder joints, improves circulation.' },
    sets: 2, reps: 10, restSec: 30,
    instructions: {
      ru: ['Вытяни руки в стороны на уровне плеч', 'Делай маленькие круги вперёд — 10 раз', 'Потом маленькие круги назад — 10 раз', 'Держи руки на уровне плеч всё время'],
      en: ['Stretch your arms out to the sides at shoulder level', 'Make small circles forward — 10 times', 'Then small circles backward — 10 times', 'Keep arms at shoulder height the whole time'],
    }
  },
  {
    id: 'seated_row', category: 'arms', difficulty: 'medium', icon: '🚣', hint: 'row',
    ru: { name: 'Гребля сидя', desc: 'Укрепляет спину и плечи. Сводит лопатки.' },
    en: { name: 'Seated Row', desc: 'Strengthens back and shoulders. Squeezes shoulder blades.' },
    sets: 3, reps: 10, restSec: 30,
    instructions: {
      ru: ['Подними руки на уровень плеч, локти согнуты под 90°', 'Вытяни обе руки вперёд насколько можешь, не блокируя локти', 'Согни локти и отведи их назад за корпус', 'Своди лопатки вместе при движении назад'],
      en: ['Hold arms at shoulder level, elbows bent at 90°', 'Push both arms straight out in front as far as you can without locking elbows', 'Bend elbows and pull them back behind your torso', 'Squeeze your shoulder blades together as you pull back'],
    }
  },

  // ══════════ LEGS (SEATED) ══════════
  {
    id: 'seated_march', category: 'legs', difficulty: 'easy', icon: '🚶', hint: 'march',
    ru: { name: 'Марш сидя', desc: 'Активирует бёдра как при ходьбе. Сначала заблокируй колёса.' },
    en: { name: 'Seated Marching', desc: 'Activates hips like walking. Lock your wheelchair brakes first.' },
    sets: 2, reps: 20, restSec: 30,
    instructions: {
      ru: ['Сядь прямо, заблокируй тормоза', 'Подними правое колено вверх насколько комфортно', 'Опусти и подними левое колено', 'Чередуй как при ходьбе — всего 20 раз (по 10 на каждую ногу)'],
      en: ['Sit tall, lock your brakes', 'Lift your right knee up as far as comfortable', 'Lower it and lift your left knee', 'Alternate like walking — 20 total (10 each leg)'],
    }
  },
  {
    id: 'leg_extension', category: 'legs', difficulty: 'medium', icon: '🦵', hint: 'leg_ext',
    ru: { name: 'Выпрямление ноги', desc: 'Укрепляет переднюю поверхность бедра (квадрицепс).' },
    en: { name: 'Seated Leg Extension', desc: 'Strengthens the front thigh muscle (quadriceps).' },
    sets: 2, reps: 10, restSec: 30,
    instructions: {
      ru: ['Сядь прямо, держись за подлокотники', 'Медленно выпрями правую ногу до горизонтали', 'Задержи на 2 секунды, напрягая бедро', 'Медленно опусти. Сделай все повторы, потом смени ногу'],
      en: ['Sit tall, hold the armrests', 'Slowly straighten your right leg until horizontal', 'Hold 2 seconds, squeezing your thigh', 'Slowly lower. Do all reps, then switch legs'],
    }
  },
  {
    id: 'leg_side', category: 'legs', difficulty: 'medium', icon: '↔️', hint: 'leg_side',
    ru: { name: 'Отведение ноги в сторону', desc: 'Укрепляет внешнюю часть бедра, улучшает стабильность таза.' },
    en: { name: 'Leg Out to Side', desc: 'Strengthens outer thigh, improves hip stability.' },
    sets: 2, reps: 10, restSec: 30,
    instructions: {
      ru: ['Сядь прямо, стопы на полу', 'Отведи правую ногу в сторону насколько можешь', 'Верни обратно в центр', 'Сделай 10 раз, потом смени ногу'],
      en: ['Sit tall, feet on the floor', 'Move your right leg out to the side as far as you can', 'Bring it back to center', 'Do 10 reps, then switch legs'],
    }
  },

  // ══════════ NECK ══════════
  {
    id: 'neck_tilt', category: 'neck', difficulty: 'easy', icon: '↕️', hint: 'neck_tilt',
    ru: { name: 'Ухо к плечу', desc: 'Растягивает боковые мышцы шеи. Делай очень медленно.' },
    en: { name: 'Ear to Shoulder', desc: 'Stretches the side neck muscles. Move very slowly.' },
    sets: 2, reps: 5, restSec: 20,
    instructions: {
      ru: ['Сядь прямо, сделай глубокий вдох', 'Медленно наклони правое ухо к правому плечу', 'Не поднимай плечо навстречу! Задержи 5 секунд', 'Вернись в центр и наклони влево'],
      en: ['Sit tall, take a deep breath', 'Slowly tilt your right ear toward your right shoulder', 'Do not raise the shoulder to meet it! Hold 5 seconds', 'Return to center and tilt left'],
    }
  },
  {
    id: 'neck_turn', category: 'neck', difficulty: 'easy', icon: '↔️', hint: 'neck_turn',
    ru: { name: 'Повороты головы', desc: 'Восстанавливает подвижность шейного отдела.' },
    en: { name: 'Head Turns', desc: 'Restores cervical spine mobility.' },
    sets: 2, reps: 5, restSec: 20,
    instructions: {
      ru: ['Подбородок параллелен полу', 'Медленно поверни голову вправо до комфортного предела', 'Задержи 5 секунд', 'Вернись в центр и поверни влево'],
      en: ['Keep your chin parallel to the floor', 'Slowly turn your head right to a comfortable limit', 'Hold 5 seconds', 'Return to center and turn left'],
    }
  },
  {
    id: 'chin_chest', category: 'neck', difficulty: 'easy', icon: '⬇️', hint: 'chin',
    ru: { name: 'Подбородок к груди', desc: 'Растягивает заднюю поверхность шеи.' },
    en: { name: 'Chin to Chest', desc: 'Stretches the back of the neck.' },
    sets: 2, reps: 5, restSec: 20,
    instructions: {
      ru: ['Расслабь плечи', 'Медленно опусти подбородок к груди', 'Почувствуй растяжение сзади шеи, задержи 5-10 секунд', 'Медленно подними голову'],
      en: ['Relax your shoulders', 'Slowly lower your chin toward your chest', 'Feel the stretch at the back of your neck, hold 5-10 seconds', 'Slowly lift your head back up'],
    }
  },

  // ══════════ BACK ══════════
  {
    id: 'blade_squeeze', category: 'back', difficulty: 'easy', icon: '🔙', hint: 'blade',
    ru: { name: 'Сведение лопаток', desc: 'Главное упражнение для осанки и верхней части спины.' },
    en: { name: 'Shoulder Blade Squeeze', desc: 'The key exercise for posture and upper back.' },
    sets: 3, reps: 10, restSec: 30,
    instructions: {
      ru: ['Сядь прямо, руки согнуты на уровне плеч', 'Отведи локти назад, сводя лопатки вместе', 'Представь что зажимаешь карандаш между лопатками', 'Задержи 3 секунды и расслабь'],
      en: ['Sit tall, arms bent at shoulder level', 'Pull your elbows back, squeezing shoulder blades together', 'Imagine pinching a pencil between your shoulder blades', 'Hold 3 seconds and release'],
    }
  },
  {
    id: 'seated_twist', category: 'back', difficulty: 'medium', icon: '🔄', hint: 'twist',
    ru: { name: 'Скручивание сидя', desc: 'Мобилизует грудной отдел позвоночника.' },
    en: { name: 'Seated Twist', desc: 'Mobilizes the thoracic spine.' },
    sets: 2, reps: 8, restSec: 30,
    instructions: {
      ru: ['Скрести руки на груди', 'Медленно поверни корпус вправо, голова следует за корпусом', 'Задержи 3 секунды', 'Вернись в центр и поверни влево'],
      en: ['Cross your arms over your chest', 'Slowly rotate your torso right, head follows the body', 'Hold 3 seconds', 'Return to center and rotate left'],
    }
  },
  {
    id: 'cat_cow', category: 'back', difficulty: 'medium', icon: '🌊', hint: 'catcow',
    ru: { name: 'Кошка-корова сидя', desc: 'Прорабатывает весь позвоночник волной.' },
    en: { name: 'Seated Cat-Cow', desc: 'Works the entire spine in a wave.' },
    sets: 2, reps: 8, restSec: 30,
    instructions: {
      ru: ['Руки на коленях', 'Округли спину, подбородок к груди, живот втянут — это «кошка»', 'Прогнись, грудь вперёд, взгляд вверх — это «корова»', 'Плавно чередуй, по 2 секунды на каждую позу'],
      en: ['Hands on your knees', 'Round your back, chin to chest, belly pulled in — that is "cat"', 'Arch your back, chest forward, look up — that is "cow"', 'Alternate smoothly, 2 seconds per pose'],
    }
  },

  // ══════════ CORE ══════════
  {
    id: 'side_bend', category: 'core', difficulty: 'medium', icon: '↪️', hint: 'side',
    ru: { name: 'Наклоны в сторону', desc: 'Укрепляет косые мышцы, улучшает баланс сидя.' },
    en: { name: 'Seated Side Bends', desc: 'Strengthens obliques, improves seated balance.' },
    sets: 2, reps: 10, restSec: 30,
    instructions: {
      ru: ['Сядь прямо, левая рука держится за подлокотник', 'Подними правую руку над головой', 'Медленно наклонись влево, тянясь рукой', 'Вернись и поменяй сторону'],
      en: ['Sit tall, left hand holding the armrest', 'Raise your right arm overhead', 'Slowly bend to the left, reaching with your arm', 'Return and switch sides'],
    }
  },
  {
    id: 'weight_shift', category: 'core', difficulty: 'easy', icon: '⚖️', hint: 'shift',
    ru: { name: 'Перенос веса', desc: 'Тренирует баланс и контроль корпуса. Безопасно и эффективно.' },
    en: { name: 'Controlled Weight Shifts', desc: 'Trains balance and trunk control. Safe and effective.' },
    sets: 2, reps: 8, restSec: 20,
    instructions: {
      ru: ['Сядь прямо, руки на подлокотниках для страховки', 'Медленно перенеси вес на правую ягодицу', 'Задержи 3 секунды, вернись в центр', 'Перенеси вес влево. Это одно повторение'],
      en: ['Sit tall, hands on armrests for safety', 'Slowly shift your weight onto your right hip', 'Hold 3 seconds, return to center', 'Shift left. That is one rep'],
    }
  },

  // ══════════ WARM-UP (дыхание — таймер, без AI) ══════════
  {
    id: 'warmup_breath', category: 'full', difficulty: 'easy', icon: '🌅', hint: 'breathe', noAI: true, timerSec: 40,
    ru: { name: 'Дыхательная разминка', desc: 'Всегда начинай тренировку с этого. Камера не считает — просто дыши с таймером.' },
    en: { name: 'Breathing Warm-up', desc: 'Always start your session with this. No camera counting — just breathe with the timer.' },
    sets: 1, reps: 5, restSec: 10,
    instructions: {
      ru: ['Сядь удобно, закрой глаза если хочешь', 'Глубокий вдох через нос — 4 счёта', 'Задержка — 2 счёта', 'Медленный выдох через рот — 6 счётов'],
      en: ['Sit comfortably, close your eyes if you like', 'Deep breath in through the nose — 4 counts', 'Hold — 2 counts', 'Slow exhale through the mouth — 6 counts'],
    }
  },
  {
    id: 'warmup_upper', category: 'full', difficulty: 'easy', icon: '✨', hint: 'circles',
    ru: { name: 'Разминка верха тела', desc: 'Быстрый разогрев шеи, плеч и рук.' },
    en: { name: 'Upper Body Warm-up', desc: 'Quick warm-up for neck, shoulders and arms.' },
    sets: 1, reps: 10, restSec: 20,
    instructions: {
      ru: ['Медленные повороты головы — по 5 в каждую сторону', 'Круги плечами назад — 10 раз', 'Вытяни руки вперёд и потянись — 5 раз', 'Встряхни кисти рук — 10 секунд'],
      en: ['Slow head turns — 5 each side', 'Shoulder rolls backward — 10 times', 'Reach both arms forward and stretch — 5 times', 'Shake out your hands — 10 seconds'],
    }
  },
];

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
