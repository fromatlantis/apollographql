import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from '../typeDefs/info'
import { resolvers } from '../resolvers/info'
export const infoSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});
