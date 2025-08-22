"use client";

import { useMemo, useState } from "react";
import { GateChoice, Step, CompletionVariant, getCompletionVariant } from "../constants";

export function useCancelFlowState() {
  // Branch & step
  const [branch, setBranch] = useState<GateChoice>(null);
  const [step, setStep] = useState<Step>("GATE");

  // Offer
  const [offerAccepted, setOfferAccepted] = useState(false);

  // Usage answers
  const [appliedVia, setAppliedVia] = useState<string | null>(null);
  const [emailedDirect, setEmailedDirect] = useState<string | null>(null);
  const [interviewedWith, setInterviewedWith] = useState<string | null>(null);

  // Found-job branch
  const [foundViaMM, setFoundViaMM] = useState<"YES" | "NO" | null>(null);
  const [wishText, setWishText] = useState("");

  // Still-looking branch
  const [reason, setReason] = useState<import("@/app/cancellation/components/ReasonRadios").ReasonId | null>(null);
  const [maxPay, setMaxPay] = useState("");
  const [reasonText, setReasonText] = useState("");

  // Visa
  const [hasLawyer, setHasLawyer] = useState<"YES" | "NO" | null>(null);
  const [visaType, setVisaType] = useState("");

  const min25 = (s: string) => s.trim().length >= 25;

  // Pricing (mock; wire to real subscription later)
  const monthlyPrice = 25;
  const halfPrice = useMemo(
    () => (Math.round((monthlyPrice / 2) * 100) / 100).toFixed(2),
    [monthlyPrice]
  );

  const completionVariant: CompletionVariant = getCompletionVariant(branch, hasLawyer);

  return {
    // primary nav
    step,
    setStep,
    branch,
    setBranch,

    // offer
    offerAccepted,
    setOfferAccepted,

    // usage
    appliedVia,
    setAppliedVia,
    emailedDirect,
    setEmailedDirect,
    interviewedWith,
    setInterviewedWith,

    // found-job
    foundViaMM,
    setFoundViaMM,
    wishText,
    setWishText,

    // still-looking
    reason,
    setReason,
    maxPay,
    setMaxPay,
    reasonText,
    setReasonText,

    // visa
    hasLawyer,
    setHasLawyer,
    visaType,
    setVisaType,

    // helpers
    min25,

    // pricing
    monthlyPrice,
    halfPrice,

    // derived
    completionVariant,
  };
}
