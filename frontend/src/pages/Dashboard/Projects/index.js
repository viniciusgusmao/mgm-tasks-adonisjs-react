import React from "react";
import "./index.scss";

import SectionDashboard from "pages/Dashboard/SectionDashboard";
import BoxItem from "pages/Dashboard/Projects/BoxItem";

const Projetos = ({ data }) => (
  <SectionDashboard title="Projetos" currentPath="/projects">
    <div className="container-dashboard-projetos">
      <BoxItem />
    </div>
  </SectionDashboard>
);

export default Projetos;
