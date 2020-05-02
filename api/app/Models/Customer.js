'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
  projects () {
    return this.hasMany('App/Models/Project')
  }
  company () {
    return this.belongsTo('App/Models/Company')
  }
}

module.exports = Customer
