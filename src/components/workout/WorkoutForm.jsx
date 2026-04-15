import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Zap, Target, Clock, BarChart3, Wrench, Activity, Flame, Dumbbell, TimerReset } from 'lucide-react';

const GOALS = [
  { value: 'muscle_gain', label: 'Muscle Gain', icon: Dumbbell },
  { value: 'fat_loss', label: 'Fat Loss', icon: Flame },
  { value: 'endurance', label: 'Endurance', icon: TimerReset },
];

const DURATIONS = [
  { value: 20, label: '20 min' },
  { value: 30, label: '30 min' },
  { value: 45, label: '45 min' },
  { value: 60, label: '60 min' },
];

const LEVELS = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const EQUIPMENT = [
  { value: 'gym', label: 'Full Gym' },
  { value: 'home', label: 'Home Setup' },
  { value: 'no_equipment', label: 'No Equipment' },
];

const MUSCLE_GROUPS = [
  { value: 'none', label: 'No preference' },
  { value: 'chest', label: 'Chest' },
  { value: 'back', label: 'Back' },
  { value: 'legs', label: 'Legs' },
  { value: 'shoulders', label: 'Shoulders' },
  { value: 'arms', label: 'Arms' },
  { value: 'core', label: 'Core' },
  { value: 'full_body', label: 'Full Body' },
];

export default function WorkoutForm({ onSubmit, isLoading }) {
  const [form, setForm] = useState({
    goal: 'muscle_gain',
    duration_minutes: 30,
    experience: 'intermediate',
    equipment: 'gym',
    muscle_focus: 'none',
    trained_yesterday: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2.5">
        <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Target className="h-3.5 w-3.5" /> Goal
        </Label>
        <div className="grid grid-cols-3 gap-2">
          {GOALS.map((goal) => (
            <button
              key={goal.value}
              type="button"
              onClick={() => setForm({ ...form, goal: goal.value })}
              className={`rounded-xl border p-3 text-center transition-all ${
                form.goal === goal.value
                  ? 'border-primary bg-primary/10 text-primary shadow-[0_0_0_1px_rgba(34,197,94,0.2)]'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/30'
              }`}
            >
              <div className="mb-2 flex justify-center">
                <goal.icon className="h-5 w-5" />
              </div>
              <div className="text-xs font-medium">{goal.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> Available Time
        </Label>
        <div className="grid grid-cols-4 gap-2">
          {DURATIONS.map((duration) => (
            <button
              key={duration.value}
              type="button"
              onClick={() => setForm({ ...form, duration_minutes: duration.value })}
              className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                form.duration_minutes === duration.value
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/30'
              }`}
            >
              {duration.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2.5">
          <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <BarChart3 className="h-3.5 w-3.5" /> Level
          </Label>
          <Select value={form.experience} onValueChange={(value) => setForm({ ...form, experience: value })}>
            <SelectTrigger className="border-border bg-card">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LEVELS.map((level) => (
                <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2.5">
          <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Wrench className="h-3.5 w-3.5" /> Equipment
          </Label>
          <Select value={form.equipment} onValueChange={(value) => setForm({ ...form, equipment: value })}>
            <SelectTrigger className="border-border bg-card">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {EQUIPMENT.map((equipment) => (
                <SelectItem key={equipment.value} value={equipment.value}>{equipment.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2.5">
        <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Activity className="h-3.5 w-3.5" /> Muscle Focus (optional)
        </Label>
        <Select value={form.muscle_focus} onValueChange={(value) => setForm({ ...form, muscle_focus: value })}>
          <SelectTrigger className="border-border bg-card">
            <SelectValue placeholder="No preference" />
          </SelectTrigger>
          <SelectContent>
            {MUSCLE_GROUPS.map((muscle) => (
              <SelectItem key={muscle.value} value={muscle.value}>{muscle.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
        <div>
          <p className="text-sm font-medium text-foreground">Trained yesterday?</p>
          <p className="mt-0.5 text-xs text-muted-foreground">We will adjust intensity accordingly</p>
        </div>
        <Switch
          checked={form.trained_yesterday}
          onCheckedChange={(value) => setForm({ ...form, trained_yesterday: value })}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-20px_rgba(34,197,94,0.8)] hover:bg-primary/90"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
            Generating...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Generate Workout
          </div>
        )}
      </Button>
    </form>
  );
}
