"use client";

import Image from "next/image";
import React from "react";

export function Shell({
  children,
  showHeroDesktop,
  showHeroMobile,
  mobileHeroTop = false,
}: {
  children: React.ReactNode;
  showHeroDesktop: boolean;
  showHeroMobile: boolean;
  mobileHeroTop?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {/* Mobile hero on TOP (GATE only) */}
      {showHeroMobile && mobileHeroTop && (
        <div className="md:hidden">
          <div className="relative w-full h-40 rounded-xl overflow-hidden">
            <Image
              src="/empire-state-compressed.jpg"
              alt="City skyline"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Main content */}
      <div>{children}</div>

      {/* Mobile hero on BOTTOM (other enabled screens) */}
      {showHeroMobile && !mobileHeroTop && (
        <div className="md:hidden">
          <div className="relative w-full h-40 mt-4 rounded-xl overflow-hidden">
            <Image
              src="/empire-state-compressed.jpg"
              alt="City skyline"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Desktop hero (right column) */}
      {showHeroDesktop && (
        <div className="relative hidden md:block w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/empire-state-compressed.jpg"
            alt="City skyline"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}

export function Dots({ filled, total }: { filled: number; total: number }) {
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`inline-block h-2 w-4 rounded-full ${
            i < filled ? "bg-emerald-500" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-3xl font-extrabold leading-tight text-gray-900">{children}</h3>;
}

export function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-medium text-gray-900 mb-1">{children}</label>;
}

export function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-4 py-3 text-center text-gray-900 ${
        active ? "border-[#8952fc] bg-purple-50" : "border-gray-200 hover:bg-gray-50"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

export function PillFieldset({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="grid grid-cols-4 gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`rounded-lg border px-3 py-2 text-sm text-gray-900 ${
                active ? "border-[#8952fc] bg-purple-50" : "border-gray-200 hover:bg-gray-50"
              }`}
              aria-pressed={active}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function RadioLine({
  name,
  label,
  checked,
  onChange,
}: {
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded-full border-gray-300 text-[#8952fc] focus:ring-[#8952fc]"
      />
      <span className="text-gray-900">{label}</span>
    </label>
  );
}
