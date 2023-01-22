import React from "react";

import UserTime from "./UserTime";

export default function Answer() {
  return (
    <div className="md:col-span-5 col-span-7 my-2">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in quo,
        fugiat hic veniam sunt! Quidem temporibus quae ad ipsam, dolore mollitia
        eligendi harum. Delectus pariatur quaerat necessitatibus voluptas
        accusamus.
      </div>
      <UserTime username={"Me"} time={"1hr ago"}/>
    </div>
  );
}
