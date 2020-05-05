import React from "react";
import "./index.scss";
import { getUserLogged } from "utils";

const UserInfo = () => {
  const user = getUserLogged();
  const user_arr = user.name.split(" ");
  let siglaUser = (user_arr.length > 1) ? user_arr[0].substr(0, 1)+user_arr[1].substr(0, 1) : user_arr[0].substr(0, 2);
  
  return (
    <div className="container-userinfo">
      <div>
        <span>{siglaUser}</span>
      </div>
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
