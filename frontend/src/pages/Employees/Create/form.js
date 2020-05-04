import React, { useState } from "react";
import { Formik } from "formik";

import { useHistory } from "react-router-dom";

import ErrorMsg from "components/ErrorMsg";
import TextInput from "components/FormFields/TextInput";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "components/Button";
import BackButtonForm from "components/BackButtonForm";

import validation from "validations/employees";
import BaseForm from "pages/BaseForm";

const Form = ({ currentPath }) => {
  const history = useHistory();

  return (
    <BaseForm>
      {(store, update, destroy, errorApiRequest) => (
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            store(currentPath, values);
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
