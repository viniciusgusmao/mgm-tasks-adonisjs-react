"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/* --------------------------------------------- */
const currentController = "TaskController";
const currentModel = "Task";
const indexObjParams = {
  relationDependency: "project",
};
const destroyObjParams = {
  relationDependency: "employees",
  messageFail: "Existem funcionários ligados à essa tarefa.",
};
/* --------------------------------------------- */

const Element = use(`App/Models/${currentModel}`);
let classes = {};
classes[currentController] = class {
  async store({ request, response }) {
    const body = request.all();
    const employees = body.employees;
    delete body.employees;
    const element = await Element.create(body);
    await this.attach_employee_tasks(element.id, employees);
    response.send(element);
  }

  async attach_employee_tasks(id, attach) {
    const element = await Element.find(id);
    await element.employees().attach(attach);
  }

  async detach_employee_tasks(id) {
    const element = await Element.find(id);
    await element.employees().detach();
  }

  async update({ params, request, response }) {
    const { id } = params;
    const body = request.all();
    const element = await Element.find(id);

    const employees = body.employees;
    delete body.employees;

    Object.keys(body).map((item) => {
      element[item] = body[item];
    });
    await element.save();

    await this.detach_employee_tasks(id);
    await this.attach_employee_tasks(element.id, employees);

    response.send(element);
  }

  async destroy({ params, request, response }) {
    const { id } = params;
    const element = await Element.find(id);
    await this.detach_employee_tasks(id);
    await element.delete();
    response.send({ success: true });
  }
};

module.exports = classes[currentController];
