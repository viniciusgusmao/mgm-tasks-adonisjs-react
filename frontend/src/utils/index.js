export const isLogin = () => {
  const user = JSON.parse(localStorage.getItem("@user_gp"));
  return Boolean(user);
};

export const getIdCompany = () => {
  const company_id_ = JSON.parse(localStorage.getItem("@user_gp"));
  return company_id_.id;
};

export const getToken = () => {
  const token_ = JSON.parse(localStorage.getItem("@user_gp"));
  return token_?.token;
};

export const getUserLogged = () => {
  return JSON.parse(localStorage.getItem("@user_gp"));
};

export const getAvailableProjectStatus = () => {
  return [
    {
      id: "APROVADO",
      name: "APROVADO",
    },
    {
      id: "ATIVO",
      name: "ATIVO",
    },
    {
      id: "EM PROGRESSO",
      name: "EM PROGRESSO",
    },
    {
      id: "ATRASADO",
      name: "ATRASADO",
    },
    {
      id: "CANCELADO",
      name: "CANCELADO",
    },
    {
      id: "COMPLETO",
      name: "COMPLETO",
    },
  ];
};

export const getAvailableTaskStatus = () => {
  return [
    {
      id: "EM ABERTO",
      name: "EM ABERTO",
    },
    {
      id: "EM DESENVOLVIMENTO",
      name: "EM DESENVOLVIMENTO",
    },
    {
      id: "EM ANÁLISE",
      name: "EM ANÁLISE",
    },
    {
      id: "EM TESTE",
      name: "EM TESTE",
    },
    {
      id: "RESOLVIDO",
      name: "RESOLVIDO",
    },
  ];
};

export const getAvailableTaskPriority = () => {
  return [
    {
      id: "BAIXA",
      name: "BAIXA",
    },
    {
      id: "MÉDIA",
      name: "MÉDIA",
    },
    {
      id: "ALTA",
      name: "ALTA",
    },
  ];
};

export const prepareArrayProjectsToFillInSelect = (data) => {
  const projectsFill = [];
  data.fetchCompany.customers.forEach((item) => {
    if (item.projects.length > 0) {
      item.projects.forEach((project) => {
        projectsFill.push({
          id: project.id,
          name: project.name,
        });
      });
    }
  });
  return projectsFill;
};

export const prepareArrayEmployeesToFillInSelect = (data) => {
  const employeesFill = [];
  data.allEmployees.forEach((item) => {
    employeesFill.push({
      id: item.id,
      name: item.name,
    });
  });
  return employeesFill;
};

export const prepapreInitialValuesWithSameKeysOfTable = (data, model) => {
  let initialValues = {};
  data && delete data["__typename"];
  for (let key in data) {
    if (key !== model) {
      if (key === "start") {
        let d = data[key].split(" ");
        initialValues["start_date"] = d[0];
        initialValues["start_time"] = d[1];
      } else if (key === "end") {
        let d = data[key].split(" ");
        initialValues["end_date"] = d[0];
        initialValues["end_time"] = d[1];
      } else initialValues[key] = data[key];
    } else initialValues[`${model}_id`] = data[key]["id"];
  }
  return initialValues;
};

export const joinDateTimeAndPrepareToDB = (values) => {
  const dataMod = values;
  dataMod["start"] = values.start_date + " " + values.start_time;
  dataMod["end"] = values.end_date + " " + values.end_time;
  delete dataMod["start_date"];
  delete dataMod["start_time"];
  delete dataMod["end_date"];
  delete dataMod["end_time"];
  delete dataMod["__typename"];
  return dataMod;
};
