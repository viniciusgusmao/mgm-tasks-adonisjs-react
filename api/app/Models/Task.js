'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {

  static get dates () {
    return super.dates.concat(['start','end'])
  }

  employees () {
    return this.belongsToMany('App/Models/Employee').pivotTable('employee_task').withTimestamps()
  }
  project(){
    return this.belongsTo('App/Models/Project')
  }

  static castDates (field, value) {
    if (field === 'start' || field === 'end') {
      return value.format('YYYY-MM-DD HH:mm:ss')
    }
    return super.formatDates(field, value)
  }
}

module.exports = Task
