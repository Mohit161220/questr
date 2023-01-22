import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function UserTime(props) {
  return (
    <div className="flex justify-end mt-3 mx-2">
      <Link className="px-2 text-blue-600  hover:text-blue-400">
        {props.username}
      </Link>
      <div className="px-2 ">{moment(props.time).fromNow()}</div>
    </div>
  );
}
