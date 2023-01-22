import React,{useState,useEffect }from "react";
import axios from "../axios";
import { useParams } from 'react-router-dom'

import RightSideBar from "../components/RightSidebar";
import TagList from "../components/TagList";
import UserTime from "../components/UserTime";
import Answer from "../components/Answer";

export default function Question() {
  const {qid}=useParams()
  const [question, setQuestion] = useState([]);
  const getQuestions = async () => {
    try {
      const res = await axios.get(`/questions/${qid}`);
      setQuestion(res.data);
      console.log(res.data)
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="pt-5 md:col-span-7 grid md:grid-cols-7 grid-cols-9  col-span-9 gap-y-4">
      <div className="md:col-span-7 col-span-9 mx-1 ">
        <div className=" text-2xl font-sm ">{question.title}</div>
        <div className="grid grid-cols-9 md:grid-cols-7  mb-0">
          <div className="col-span-6 md:col-span-5">
            {/* <TagList  tags={question.tags} /> */}
          </div>
          <div className="col-span-3 md:col-span-2 flex justify-center items-end">
            <UserTime username={question.user} time={question.created_at} />
          </div>
        </div>
      </div>
      <div className="md:col-span-7 col-span-9 grid md:grid-cols-7 grid-cols-9 min-h-screen">
        <div className="md:col-span-5 col-span-7">
          <div className="md:col-span-5 col-span-7 my-2">
            {question.content}
          </div>
          <button className="h-8 mb-4 flex items-center p-3 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold  border border-green-700 ">
            Answer
          </button>
          {/* <Answer/>
          <Answer/>
          <Answer/>
          <Answer/>
          <Answer/> */}
          
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}
