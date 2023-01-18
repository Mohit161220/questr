import React, { useState } from "react";
import RightSidebar from "../components/RightSidebar";

function Home() {
  return (
    <div className="pt-5 md:col-span-7 grid grid-cols-7 col-span-9">
      <div className="md:col-span-5 col-span-7 mx-1">
        <div className="flex justify-between">
          <div className="flex justify-start  ">
            <button className="h-8 p-2 font-thin  flex items-center rounded-l-md border border-black">
              New
            </button>
            <button className="h-8 p-2 font-thin flex items-center  border-y border-black">
              UnAnswered
            </button>
            <button className="h-8 p-2 font-thin flex items-center rounded-r-md border border-black">
              Most Viewed
            </button>
          </div>
          <button className="h-8  mr-0 flex items-center p-3 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold  border border-green-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4 mr-1 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="font-thin">Ask Question</span>
          </button>
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div><div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
        <div className="h-20 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          culpa harum quaerat, quas nulla velit, est praesentium ipsam a, facere
          totam quisquam provident eligendi quos molestiae impedit maiores
          temporibus optio.
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}
export default Home;
