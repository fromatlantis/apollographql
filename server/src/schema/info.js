import { gql } from "apollo-server-koa";

export const typeDefs = gql`
  type Query {
    infos: [Info]
    info(id: ID!): Info
  }

  type Mutation {
    addInfo(info: inputInfo!): UpdateResponse!
    deleteInfo(id: ID!): UpdateResponse!
    updateInfo(id: ID!,info: inputInfo!): UpdateResponse!
  }

  type Info {
    id: ID!
    height: String
    weight: String
    hobby: [String]
    meta: Meta
  }

  type Meta {
    createdAt: String
    updatedAt: String
  }

  input inputInfo{
    height: String
    weight: String
    hobby: [String]
  }

  type UpdateResponse {
    success: Boolean!
    message: String
  }
`;
