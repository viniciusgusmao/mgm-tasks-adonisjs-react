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

Factory.blueprint("App/Models/Customer", (faker) => {
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
    company_id: 1,
  };
});
