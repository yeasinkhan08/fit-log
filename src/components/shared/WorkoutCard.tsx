import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { TWorkout } from "@/types/workouts.type";

interface WorkoutCardProps {
  workout: TWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
      {/* Image */}
      <div className="relative h-112.5 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-[4px] bg-[#C2F800] px-2 py-1 text-[10px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="font-oswald text-[22px] font-bold uppercase text-white">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-[12px] text-[#9CA3AF]">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 border-t border-[#222630] pt-4">
          {/* Duration */}
          <div className="flex items-center gap-2">
            <Clock3 size={15} className="text-[#C2F800]" />

            <div>
              <p className="text-[9px] uppercase text-[#6B7280]">Duration</p>

              <p className="text-[12px] text-white">{workout.duration} min</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star size={15} className="text-[#C2F800]" />

            <div>
              <p className="text-[9px] uppercase text-[#6B7280]">Rating</p>

              <p className="text-[12px] text-white">{workout.rating}</p>
            </div>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <Flame size={15} className="text-[#C2F800]" />

            <div>
              <p className="text-[9px] uppercase text-[#6B7280]">Calories</p>

              <p className="text-[12px] text-white">
                {workout.caloriesBurned} kcal
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkoutCard;
