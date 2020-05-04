'use strict'

class StoreCustomer {
  get rules () {
    return {
      email: 'required|email',
      name: 'required',
      company_id: 'required',
      cpf: 'min:11|max:14',
      cnpj: 'unique:customers'
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
      'cnpj.unique': 'Este CNPJ já está cadastrado',
      'name.required': 'O campo NOME é obrigatório.',
      'company_id.required': 'O campo EMPRESA é obrigatório.',
      'cpf.min': 'O campo CPF deve ter no mínimo 13 caracteres',
      'cpf.max': 'O campo CPF deve ter no máximo 14 caracteres',
      'cpf.unique': 'Este CPF já está cadastrado'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreCustomer
