'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeTaskSchema extends Schema {
  up () {
    this.create('employee_tasks', (table) => {
      table.increments()
      table.integer('task_id')
      table.integer('employee_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('employee_tasks')
  }
}

module.exports = EmployeeTaskSchema
