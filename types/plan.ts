// Result codes returned by the PlanContext actions, so callers can
// show the right toast message for each outcome.
export type AddToPlanResult = "added" | "duplicate" | "full";
export type SaveForLaterResult = "added" | "duplicate";
export type MarkAsDoneResult = "marked" | "already-done";

export interface PlanContextValue {
  planIds: number[];
  savedIds: number[];
  doneIds: number[];
  addToPlan: (id: number) => AddToPlanResult;
  saveForLater: (id: number) => SaveForLaterResult;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => MarkAsDoneResult;
  maxPlan: number;
}
