import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        savedBooks {
          authors
          bookId
          description
          image
          link
          title
        }
        email
      }
    }
  }
`;

export const SAVE_BOOk = gql`
mutation SaveBook($description: String!, $bookId: String!, $title: String!) {
    saveBook(description: $description, bookId: $bookId, title: $title) {
      savedBooks {
        bookId
        title
        description
      }
      username
    }
  }
`;

export const DELETE_BOOK = gql`
mutation DeleteBook($description: String!, $bookId: String!, $title: String!) {
    deleteBook(description: $description, bookId: $bookId, title: $title) {
      username
      savedBooks {
        bookId
        title
      }
    }
  }
`;


export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
  `;