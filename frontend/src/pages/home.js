import React, { useState } from "react";

function Home() {
  return (
    <div className="">
      <div className="h-32">
        <div className="flex">
          <h1 className="text-white text-xl font-semibold p-5 mr-auto">
            Top Questions
          </h1>

          <button className="h-10 my-auto mr-4 flex items-center p-2 space-x-3 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>Ask Question</span>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Home;
