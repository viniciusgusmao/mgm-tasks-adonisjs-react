'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskEmployeeSchema extends Schema {
  up () {
    this.create('task_employees', (table) => {
      table.increments()
      table.integer('task_id')
      table.integer('employee_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('task_employees')
  }
}

module.exports = TaskEmployeeSchema
