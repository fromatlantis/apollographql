import { gql } from "apollo-server-koa";

export const typeDefs = gql`
  type Query {
    tasks: [Task]
    task(id: ID!): Task
  }

  type Mutation {
    addTask(task: inputTask!): UpdateResponse!
    deleteTask(id: ID!): UpdateResponse!
    updateTask(id: ID!,task: inputTask!): UpdateResponse!
  }

  type Task {
    id: ID!
    name: String
    status: String
    meta: Meta
  }

  type Meta {
    createdAt: String
    updatedAt: String
  }

  input inputTask{
    name: String
    status: String
  }

  type UpdateResponse {
    success: Boolean!
    message: String
  }
`;
