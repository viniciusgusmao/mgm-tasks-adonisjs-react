'use strict'

class StoreEmployee {
  get rules () {
    return {
      email: 'required|email',
      name: 'required'
    }
  }
  get validateAll () {
    return true
  }
  get messages () {
    return {
      'email.required': 'O campo E-MAIL é obrigatório.',
      'email.email': 'Digite um E-MAIL válido.',
      'email.unique': 'Este E-MAIL já está registrado.',
      'name.required': 'O campo NOME é obrigatório.',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreEmployee
