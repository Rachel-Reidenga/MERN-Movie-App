const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }    

    type Mutation {
        login(email:String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveMovie(movieData: MovieInput!): User
        removeMovie(movieId: ID!): User
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        movieCount: Int
        savedMovies: [Movie]
    }

    type Movie {
        movieId: ID!
        title: String
        description: String
        image: String
        link: String
    }

    input MovieInput {
        movieId: String!
        title: String
        description: String
        image: String
        link: String
    }
    
    type Auth {
        token: ID!
        user: User
    }

`;

module.exports = typeDefs;
