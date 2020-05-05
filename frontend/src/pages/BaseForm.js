import React, { useState } from "react";
import Notification from "components/Notification";
import Loading from "components/Loading";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { store, update, destroy } from "services/crud";

const BaseForm = ({ children }) => {
  const history = useHistory();
  const [errorApiRequest, setErrorApiRequest] = useState([]);
  const [loading, setLoading] = useState(false);

  const execToast = (description, type, currentPath, delay = true) => {
    if (type == "success") {
      toast.success(description, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        closeButton: true,
      });

      if (delay)
        setTimeout(() => {
          history.push(currentPath);
        }, 2000);
      else history.push(currentPath);

    } else {
      toast.error(description, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        closeButton: true,
      });
      history.push(currentPath);
    }
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
          execToast("Cadastro realizado com sucesso", "success", currentPath);

        setLoading(false);
      })
      .catch((error) => {
        execToast("Sua sessão expirou", "fail", "/login");
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
            "Atualização realizada com sucesso",
            "success",
            currentPath
          );

        setLoading(false);
      })
      .catch((error) => {
        execToast("Sua sessão expirou", "fail", "/login");
        setLoading(false);
      });
  };

  const deleteAction = (currentPath, id) => {
    const resposta = window.confirm("Você tem certeza dessa exclusão ?");
    if (resposta) {
      setLoading(true);
      destroy(currentPath, id)
        .then((response) => {
          const { data } = response;
          if (data.success)
            execToast("Item excluído com sucesso", "success", currentPath);
          else execToast("Erro! " + data.message, "fail", currentPath);

          setLoading(false);
        })
        .catch((error) => {
          execToast("Sua sessão expirou", "fail", "/login");
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Loading loading={loading} />
      {children(
        (currentPath, values) => storeAction(currentPath, values),
        (currentPath, id, values) => updateAction(currentPath, id, values),
        (currentPath, id) => deleteAction(currentPath, id),
        errorApiRequest
      )}
    </>
  );
};

export default BaseForm;
