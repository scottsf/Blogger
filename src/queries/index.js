import gql from "graphql-tag";

export const GET_ME = gql`
  query {
    me {
      id
      name
      email
      password
      createdAt
      likes {
        id
        title
        body
        image
        published
        disabled
        # likedBy {
        #   id
        # }
        totalLikes
      }
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export const GET_POSTS = gql`
  query($query: String!) {
    posts(query: $query, orderBy: createdAt_DESC) {
      id
      title
      body
      image
      published
      disabled
      # likedBy {
      #   id
      # }
      totalLikes
    }
  }
`;

export const GET_POST = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      title
      body
      image
      disabled
      # likedBy {
      #   id
      # }
      totalLikes
      comments {
        id
        text
      }
    }
  }
`;

export const GET_MY_POSTS = gql`
  query($search: String!) {
    myPosts(query: $search) {
      id
      title
      body
      image
      # likedBy {
      #   id
      # }
      totalLikes
    }
  }
`;

export const GET_COMMENTS = gql`
  query($post_id: ID, $query: String) {
    comments(post_id: $post_id, query: $query) {
      id
      text 
      createdAt
      author_id {
        id
        name
      }
    }
  }
`;
