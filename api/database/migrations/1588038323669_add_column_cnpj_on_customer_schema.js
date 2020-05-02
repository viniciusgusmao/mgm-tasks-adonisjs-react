'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnCnpjOnCustomerSchema extends Schema {
  up () {
    this.table('customers', (table) => {
      table.string('cnpj',18).unique()
    })
  }

  down () {
    this.table('customers', (table) => {
      table.dropColumn('cnpj')
    })
  }
}

module.exports = AddColumnCnpjOnCustomerSchema
