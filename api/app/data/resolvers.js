'use strict'

const Company = use('App/Models/Company');
const Customer = use('App/Models/Customer');
const Project = use('App/Models/Project');
const Task = use('App/Models/Task');
const Employee = use('App/Models/Employee');

const resolvers = {
  Query: {
    async fetchCompany(_, { id }){
      const elements = await Company
        .query()
        .where('id',id)
        .with('customers.projects')
        .fetch()
      return elements.toJSON()[0];
    },
    async allCustomers(){
      const elements = await Customer
        .query()
        .with('company')
        .fetch()
      return elements.toJSON()
    },
    async fetchCustomer(_, { id }){
      const elements = await Customer
        .query()
        .where('id',id)
        .with('company')
        .fetch()
      return elements.toJSON()[0];
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
      const element = await Project
        .query()
        .where('id',id)
        .with('customer')
        .fetch();
      return element.toJSON()[0];

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
        .with('project')
        .fetch();
      return element.toJSON()[0];
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
