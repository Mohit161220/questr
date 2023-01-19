import React from "react";

import AboutTopic from "../components/AboutTopic";
import AskQuestionButton from "../components/AskQuestionButton";
import QuestionCard from "../components/QuestionCard";

export default function Topic() {
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
      tags: ["machine - learning", "js", "programming", "web - dev"],
      time: "just now",
    });
  }
  return (
    <div className="pt-5 md:col-span-7 grid grid-cols-7 col-span-9 min-h-screen gap-y-4">
      <div className="flex justify-between items-end  md:col-span-7 col-span-9 mx-1">
        <div className="flex items-end">
          <h1 className=" text-center text-4xl font-medium mr-8">Topic Name</h1>
          <button className="text-blue-600 hover:text-blue-400 rounded-xl px-3 border-2 border-blue-600 hover:border-blue-400">
            Join
          </button>
        </div>
        <AskQuestionButton />
      </div>
      <div className="flex justify-between items-end  md:col-span-5 col-span-7 mx-1"></div>
      <div className="md:col-span-5 col-span-7 mx-1">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
      <AboutTopic />
    </div>
  );
}
