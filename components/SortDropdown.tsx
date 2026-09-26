"use client";

import { ChevronDown } from "lucide-react";
import type { SortableWorkoutField } from "@/types/workout";

const options: { value: SortableWorkoutField; label: string }[] = [
  { value: "duration", label: "Duration" },
  { value: "caloriesBurned", label: "Calories" },
  { value: "rating", label: "Rating" },
];

interface SortDropdownProps {
  sortBy: SortableWorkoutField;
  onChange: (value: SortableWorkoutField) => void;
}

export default function SortDropdown({ sortBy, onChange }: SortDropdownProps) {
  return (
    <label className="text-muted ml-auto flex items-center gap-2 text-xs sm:text-sm">
      Sort By
      <span className="relative inline-flex items-center">
        <select
          value={sortBy}
          onChange={(e) => onChange(e.target.value as SortableWorkoutField)}
          className="border-muted appearance-none rounded-md border bg-transparent py-1.5 pr-7 pl-3 text-xs font-semibold text-white sm:text-sm"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-card text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-2 text-white"
        />
      </span>
    </label>
  );
}
