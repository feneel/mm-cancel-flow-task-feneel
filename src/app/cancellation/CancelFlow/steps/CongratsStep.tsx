"use client";

import { Pill, PillFieldset, SectionTitle, Shell, Label } from "../ui/Atoms";

export default function CongratsStep({
  heroDesktop,
  mobileHeroOn,
  foundViaMM, setFoundViaMM,
  appliedVia, setAppliedVia,
  emailedDirect, setEmailedDirect,
  interviewedWith, setInterviewedWith,
  onContinue,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  foundViaMM: "YES" | "NO" | null;
  setFoundViaMM: (v: "YES" | "NO") => void;
  appliedVia: string | null;
  setAppliedVia: (v: string) => void;
  emailedDirect: string | null;
  setEmailedDirect: (v: string) => void;
  interviewedWith: string | null;
  setInterviewedWith: (v: string) => void;
  onContinue: () => void;
}) {
  const canContinue = !!foundViaMM && !!appliedVia && !!emailedDirect && !!interviewedWith;

  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
      <h3 className="text-3xl font-extrabold leading-tight text-gray-900">
        Congrats on the new role! 🎉
      </h3>

      <div className="mt-4 space-y-2">
        <Label>Did you find this job with Migrate Mate?*</Label>
        <div className="grid grid-cols-2 gap-3">
          <Pill label="Yes" active={foundViaMM === "YES"} onClick={() => setFoundViaMM("YES")} />
          <Pill label="No"  active={foundViaMM === "NO"}  onClick={() => setFoundViaMM("NO")} />
        </div>
      </div>

      <div className="mt-5 grid gap-5">
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

      <div className="mt-6 flex justify-end">
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
