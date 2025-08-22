"use client";

import { Label, SectionTitle, Shell } from "../ui/Atoms";
import ReasonRadios, { ReasonId } from "../../components/ReasonRadios";

export default function ReasonStep({
  heroDesktop,
  mobileHeroOn,
  reason, setReason,
  maxPay, setMaxPay,
  reasonText, setReasonText,
  halfPrice, monthlyPrice,
  onAcceptOffer,
  onCompleteCancel,
  min25,
}: {
  heroDesktop: boolean;
  mobileHeroOn: boolean;
  reason: ReasonId | null;
  setReason: (id: ReasonId | null) => void;
  maxPay: string;
  setMaxPay: (v: string) => void;
  reasonText: string;
  setReasonText: (v: string) => void;
  halfPrice: string;
  monthlyPrice: number;
  onAcceptOffer: () => void;
  onCompleteCancel: () => void;
  min25: (s: string) => boolean;
}) {
  const canComplete =
    !!reason && (reason === "too_expensive" ? maxPay.trim() !== "" : min25(reasonText));

  return (
    <Shell showHeroDesktop={heroDesktop} showHeroMobile={mobileHeroOn}>
      <SectionTitle>What’s the main reason?</SectionTitle>
      <p className="text-gray-700">Please take a minute to let us know why:</p>

      <div className="mt-4">
        <ReasonRadios value={reason} onChange={setReason} />
      </div>

      {reason === "too_expensive" && (
        <div className="mt-4">
          <Label>What would be the maximum you would be willing to pay?*</Label>
          <div className="flex items-center gap-2">
            <span className="text-gray-900">$</span>
            <input
              value={maxPay}
              onChange={(e) => setMaxPay(e.target.value.replace(/[^\d.]/g, ""))}
              inputMode="decimal"
              placeholder="e.g. 12.50"
              className="w-44 rounded-md border border-gray-200 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>
        </div>
      )}

      {reason && reason !== "too_expensive" && (
        <div className="mt-4">
          <Label>
            {reason === "platform_not_helpful"
              ? "What can we change to make the platform more helpful?*"
              : reason === "not_enough_jobs"
              ? "What can we do to make the jobs more relevant?*"
              : reason === "decided_not_move"
              ? "What changed for you to decide to not move?*"
              : "What would have helped you the most?*"}
          </Label>

          <div className="relative">
            <textarea
              rows={5}
              value={reasonText}
              onChange={(e) => setReasonText(e.target.value)}
              placeholder="Write your feedback…"
              className="w-full rounded-md border border-gray-300 px-3 py-2 pr-24 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring focus:ring-purple-200"
            />
            <span className="pointer-events-none absolute bottom-2 right-3 text-xs text-gray-500">
              Min 25 characters ({reasonText.trim().length}/25)
            </span>
          </div>

          {reasonText.trim().length < 25 && (
            <p className="mt-1 text-sm text-red-600">
              Please enter at least 25 characters so we can understand your feedback*
            </p>
          )}
        </div>
      )}

      <div className="mt-6 space-y-3">
        <button
          onClick={onAcceptOffer}
          className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3"
        >
          Get 50% off | ${halfPrice}
          <span className="ml-1 opacity-80 line-through">${monthlyPrice}</span>
        </button>

        <button
          onClick={onCompleteCancel}
          disabled={!canComplete}
          className="w-full rounded-lg bg-gray-100 text-gray-500 py-3 disabled:cursor-not-allowed"
        >
          Complete cancellation
        </button>
      </div>
    </Shell>
  );
}
