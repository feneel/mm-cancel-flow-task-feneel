"use client";

import { Label, RadioLine, SectionTitle, Shell } from "../ui/Atoms";

export default function VisaStep({
  heroDesktop,
  mobileHeroOn,
  hasLawyer, setHasLawyer,
  visaType, setVisaType,
  onCompleteCancel,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  hasLawyer: "YES" | "NO" | null;
  setHasLawyer: (v: "YES" | "NO") => void;
  visaType: string;
  setVisaType: (v: string) => void;
  onCompleteCancel: () => void;
}) {
  const canComplete = hasLawyer !== null && visaType.trim() !== "";

  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
      <SectionTitle>We helped you land the job, now let’s help you secure your visa.</SectionTitle>
      <Label>Is your company providing an immigration lawyer to help with your visa?*</Label>

      <div className="mt-3 space-y-3">
        {(hasLawyer === null || hasLawyer === "YES") && (
          <RadioLine
            name="hasLawyer"
            label="Yes"
            checked={hasLawyer === "YES"}
            onChange={() => setHasLawyer("YES")}
          />
        )}
        {(hasLawyer === null || hasLawyer === "NO") && (
          <RadioLine
            name="hasLawyer"
            label="No"
            checked={hasLawyer === "NO"}
            onChange={() => setHasLawyer("NO")}
          />
        )}
      </div>

      {hasLawyer !== null && (
        <>
          {hasLawyer === "NO" && (
            <p className="mt-3 text-sm text-gray-700">
              We can connect you with one of our trusted partners.
            </p>
          )}
          <div className="mt-4">
            <Label>Which visa would you like to apply for?*</Label>
            <input
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              placeholder="Enter visa type…"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>
        </>
      )}

      <div className="mt-6 flex justify-end">
        <button
          onClick={onCompleteCancel}
          disabled={!canComplete}
          className="rounded-lg bg-gray-100 text-gray-500 px-5 py-3 disabled:cursor-not-allowed"
        >
          Complete cancellation
        </button>
      </div>
    </Shell>
  );
}
