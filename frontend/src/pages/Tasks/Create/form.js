import React from "react";
import { Formik, Field } from "formik";

import { useHistory } from "react-router-dom";

import ErrorMsg from "components/ErrorMsg";
import TextInput from "components/FormFields/TextInput";
import SelectInput from "components/FormFields/SelectInput";
import DateInput from "components/FormFields/DateInput";
import TimeInput from "components/FormFields/TimeInput";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "components/Button";
import BackButtonForm from "components/BackButtonForm";

import validation from "validations/tasks";
import BaseForm from "pages/BaseForm";
import {
  getAvailableTaskPriority,
  getAvailableTaskStatus,
  joinDateTimeAndPrepareToDB,
  prepareArrayProjectsToFillInSelect,
  prepareArrayEmployeesToFillInSelect,
} from "utils";

const Form = ({ currentPath, dataFillSelect }) => {

  let projectsFill, employeesFill;
  if (dataFillSelect) {
    projectsFill = prepareArrayProjectsToFillInSelect(dataFillSelect);
    employeesFill = prepareArrayEmployeesToFillInSelect(dataFillSelect);
  }
  return (
    <BaseForm>
      {(store, update, destroy, errorApiRequest) => (
        <Formik
          initialValues={{
            name: "",
            description: "",
            start_date: "",
            end_date: "",
            start_time: "",
            end_time: "",
            priority: "",
            status: "",
            project_id: "",
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            console.log(values);
            store(currentPath, joinDateTimeAndPrepareToDB(values));
          }}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            setFieldTouched,
            handleSubmit,
            setFieldValue,
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
                  <SelectInput
                    label="Prioridade*"
                    handleChange={handleChange("priority")}
                    onSetFieldTouched={() => setFieldTouched("priority")}
                    value={values.priority}
                    fill={getAvailableTaskPriority()}
                  />
                  {touched.priority && errors.priority && (
                    <ErrorMsg description={errors.priority} />
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
                    label="Projeto*"
                    handleChange={handleChange("project_id")}
                    onSetFieldTouched={() => setFieldTouched("project_id")}
                    value={values.project_id}
                    fill={projectsFill}
                  />
                  {touched.project_id && errors.project_id && (
                    <ErrorMsg description={errors.project_id} />
                  )}
                </Col>
                <Col lg={6}>
                  <SelectInput
                    label="Status*"
                    handleChange={handleChange("status")}
                    onSetFieldTouched={() => setFieldTouched("status")}
                    value={values.status}
                    fill={getAvailableTaskStatus()}
                  />
                  {touched.status && errors.status && (
                    <ErrorMsg description={errors.status} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <label className="label-input">
                    Escolha os funcionários para esta tarefa
                  </label>
                  <Field
                    component="select"
                    name="employees"
                    className="textarea-style"
                    onChange={(evt) =>
                      setFieldValue(
                        "employees",
                        [].slice
                          .call(evt.target.selectedOptions)
                          .map((option) => option.value)
                      )
                    }
                    multiple={true}
                  >
                    {employeesFill?.map((item) => (
                      <option key={item.key} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
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
                <Col lg={8}></Col>
                <Col lg={2}>
                  <BackButtonForm />
                </Col>
                <Col lg={2}>
                  <Button title="Cadastrar" handleClick={handleSubmit} />
                </Col>
              </Row>
            </div>
          )}
        </Formik>
      )}
    </BaseForm>
  );
};

export default Form;
