import React from 'react';
import "./index.scss";
import { GoDashboard, GoProject } from 'react-icons/go';
import { FaUserFriends, FaTasks, FaNetworkWired } from 'react-icons/fa';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

const Nav = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.setItem('@user_gp',null);
    history.push('/login');
  }

  return (
    <div className="container-nav">
      <div>
        <a href="#" className="active">
          <GoDashboard size={20} />
          <span>Dashboard</span>
        </a>
        <a href="#">
          <FaNetworkWired size={20} />
          <span>Clientes</span>
        </a>
        <a href="#">
          <GoProject size={20} />
          <span>Projetos</span>
        </a>
        <a href="#">
          <FaTasks size={20} />
          <span>Tarefas</span>
        </a>
        <a href="#">
          <FaUserFriends size={20} />
          <span>Funcionários</span>
        </a>
      </div>
      <div>
        <a href="#" onClick={logout} className="logout">
          <RiLogoutBoxLine size={20} />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Nav;
