import Koa from 'koa'
import { ApolloServer }  from 'apollo-server-koa'
import { createStore } from './mongoose'
import { dataSources } from './datasources'

import { schema } from './graphql/schema'
//import { typeDefs } from './schema/info'
//import { resolvers } from './resolvers/info'

createStore()

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }) => {
    return { user: { } };
};

const server = new ApolloServer({ 
    schema,
    dataSources,
    context,
});

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);