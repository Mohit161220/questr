import React from "react";

import Tag from "./Tag";

export default function TagList(props) {
  return (
    <div className="flex flex-wrap ">
      {props.tags.map((tag) => (
        <Tag tag={tag} />
      ))}
    </div>
  );
}
