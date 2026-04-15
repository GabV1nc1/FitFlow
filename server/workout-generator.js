const EXERCISE_CATALOG = [
  { name: 'Dumbbell Bench Press', focus: ['chest'], equipment: ['gym', 'home'], notes: 'Control the lowering phase and keep shoulders packed.' },
  { name: 'Push-up', focus: ['chest'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Keep ribs down and maintain a straight line from head to heel.' },
  { name: 'Incline Dumbbell Press', focus: ['chest'], equipment: ['gym', 'home'], notes: 'Use a bench angle that feels stable and smooth.' },
  { name: 'Cable Fly', focus: ['chest'], equipment: ['gym'], notes: 'Think hug the tree and pause briefly at the front.' },
  { name: 'Lat Pulldown', focus: ['back'], equipment: ['gym'], notes: 'Pull elbows toward your back pockets.' },
  { name: 'Seated Cable Row', focus: ['back'], equipment: ['gym'], notes: 'Pause when handles reach your torso.' },
  { name: 'One-arm Dumbbell Row', focus: ['back'], equipment: ['gym', 'home'], notes: 'Brace your core so the torso stays quiet.' },
  { name: 'Band Row', focus: ['back'], equipment: ['home'], notes: 'Squeeze shoulder blades together without shrugging.' },
  { name: 'Superman Pull-down', focus: ['back'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Lift chest lightly and drive elbows toward your ribs.' },
  { name: 'Prone Snow Angel', focus: ['back', 'shoulders'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Move slowly and keep the neck relaxed.' },
  { name: 'Goblet Squat', focus: ['legs'], equipment: ['gym', 'home'], notes: 'Sit between the hips and keep your chest tall.' },
  { name: 'Leg Press', focus: ['legs'], equipment: ['gym'], notes: 'Use a controlled tempo and full foot pressure.' },
  { name: 'Reverse Lunge', focus: ['legs'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Step back long enough to keep your front heel planted.' },
  { name: 'Romanian Deadlift', focus: ['legs'], equipment: ['gym', 'home'], notes: 'Push the hips back and keep the weights close.' },
  { name: 'Shoulder Press', focus: ['shoulders'], equipment: ['gym', 'home'], notes: 'Stack wrists over elbows and avoid arching.' },
  { name: 'Lateral Raise', focus: ['shoulders'], equipment: ['gym', 'home'], notes: 'Lift with soft elbows and stop around shoulder height.' },
  { name: 'Pike Push-up', focus: ['shoulders'], equipment: ['home', 'no_equipment'], notes: 'Think up and back as you press.' },
  { name: 'Face Pull', focus: ['shoulders', 'back'], equipment: ['gym', 'home'], notes: 'Pull toward eyebrow level and rotate thumbs back.' },
  { name: 'Alternating Dumbbell Curl', focus: ['arms'], equipment: ['gym', 'home'], notes: 'Keep elbows fixed and lower slowly.' },
  { name: 'Hammer Curl', focus: ['arms'], equipment: ['gym', 'home'], notes: 'Use a neutral grip and avoid swinging.' },
  { name: 'Triceps Pressdown', focus: ['arms'], equipment: ['gym'], notes: 'Lock the upper arm in place.' },
  { name: 'Bench Dip', focus: ['arms'], equipment: ['gym', 'home'], notes: 'Use a small range if shoulders feel pinchy.' },
  { name: 'Diamond Push-up', focus: ['arms', 'chest'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Keep elbows close and reduce range if needed.' },
  { name: 'Dead Bug', focus: ['core'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Keep your lower back softly pressed into the floor.' },
  { name: 'Plank Shoulder Tap', focus: ['core'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Keep hips as still as possible.' },
  { name: 'Hollow Hold', focus: ['core'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Breathe behind the brace.' },
  { name: 'Mountain Climber', focus: ['core', 'full_body'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Drive knees forward without bouncing the hips.' },
  { name: 'Kettlebell Swing', focus: ['full_body'], equipment: ['gym', 'home'], notes: 'Snap the hips and let the bell float.' },
  { name: 'Thruster', focus: ['full_body'], equipment: ['gym', 'home'], notes: 'Use leg drive to start the press.' },
  { name: 'Burpee', focus: ['full_body'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Stay smooth instead of sprinting the first reps.' },
  { name: 'Step-up', focus: ['legs', 'full_body'], equipment: ['gym', 'home'], notes: 'Drive through the full foot on the box or step.' },
  { name: 'Glute Bridge', focus: ['legs'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Pause at the top and avoid overextending the back.' },
  { name: 'Bear Crawl', focus: ['full_body', 'core'], equipment: ['gym', 'home', 'no_equipment'], notes: 'Move slowly and keep knees close to the floor.' },
];

const WARMUP_BLOCKS = {
  upper: [
    { name: 'Arm circles', duration_minutes: 1, notes: '30 seconds each direction.' },
    { name: 'Band pull-aparts', duration_minutes: 2, notes: 'Slow reps to wake up the upper back.' },
    { name: 'Incline push-up', duration_minutes: 2, notes: 'Easy tempo, just enough to groove the press.' },
    { name: 'Rowing machine', duration_minutes: 2, notes: 'Easy pace to raise body temperature.' },
  ],
  lower: [
    { name: 'Brisk walk or bike', duration_minutes: 2, notes: 'Easy effort.' },
    { name: 'Hip opener flow', duration_minutes: 2, notes: 'Alternate lunges and hamstring reaches.' },
    { name: 'Bodyweight squat', duration_minutes: 2, notes: 'Pause at the bottom for control.' },
    { name: 'Glute bridge', duration_minutes: 1, notes: 'Squeeze glutes at the top of each rep.' },
  ],
  full: [
    { name: 'Jump rope or march in place', duration_minutes: 2, notes: 'Keep it light and rhythmic.' },
    { name: 'Worlds greatest stretch', duration_minutes: 2, notes: 'Alternate sides with steady breathing.' },
    { name: 'Inchworm walkout', duration_minutes: 2, notes: 'Move slowly and feel the hamstrings open up.' },
    { name: 'Bodyweight reverse lunge', duration_minutes: 1, notes: 'Smooth reps, no rush.' },
  ],
};

const FINISHERS = {
  muscle_gain: [
    { name: 'Push-up ladder', description: 'Alternate 8 push-ups and 20 seconds of plank for 3 rounds.', duration_minutes: 4 },
    { name: 'Loaded carry finisher', description: 'Walk for 30 seconds, rest 30 seconds, and repeat for 4 rounds.', duration_minutes: 4 },
  ],
  fat_loss: [
    { name: 'Cardio burst', description: '20 seconds fast, 40 seconds easy for 5 rounds on a bike, rower, or march.', duration_minutes: 5 },
    { name: 'Bodyweight burner', description: 'Cycle mountain climbers, squats, and step jacks without rushing form.', duration_minutes: 5 },
  ],
  endurance: [
    { name: 'Steady finisher', description: 'Complete 3 rounds of 40 seconds work and 20 seconds recovery.', duration_minutes: 6 },
    { name: 'Carry and crawl circuit', description: 'Alternate 30 seconds of carry work and 30 seconds of bear crawl.', duration_minutes: 6 },
  ],
};

const FOCUS_LABELS = {
  chest: 'upper',
  back: 'upper',
  shoulders: 'upper',
  arms: 'upper',
  legs: 'lower',
  core: 'full',
  full_body: 'full',
  upper: 'upper',
  none: 'full',
};

const COMPANION_FOCUS = {
  chest: 'back',
  back: 'legs',
  legs: 'shoulders',
  shoulders: 'core',
  arms: 'back',
  core: 'full_body',
  full_body: 'core',
  upper: 'legs',
};

const SLOT_PATTERNS = {
  chest: ['chest', 'chest', 'shoulders', 'arms', 'core', 'chest', 'arms'],
  back: ['back', 'back', 'shoulders', 'arms', 'core', 'back', 'legs'],
  legs: ['legs', 'legs', 'legs', 'core', 'full_body', 'legs', 'core'],
  shoulders: ['shoulders', 'shoulders', 'chest', 'arms', 'core', 'back', 'shoulders'],
  arms: ['arms', 'arms', 'chest', 'back', 'core', 'shoulders', 'arms'],
  core: ['core', 'full_body', 'legs', 'core', 'back', 'core'],
  full_body: ['legs', 'chest', 'back', 'shoulders', 'core', 'full_body', 'legs'],
  upper: ['chest', 'back', 'shoulders', 'arms', 'core', 'chest', 'back'],
};

const EXERCISE_COUNT_BY_DURATION = {
  20: 4,
  30: 5,
  45: 6,
  60: 7,
};

const SETS_BY_INTENSITY = {
  low: 2,
  moderate: 3,
  high: 4,
  extreme: 4,
};

const REST_BY_INTENSITY = {
  low: 75,
  moderate: 60,
  high: 45,
  extreme: 30,
};

function clamp(number, min, max) {
  return Math.min(max, Math.max(min, number));
}

function sampleOne(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function formatReason(historyDirection, trainedYesterday, requestedFocus, resolvedFocus) {
  const reasons = [];

  if (historyDirection === 'increase') {
    reasons.push('Consistency has been high over the last few sessions.');
  }

  if (historyDirection === 'decrease') {
    reasons.push('Recent skipped sessions suggest an easier ramp-back is smarter.');
  }

  if (trainedYesterday) {
    reasons.push('Yesterday was a training day, so volume stays a bit more controlled.');
  }

  if (requestedFocus && requestedFocus !== 'none' && requestedFocus !== resolvedFocus) {
    reasons.push(`The requested focus was adjusted to ${resolvedFocus.replace('_', ' ')} to avoid repeating the same stress back to back.`);
  }

  return reasons.join(' ');
}

function analyzeHistory(recentWorkouts) {
  const lastFive = (recentWorkouts || []).slice(0, 5);
  const completedCount = lastFive.filter((workout) => workout.completed).length;
  const skippedCount = lastFive.filter((workout) => workout.skipped).length;
  const lastWorkout = lastFive[0] || null;
  const lastFocus = lastWorkout?.resolved_focus || lastWorkout?.muscle_focus || 'none';
  const recentExerciseNames = new Set(lastWorkout?.exercises?.map((exercise) => exercise.name) || []);

  let direction = 'steady';
  let message = 'Recent training is balanced, so today stays steady.';

  if (completedCount >= 3) {
    direction = 'increase';
    message = 'Consistency has been high, so today gets a small progression.';
  } else if (skippedCount >= 2) {
    direction = 'decrease';
    message = 'Recovery and momentum come first, so today is intentionally lighter.';
  }

  return {
    direction,
    message,
    lastFocus,
    recentExerciseNames,
  };
}

function resolveFocus(input, history) {
  const requestedFocus = input.muscle_focus || 'none';

  if (requestedFocus !== 'none') {
    if (input.trained_yesterday && requestedFocus === history.lastFocus) {
      return COMPANION_FOCUS[requestedFocus] || 'full_body';
    }

    return requestedFocus;
  }

  if (input.goal === 'endurance') {
    return 'full_body';
  }

  if (input.goal === 'fat_loss') {
    return history.lastFocus === 'legs' ? 'upper' : 'full_body';
  }

  return history.lastFocus && history.lastFocus !== 'none'
    ? COMPANION_FOCUS[history.lastFocus] || 'full_body'
    : 'full_body';
}

function normalizeFocus(focus) {
  return focus === 'upper' ? 'upper' : focus;
}

function computeIntensity(input, history) {
  const experienceBase = {
    beginner: 0,
    intermediate: 1,
    advanced: 2,
  }[input.experience];

  let score = experienceBase;

  if (input.goal === 'fat_loss' && input.duration_minutes >= 30) {
    score += 1;
  }

  if (history.direction === 'increase') {
    score += 1;
  }

  if (history.direction === 'decrease') {
    score -= 1;
  }

  if (input.trained_yesterday) {
    score -= 1;
  }

  score = clamp(score, 0, 3);

  return ['low', 'moderate', 'high', 'extreme'][score];
}

function buildWarmup(focus, duration) {
  const warmupKey = FOCUS_LABELS[focus] || 'full';
  const pool = WARMUP_BLOCKS[warmupKey];
  const targetCount = duration <= 20 ? 2 : 3;
  return pool.slice(0, targetCount);
}

function buildExerciseSlots(resolvedFocus, duration) {
  const normalizedFocus = normalizeFocus(resolvedFocus);
  const slotCount = EXERCISE_COUNT_BY_DURATION[duration] || 5;
  const pattern = SLOT_PATTERNS[normalizedFocus] || SLOT_PATTERNS.full_body;
  return pattern.slice(0, slotCount);
}

function buildRepScheme(goal, intensity, exerciseName) {
  if (goal === 'endurance') {
    return exerciseName === 'Plank Shoulder Tap' || exerciseName === 'Hollow Hold' ? '30-40 sec' : '12-18';
  }

  if (goal === 'fat_loss') {
    return '10-14';
  }

  if (intensity === 'high' || intensity === 'extreme') {
    return '6-10';
  }

  return '8-12';
}

function pickExercises(input, slots, intensity, history) {
  const picked = [];
  const recentlyUsed = history.recentExerciseNames;

  for (const slot of slots) {
    const matching = shuffle(EXERCISE_CATALOG).filter((exercise) => {
      const supportsEquipment = exercise.equipment.includes(input.equipment);
      const matchesFocus = exercise.focus.includes(slot) || (slot === 'full_body' && exercise.focus.includes('full_body'));
      const notAlreadyPicked = !picked.some((pickedExercise) => pickedExercise.name === exercise.name);
      const notRecent = !recentlyUsed.has(exercise.name);
      return supportsEquipment && matchesFocus && notAlreadyPicked && notRecent;
    });

    const fallback = shuffle(EXERCISE_CATALOG).filter((exercise) => {
      const supportsEquipment = exercise.equipment.includes(input.equipment);
      const matchesFocus = exercise.focus.includes(slot) || (slot === 'full_body' && exercise.focus.includes('full_body'));
      const notAlreadyPicked = !picked.some((pickedExercise) => pickedExercise.name === exercise.name);
      return supportsEquipment && matchesFocus && notAlreadyPicked;
    });

    const selected = matching[0] || fallback[0];

    if (!selected) {
      continue;
    }

    picked.push({
      name: selected.name,
      sets: SETS_BY_INTENSITY[intensity],
      reps: buildRepScheme(input.goal, intensity, selected.name),
      rest_seconds: REST_BY_INTENSITY[intensity],
      notes: selected.notes,
    });
  }

  return picked;
}

function buildFinisher(goal, duration) {
  if (duration <= 20) {
    return null;
  }

  return sampleOne(FINISHERS[goal]);
}

function estimateDuration(input, exercises, warmup, finisher) {
  const warmupMinutes = warmup.reduce((total, item) => total + item.duration_minutes, 0);
  const finisherMinutes = finisher?.duration_minutes || 0;
  const exerciseMinutes = exercises.reduce((total, exercise) => {
    const workBlock = exercise.sets * 1.5;
    const restBlock = ((exercise.sets - 1) * exercise.rest_seconds) / 60;
    return total + workBlock + restBlock;
  }, 0);

  return Math.round(Math.min(input.duration_minutes, warmupMinutes + finisherMinutes + exerciseMinutes));
}

function buildTemplateWorkout(input) {
  const history = analyzeHistory(input.recent_workouts);
  const resolvedFocus = resolveFocus(input, history);
  const intensity = computeIntensity(input, history);
  const warmup = buildWarmup(resolvedFocus, input.duration_minutes);
  const slots = buildExerciseSlots(resolvedFocus, input.duration_minutes);
  const exercises = pickExercises(input, slots, intensity, history);
  const finisher = buildFinisher(input.goal, input.duration_minutes);

  return {
    goal: input.goal,
    duration_minutes: input.duration_minutes,
    experience: input.experience,
    equipment: input.equipment,
    muscle_focus: input.muscle_focus || 'none',
    resolved_focus: resolvedFocus,
    trained_yesterday: input.trained_yesterday,
    warmup,
    exercises,
    finisher,
    estimated_duration: estimateDuration(input, exercises, warmup, finisher),
    intensity_level: intensity,
    adaptation: {
      direction: history.direction,
      message: history.message,
      reason: formatReason(history.direction, input.trained_yesterday, input.muscle_focus, resolvedFocus),
    },
    completed: false,
    skipped: false,
    source: 'template',
  };
}

function responseTextToJson(response) {
  if (typeof response.output_text === 'string' && response.output_text.trim()) {
    return JSON.parse(response.output_text);
  }

  const text = response.output
    ?.flatMap((item) => item.content || [])
    ?.filter((item) => item.type === 'output_text' || item.type === 'text')
    ?.map((item) => item.text || '')
    ?.join('');

  if (!text) {
    throw new Error('OpenAI returned no text output.');
  }

  return JSON.parse(text);
}

async function generateWithOpenAI(input, baseline) {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  const schema = {
    type: 'object',
    additionalProperties: false,
    properties: {
      warmup: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            name: { type: 'string' },
            duration_minutes: { type: 'number' },
            notes: { type: 'string' },
          },
          required: ['name', 'duration_minutes', 'notes'],
        },
      },
      exercises: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            name: { type: 'string' },
            sets: { type: 'number' },
            reps: { type: 'string' },
            rest_seconds: { type: 'number' },
            notes: { type: 'string' },
          },
          required: ['name', 'sets', 'reps', 'rest_seconds', 'notes'],
        },
      },
      finisher: {
        anyOf: [
          {
            type: 'object',
            additionalProperties: false,
            properties: {
              name: { type: 'string' },
              description: { type: 'string' },
              duration_minutes: { type: 'number' },
            },
            required: ['name', 'description', 'duration_minutes'],
          },
          { type: 'null' },
        ],
      },
      estimated_duration: { type: 'number' },
      intensity_level: { type: 'string', enum: ['low', 'moderate', 'high', 'extreme'] },
    },
    required: ['warmup', 'exercises', 'finisher', 'estimated_duration', 'intensity_level'],
  };

  const prompt = `
You are coaching a busy gym user. Return only valid JSON.

User request:
- Goal: ${input.goal}
- Available time: ${input.duration_minutes}
- Experience: ${input.experience}
- Equipment: ${input.equipment}
- Requested muscle focus: ${input.muscle_focus}
- Trained yesterday: ${input.trained_yesterday}

Use this baseline plan as guidance, but improve it if needed while staying realistic and concise:
${JSON.stringify(baseline, null, 2)}

Rules:
- Keep the workout executable inside the available time.
- Adapt intensity to experience level.
- If trained yesterday, control volume and avoid repeating the same stress.
- Avoid repeating the exact same routine as the most recent session.
- Keep instructions simple and practical.
`;

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      input: [
        {
          role: 'system',
          content: 'You are a practical strength and conditioning coach.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      text: {
        format: {
          type: 'json_schema',
          name: 'fitflow_workout',
          schema,
          strict: true,
        },
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI request failed: ${errorText}`);
  }

  const payload = await response.json();
  const structured = responseTextToJson(payload);

  return {
    ...baseline,
    ...structured,
    source: 'openai',
  };
}

export async function generateWorkoutPlan(input) {
  const baseline = buildTemplateWorkout(input);

  try {
    const aiWorkout = await generateWithOpenAI(input, baseline);
    return aiWorkout || baseline;
  } catch (error) {
    console.warn('OpenAI generation failed, using local generator instead.', error);
    return baseline;
  }
}
