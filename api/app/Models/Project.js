'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  tasks () {
    return this.hasMany('App/Models/Task')
  }
  customer () {
    return this.belongsTo('App/Models/Customer')
  }

}

module.exports = Project
