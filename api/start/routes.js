'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const ApolloServer = use('ApolloServer')
const schema = require('../app/data/schema');

Route.route('/graphql', ({ request, response }) => {
    return ApolloServer.graphql({ schema,  }, request, response)
}, ['GET','POST'])
  .middleware(['auth'])

Route.post('login','UserController.login');
Route.post('register','UserController.register');

Route.group(() => {
  Route.resource('customers', 'CustomerController')
    .validator(new Map([
      [['customers.store','customers.update'], ['StoreCustomer']]
    ]))
    .apiOnly()

  Route.resource('projects', 'ProjectController')
    .validator(new Map([
      [['projects.store','projects.update'], ['StoreProject']]
    ]))
    .apiOnly()
  Route.get('projects/:id/tasks', 'ProjectController.showWithTaskFilter')

  Route.resource('tasks', 'TaskController')
    .validator(new Map([
      [['tasks.store','tasks.update'], ['StoreTask']]
    ]))
    .apiOnly()

  Route.post('tasks/:id/employees','TaskController.employee_tasks')

  Route.resource('employees', 'EmployeeController')
    .validator(new Map([
      [['employees.store','employees.update'], ['StoreEmployee']]
    ]))
    .apiOnly()
})
.prefix('api/v1')
.middleware(['auth'])


