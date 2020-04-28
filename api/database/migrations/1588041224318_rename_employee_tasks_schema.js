'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RenameEmployeeTasksSchema extends Schema {
  up () {
    this.rename('employee_tasks', 'employee_task')
  }

  down () {
    this.rename('employee_task', 'employee_tasks')
  }
}

module.exports = RenameEmployeeTasksSchema
