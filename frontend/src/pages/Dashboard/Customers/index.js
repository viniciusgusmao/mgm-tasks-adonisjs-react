import React from "react";
import "./index.scss";

import SectionDashboard from "pages/Dashboard/SectionDashboard";
import CustomerItem from "pages/Dashboard/Customers/CustomerItem";

const Customers = ({ data }) => (
  <SectionDashboard
    title="Últimos clientes cadastrados"
    currentPath="/customers"
  >
    <div>
      {data.slice(0,5).map(item => <CustomerItem key={item.id} {...item} />)}
    </div>
  </SectionDashboard>
);

export default Customers;
