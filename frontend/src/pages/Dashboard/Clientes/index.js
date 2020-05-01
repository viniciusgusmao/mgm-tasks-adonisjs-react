import React from 'react';
import './index.scss';

import SectionDashboard from 'pages/Dashboard/SectionDashboard';
import ClienteItemList from 'pages/Dashboard/Clientes/ClienteItemList';

const Clientes = () => (
  <SectionDashboard title="Últimos clientes cadastrados">
    <div className="container-dashboard-clientes">
      <ClienteItemList />
    </div>
  </SectionDashboard>
);

export default Clientes;

