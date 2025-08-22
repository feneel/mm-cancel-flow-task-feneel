"use client";

import { useRouter } from "next/navigation";
import {
  HERO_DESKTOP,
  getHeaderTitle,
  getMobileHeroOn,
  getMobileHeroTop,
  getStepIndex,
} from "./constants";
import { Dots } from "./ui/Atoms";
import { useCancelFlowState } from "./hooks/useCancelFlowState";

// steps
import GateStep from "./steps/GateStep";
import OfferStep from "./steps/OfferStep";
import UsageStep from "./steps/UsageStep";
import ReasonStep from "./steps/ReasonStep";
import CongratsStep from "./steps/CongratsStep";
import WishHelpStep from "./steps/WishHelpStep";
import VisaStep from "./steps/VisaStep";
import DoneCancelledStep from "./steps/DoneCancelledStep";
import DoneContinuedStep from "./steps/DoneContinuedStep";

export default function CancelFlow() {
  const router = useRouter();
  const s = useCancelFlowState();

  const heroDesktop = HERO_DESKTOP.includes(s.step);
  const mobileHeroOn = getMobileHeroOn(s.step, s.completionVariant);
  const mobileHeroTop = getMobileHeroTop(s.step);
  const headerTitle = getHeaderTitle(s.step);
  const stepIdx = getStepIndex(s.step, s.branch);
  const showStepMeta = s.step !== "DONE_CANCELLED" && stepIdx > 0;

  const goBack = () => {
    if (s.step === "GATE") return router.push("/");
    if (s.branch === "STILL_LOOKING") {
      if (s.step === "OFFER50") return s.setStep("GATE");
      if (s.step === "USAGE") return s.setStep("OFFER50");
      if (s.step === "REASON") return s.setStep("USAGE");
    } else if (s.branch === "FOUND_JOB") {
      if (s.step === "CONGRATS") return s.setStep("GATE");
      if (s.step === "WISH_HELP") return s.setStep("CONGRATS");
      if (s.step === "VISA") return s.setStep("WISH_HELP");
    }
  };

  const acceptOffer = () => {
    s.setOfferAccepted(true);
    s.setStep("DONE_CONTINUED");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {s.step !== "GATE" && (
                <button onClick={goBack} className="text-sm text-gray-700 hover:underline">
                  Back
                </button>
              )}
              <h1 className="text-base sm:text-lg font-semibold text-gray-900">{headerTitle}</h1>
            </div>
            <div className="flex items-center gap-3">
              {s.step === "DONE_CANCELLED" ? (
                <>
                  <Dots filled={3} total={3} />
                  <span className="hidden sm:inline text-sm text-gray-700">Completed</span>
                </>
              ) : showStepMeta ? (
                <>
                  <Dots filled={stepIdx} total={3} />
                  <span className="hidden sm:inline text-sm text-gray-700">Step {stepIdx} of 3</span>
                </>
              ) : null}
              <button
                onClick={() => router.push("/")}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white shadow border border-gray-200 p-5 sm:p-6">
          {s.step === "GATE" && (
            <GateStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              setBranch={(b) => s.setBranch(b)}
              setStep={s.setStep}
            />
          )}

          {s.step === "OFFER50" && s.branch === "STILL_LOOKING" && (
            <OfferStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              halfPrice={s.halfPrice}
              monthlyPrice={s.monthlyPrice}
              acceptOffer={acceptOffer}
              goNext={() => s.setStep("USAGE")}
            />
          )}

          {s.step === "USAGE" && s.branch === "STILL_LOOKING" && (
            <UsageStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              appliedVia={s.appliedVia}
              setAppliedVia={s.setAppliedVia}
              emailedDirect={s.emailedDirect}
              setEmailedDirect={s.setEmailedDirect}
              interviewedWith={s.interviewedWith}
              setInterviewedWith={s.setInterviewedWith}
              onContinue={() => s.setStep("REASON")}
            />
          )}

          {s.step === "REASON" && s.branch === "STILL_LOOKING" && (
            <ReasonStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              reason={s.reason}
              setReason={s.setReason}
              maxPay={s.maxPay}
              setMaxPay={s.setMaxPay}
              reasonText={s.reasonText}
              setReasonText={s.setReasonText}
              halfPrice={s.halfPrice}
              monthlyPrice={s.monthlyPrice}
              onAcceptOffer={acceptOffer}
              onCompleteCancel={() => s.setStep("DONE_CANCELLED")}
              min25={s.min25}
            />
          )}

          {s.step === "CONGRATS" && s.branch === "FOUND_JOB" && (
            <CongratsStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              foundViaMM={s.foundViaMM}
              setFoundViaMM={s.setFoundViaMM}
              appliedVia={s.appliedVia}
              setAppliedVia={s.setAppliedVia}
              emailedDirect={s.emailedDirect}
              setEmailedDirect={s.setEmailedDirect}
              interviewedWith={s.interviewedWith}
              setInterviewedWith={s.setInterviewedWith}
              onContinue={() => s.setStep("WISH_HELP")}
            />
          )}

          {s.step === "WISH_HELP" && s.branch === "FOUND_JOB" && (
            <WishHelpStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              wishText={s.wishText}
              setWishText={s.setWishText}
              min25={s.min25}
              onContinue={() => s.setStep("VISA")}
            />
          )}

          {s.step === "VISA" && s.branch === "FOUND_JOB" && (
            <VisaStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              hasLawyer={s.hasLawyer}
              setHasLawyer={s.setHasLawyer}
              visaType={s.visaType}
              setVisaType={s.setVisaType}
              onCompleteCancel={() => s.setStep("DONE_CANCELLED")}
            />
          )}

          {s.step === "DONE_CANCELLED" && (
            <DoneCancelledStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              variant={s.completionVariant}
              onFinish={() => router.push("/")}
            />
          )}

          {s.step === "DONE_CONTINUED" && (
            <DoneContinuedStep
              heroDesktop={heroDesktop}
              mobileHeroOn={mobileHeroOn}
              halfPrice={s.halfPrice}
              onFinish={() => router.push("/")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
