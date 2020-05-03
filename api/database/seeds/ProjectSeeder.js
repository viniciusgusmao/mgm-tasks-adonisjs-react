"use strict";

const Customer = use("App/Models/Customer");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class ProjectSeeder {
  async run() {
    try {
      const customer = await Customer.all();
      const firstCustomerId = customer.rows[0].id;
      const lastCustomerId = customer.rows[customer.rows.length - 1].id;

      await Factory.model("App/Models/Project").createMany(20, {
        firstCustomerId,
        lastCustomerId,
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ProjectSeeder;
