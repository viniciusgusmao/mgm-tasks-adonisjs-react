'use strict'

class StoreTask {
  get rules () {
    return {
      name: 'required',
      project_id: 'required',
      start: 'required',
      end: 'required',
      status: 'required|in:EM ABERTO,EM DESENVOLVIMENTO,EM ANÁLISE,EM TESTE,RESOLVIDO',
      priority: 'required|in:BAIXA,MÉDIA,ALTA'
    }
  }
  get validateAll () {
    return true
  }
  get messages () {
    return {
      'name.required': 'O campo NOME é obrigatório.',
      'project_id.required': 'O campo PROJETO é obrigatório.',
      'start.required': 'A DATA INICIAL é um campo obrigatório.',
      'end.required': 'O DATA FINAL é um campo obrigatório.',
      'status.required': 'O STATUS é um campo obrigatório.',
      'status.in': 'O campo STATUS só aceita os valores: EM ABERTO,EM DESENVOLVIMENTO,EM ANÁLISE,EM TESTE,RESOLVIDO',
      'priority.required': 'A PRIORIDADE é um campo obrigatório.',
      'priority.in': 'O campo PRIORIDADE só aceita os valores: BAIXA,MÉDIA ou ALTA',

    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreTask
