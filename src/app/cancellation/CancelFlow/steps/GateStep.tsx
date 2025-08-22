"use client";

import { Shell } from "../ui/Atoms";
import type { Step } from "../constants";

export default function GateStep({
  heroDesktop,
  mobileHeroOn,
  setBranch,
  setStep,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  setBranch: (b: "FOUND_JOB" | "STILL_LOOKING") => void;
  setStep: (s: Step) => void;
}) {
  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn} mobileHeroTop>
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
          Hey mate,<br />Quick one before you go.
        </h2>
        <p className="text-2xl sm:text-3xl italic font-black text-gray-900">
          Have you found a job yet?
        </p>
        <p className="pt-2 text-gray-700">
          Whatever your answer, we just want to help you take the next step.
          With visa support, or by hearing how we can do better.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        <button
          onClick={() => {
            setBranch("FOUND_JOB");
            setStep("CONGRATS");
          }}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 text-left hover:bg-gray-50"
        >
          Yes, I’ve found a job
        </button>
        <button
          onClick={() => {
            setBranch("STILL_LOOKING");
            setStep("OFFER50");
          }}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 text-left hover:bg-gray-50"
        >
          Not yet — I’m still looking
        </button>
      </div>
    </Shell>
  );
}
