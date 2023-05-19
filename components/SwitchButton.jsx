import Image from "next/image";
import React from "react";

const SwitchButton = ({switchCurrencies}) => { 
  return (
    <button onClick={switchCurrencies}>
      <Image
        width={50}
        height={50}
        alt="Switch Currencies"
        src="/left-and-right-arrows.png"
      />
    </button>
  );
};

export default SwitchButton;
