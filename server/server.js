const express = require('express');
const path = require('path');

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import middleware
const { authMiddleware } = require('./utils/auth');

// import typeDefs & resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

// create a new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// integrate our apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
  // LOG WHERE WE CAN TEST GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
