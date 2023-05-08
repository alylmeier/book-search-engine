import { gql } from '@apollo/client'; 

export const QUERY_USERS = gql`
query Users {
    users {
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }

`;

export const QUERY_SINGLE_USER = gql`
query User($username: String!) {
    user(username: $username) {
      email
      username
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;

export const QUERY_ME = gql`
    query Query {
    me {
      email
      username
      savedBooks {
        bookId
      }
    }
  }
`;