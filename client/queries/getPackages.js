import gql from "graphql-tag";

export const GET_PACKAGES = gql`
  {
    packages {
      _id
      name
    }
  }
`;
