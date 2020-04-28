'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employee extends Model {
  tasks () {
    return this.belongsToMany('App/Models/Task').pivotTable('employee_task')
  }

}

module.exports = Employee
