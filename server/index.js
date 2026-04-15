import express from 'express';
import { z } from 'zod';
import { generateWorkoutPlan } from './workout-generator.js';

const app = express();
const port = Number(process.env.PORT || 8787);

app.use(express.json());

const requestSchema = z.object({
  goal: z.enum(['muscle_gain', 'fat_loss', 'endurance']),
  duration_minutes: z.number().min(15).max(90),
  experience: z.enum(['beginner', 'intermediate', 'advanced']),
  equipment: z.enum(['gym', 'home', 'no_equipment']),
  muscle_focus: z.string().optional().default('none'),
  trained_yesterday: z.boolean().default(false),
  recent_workouts: z.array(z.any()).max(5).optional().default([]),
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/workouts/generate', async (req, res) => {
  const parsed = requestSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid workout request.',
      details: parsed.error.flatten(),
    });
  }

  try {
    const workout = await generateWorkoutPlan(parsed.data);
    return res.json(workout);
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to generate workout.',
    });
  }
});

app.listen(port, () => {
  console.log(`FitFlow API running on http://localhost:${port}`);
});
