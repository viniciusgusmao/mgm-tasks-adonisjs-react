import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BoxItemList from "pages/Dashboard/Projects/BoxItemList";

const BoxItem = () => (
  <Container>
    <Row>
      <BoxItemList color="brown" label="Aprovados" amount={20} />
      <BoxItemList color="cadetblue" label="Ativos" amount={20} />
      <BoxItemList color="chocolate" label="Em Progresso" amount={20} />
    </Row>
    <Row>
      <BoxItemList color="darkorchid" label="Atrasados" amount={20} />
      <BoxItemList color="darkslateblue" label="Cancelados" amount={20} />
      <BoxItemList color="firebrick" label="Completos" amount={20} />
    </Row>
  </Container>
);

export default BoxItem;
