"use client";

import { Shell } from "../ui/Atoms";

export default function OfferStep({
  heroDesktop,
  mobileHeroOn,
  halfPrice,
  monthlyPrice,
  acceptOffer,
  goNext,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  halfPrice: string;
  monthlyPrice: number;
  acceptOffer: () => void;
  goNext: () => void;
}) {
  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
      <h3 className="text-3xl font-extrabold leading-tight text-gray-900">
        We built this to help you land the job, this makes it a little easier.
      </h3>
      <p className="mt-2 text-gray-700">We’ve been there and we’re here to help you.</p>

      <div className="mt-5 rounded-xl border border-[#B9A7FF] bg-[#EFE9FF] p-4 sm:p-5">
        <p className="text-xl sm:text-2xl font-bold text-gray-900">
          Here’s <span className="font-extrabold">50% off</span> until you find a job.
        </p>
        <p className="mt-2 text-[#6B5AE8] text-lg font-bold">
          ${halfPrice}/month{" "}
          <span className="ml-2 align-middle text-gray-500 line-through">
            ${monthlyPrice}/month
          </span>
        </p>
        <button
          onClick={acceptOffer}
          className="mt-4 w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3"
        >
          Get 50% off
        </button>
        <p className="mt-2 text-center text-xs text-gray-600">
          You won’t be charged until your next billing date.
        </p>
      </div>

      <button
        onClick={goNext}
        className="mt-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 hover:bg-gray-50"
      >
        No thanks
      </button>
    </Shell>
  );
}
