import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import WorkoutForm from '../components/workout/WorkoutForm';
import WorkoutDisplay from '../components/workout/WorkoutDisplay';
import AdaptationBanner from '../components/workout/AdaptationBanner';
import { generateWorkout } from '@/lib/workout-api';
import { listStoredWorkouts, saveWorkout, updateStoredWorkout } from '@/lib/workout-storage';

export default function Home() {
  const [generatedWorkout, setGeneratedWorkout] = useState(null);
  const queryClient = useQueryClient();

  const { data: recentWorkouts = [] } = useQuery({
    queryKey: ['workouts-recent'],
    queryFn: () => listStoredWorkouts(5),
  });

  const generateMutation = useMutation({
    mutationFn: async (formData) => {
      const result = await generateWorkout({
        ...formData,
        recent_workouts: recentWorkouts,
      });

      return saveWorkout(result);
    },
    onSuccess: (data) => {
      setGeneratedWorkout(data);
      queryClient.invalidateQueries({ queryKey: ['workouts-recent'] });
      queryClient.invalidateQueries({ queryKey: ['workouts-history'] });
    },
  });

  const completeMutation = useMutation({
    mutationFn: async () => {
      if (!generatedWorkout?.id) {
        return null;
      }

      return updateStoredWorkout(generatedWorkout.id, {
        completed: true,
        skipped: false,
      });
    },
    onSuccess: () => {
      setGeneratedWorkout(null);
      queryClient.invalidateQueries({ queryKey: ['workouts-recent'] });
      queryClient.invalidateQueries({ queryKey: ['workouts-history'] });
    },
  });

  const handleNewWorkout = () => {
    if (generatedWorkout?.id) {
      updateStoredWorkout(generatedWorkout.id, { skipped: true });
      queryClient.invalidateQueries({ queryKey: ['workouts-recent'] });
      queryClient.invalidateQueries({ queryKey: ['workouts-history'] });
    }

    setGeneratedWorkout(null);
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {!generatedWorkout ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">Ready to train?</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us what you need, and we will build your workout.
              </p>
            </div>

            <AdaptationBanner recentWorkouts={recentWorkouts} />

            <div className="glass-panel rounded-[28px] p-5 sm:p-6">
              <WorkoutForm
                onSubmit={(data) => generateMutation.mutate(data)}
                isLoading={generateMutation.isPending}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="workout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-panel rounded-[28px] p-5 sm:p-6"
          >
            <WorkoutDisplay
              workout={generatedWorkout}
              onComplete={() => completeMutation.mutate()}
              onNewWorkout={handleNewWorkout}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
