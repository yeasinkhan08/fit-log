import { TWorkout } from "@/types/workouts.type";
import { completeSoftNavigation } from "next/dist/client/components/segment-cache/navigation";
import React from "react";

const getWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();
  console.log(workoutsData);

  return (
    <div>
      {workoutsData.map((workout: TWorkout) => {
        return <div key={workout.id}>{workout.name}</div>;
      })}
    </div>
  );
};

export default Workouts;
