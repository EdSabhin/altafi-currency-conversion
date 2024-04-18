import Image from "next/image";
import React from "react";

const SwitchButton = ({ switchCurrencies }) => {
  return (
    <button onClick={switchCurrencies}>
      <svg
        class="icon icon-tabler icon-tabler-arrows-exchange fade-in-out duration-1000 transition ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        stroke-width="1.2"
        stroke="#3B82F7"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10h14l-4 -4" />
        <path d="M17 14h-14l4 4" />
      </svg>
    </button>
  );
};

export default SwitchButton;
