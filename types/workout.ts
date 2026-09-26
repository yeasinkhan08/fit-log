// Shape of a single workout, as returned by the FitLog API
// (see lib/api.ts). Kept in one place so every component that
// touches workout data shares the same type.
export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

// Fields MyPlanView's Sort By dropdown can sort on — kept as a
// type so SortDropdown and MyPlanView agree on the valid values.
export type SortableWorkoutField = "duration" | "caloriesBurned" | "rating";
