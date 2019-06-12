import { gql } from "apollo-boost";

export const SIGNIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
      }
      token
    }
  }
`;

export const SIGNUP = gql`
  mutation($data: createUserInput!) {
    createUser(data: $data) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation($data: createPostInput!) {
    createPost(data: $data) {
      id
      title
      body
      disabled
      published
    }
  }
`;

export const DELETE_POST = gql`
  mutation($id: String!){ 
    deletePost(id: $id) {
      id
      title
      published
    }
  }
`;
