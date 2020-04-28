'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  employees () {
    return this.belongsToMany('App/Models/Employee').pivotTable('employee_task').withTimestamps()
  }
  project(){
    return this.belongsTo('App/Models/Project')
  }
}

module.exports = Task
