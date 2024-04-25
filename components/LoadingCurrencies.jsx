import React from 'react'

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

const LoadingCurrencies = () => {
  return (
    <div className="w-full h-[77vh] md:h-[68vh] lg:h-[73vh] loading-animation gradient-border flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-4">
        <p
          className={`${orbitron.className} loading-text flex justify-center items-center py-8 md:px-0 underline underline-offset-4 decoration-1 decoration-dotted text-2xl `}
        >
          Loading Currencies
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-tornado loading-text"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M21 4l-18 0" />
          <path d="M13 16l-6 0" />
          <path d="M11 20l4 0" />
          <path d="M6 8l14 0" />
          <path d="M4 12l12 0" />
        </svg>
      </div>
    </div>
  );
}

export default LoadingCurrencies