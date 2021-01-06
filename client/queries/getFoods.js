import gql from "graphql-tag";

export const GET_FOODS = gql`
  {
    foods {
      _id
      name
    }
  }
`;
