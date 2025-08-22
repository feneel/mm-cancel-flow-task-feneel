"use client";

import { SectionTitle, Shell } from "../ui/Atoms";

export default function WishHelpStep({
  heroDesktop,
  mobileHeroOn,
  wishText,
  setWishText,
  min25,
  onContinue,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  wishText: string;
  setWishText: (v: string) => void;
  min25: (s: string) => boolean;
  onContinue: () => void;
}) {
  const valid = min25(wishText);

  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
      <SectionTitle>What’s one thing you wish we could’ve helped you with?</SectionTitle>
      <p className="text-gray-700">
        We’re always looking to improve; your thoughts can help others.*
      </p>

      <div className="mt-4 relative">
        <textarea
          rows={6}
          value={wishText}
          onChange={(e) => setWishText(e.target.value)}
          placeholder="Write your feedback…"
          className="w-full rounded-md border border-gray-300 px-3 py-2 pr-24 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring focus:ring-purple-200"
        />
        <span className="pointer-events-none absolute bottom-2 right-3 text-xs text-gray-500">
          Min 25 characters ({wishText.trim().length}/25)
        </span>
      </div>

      {!valid && (
        <p className="mt-1 text-sm text-red-600">
          Please enter at least 25 characters so we can understand your feedback*
        </p>
      )}

      <div className="mt-6 flex justify-end">
        <button
          onClick={onContinue}
          disabled={!valid}
          className="rounded-lg bg-[#8952fc] hover:bg-[#7b40fc] text-white px-5 py-3 disabled:bg-gray-100 disabled:text-gray-400"
        >
          Continue
        </button>
      </div>
    </Shell>
  );
}
