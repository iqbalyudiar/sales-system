import gql from "graphql-tag";

const addItem = gql`
  mutation($food: String, $category: String, $level: String, $package: String) {
    addItem(
      input: {
        food: { _id: $food }
        category: { _id: $category }
        level: { _id: $level }
        package: { _id: $package }
        quantity: 3
      }
    ) {
      _id
    }
  }
`;
