const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String!
  }

  type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: String, description: String!,  bookId: String!, image: String, link: String, title: String!): User
    deleteBook(authors: String, description: String!,  bookId: String!, image: String, link: String, title: String!): User
  }
`;

module.exports = typeDefs;
