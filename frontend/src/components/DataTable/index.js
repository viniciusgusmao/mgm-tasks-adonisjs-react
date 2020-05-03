import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router-dom";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";

const DataTable = ({ currentPath, columns, data }) => {
  const history = useHistory();

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`${currentPath}/${row.id}/edit`);
    },
  };

  return (
    <BootstrapTable
      hover
      rowStyle={{ fontSize: 12, color: "#70677F" }}
      keyField="id"
      data={data}
      rowEvents={rowEvents}
      columns={columns}
      pagination={paginationFactory()}
      noDataIndication={() => "Nenhum registro encontrado."}
    />
  );
};

export default DataTable;
