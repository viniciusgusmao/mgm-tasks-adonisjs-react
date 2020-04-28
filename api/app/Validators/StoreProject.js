'use strict'

class StoreProject {
  get rules () {
    return {
      name: 'required',
      customer_id: 'required',
      start: 'required',
      end: 'required',
      status: 'required|in:APROVADO,ATIVO,EM PROGRESSO,COMPLETO,CANCELADO,ATRASADO',
      cost: 'required|number'
    }
  }
  get validateAll () {
    return true
  }
  get messages () {
    return {
      'name.required': 'O campo NOME é obrigatório.',
      'customer_id.required': 'O campo CLIENTE é obrigatório.',
      'start.required': 'A DATA INICIAL é um campo obrigatório.',
      'end.required': 'O DATA FINAL é um campo obrigatório.',
      'status.required': 'O campo STATUS é obrigatório.',
      'status.in': 'O campo STATUS só aceita os valores: APROVADO,ATIVO,EM PROGRESSO,COMPLETO,CANCELADO ou ATRASADO',
      'cost.required': 'O campo VALOR é obrigatório.',
      'cost.number': 'Digite um VALOR válido.',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreProject
