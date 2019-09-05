// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

let i = 10;

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql` 
// #3 Define the respective type with three fields
// #Note that the _id is created automatically by mongoose
    type Post {
        _id: ID,
        title: String,
        content: String
    },
    #4 Define the query type that must respond to 'posts' query
    type Query{
        posts:[post]
    },
    #5 Define a mutation to add new posts with two qreuired fields
    type Mutation {
        addpost(title: String!, content: String!): Post,
    }`;

module.exports = typeDefs;
