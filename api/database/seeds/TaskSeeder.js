"use strict";

const Project = use("App/Models/Project");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class TaskSeeder {
  async run() {
    try {
      const projects = await Project.all();
      const firstProjectrId = projects.rows[0].id;
      const lastProjectId = projects.rows[projects.rows.length - 1].id;

      await Factory.model("App/Models/Task").createMany(40, {
        firstProjectrId,
        lastProjectId,
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TaskSeeder;
