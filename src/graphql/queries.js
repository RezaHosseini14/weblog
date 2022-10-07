import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
        }
      }
      id
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POSTS_INFO = gql`
  query getPostInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          id
          name
          field
          avatar {
            url
          }
        }
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
      slug
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_POSTS_INFO,
  GET_POST_COMMENTS,
};