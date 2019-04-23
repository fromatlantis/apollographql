import Koa from 'koa'
import { ApolloServer, gql }  from 'apollo-server-koa'
import { createStore } from './mongoose'
import InfoAPI from './datasources/info'

import { typeDefs } from './schema/info'
import { resolvers } from './resolvers/info'

createStore()

// set up any dataSources our resolvers need
const dataSources = () => ({
    InfoAPI: new InfoAPI()
});

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }) => {
    return { user: { } };
};

// Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources,
    context,
});

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);