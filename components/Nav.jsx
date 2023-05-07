import Image from "next/image";
import SearchBar from "./SearchBar";
import TopFive from "./TopFive";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 w-full flex justify-between pb-12">
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
      <div className="w-1/2 flex">
        <Image src="" alt="" width={40} height={40} className="" />
        <a className="btn btn-ghost normal-case text-3xl">Fialta</a>
      </div>

      <TopFive />
      <SearchBar />
    </div>
  );
};

export default Nav;
