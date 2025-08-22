"use client";

import Image from "next/image";
import { Shell } from "../ui/Atoms";
import type { CompletionVariant } from "../constants";

export default function DoneCancelledStep({
  heroDesktop,
  mobileHeroOn,
  variant,
  onFinish,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  variant: CompletionVariant; // "MIHAILO" | "GENERIC" | "SORRY"
  onFinish: () => void;
}) {
  if (variant === "MIHAILO") {
    // NOTE: mobileHeroOn will be false per rules (no mobile hero for this variant)
    return (
      <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
        <h3 className="text-4xl font-extrabold leading-tight text-gray-900">
          Your cancellation’s all sorted, mate,<br />no more charges.
        </h3>

        <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <div className="flex items-start gap-3">
            <Image
              src="/mihailo-profile.jpg"
              alt="Mihailo Bozic"
              width={44}
              height={44}
              className="rounded-full object-cover"
              priority
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900">Mihailo Bozic</p>
              <p className="text-sm text-gray-700">&lt;mihailo@migratemate.co&gt;</p>
            </div>
          </div>
          <div className="mt-3 space-y-3 text-gray-800">
            <p className="font-medium">
              I’ll be reaching out soon to help with the visa side of things.
            </p>
            <p className="text-sm">
              We’ve got your back — whether it’s questions, paperwork, or next steps.
            </p>
            <p className="text-sm">
              Keep an eye on your inbox; I’ll be in touch <span className="underline">shortly</span>.
            </p>
          </div>
        </div>

        <button
          onClick={onFinish}
          className="mt-6 w-full rounded-lg bg-[#8952fc] hover:bg-[#7b40fc] text-white py-3"
        >
          Finish
        </button>
      </Shell>
    );
  }

  if (variant === "GENERIC") {
    return (
      <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
        <h3 className="text-4xl font-extrabold leading-tight text-gray-900">
          All done — your cancellation’s been processed.
        </h3>
        <p className="mt-3 text-gray-800">
          You’ll still have full access until your end date. No further charges after that.
        </p>
        <button
          onClick={onFinish}
          className="mt-6 w-full rounded-lg bg-[#8952fc] hover:bg-[#7b40fc] text-white py-3"
        >
          Back to Jobs
        </button>
      </Shell>
    );
  }

  // SORRY
  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
      <h3 className="text-4xl font-extrabold leading-tight text-gray-900">
        Sorry to see you go, mate.
      </h3>
      <p className="mt-3 text-gray-800">
        Thanks for being with us — you’re always welcome back.
      </p>
      <p className="mt-2 text-gray-800">
        Your subscription is set to end on XX date. You’ll still have full access until then.
      </p>
      <button
        onClick={onFinish}
        className="mt-6 w-full rounded-lg bg-[#8952fc] hover:bg-[#7b40fc] text-white py-4 text-base font-semibold"
      >
        Back to Jobs
      </button>
    </Shell>
  );
}
