import { gql } from "@apollo/client";

export const GET_SCHEDULE_BY_STUDENT = gql`
  subscription GetScheduleStudent($npm: Int!) {
    schedules(where: { attendances: { npm: { _eq: $npm } } }) {
      id
      time
      room
      day
      roll_no
      course {
        course_name
      }
      class {
        class_name
      }
      meet_number
      lecturer {
        fullname
        nidn
      }
    }
  }
`;
