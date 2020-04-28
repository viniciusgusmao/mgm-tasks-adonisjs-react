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

  async index ({ request, response, view }) {
    const elements = await Element
      .query()
      .with(indexObjParams.relationDependency)
      .fetch()
    response.send(elements)
  }

  async store ({ request, response }) {
    const body = request.all()
    const element = await Element.create(body)
    response.send(element)
  }

  async employee_tasks({ request, params, response }){
    const { id } = params;
    const { employees: attach } = request.all();

    const element = await Element.find(id)
    await element
      .employees()
      .attach(attach)

    response.send({ "success": true })

  }

  async show ({ params, request, response, view }) {
    const { id } = params
    const element = await Element
      .query()
      .where('id',id)
      .with('employees')
      .fetch();

    response.send(element)
  }

  async update ({ params, request, response }) {
    const { id } = params
    const body = request.all()
    const element = await Element.find(id)
    Object.keys(body).map(item => {
      element[item] = body[item]
    })
    await element.save()
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
