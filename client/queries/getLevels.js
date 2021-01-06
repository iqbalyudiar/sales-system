import gql from "graphql-tag";

export const GET_LEVELS = gql`
  {
    levels {
      _id
      name
    }
  }
`;
