'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropColumnCpfOnCustomerSchema extends Schema {
  up () {
    this.table('customers', (table) => {
      table.dropColumn('cpf')
    })
  }

  down () {
    this.table('drop_column_cpf_on_customers', (table) => {
      table.string('cpf',14)
    })
  }
}

module.exports = DropColumnCpfOnCustomerSchema
