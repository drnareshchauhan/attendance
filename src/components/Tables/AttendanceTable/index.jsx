import { useMutation, useSubscription } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ATTENDANCES } from "../../../api/Model/Subscription/GetAttendances";
import LoadingAnimationXL from "../../Loading/LoadingAnimationXL";
import {
  UPDATE_ATTENDANCE_P1,
  UPDATE_ATTENDANCE_P2,
  UPDATE_ATTENDANCE_P3,
  UPDATE_ATTENDANCE_P4,
  UPDATE_ATTENDANCE_P5,
  UPDATE_ATTENDANCE_P6,
  UPDATE_ATTENDANCE_P7,
  UPDATE_ATTENDANCE_P8,
  UPDATE_ATTENDANCE_P9,
  UPDATE_ATTENDANCE_P10,
  UPDATE_ATTENDANCE_P11,
  UPDATE_ATTENDANCE_P12,
  UPDATE_ATTENDANCE_P13,
  UPDATE_ATTENDANCE_P14,
  UPDATE_ATTENDANCE_P15,
  UPDATE_ATTENDANCE_P16,
  UPDATE_ATTENDANCE_P17,
  UPDATE_ATTENDANCE_P18,
  UPDATE_ATTENDANCE_P19,
  UPDATE_ATTENDANCE_P20,
  UPDATE_ATTENDANCE_P21,
  UPDATE_ATTENDANCE_P22,
  UPDATE_ATTENDANCE_P23,
  UPDATE_ATTENDANCE_P24,
  UPDATE_ATTENDANCE_P25,
  UPDATE_ATTENDANCE_P26,
  UPDATE_ATTENDANCE_P27,
  UPDATE_ATTENDANCE_P28,
  UPDATE_ATTENDANCE_P29,
  UPDATE_ATTENDANCE_P30,
  UPDATE_ATTENDANCE_P31,
  UPDATE_ATTENDANCE_P32,
  UPDATE_ATTENDANCE_P33,
  UPDATE_ATTENDANCE_P34,
  UPDATE_ATTENDANCE_P35,
  UPDATE_ATTENDANCE_P36,
  UPDATE_ATTENDANCE_P37,
  UPDATE_ATTENDANCE_P38,
  UPDATE_ATTENDANCE_P39,
  UPDATE_ATTENDANCE_P40,
  UPDATE_ATTENDANCE_P41,
  UPDATE_ATTENDANCE_P42,
  UPDATE_ATTENDANCE_P43,
  UPDATE_ATTENDANCE_P44,
  UPDATE_ATTENDANCE_P45,
  UPDATE_ATTENDANCE_P46,
  UPDATE_ATTENDANCE_P47,
  UPDATE_ATTENDANCE_P48,
  UPDATE_ATTENDANCE_P49,
  UPDATE_ATTENDANCE_P50,
  UPDATE_ATTENDANCE_P51,
  UPDATE_ATTENDANCE_P52,
  UPDATE_ATTENDANCE_P53,
  UPDATE_ATTENDANCE_P54,
  UPDATE_ATTENDANCE_P55,
  UPDATE_ATTENDANCE_P56,
  UPDATE_ATTENDANCE_P57,
  UPDATE_ATTENDANCE_P58,
  UPDATE_ATTENDANCE_P59,
  UPDATE_ATTENDANCE_P60,
} from "../../../api/Model/Mutation/Update/UpdateAttendance";
import LoadingAnimation from "../../Loading/LoadingAnimation";
import { MODAL_IS_PRESENT } from "../../../redux/modalSlice";

function AttendanceTable({ schedule_data, role }) {
  const dispatch = useDispatch();
  let meeting = "";
  const meetFilter = useSelector((state) => state.filter.meet_number);
  if (role === "lecturer") {
    meeting = schedule_data.meet_number.toString();
  } else {
    meeting = meetFilter;
  }
  const { data, loading } = useSubscription(GET_ATTENDANCES, {
    variables: { schedules_id: schedule_data.id },
  });
  const [attendances, setAttendances] = useState([]);
  const [attendanceIndex, setAttendanceIndex] = useState("");

  const [meetNumber, setMeetNumber] = useState(UPDATE_ATTENDANCE_P1);
  const [updatePresent, { loading: loadingPresent }] = useMutation(meetNumber);
  const [updateAbsent, { loading: loadingAbsent }] = useMutation(meetNumber);

  useEffect(() => {
    setAttendances([]);
    !loading &&
      data?.attendances.forEach((attendance) => {
        setAttendances((attendances) => [
          ...attendances,
          {
            npm: attendance.student.npm,
            fullname: attendance.student.fullname,
            p1: attendance.p_1,
            p2: attendance.p_2,
            p3: attendance.p_3,
            p4: attendance.p_4,
            p5: attendance.p_5,
            p6: attendance.p_6,
            p7: attendance.p_7,
            p8: attendance.p_8,
            p9: attendance.p_9,
            p10: attendance.p_10,
            p11: attendance.p_11,
            p12: attendance.p_12,
            p13: attendance.p_13,
            p14: attendance.p_14,
            p15: attendance.p_15,
            p16: attendance.p_16,
            p17: attendance.p_17,
            p18: attendance.p_18,
            p19: attendance.p_19,
            p20: attendance.p_20,
            p21: attendance.p_21,
            p22: attendance.p_22,
            p23: attendance.p_23,
            p24: attendance.p_24,
            p25: attendance.p_25,
            p26: attendance.p_26,
            p27: attendance.p_27,
            p28: attendance.p_28,
            p29: attendance.p_29,
            p30: attendance.p_30,
            p31: attendance.p_31,
            p32: attendance.p_32,
            p33: attendance.p_33,
            p34: attendance.p_34,
            p35: attendance.p_35,
            p36: attendance.p_36,
            p37: attendance.p_37,
            p38: attendance.p_38,
            p39: attendance.p_39,
            p40: attendance.p_40,
            p41: attendance.p_41,
            p42: attendance.p_42,
            p43: attendance.p_43,
            p44: attendance.p_44,
            p45: attendance.p_45,
            p46: attendance.p_46,
            p47: attendance.p_47,
            p48: attendance.p_48,
            p49: attendance.p_49,
            p50: attendance.p_50,
            p51: attendance.p_51,
            p52: attendance.p_52,
            p53: attendance.p_53,
            p54: attendance.p_54,
            p55: attendance.p_55,
            p56: attendance.p_56,
            p57: attendance.p_57,
            p58: attendance.p_58,
            p59: attendance.p_59,
            p60: attendance.p_60,
          },
        ]);
      });
  }, [data, loading]);

  useEffect(() => {
    if (meeting === "1") {
      setMeetNumber(UPDATE_ATTENDANCE_P1);
    } else if (meeting === "2") {
      setMeetNumber(UPDATE_ATTENDANCE_P2);
    } else if (meeting === "3") {
      setMeetNumber(UPDATE_ATTENDANCE_P3);
    } else if (meeting === "4") {
      setMeetNumber(UPDATE_ATTENDANCE_P4);
    } else if (meeting === "5") {
      setMeetNumber(UPDATE_ATTENDANCE_P5);
    } else if (meeting === "6") {
      setMeetNumber(UPDATE_ATTENDANCE_P6);
    } else if (meeting === "7") {
      setMeetNumber(UPDATE_ATTENDANCE_P7);
    } else if (meeting === "8") {
      setMeetNumber(UPDATE_ATTENDANCE_P8);
    } else if (meeting === "9") {
      setMeetNumber(UPDATE_ATTENDANCE_P9);
    } else if (meeting === "10") {
      setMeetNumber(UPDATE_ATTENDANCE_P10);
    } else if (meeting === "11") {
      setMeetNumber(UPDATE_ATTENDANCE_P11);
    } else if (meeting === "12") {
      setMeetNumber(UPDATE_ATTENDANCE_P12);
    } else if (meeting === "13") {
      setMeetNumber(UPDATE_ATTENDANCE_P13);
    } else if (meeting === "14") {
      setMeetNumber(UPDATE_ATTENDANCE_P14);
    } else if (meeting === "15") {
      setMeetNumber(UPDATE_ATTENDANCE_P15);
    } else if (meeting === "16") {
      setMeetNumber(UPDATE_ATTENDANCE_P16);
    } else if (meeting === "17") {
      setMeetNumber(UPDATE_ATTENDANCE_P17);
    } else if (meeting === "18") {
      setMeetNumber(UPDATE_ATTENDANCE_P18);
    } else if (meeting === "19") {
      setMeetNumber(UPDATE_ATTENDANCE_P19);
    } else if (meeting === "20") {
      setMeetNumber(UPDATE_ATTENDANCE_P20);
    } else if (meeting === "21") {
      setMeetNumber(UPDATE_ATTENDANCE_P21);
    } else if (meeting === "22") {
      setMeetNumber(UPDATE_ATTENDANCE_P22);
    } else if (meeting === "23") {
      setMeetNumber(UPDATE_ATTENDANCE_P23);
    } else if (meeting === "24") {
      setMeetNumber(UPDATE_ATTENDANCE_P24);
    } else if (meeting === "25") {
      setMeetNumber(UPDATE_ATTENDANCE_P25);
    } else if (meeting === "26") {
      setMeetNumber(UPDATE_ATTENDANCE_P26);
    } else if (meeting === "27") {
      setMeetNumber(UPDATE_ATTENDANCE_P27);
    } else if (meeting === "28") {
      setMeetNumber(UPDATE_ATTENDANCE_P28);
    } else if (meeting === "29") {
      setMeetNumber(UPDATE_ATTENDANCE_P29);
    } else if (meeting === "30") {
      setMeetNumber(UPDATE_ATTENDANCE_P30);
    } else if (meeting === "31") {
      setMeetNumber(UPDATE_ATTENDANCE_P31);
    } else if (meeting === "32") {
      setMeetNumber(UPDATE_ATTENDANCE_P32);
    } else if (meeting === "33") {
      setMeetNumber(UPDATE_ATTENDANCE_P33);
    } else if (meeting === "34") {
      setMeetNumber(UPDATE_ATTENDANCE_P34);
    } else if (meeting === "35") {
      setMeetNumber(UPDATE_ATTENDANCE_P35);
    } else if (meeting === "36") {
      setMeetNumber(UPDATE_ATTENDANCE_P36);
    } else if (meeting === "37") {
      setMeetNumber(UPDATE_ATTENDANCE_P37);
    } else if (meeting === "38") {
      setMeetNumber(UPDATE_ATTENDANCE_P38);
    } else if (meeting === "39") {
      setMeetNumber(UPDATE_ATTENDANCE_P39);
    } else if (meeting === "40") {
      setMeetNumber(UPDATE_ATTENDANCE_P40);
    } else if (meeting === "41") {
      setMeetNumber(UPDATE_ATTENDANCE_P41);
    } else if (meeting === "42") {
      setMeetNumber(UPDATE_ATTENDANCE_P42);
    } else if (meeting === "43") {
      setMeetNumber(UPDATE_ATTENDANCE_P43);
    } else if (meeting === "44") {
      setMeetNumber(UPDATE_ATTENDANCE_P44);
    } else if (meeting === "45") {
      setMeetNumber(UPDATE_ATTENDANCE_P45);
    } else if (meeting === "46") {
      setMeetNumber(UPDATE_ATTENDANCE_P46);
    } else if (meeting === "47") {
      setMeetNumber(UPDATE_ATTENDANCE_P47);
    } else if (meeting === "48") {
      setMeetNumber(UPDATE_ATTENDANCE_P48);
    } else if (meeting === "49") {
      setMeetNumber(UPDATE_ATTENDANCE_P49);
    } else if (meeting === "50") {
      setMeetNumber(UPDATE_ATTENDANCE_P50);
    } else if (meeting === "51") {
      setMeetNumber(UPDATE_ATTENDANCE_P51);
    } else if (meeting === "52") {
      setMeetNumber(UPDATE_ATTENDANCE_P52);
    } else if (meeting === "53") {
      setMeetNumber(UPDATE_ATTENDANCE_P53);
    } else if (meeting === "54") {
      setMeetNumber(UPDATE_ATTENDANCE_P54);
    } else if (meeting === "55") {
      setMeetNumber(UPDATE_ATTENDANCE_P55);
    } else if (meeting === "56") {
      setMeetNumber(UPDATE_ATTENDANCE_P56);
    } else if (meeting === "57") {
      setMeetNumber(UPDATE_ATTENDANCE_P57);
    } else if (meeting === "58") {
      setMeetNumber(UPDATE_ATTENDANCE_P58);
    } else if (meeting === "59") {
      setMeetNumber(UPDATE_ATTENDANCE_P59);
    } else if (meeting === "60") {
      setMeetNumber(UPDATE_ATTENDANCE_P60);
    }
  }, [meeting]);

  const handlePresent = (npm, index) => {
    updatePresent({
      variables: {
        status: 1,
        npm,
        schedules_id: schedule_data.id,
      },
    });
    setAttendanceIndex(index);
    dispatch(MODAL_IS_PRESENT(true));
  };

  const handleAbsent = (npm, index) => {
    updateAbsent({
      variables: {
        status: 0,
        npm,
        schedules_id: schedule_data.id,
      },
    });
    setAttendanceIndex(index);
  };

  return (
    <>
      <p className="p-1 text-primary-grey dark:text-white">Total Student : {attendances?.length !== 0 ? attendances?.length : "0"}</p>
      <div className="relative h-96 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-primary-white2 dark:bg-primary-black dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 w-1/4 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                UIN
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} rowSpan={6}>
                  <LoadingAnimationXL />
                </td>
              </tr>
            ) : attendances.length !== 0 ? (
              attendances.map((attendance, index) => (
                <tr key={attendance.npm} className="dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-primary-white2 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 w-full flex justify-center text-white">
                    {meeting === "1" ? (
                      <div>
                        {attendance.p1 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "2" ? (
                      <div>
                        {attendance.p2 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "3" ? (
                      <div>
                        {attendance.p3 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "4" ? (
                      <div>
                        {attendance.p4 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "5" ? (
                      <div>
                        {attendance.p5 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "6" ? (
                      <div>
                        {attendance.p6 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "7" ? (
                      <div>
                        {attendance.p7 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "8" ? (
                      <div>
                        {attendance.p8 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "9" ? (
                      <div>
                        {attendance.p9 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "10" ? (
                      <div>
                        {attendance.p10 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "11" ? (
                      <div>
                        {attendance.p11 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "12" ? (
                      <div>
                        {attendance.p12 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "13" ? (
                      <div>
                        {attendance.p13 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "14" ? (
                      <div>
                        {attendance.p14 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "15" ? (
                      <div>
                        {attendance.p15 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "16" ? (
                      <div>
                        {attendance.p16 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "17" ? (
                      <div>
                        {attendance.p17 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "18" ? (
                      <div>
                        {attendance.p18 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "19" ? (
                      <div>
                        {attendance.p19 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "20" ? (
                      <div>
                        {attendance.p20 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "21" ? (
                      <div>
                        {attendance.p21 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "22" ? (
                      <div>
                        {attendance.p22 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "23" ? (
                      <div>
                        {attendance.p23 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "24" ? (
                      <div>
                        {attendance.p24 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "25" ? (
                      <div>
                        {attendance.p25 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "26" ? (
                      <div>
                        {attendance.p26 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "27" ? (
                      <div>
                        {attendance.p27 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "28" ? (
                      <div>
                        {attendance.p28 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "29" ? (
                      <div>
                        {attendance.p29 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "30" ? (
                      <div>
                        {attendance.p30 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "31" ? (
                      <div>
                        {attendance.p31 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "32" ? (
                      <div>
                        {attendance.p32 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "33" ? (
                      <div>
                        {attendance.p33 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "34" ? (
                      <div>
                        {attendance.p34 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "35" ? (
                      <div>
                        {attendance.p35 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "36" ? (
                      <div>
                        {attendance.p36 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "37" ? (
                      <div>
                        {attendance.p37 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "38" ? (
                      <div>
                        {attendance.p38 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "39" ? (
                      <div>
                        {attendance.p39 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "40" ? (
                      <div>
                        {attendance.p40 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "41" ? (
                      <div>
                        {attendance.p41 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "42" ? (
                      <div>
                        {attendance.p42 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "43" ? (
                      <div>
                        {attendance.p43 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "44" ? (
                      <div>
                        {attendance.p44 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "45" ? (
                      <div>
                        {attendance.p45 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "46" ? (
                      <div>
                        {attendance.p46 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "47" ? (
                      <div>
                        {attendance.p47 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "48" ? (
                      <div>
                        {attendance.p48 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "49" ? (
                      <div>
                        {attendance.p49 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "50" ? (
                      <div>
                        {attendance.p50 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "51" ? (
                      <div>
                        {attendance.p51 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "52" ? (
                      <div>
                        {attendance.p52 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "53" ? (
                      <div>
                        {attendance.p53 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "54" ? (
                      <div>
                        {attendance.p54 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "55" ? (
                      <div>
                        {attendance.p55 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "56" ? (
                      <div>
                        {attendance.p56 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "57" ? (
                      <div>
                        {attendance.p57 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "58" ? (
                      <div>
                        {attendance.p58 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : meeting === "59" ? (
                      <div>
                        {attendance.p59 === 0 ? (
                          <button className="bg-secondary-red p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    ) : (
                      <div>
                        {attendance.p60 === 0 ? (
                          <button className="bg-secondary-red lg:p-2 text-xs rounded-md" onClick={() => handlePresent(attendance.npm, index)}>
                            {loadingPresent && attendanceIndex === index ? <LoadingAnimation /> : "Absent"}
                          </button>
                        ) : (
                          <button className="bg-secondary-blue p-2 rounded-md" onClick={() => handleAbsent(attendance.npm, index)}>
                            {loadingAbsent && attendanceIndex === index ? <LoadingAnimation /> : "Present"}
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">{attendance.npm}</td>
                  <td className="px-6 py-4">{attendance.fullname}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <p className="text-center py-3">No Student data</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AttendanceTable;
