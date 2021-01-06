import gql from "graphql-tag";

export const ADD_BOOK = gql`
  mutation(
    $idItem: String
  ) {
    addOrder(input:[{
        _id: $$idItem
    }])
  }
`;
