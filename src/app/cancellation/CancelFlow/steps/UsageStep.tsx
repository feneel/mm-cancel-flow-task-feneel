"use client";

import { SectionTitle, PillFieldset, Shell } from "../ui/Atoms";

export default function UsageStep({
  heroDesktop,
  mobileHeroOn,
  appliedVia, setAppliedVia,
  emailedDirect, setEmailedDirect,
  interviewedWith, setInterviewedWith,
  onContinue,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  appliedVia: string | null;
  setAppliedVia: (v: string) => void;
  emailedDirect: string | null;
  setEmailedDirect: (v: string) => void;
  interviewedWith: string | null;
  setInterviewedWith: (v: string) => void;
  onContinue: () => void;
}) {
  const canContinue = !!appliedVia && !!emailedDirect && !!interviewedWith;

  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
      <SectionTitle>Help us understand how you were using Migrate Mate.*</SectionTitle>

      <div className="mt-4 grid gap-5">
        <PillFieldset
          label="How many roles did you apply for through Migrate Mate?*"
          options={["0", "1 - 5", "6 - 20", "20+"]}
          value={appliedVia}
          onChange={setAppliedVia}
        />
        <PillFieldset
          label="How many companies did you email directly?*"
          options={["0", "1 - 5", "6 - 20", "20+"]}
          value={emailedDirect}
          onChange={setEmailedDirect}
        />
        <PillFieldset
          label="How many different companies did you interview with?*"
          options={["0", "1 - 2", "3 - 5", "5+"]}
          value={interviewedWith}
          onChange={setInterviewedWith}
        />
      </div>

      <div className="mt-6 flex items-center justify-end">
        <button
          onClick={onContinue}
          disabled={!canContinue}
          className="rounded-lg bg-[#8952fc] hover:bg-[#7b40fc] text-white px-5 py-3 disabled:bg-gray-100 disabled:text-gray-400"
        >
          Continue
        </button>
      </div>
    </Shell>
  );
}
