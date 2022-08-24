import { gql } from "@apollo/client";

export const GET_SCHEDULE = gql`
  subscription GetSchedule($prodi: String!) {
    schedules(where: { class: { study_programs_id: { _eq: $prodi } } }) {
      id
      course {
        course_id
        course_name
      }
      class {
        id
        class_name
        study_programs_id
        study_program {
          study_program_name
        }
      }
      lecturer {
        nidn
        fullname
      }
      day
      room
      time
      meet_number
      roll_no
    }
  }
`;
