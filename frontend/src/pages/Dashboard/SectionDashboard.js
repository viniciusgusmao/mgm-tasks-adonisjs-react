import React from 'react';

import TitleDashboard from 'pages/Dashboard/TitleDashboard';

const SectionDashboard = ({ title, children }) => (
  <>
    <TitleDashboard title={title} />
    <div>
      {children}
    </div>
  </>
);

export default SectionDashboard;
