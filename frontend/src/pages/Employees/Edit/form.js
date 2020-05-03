import React from "react";
import { Formik } from "formik";

import { useHistory } from "react-router-dom";

import ErrorMsg from "components/ErrorMsg";
import TextInput from "components/FormFields/TextInput";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "components/Button";
import BackButtonForm from "components/BackButtonForm";
import DeleteButton from "components/DeleteButton";

import validation from "validations/employees";
import BaseForm from "pages/BaseForm";
import { prepapreInitialValuesWithSameKeysOfTable } from "utils";

const Form = ({ currentPath, initialValues: initialValues_, id }) => {
  const history = useHistory();
  const data = initialValues_.fetchEmployee;
  const initialValues = prepapreInitialValuesWithSameKeysOfTable(
    data,
    "employee"
  );
  return (
    <BaseForm>
      {(store, update, destroy, errorApiRequest) => (
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values) => {
            update(currentPath, id, values);
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
                <Col lg={6}>
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
                <Col lg={6}>
                  <TextInput
                    label="E-mail*"
                    value={values.email}
                    handleChange={handleChange("email")}
                    onSetFieldTouched={() => setFieldTouched("email")}
                  />
                  {touched.email && errors.email && (
                    <ErrorMsg description={errors.email} />
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
                  <BackButtonForm
                    title="Voltar"
                    handleClick={() => history.push(currentPath)}
                  />
                </Col>
                <Col lg={2}>
                  <Button title="Atualizar" handleClick={handleSubmit} />
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
