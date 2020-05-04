import React from "react";
import "./index.scss";
import { getUserLogged } from "utils";

const UserInfo = () => {
  const user = getUserLogged();
  return (
    <div className="container-userinfo">
      <div>
        <span>
          {user.name.split(" ")[0].substr(0, 1) +
            user.name.split(" ")[1].substr(0, 1)}
        </span>
      </div>
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
