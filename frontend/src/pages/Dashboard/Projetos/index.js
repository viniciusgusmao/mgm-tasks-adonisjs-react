import React from 'react';
import './index.scss';

import SectionDashboard from 'pages/Dashboard/SectionDashboard';
import BoxItem from 'pages/Dashboard/Projetos/BoxItem';

const Projetos = () => (
  <SectionDashboard title="Projetos">
    <div className="container-dashboard-projetos">
      <BoxItem />
    </div>
  </SectionDashboard>
);

export default Projetos;

