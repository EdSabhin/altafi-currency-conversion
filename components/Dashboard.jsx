"use client";

import Image from "next/image";
import { useState } from "react";

const Dashboard = ({ currencies }) => {
  const [viewDashboard, setViewDashboard] = useState(true);

  return (
    <div className="w-full relative md:w-[20%] 2xl:w-[22%] h-64 overflow-y-auto rounded-bl-md !rounded-br-none mt-8 md:mt-0">
      <h2
        onClick={() => setViewDashboard(!viewDashboard)}
        className={`flex justify-center px-2 py-2 z-10 rounded-tl-md ${
          !viewDashboard && "`w-[35%] rounded-md"
        } bg-[#021431] text-indigo-to-teal cursor-pointer`}
      >
        <span className="pr-2">*</span> Currency Code Reference{" "}
        <span className="pl-2">*</span>
      </h2>
      {viewDashboard && (
        <table className="w-full table table-compact !rounded-br-none">
          <thead>
            <tr className="sticky top-0">
              <th className="font-bold text-[0.9rem] pt-3 !rounded-none">
                Code
              </th>
              <th className="font-bold text-[0.9rem] pt-3 !rounded-none">
                Name
              </th>
            </tr>
          </thead>
          <tbody className="!rounded-br-none">
            {Object.entries(currencies).map(([code, name]) => (
              <tr key={code}>
                <td className="font-semibold py-3 px-3 !rounded-br-none">
                  {code}
                </td>
                <td className="!rounded-br-none">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!viewDashboard && (
        <Image
          src="/fialta-logo.svg"
          alt="Fialta Logo"
          width={80}
          height={80}
          className="absolute top-[60%] md:top-[39%] left-[39%] md:left-[35.5%] animate-pulse"
        />
      )}
    </div>
  );
};

export default Dashboard;
