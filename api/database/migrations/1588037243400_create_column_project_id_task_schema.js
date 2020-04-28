'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateColumnProjectIdTaskSchema extends Schema {
  up () {
    this.alter('tasks', (table) => {
      table.integer('project_id').notNullable()
    })
  }

  down () {
    this.alter('tasks', (table) => {
      table.dropColumn('project_id')
    })
  }
}

module.exports = CreateColumnProjectIdTaskSchema
