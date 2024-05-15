import express, { query } from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/dist/esm/express4';
export async function initServer() {
  const app = express();
  app.use(bodyParser.json());
  const graphqlServer = new ApolloServer({
    typeDefs: `
    type Query{
sayHello:String

    }
    type Muatation{

    }
    `,
    resolvers: {
      Query: {
        sayHello: () => `Hello from graphql server`,
      },
      Muatation: {},
    },
  });
  await graphqlServer.start();
  app.use('/graphql', expressMiddleware(graphqlServer));
  return app;
}
