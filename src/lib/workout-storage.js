const STORAGE_KEY = 'fitflow-workouts-v1';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function readStore() {
  if (!canUseStorage()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStore(workouts) {
  if (!canUseStorage()) {
    return workouts;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
  return workouts;
}

function createId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `workout-${Date.now()}`;
}

export function listStoredWorkouts(limit = 5) {
  return readStore()
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
}

export function getStoredWorkout(id) {
  return readStore().find((workout) => workout.id === id) || null;
}

export function saveWorkout(workout) {
  const storedWorkout = {
    ...workout,
    id: workout.id || createId(),
    created_at: workout.created_at || new Date().toISOString(),
    completed: Boolean(workout.completed),
    skipped: Boolean(workout.skipped),
  };

  const next = [storedWorkout, ...readStore()]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  writeStore(next);
  return storedWorkout;
}

export function updateStoredWorkout(id, patch) {
  let updatedWorkout = null;

  const next = readStore().map((workout) => {
    if (workout.id !== id) {
      return workout;
    }

    updatedWorkout = { ...workout, ...patch };
    return updatedWorkout;
  });

  writeStore(next);
  return updatedWorkout;
}
