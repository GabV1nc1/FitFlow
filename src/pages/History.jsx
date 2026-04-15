import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { History as HistoryIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import WorkoutHistoryCard from '../components/workout/WorkoutHistoryCard';
import { listStoredWorkouts } from '@/lib/workout-storage';

export default function History() {
  const { data: workouts = [], isLoading } = useQuery({
    queryKey: ['workouts-history'],
    queryFn: () => listStoredWorkouts(5),
  });

  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Workout History</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your last 5 training sessions
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-20 animate-pulse rounded-xl border border-border bg-card" />
          ))}
        </div>
      ) : workouts.length === 0 ? (
        <div className="glass-panel rounded-[28px] py-16 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
            <HistoryIcon className="h-7 w-7 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">No workouts yet</p>
          <p className="mt-1 text-xs text-muted-foreground/60">Generate your first workout to get started</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2"
        >
          {workouts.map((workout) => (
            <WorkoutHistoryCard key={workout.id} workout={workout} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
