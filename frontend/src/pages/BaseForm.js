import React, { useState } from "react";
import Notification from "components/Notification";
import Loading from "components/Loading";
import { useHistory } from "react-router-dom";

import { store, update, destroy } from "services/crud";

const BaseForm = ({ children }) => {
  const history = useHistory();
  const [errorApiRequest, setErrorApiRequest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [paramsToast, setParamsToast] = useState({ description: "", type: "" });

  const execToast = (isToasty, description, type, currentPath) => {
    setToast(isToasty);
    setParamsToast({ description, type });
    setTimeout(() => {
      history.push(currentPath);
    }, 2000);
  };

  const storeAction = (currentPath, values) => {
    setLoading(true);
    setErrorApiRequest([]);
    store(currentPath, values)
      .then((response) => {
        const { data } = response;
        if (data.hasOwnProperty("length")) {
          let errors = data
            .map((item, idx) => (item[idx] = item.message))
            .join("<br>");
          setErrorApiRequest(errors);
        } else
          execToast(
            true,
            "Cadastro realizado com sucesso",
            "success",
            currentPath
          );

        setLoading(false);
      })
      .catch((error) => {
        execToast(true, "Sua sessão expirou", "fail", "/login");
        setLoading(false);
      });
  };

  const updateAction = (currentPath, id, values) => {
    setLoading(true);
    update(currentPath, id, values)
      .then((response) => {
        const { data } = response;
        if (data.hasOwnProperty("length")) {
          let errors = data
            .map((item, idx) => (item[idx] = item.message))
            .join("<br>");
          setErrorApiRequest(errors);
        } else
          execToast(
            true,
            "Atualização realizada com sucesso",
            "success",
            currentPath
          );

        setLoading(false);
      })
      .catch((error) => {
        execToast(true, "Sua sessão expirou", "fail", "/login");
        setLoading(false);
      });
  };

  const deleteAction = (currentPath, id, values) => {
    setLoading(true);
    destroy(currentPath, id, values)
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <>
      {toast && (
        <Notification
          message={paramsToast.description}
          type={paramsToast.type}
        />
      )}
      <Loading loading={loading} />
      {children(
        (currentPath, values) => storeAction(currentPath, values),
        (currentPath, id, values) => updateAction(currentPath, id, values),
        errorApiRequest
      )}
    </>
  );
};

export default BaseForm;
