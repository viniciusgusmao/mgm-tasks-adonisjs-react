'use strict'

const Company = use('App/Models/Company');
const Customer = use('App/Models/Customer');
const Project = use('App/Models/Project');
const Task = use('App/Models/Task');
const Employee = use('App/Models/Employee');

const resolvers = {
  Query: {
    async fetchCompany(_, { id }){
      const element = await Company.find(id)
      return element.toJSON();
    },
    async allCustomers(){
      const elements = await Customer
        .query()
        .with('company')
        .fetch()
      console.log('teste');
      return elements.toJSON()
    },
    async fetchCustomer(_, { id }){
      const element = await Customer.find(id)
      return element.toJSON();
    },
    async allProjects(){
      const elements = await Project
        .query()
        .with('customer')
        .with('tasks')
        .fetch()
      return elements.toJSON();
    },
    async allProjectsWithSelectedTasks(_,{ id }){
      const elements = await Project
        .query()
        .where('id',id)
        .with('tasks', (builder) => {
          builder.whereIn('status', ['EM ABERTO', 'EM DESENVOLVIMENTO'])
        })
        .fetch()
      return elements.toJSON();
    },
    async fetchProject(_,{ id }){
      const element = await Project.find(id)
      return element.toJSON();
    },
    async allTasks(){
      const elements = await Task
      .query()
      .with('employees')
      .with('project')
      .fetch()
      console.log(elements.toJSON());
      return elements.toJSON();
    },
    async fetchTask(_, { id }){
      const element = await Task
        .query()
        .where('id',id)
        .with('employees')
        .fetch();
      return element.toJSON();
    },
    async allEmployees(){
      const elements = await Employee
        .query()
        .with('tasks')
        .fetch()
      return elements.toJSON();
    },
    async fetchEmployee(_, {id}){
      const element = await Employee.find(id)
      return element.toJSON();
    }
  }
}

module.exports = resolvers;
