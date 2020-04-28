'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/* --------------------------------------------- */
const currentController = "ProjectController";
const currentModel = "Project";
const indexObjParams = {
  relationDependency: 'customer',
}
const destroyObjParams = {
  relationDependency: 'tasks',
  messageFail: 'Existem tarefas ligados à esse projeto.'
}
/* --------------------------------------------- */

const Element = use(`App/Models/${currentModel}`);
let classes = {};
classes[currentController] = class {

  async store ({ request, response }) {
    const body = request.all()
    const element = await Element.create(body)
    response.send(element);
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
