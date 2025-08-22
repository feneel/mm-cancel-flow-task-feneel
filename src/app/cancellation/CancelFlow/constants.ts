"use client";

export type GateChoice = "FOUND_JOB" | "STILL_LOOKING" | null;
export type Step =
  | "GATE"
  | "OFFER50"
  | "USAGE"
  | "REASON"
  | "CONGRATS"
  | "WISH_HELP"
  | "VISA"
  | "DONE_CANCELLED"
  | "DONE_CONTINUED";

export type CompletionVariant = "MIHAILO" | "GENERIC" | "SORRY";

/** Steps that show the hero image on desktop (broad, matches design) */
export const HERO_DESKTOP: Step[] = [
  "GATE",
  "OFFER50",
  "USAGE",
  "REASON",
  "CONGRATS",
  "WISH_HELP",
  "VISA",
  "DONE_CANCELLED",
  "DONE_CONTINUED",
];

/** Compute the completion variant from current branch answers */
export function getCompletionVariant(
  branch: GateChoice,
  hasLawyer: "YES" | "NO" | null
): CompletionVariant {
  if (branch === "FOUND_JOB") return hasLawyer === "NO" ? "MIHAILO" : "GENERIC";
  if (branch === "STILL_LOOKING") return "SORRY";
  return "GENERIC";
}

/** Mobile hero shows ONLY on these screens */
export function getMobileHeroOn(step: Step, variant: CompletionVariant) {
  return (
    step === "GATE" ||
    step === "DONE_CONTINUED" ||
    (step === "DONE_CANCELLED" && (variant === "GENERIC" || variant === "SORRY"))
  );
}

/** Only the GATE screen shows the mobile hero ON TOP */
export function getMobileHeroTop(step: Step) {
  return step === "GATE";
}

/** Header title */
export function getHeaderTitle(step: Step) {
  return step === "DONE_CANCELLED" ? "Subscription Cancelled" : "Subscription Cancellation";
}

/** Step index (for the “Step 1 of 3” indicator) */
export function getStepIndex(step: Step, branch: GateChoice) {
  if (branch === "STILL_LOOKING") {
    if (step === "OFFER50") return 1;
    if (step === "USAGE") return 2;
    if (step === "REASON") return 3;
    return 0;
  }
  if (branch === "FOUND_JOB") {
    if (step === "CONGRATS") return 1;
    if (step === "WISH_HELP") return 2;
    if (step === "VISA") return 3;
    return 0;
  }
  return 0;
}
