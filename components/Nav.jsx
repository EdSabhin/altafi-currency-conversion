import Image from "next/image";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

const Nav = () => {
  return (
    <div
      className={`navbar ${orbitron.className} w-full flex flex-col justify-center items-center py-10 md:py-8 gap-8 bg-neutral text-neutral-content`}
    >
      <Image
        src="/altafi-logo.svg"
        alt="AltaFi Logo"
        width={80}
        height={80}
      />
      <a className="font-semibold normal-case text-3xl tracking-widest">
        AltaFi
      </a>      
    </div>
  );
};

export default Nav;
