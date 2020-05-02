'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description')
      table.datetime('start').notNullable()
      table.datetime('end').notNullable()
      table.decimal('cost').notNullable()
      table.enu('status',['APROVADO', 'ATIVO', 'EM PROGRESSO', 'ATRASADO', 'CANCELADO', 'COMPLETO']).notNullable()
      table.integer('customer_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
