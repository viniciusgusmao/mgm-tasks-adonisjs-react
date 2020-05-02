import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const DataTable = ({ data, columns }) => {
  return (
    <BootstrapTable data={data}>
      {columns.map(item => <TableHeaderColumn dataField={item.id} isKey={item.id === "id" ? true : false}>{item.name}
      </TableHeaderColumn>)}
    </BootstrapTable>
  );
}

export default DataTable;
