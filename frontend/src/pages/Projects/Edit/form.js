import React from "react";
import { Formik } from "formik";

import ErrorMsg from "components/ErrorMsg";
import TextInput from "components/FormFields/TextInput";
import SelectInput from "components/FormFields/SelectInput";
import DateInput from "components/FormFields/DateInput";
import TimeInput from "components/FormFields/TimeInput";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "components/Button";
import BackButtonForm from "components/BackButtonForm";
import DeleteButton from "components/DeleteButton";
import DataTable from "components/DataTable";

import validation from "validations/projects";
import BaseForm from "pages/BaseForm";
import {
  getAvailableProjectStatus,
  joinDateTimeAndPrepareToDB,
  prepapreInitialValuesWithSameKeysOfTable,
} from "utils";

const Form = ({
  currentPath,
  customersFill,
  initialValues: initialValues_,
  id,
}) => {
  const tasks = initialValues_?.allProjectsWithSelectedTasks[0]?.tasks;
  
  const data = initialValues_.fetchProject;
  const initialValues = prepapreInitialValuesWithSameKeysOfTable(
    data,
    "customer"
  );

  return (
    <BaseForm>
      {(store, update, destroy, errorApiRequest) => (
        <>
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values) => {
            update(currentPath, id, joinDateTimeAndPrepareToDB(values));
          }}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            setFieldTouched,
            handleSubmit,
          }) => (
            <div className="container-form">
              <Row>
                <Col lg={4}>
                  <TextInput
                    label="Nome*"
                    value={values.name}
                    handleChange={handleChange("name")}
                    onSetFieldTouched={() => setFieldTouched("name")}
                  />
                  {touched.name && errors.name && (
                    <ErrorMsg description={errors.name} />
                  )}
                </Col>
                <Col lg={5}>
                  <TextInput
                    label="Descrição"
                    value={values.description}
                    handleChange={handleChange("description")}
                    onSetFieldTouched={() => setFieldTouched("description")}
                  />
                </Col>
                <Col lg={3}>
                  <TextInput
                    label="Valor*"
                    value={values.cost}
                    handleChange={handleChange("cost")}
                    onSetFieldTouched={() => setFieldTouched("cost")}
                  />
                  {touched.cost && errors.cost && (
                    <ErrorMsg description={errors.cost} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <DateInput
                    label="Data inicial*"
                    value={values.start_date}
                    handleChange={handleChange("start_date")}
                    onSetFieldTouched={() => setFieldTouched("start_date")}
                  />
                  {touched.start_date && errors.start_date && (
                    <ErrorMsg description={errors.start_date} />
                  )}
                </Col>
                <Col lg={3}>
                  <TimeInput
                    label="Horário inicial*"
                    value={values.start_time}
                    handleChange={handleChange("start_time")}
                    onSetFieldTouched={() => setFieldTouched("start_time")}
                  />
                  {touched.start_time && errors.start_time && (
                    <ErrorMsg description={errors.start_time} />
                  )}
                </Col>
                <Col lg={3}>
                  <DateInput
                    label="Data final*"
                    value={values.end_date}
                    handleChange={handleChange("end_date")}
                    onSetFieldTouched={() => setFieldTouched("end_date")}
                  />
                  {touched.end_date && errors.end_date && (
                    <ErrorMsg description={errors.end_date} />
                  )}
                </Col>
                <Col lg={3}>
                  <TimeInput
                    label="Horário final*"
                    value={values.end_time}
                    handleChange={handleChange("end_time")}
                    onSetFieldTouched={() => setFieldTouched("end_time")}
                  />
                  {touched.end_time && errors.end_time && (
                    <ErrorMsg description={errors.end_time} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <SelectInput
                    label="Cliente*"
                    handleChange={handleChange("customer_id")}
                    onSetFieldTouched={() => setFieldTouched("customer_id")}
                    value={values.customer_id}
                    fill={customersFill?.fetchCompany?.customers}
                  />
                  {touched.customer_id && errors.customer_id && (
                    <ErrorMsg description={errors.customer_id} />
                  )}
                </Col>
                <Col lg={6}>
                  <SelectInput
                    label="Status*"
                    handleChange={handleChange("status")}
                    onSetFieldTouched={() => setFieldTouched("status")}
                    value={values.status}
                    fill={getAvailableProjectStatus()}
                  />
                  {touched.status && errors.status && (
                    <ErrorMsg description={errors.status} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  {errorApiRequest.length > 0 && (
                    <ErrorMsg description={errorApiRequest} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <DeleteButton
                    title="Remover"
                    handleClick={() => destroy(currentPath, id)}
                  />
                </Col>
                <Col lg={6}></Col>
                <Col lg={2}>
                  <BackButtonForm />
                </Col>
                <Col lg={2}>
                  <Button title="Atualizar" handleClick={handleSubmit} />
                </Col>
              </Row>
            </div>
          )}
        </Formik>
        {tasks && <>
        <h1 className="title-extra-table-form-edit">Tarefas EM ABERTO ou EM ANDAMENTO para este projeto.</h1>
        <DataTable currentPath="/tasks" columns={[
          { dataField: "id", text: "ID" },
          { dataField: "name", text: "Nome" },
          { dataField: "status", text: "Status" },
          { dataField: "priority", text: "Prioridade" },
          { dataField: "start", text: "Início" },
          { dataField: "end", text: "Fim" },
        ]} data={tasks} />
        </>}
        </>
      )}
    </BaseForm>
  );
};

export default Form;
