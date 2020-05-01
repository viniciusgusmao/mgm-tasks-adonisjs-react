'use strict'


const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers');

const typeDefs = `
  type Company {
    id: Int!
    name: String!
    email: String!
    customers: [Customer]
  }
  type Customer {
    id: Int!
    name: String!
    avatar: String
    email: String!
    cellphone: String
    street: String
    number: Int
    district: String
    city: String
    state: String
    cep: String
    cpf: String
    cnpj: String
    company: Company
  }
  type Project {
    id: Int!
    name: String!
    description: String
    start: String!
    end: String!
    cost: Float
    status: String
    customer: Customer
    tasks: [Task]
  }
  type Task {
    id: Int!
    name: String!
    description: String
    start: String!
    end: String!
    status: String
    priority: String
    project: Project
    employees: [Employee]
  }
  type Employee {
    id: Int!
    name: String!
    email: String!
    tasks: [Task]
  }
  type Query {
    fetchCompany(id: Int!): Company
    allCustomers: [Customer]
    fetchCustomer(id: Int!): Customer
    allProjects: [Project]
    allProjectsWithSelectedTasks(id: Int!): [Project]
    fetchProject(id: Int!): Project
    allTasks: [Task]
    fetchTask(id: Int!): Task
    allEmployees: [Employee]
    fetchEmployee(id: Int!): Employee
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers })
