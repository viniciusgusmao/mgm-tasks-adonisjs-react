import React, { useState } from "react";
import { Formik } from "formik";

import { useHistory } from "react-router-dom";

import ErrorMsg from "components/ErrorMsg";
import TextInput from "components/FormFields/TextInput";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "components/Button";
import BackButtonForm from "components/BackButtonForm";

import validation from "validations/customers";
import BaseForm from "pages/BaseForm";
import { getIdCompany } from "utils";

const Form = ({ currentPath }) => {
  const history = useHistory();
  const company_id = getIdCompany();

  return (
    <BaseForm>
      {(store, update, destroy, errorApiRequest) => (
        <Formik
          initialValues={{
            name: "",
            email: "",
            cellphone: "",
            street: "",
            number: "",
            district: "",
            city: "",
            state: "",
            cep: "",
            company_id,
            cpf: "",
            cnpj: "",
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
                <Col lg={3}>
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
                <Col lg={3}>
                  <TextInput
                    label="Telefone"
                    value={values.cellphone}
                    handleChange={handleChange("cellphone")}
                    onSetFieldTouched={() => setFieldTouched("cellphone")}
                  />
                  {touched.cellphone && errors.cellphone && (
                    <ErrorMsg description={errors.cellphone} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <TextInput
                    label="CPF"
                    value={values.cpf}
                    handleChange={handleChange("cpf")}
                    onSetFieldTouched={() => setFieldTouched("cpf")}
                  />
                  {touched.cpf && errors.cpf && (
                    <ErrorMsg description={errors.cpf} />
                  )}
                </Col>
                <Col lg={6}>
                  <TextInput
                    label="CNPJ"
                    value={values.cnpj}
                    handleChange={handleChange("cnpj")}
                    onSetFieldTouched={() => setFieldTouched("cnpj")}
                  />
                  {touched.cnpj && errors.cnpj && (
                    <ErrorMsg description={errors.cnpj} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={5}>
                  <TextInput
                    label="Rua"
                    value={values.street}
                    handleChange={handleChange("street")}
                    onSetFieldTouched={() => setFieldTouched("street")}
                  />
                  {touched.street && errors.street && (
                    <ErrorMsg description={errors.street} />
                  )}
                </Col>
                <Col lg={3}>
                  <TextInput
                    label="Bairro"
                    value={values.district}
                    handleChange={handleChange("district")}
                    onSetFieldTouched={() => setFieldTouched("district")}
                  />
                  {touched.district && errors.district && (
                    <ErrorMsg description={errors.district} />
                  )}
                </Col>
                <Col lg={2}>
                  <TextInput
                    label="Número"
                    value={values.number}
                    handleChange={handleChange("number")}
                    onSetFieldTouched={() => setFieldTouched("number")}
                  />
                  {touched.number && errors.number && (
                    <ErrorMsg description={errors.number} />
                  )}
                </Col>
                <Col lg={2}>
                  <TextInput
                    label="CEP"
                    value={values.cep}
                    handleChange={handleChange("cep")}
                    onSetFieldTouched={() => setFieldTouched("cep")}
                  />
                  {touched.cep && errors.cep && (
                    <ErrorMsg description={errors.cep} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <TextInput
                    label="Cidade"
                    value={values.city}
                    handleChange={handleChange("city")}
                    onSetFieldTouched={() => setFieldTouched("city")}
                  />
                  {touched.city && errors.city && (
                    <ErrorMsg description={errors.city} />
                  )}
                </Col>
                <Col lg={6}>
                  <TextInput
                    label="Estado"
                    value={values.state}
                    handleChange={handleChange("state")}
                    onSetFieldTouched={() => setFieldTouched("state")}
                  />
                  {touched.state && errors.state && (
                    <ErrorMsg description={errors.state} />
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
