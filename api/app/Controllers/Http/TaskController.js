'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/* --------------------------------------------- */
const currentController = "TaskController";
const currentModel = "Task";
const indexObjParams = {
  relationDependency: 'project',
}
const destroyObjParams = {
  relationDependency: 'employees',
  messageFail: 'Existem funcionários ligados à essa tarefa.'
}
/* --------------------------------------------- */

const Element = use(`App/Models/${currentModel}`);
let classes = {};
classes[currentController] = class {


  async store ({ request, response }) {
    const body = request.all()
    const employees = body.employees;
    delete body.employees;
    const element = await Element.create(body)
    await this.employee_tasks(element.id,employees);
    response.send(element)
  }

  async employee_tasks(id,attach){
    const element = await Element.find(id)
    await element
      .employees()
      .attach(attach)
  }

  async update ({ params, request, response }) {
    const { id } = params
    const body = request.all()
    const element = await Element.find(id)

    const employees = body.employees;
    delete body.employees;

    Object.keys(body).map(item => {
      element[item] = body[item]
    })
    await element.save()

    await element.employees().detach()
    await this.employee_tasks(element.id,employees);

    response.send(element)
  }

  async destroy ({ params, request, response }) {
    const { id } = params
    const { rows } = await Element
      .query()
      .where('id',id)
      .has(destroyObjParams.relationDependency)
      .fetch()

    if (rows.length > 0)
      response.send({ "success" : false, "message": destroyObjParams.messageFail })
    else {
      await element.delete();
      response.send({ "success" : true })
    }
  }
}

module.exports = classes[currentController]
