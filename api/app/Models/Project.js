'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

  static get dates () {
    return super.dates.concat(['start','end'])
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }
  customer () {
    return this.belongsTo('App/Models/Customer')
  }

  static castDates (field, value) {
    if (field === 'start' || field === 'end') {
      return value.format('YYYY-MM-DD HH:mm:ss')
    }
    return super.formatDates(field, value)
  }

}

module.exports = Project
