import { gql } from "@apollo/client";

export const GET_ATTENDANCES = gql`
  subscription GetAttendances($schedules_id: Int!) {
    attendances(
      where: { schedules_id: { _eq: $schedules_id } }
      order_by: { npm: asc }
    ) {
      student {
        npm
        fullname
      }
      p_1
      p_2
      p_3
      p_4
      p_5
      p_6
      p_7
      p_8
      p_9
      p_10
      p_11
      p_12
      p_13
      p_14
      p_15
      p_16
      p_17
      p_18
      p_19
      p_20
      p_21
      p_22
      p_23
      p_24
      p_25
      p_26
      p_27
      p_28
      p_29
      p_30
      p_31
      p_32
      p_33
      p_34
      p_35
      p_36
      p_37
      p_38
      p_39
      p_40
      p_41
      p_42
      p_43
      p_44
      p_45
      p_46
      p_47
      p_48
      p_49
      p_50
      p_51
      p_52
      p_53
      p_54
      p_55
      p_56
      p_57
      p_58
      p_59
      p_60
    }
  }
`;