'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('avatar')
      table.string('cpf',14)
      table.string('cnpj',18)
      table.string('email').notNullable().unique()
      table.string('cellphone')
      table.string('street')
      table.string('number')
      table.string('district')
      table.string('city')
      table.string('state')
      table.string('cep')
      table.integer('company_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
