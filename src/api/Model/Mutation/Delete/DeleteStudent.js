import { gql } from "@apollo/client";

export const DELETE_STUDENT = gql`
  mutation DeleteStudent($npm: Int!) {
    delete_students_by_pk(npm: $npm) {
      npm
    }
  }
`;
