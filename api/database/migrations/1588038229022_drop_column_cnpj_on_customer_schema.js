'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropColumnCnpjOnCustomerSchema extends Schema {
  up () {
    this.table('customers', (table) => {
      table.dropColumn('cnpj')
    })
  }

  down () {
    this.table('customers', (table) => {
      table.string('cnpj',18)
    })
  }
}

module.exports = DropColumnCnpjOnCustomerSchema
