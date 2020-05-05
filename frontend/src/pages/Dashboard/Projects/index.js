import React from "react";
import "./index.scss";

import SectionDashboard from "pages/Dashboard/SectionDashboard";
import ProjectItem from "pages/Dashboard/Projects/ProjectItem";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Loading from "components/Loading";
import { Redirect } from 'react-router-dom'

import { getAvailableDashboardProjectsStatusWithColor } from 'utils'

const Projects = () => {

  const QUERY = gql`
    {
      allProjects {
        id
        name
        status
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    pollInterval: 500,
  });

  if (error) return <Redirect to="/login" />

  if (loading) return <Loading />;

  const projectsColor = getAvailableDashboardProjectsStatusWithColor();
  projectsColor.map(item => {
    let amount = data?.allProjects.filter(p => p.status == item.name).length
    item.amount = amount;
  })
  
  return (
    <SectionDashboard title="Projetos" currentPath="/projects">
      <div className="container-dashboard-projetos">
      <Container>
        <Row>
          {projectsColor.slice(0,3).map(item => <ProjectItem key={item.id} {...item} />)}
        </Row>
        <Row>
          {projectsColor.slice(3,6).map(item => <ProjectItem key={item.id} {...item} />)}
        </Row>
      </Container>
      </div>
    </SectionDashboard>
  );
}

export default Projects;
