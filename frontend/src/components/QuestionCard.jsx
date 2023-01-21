import React from "react";
import { Link } from "react-router-dom";

import TagList from "./TagList";
import UserTime from "./UserTime";

export default function QuestionCard(props) {
  //   console.log(props);
  let question = props.question;
  
  return (
    <div className=" grid md:grid-cols-5 grid-cols-7 pb-4 border-t-2 border-l-2 ">
      <div className="col-span-1  flex flex-col items-end just">
        {/* <div className="text-sm my-1 mr-3">{question.votes} votes</div>
        <div className="text-sm my-4 mr-3">{question.answers} answers</div>
        <div className="text-sm my-1 mr-3">{question.views} views</div> */}
      </div>
      <div className=" md:col-span-4 col-span-6 ml-1">
        <Link className="text-blue-600 hover:text-blue-400">
          {question.title}
        </Link>
        {/* <TagList key={question._id} tags={question.tags} /> */}
   

        <UserTime username={question.user} time={question.createdAt} />
      </div>
    </div>
  );
}
