# FitFlow

FitFlow is a lightweight smart workout generator for busy people who want a practical training plan fast.

## Stack

- Frontend: React + Vite + React Query + Tailwind
- Backend: Node.js + Express
- AI: Optional OpenAI integration with a local fallback generator
- Storage: `localStorage` for the last 5 workouts

## Run locally

Prerequisite: Node.js 18+ and npm.

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```bash
PORT=8787
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
VITE_API_BASE_URL=
```

3. Start frontend and backend together:

```bash
npm run dev
```

4. Open:

```bash
http://localhost:5173
```

## Notes

- The app works without `OPENAI_API_KEY`.
- If no key is provided, FitFlow uses the local workout engine and still generates valid routines.
- Workout history is stored in the browser and limited to the last 5 sessions.

## Folder structure

```text
FitFlow/
  server/
    index.js
    workout-generator.js
  src/
    components/
    lib/
      workout-api.js
      workout-storage.js
      workout-utils.js
    pages/
  public/
    fitflow-mark.svg
```

## API

### POST `/api/workouts/generate`

Request:

```json
{
  "goal": "muscle_gain",
  "duration_minutes": 30,
  "experience": "intermediate",
  "equipment": "gym",
  "muscle_focus": "chest",
  "trained_yesterday": false,
  "recent_workouts": [
    {
      "goal": "fat_loss",
      "muscle_focus": "legs",
      "completed": true,
      "skipped": false,
      "exercises": [
        { "name": "Goblet Squat" }
      ]
    }
  ]
}
```

Response:

```json
{
  "goal": "muscle_gain",
  "duration_minutes": 30,
  "experience": "intermediate",
  "equipment": "gym",
  "muscle_focus": "chest",
  "resolved_focus": "chest",
  "trained_yesterday": false,
  "warmup": [
    {
      "name": "Rowing machine",
      "duration_minutes": 2,
      "notes": "Easy pace to raise body temperature."
    }
  ],
  "exercises": [
    {
      "name": "Dumbbell Bench Press",
      "sets": 3,
      "reps": "8-12",
      "rest_seconds": 75,
      "notes": "Stop 1-2 reps before failure."
    }
  ],
  "finisher": {
    "name": "Push-up ladder",
    "description": "Alternate 8 push-ups and 20 seconds of plank for 3 rounds.",
    "duration_minutes": 4
  },
  "estimated_duration": 30,
  "intensity_level": "moderate",
  "adaptation": {
    "direction": "increase",
    "message": "Consistency has been high, so today gets a small progression."
  },
  "source": "template"
}
```

## Production

- Build the frontend with `npm run build`
- Run the backend with `npm run start`

If you want to serve the built frontend from the same Node server later, the current structure is ready for that extension.
