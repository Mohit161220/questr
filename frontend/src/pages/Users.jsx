import React, { useState, useEffect } from "react";
import axios from "../axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import UsersComp from "../components/UsersComp";

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("/users");
      setUsers(res.data.allUsers);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="  min-h-screen col-span-11 md:col-span-7">
      <h1 className="text-3xl m-5">Users</h1>

      <div className="flex justify-between m-1">
        <div className="flex items-center rounded-full bg-slate-100 w-3/12">
          <MagnifyingGlassIcon className=" h-6 m-2" />
          <input
            type="text"
            className=" h-6 mx-5 w-24  bg-transparent outline-none"
            placeholder="Filter By User"
          ></input>
        </div>
        <div className="flex w-6/12 text-sm">
          <div className="p-1 text-sm border-gray-300 border border-r-0">
            <p>Reputation</p>
          </div>
          <div className="p-1  text-sm border-gray-300 border border-r-0">
            <p>New Users</p>
          </div>
          <div className="p-1 text-sm  border-gray-300 border border-r-0">
            <p>Voters</p>
          </div>
          <div className="p-1 text-sm  border-gray-300 border border-r-0">
            <p>Editors</p>
          </div>
          <div className="p-1 border-gray-300 border">
            <p>Moderators</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <UsersComp key={users._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
