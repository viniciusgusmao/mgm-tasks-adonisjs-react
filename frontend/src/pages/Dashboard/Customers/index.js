import React from "react";
import "./index.scss";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import SectionDashboard from "pages/Dashboard/SectionDashboard";
import CustomerItem from "pages/Dashboard/Customers/CustomerItem";

import { Redirect } from 'react-router-dom';

import Loading from "components/Loading";

const Customers = () => {

  const QUERY = gql`
    {
      allCustomers {
        id
        name
        cellphone
        avatar
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    pollInterval: 500,
  });

  if (error) return <Redirect to="/login" /> 

  if (loading) return <Loading />;

  return (
    <SectionDashboard
      title="Últimos clientes cadastrados"
      currentPath="/customers"
    >
      <div>
        {data?.allCustomers.slice(0,5).map(item => <CustomerItem key={item.id} {...item} />)}
      </div>
    </SectionDashboard>
  );
}

export default Customers;
