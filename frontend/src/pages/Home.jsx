import React from "react";

import AskQuestionButton from "../components/AskQuestionButton";
import QuestionCard from "../components/QuestionCard";
import RightSidebar from "../components/RightSidebar";

function Home() {
  let questions = [];
  for (let i = 0; i < 80; i++) {
    questions.push({
      id: i,
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
      time:"just now"
    });
  }
  return (
    <div className="pt-5 md:col-span-7 grid grid-cols-7 col-span-9 min-h-screen gap-y-4">
      <div className="md:col-span-5 col-span-7 mx-1">
        <div className="flex justify-between mb-8">
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
          <AskQuestionButton/>
        </div>
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
      <RightSidebar />
    </div>
  );
}
export default Home;
