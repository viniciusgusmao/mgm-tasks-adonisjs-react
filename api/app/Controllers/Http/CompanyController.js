'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Company = use('App/Models/Company');

class CompanyController {

  async index ({ request, response, view }) {
    const company = await Company
    .query()
    .with('customers')
    .fetch()
    response.send(company);
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
    const company = await Company.find(params.id);
    response.send(company);
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = CompanyController
