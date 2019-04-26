import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from '../typeDefs/task'
import { resolvers } from '../resolvers/task'
export const taskSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});
