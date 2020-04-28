'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/* --------------------------------------------- */
const currentController = "CompanyController";
const currentModel = "Company";
/* --------------------------------------------- */

const Element = use(`App/Models/${currentModel}`);
let classes = {};
classes[currentController] = class {

  async show ({ params, request, response, view }) {
    const { id } = params
    const element = await Element.find(id)
    response.send(element)
  }

}

module.exports = classes[currentController]
