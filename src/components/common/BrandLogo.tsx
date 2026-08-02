import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = "w-9 h-9 sm:w-10 sm:h-10", size = 36 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Tap Top Handle Knob */}
      <rect x="25" y="14" width="50" height="9" rx="3" fill="#C9A84C" />
      <rect x="45" y="23" width="10" height="8" fill="#C9A84C" />

      {/* Main Tap / Faucet Body */}
      <path
        d="M 43 31 H 57 V 46 H 72 C 81 46 87 52 87 60 V 64 H 73 V 60 C 73 58 72 57 70 57 H 57 V 72 H 43 V 31 Z"
        fill="#C9A84C"
      />

      {/* Back Wall Mount Flange */}
      <rect x="13" y="38" width="8" height="24" rx="2" fill="#C9A84C" />
      <rect x="21" y="44" width="22" height="12" fill="#C9A84C" />

      {/* Water Droplet Falling Below Tap Spout */}
      <path
        d="M 80 72 C 75 80 72 84 72 88 C 72 93 75.5 97 80 97 C 84.5 97 88 93 88 88 C 88 84 85 80 80 72 Z"
        fill="#C9A84C"
      />
    </svg>
  );
}
