import React from "react";
import { Link } from "react-router-dom";
export default function QuestionCard(props) {
//   console.log(props);
  let question = props.question;
  return (
    <div className=" grid md:grid-cols-5 grid-cols-7 pb-4 border-t-2 border-l-2 ">
      <div className="col-span-1  flex flex-col items-end just">
        <div className="text-sm my-1 mr-3">{question.votes} votes</div>
        <div className="text-sm my-4 mr-3">{question.answers} answers</div>
        <div className="text-sm my-1 mr-3">{question.views} views</div>
      </div>
      <div className=" md:col-span-4 col-span-6 ml-1">
        <Link className="text-blue-600 hover:text-blue-400">{question.title}</Link>
        <div className="flex flex-wrap ">
            {question.tags.map(tag=>(<button className="m-1 px-2 rounded-md bg-gray-200 ">{tag}</button>))}
        </div>
        <div className="flex justify-end mt-3 mx-2">
            <Link className="px-2 text-blue-600  hover:text-blue-400">{question.username}</Link>
            <div className="px-2 ">{question.time}</div>
        </div>
      </div>
    </div>
  );
}
