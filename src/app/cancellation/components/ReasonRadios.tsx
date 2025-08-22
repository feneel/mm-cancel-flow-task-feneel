"use client";

import React from "react";

/** Source of truth: reason options */
export const REASON_OPTIONS = [
  { id: "too_expensive",        label: "Too expensive" },
  { id: "platform_not_helpful", label: "Platform not helpful" },
  { id: "not_enough_jobs",      label: "Not enough relevant jobs" },
  { id: "decided_not_move",     label: "Decided not to move" },
  { id: "other",                label: "Other" },
] as const;

export type ReasonId = (typeof REASON_OPTIONS)[number]["id"];

type Props = {
  /** selected id; when null we render the full radio list */
  value: ReasonId | null;
  /** setter; pass null to reopen choices (Change) */
  onChange: (id: ReasonId | null) => void;
  /** when true, hide radios once chosen (default true) */
  freezeOnSelect?: boolean;
  name?: string;
  className?: string;
};

export default function ReasonRadios({
  value,
  onChange,
  freezeOnSelect = true,
  name = "cancel-reason",
  className = "",
}: Props) {
  // Show condensed row when selected (radios hidden)
  if (freezeOnSelect && value) {
    const picked = REASON_OPTIONS.find((r) => r.id === value)!;
    return (
      <div
        className={`flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 ${className}`}
        role="group"
        aria-label="Selected reason"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-900" aria-hidden />
          <span className="text-gray-900">{picked.label}</span>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-[#8952fc] hover:underline"
          onClick={() => onChange(null)}
        >
          Change
        </button>
      </div>
    );
  }

  // Full radio list
  return (
    <fieldset className={`space-y-3 ${className}`}>
      {REASON_OPTIONS.map((opt) => (
        <label key={opt.id} className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="radio"
            name={name}
            value={opt.id}
            checked={value === opt.id}
            onChange={() => onChange(opt.id)}
            className="mt-0.5 h-4 w-4 rounded-full border-gray-300 text-[#8952fc] focus:ring-[#8952fc]"
          />
          <span className="text-gray-900">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
