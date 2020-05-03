"use strict";

const Company = use("App/Models/Company");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class CustomerSeeder {
  async run() {
    const company = await Company.findBy("email", "empresa1@empresa.com.br");
    await Factory.model("App/Models/Customer").createMany(10, {
      company_id: company.id,
    });
  }
}

module.exports = CustomerSeeder;
