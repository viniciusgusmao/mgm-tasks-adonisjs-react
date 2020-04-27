'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {

  static get hidden () {
    return ['password']
  }

  customers () {
    return this.hasMany('App/Models/Customer')
  }
}

module.exports = Company
