'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnCpfOnCustomerSchema extends Schema {
  up () {
    this.table('customers', (table) => {
      table.string('cpf',14).unique()
    })
  }

  down () {
    this.table('customers', (table) => {
      table.dropColumn('cpf')
    })
  }
}

module.exports = AddColumnCpfOnCustomerSchema
