import { gql } from "@apollo/client";

export const UPDATE_ATTENDANCE_P1 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_1: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P2 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_2: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P3 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_3: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P4 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_4: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P5 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_5: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P6 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_6: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P7 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_7: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P8 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_8: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P9 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_9: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P10 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_10: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P11 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_11: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P12 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_12: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P13 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_13: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P14 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_14: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P15 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_15: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P16 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_16: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P17 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_17: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P18 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_18: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P19 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_19: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P20 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_20: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P21 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_21: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P22 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_22: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P23 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_23: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P24 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_24: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P25 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_25: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P26 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_26: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P27 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_27: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P28 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_28: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P29 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_29: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P30 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_30: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P31 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_31: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P32 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_32: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P33 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_33: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P34 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_34: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P35 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_35: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P36 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_36: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P37 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_37: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P38 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_38: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P39 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_39: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P40 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_40: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P41 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_41: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P42 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_42: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P43 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_43: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P44 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_44: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P45 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_45: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P46 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_46: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P47 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_47: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P48 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_48: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P49 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_49: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P50 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_50: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P51 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_51: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P52 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_52: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P53 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_53: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P54 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_54: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P55 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_55: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P56 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_56: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P57 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_57: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P58 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_58: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P59 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_59: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
export const UPDATE_ATTENDANCE_P60 = gql`
  mutation UpdateAttendance($status: Int!, $npm: Int!, $schedules_id: Int!) {
    update_attendances(_set: { p_60: $status }, where: { npm: { _eq: $npm }, _and: { schedules_id: { _eq: $schedules_id } } }) {
      returning {
        npm
      }
    }
  }
`;
