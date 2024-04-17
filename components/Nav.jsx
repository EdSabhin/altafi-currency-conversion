import Image from "next/image";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

const Nav = () => {
  return (
    <div
      className={`navbar ${orbitron.className} w-full flex justify-center items-center py-6  gap-12 bg-neutral text-neutral-content`}
    >
      <div className="flex gap-4">
        <Image
          src="/AI-fialta-logo.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
        <a className="font-semibold normal-case text-3xl">FIALTA</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Nav;
