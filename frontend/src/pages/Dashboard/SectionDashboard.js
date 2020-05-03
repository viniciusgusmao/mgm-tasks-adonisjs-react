import React from "react";

import TitleDashboard from "pages/Dashboard/TitleDashboard";

const SectionDashboard = ({ title, children, currentPath }) => (
  <>
    <TitleDashboard title={title} currentPath={currentPath} />
    <div>{children}</div>
  </>
);

export default SectionDashboard;
