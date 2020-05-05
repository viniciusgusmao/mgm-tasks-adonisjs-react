"use strict";

/*
|--------------------------------------------------------------------------
| EmployeeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class EmployeeSeeder {
  async run() {
    await Factory.model("App/Models/Employee").createMany(15);
  }
}

module.exports = EmployeeSeeder;
