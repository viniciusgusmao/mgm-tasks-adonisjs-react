"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Company", () => {
  return {
    name: "Empresa Teste",
    email: "empresa1@empresa.com.br",
    password: "empresa@123",
  };
});

Factory.blueprint("App/Models/Customer", (faker, i, data) => {
  return {
    name: faker.company(),
    avatar: faker.avatar({ protocol: "https" }),
    email: faker.email(),
    cellphone: faker.phone(),
    street: faker.address(),
    number: faker.integer({ min: 300, max: 999 }),
    district: faker.province(),
    city: faker.city(),
    state: faker.state(),
    cep: faker.zip(),
    cpf: faker.cpf(),
    cnpj: null,
    company_id: data.company_id,
  };
});

const arrProjectStatus = [
  "APROVADO",
  "ATIVO",
  "EM PROGRESSO",
  "ATRASADO",
  "CANCELADO",
  "COMPLETO",
];

Factory.blueprint("App/Models/Project", (faker, i, data) => {
  return {
    name: "Project " + faker.integer({ min: 1, max: 999 }),
    description: faker.paragraph().substr(0, 250),
    start: "2020-10-01 08:00",
    end: "2020-10-01 10:00",
    cost: faker.integer({ min: 200, max: 700 }),
    status: arrProjectStatus[faker.integer({ min: 0, max: 5 })],
    customer_id: faker.integer({
      min: data.firstCustomerId,
      max: data.lastCustomerId,
    }),
  };
});

const arrTaskStatus = [
  "EM ABERTO",
  "EM DESENVOLVIMENTO",
  "EM ANÁLISE",
  "EM TESTE",
  "RESOLVIDO",
];

const arrTaskPriority = ["BAIXA", "MÉDIA", "ALTA"];

Factory.blueprint("App/Models/Task", (faker, i, data) => {
  return {
    name: "Tarefa " + faker.integer({ min: 1, max: 999 }),
    description: faker.paragraph().substr(0, 250),
    start: "2020-10-01 08:00",
    end: "2020-10-01 10:00",
    priority: arrTaskPriority[faker.integer({ min: 0, max: 2 })],
    status: arrTaskStatus[faker.integer({ min: 0, max: 4 })],
    project_id: faker.integer({
      min: data.firstProjectrId,
      max: data.lastProjectId,
    }),
  };
});

Factory.blueprint("App/Models/Employee", (faker) => {
  return {
    name: faker.name(),
    email: faker.email(),
  };
});
