"use client";

import { Shell } from "../ui/Atoms";

export default function DoneContinuedStep({
  heroDesktop,
  mobileHeroOn,
  halfPrice,
  onFinish,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  halfPrice: string;
  onFinish: () => void;
}) {
  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
      <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
        Great choice, mate!
      </h3>
      <p className="mt-3 text-gray-800">
        From your next cycle, your price will be ${halfPrice}/mo.
      </p>
      <div className="mt-6 flex justify-end">
        <button
          onClick={onFinish}
          className="rounded-lg bg-[#8952fc] hover:bg-[#7b40fc] text-white px-5 py-3"
        >
          Land your dream role
        </button>
      </div>
    </Shell>
  );
}
