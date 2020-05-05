import React from "react";
import "./index.scss";
import { GoDashboard, GoProject } from "react-icons/go";
import { FaUserFriends, FaTasks, FaNetworkWired } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const logout = () => {
    localStorage.removeItem("@user_gp")
    history.push("/login");
  };
  return (
    <div className="container-nav">
      <div>
        <Link
          to="/dashboard"
          className={
            pathname.indexOf("dashboard") !== -1 ||
            pathname == "" ||
            pathname == "/"
              ? "active"
              : ""
          }
        >
          <GoDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/customers"
          className={pathname.indexOf("customers") !== -1 ? "active" : ""}
        >
          <FaNetworkWired size={20} />
          <span>Clientes</span>
        </Link>
        <Link
          to="/projects"
          className={pathname.indexOf("projects") !== -1 ? "active" : ""}
        >
          <GoProject size={20} />
          <span>Projetos</span>
        </Link>
        <Link
          to="/tasks"
          className={pathname.indexOf("tasks") !== -1 ? "active" : ""}
        >
          <FaTasks size={20} />
          <span>Tarefas</span>
        </Link>
        <Link
          to="/employees"
          className={pathname.indexOf("employees") !== -1 ? "active" : ""}
        >
          <FaUserFriends size={20} />
          <span>Funcionários</span>
        </Link>
      </div>
      <div>
        <button onClick={logout} className="logout">
          <RiLogoutBoxLine size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
