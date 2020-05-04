import React from "react";
import "./index.scss";

import SectionDashboard from "pages/Dashboard/SectionDashboard";
import ProjectItem from "pages/Dashboard/Projects/ProjectItem";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { getAvailableDashboardProjectsStatusWithColor } from 'utils'

const Projetos = ({ data }) => {
  const projectsColor = getAvailableDashboardProjectsStatusWithColor();
  projectsColor.map(item => {
    let amount = data.filter(p => p.status == item.name).length
    item.amount = amount;
  })
  return (
    <SectionDashboard title="Projetos" currentPath="/projects">
      <div className="container-dashboard-projetos">
      <Container>
        <Row>
          {projectsColor.slice(0,3).map(item => <ProjectItem {...item} />)}
        </Row>
        <Row>
          {projectsColor.slice(3,6).map(item => <ProjectItem {...item} />)}
        </Row>
      </Container>
      </div>
    </SectionDashboard>
  );
}

export default Projetos;
