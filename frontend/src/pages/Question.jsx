import React from "react";

import RightSideBar from "../components/RightSidebar";
import TagList from "../components/TagList";
import UserTime from "../components/UserTime";
import Body from "../components/Body";

export default function Question() {
  const question = {
    id: 1,
    title:
      "Do classification_report and cross_validate calculate f1-score in different way?",
    username: "Mohit",
    views: 2,
    answers: 0,
    votes: 3,
    tags: [
      "machine - learning",
      "js",
      "programming",
      "web - dev",
    ],
    time: "just now",
  };
  return (
    <div className="pt-5 md:col-span-7 grid md:grid-cols-7 grid-cols-9 col-span-9 min-h-screen gap-y-4">
      <div className="md:col-span-7 col-span-9 mx-1 bg-blue-100 ">
        <div className=" text-2xl font-sm bg-red-200">{question.title}</div>
        <div className="grid grid-cols-9 md:grid-cols-7 bg-yellow-200 mb-0">
          <div className="col-span-6 md:col-span-5">
            <TagList key={question.id} tags={question.tags} />
          </div>
          <div className="col-span-3 md:col-span-2 flex justify-center items-end">
            <UserTime username={question.username} time={question.time} />
          </div>
        </div>
      </div>
      <div className="md:col-span-5 col-span-7 mx-1 bg-blue-100 h-auto">
        <Body />
        <RightSideBar />
      </div>
    </div>
  );
}
