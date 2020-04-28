'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Company = use(`App/Models/Company`);

class UserController {

  async login ({ request, auth, response }) {
    const email = request.input("email")
    const password = request.input("password");
    try {
      if (await auth.attempt(email, password)) {
        let company = await Company.findBy('email', email)
        let accessToken = await auth.generate(company)
        return response.json({"user":company, "access_token": accessToken})
      }
    }
    catch (e) {
      return response.json({message: 'Você precisa primeiro se cadastrar.'})
    }
  }

  async register({ request, response }){
    const name = request.input("name")
    const email = request.input("email")
    const password = request.input("password");
    const company = await Company.create({
      name,
      email,
      password
    });
    response.send(company);
  }

}

module.exports = UserController;
