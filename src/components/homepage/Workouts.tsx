import { TWorkout } from "@/types/workouts.type";
import React from "react";
import WorkoutCard from "../shared/WorkoutCard";

const getWorkouts = async (): Promise<TWorkout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <div className="container mx-auto">
      <div className="pt-6 w-308 h-auto">
        <h1 className="font-oswald text-[30px] font-bold uppercase text-[#ffffffFF]">
          The library
        </h1>
        <p className="mt-1 text-[14px] text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="mt-8 mb-10 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workoutsData.map((workout: TWorkout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Workouts;
