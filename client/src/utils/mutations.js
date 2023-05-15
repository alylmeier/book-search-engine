import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

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

export const SAVE_BOOK = gql`
mutation SaveBook($description: String!, $bookId: String!, $title: String!, $authors: [String], $image: String, $link: String) {
  saveBook(description: $description, bookId: $bookId, title: $title, authors: $authors, image: $image, link: $link) {
    email
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

export const DELETE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      bookCount
      savedBooks {
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
