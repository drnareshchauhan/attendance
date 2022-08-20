import React from "react";
import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import FilterMeetNumber from "../FilterMeetNumber";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_ATTENDANCES } from "../../api/Model/Subscription/GetAttendances";
import { useSubscription } from "@apollo/client";
import * as XLSX from "xlsx";
import { FILTER_MEET_NUMBER } from "../../redux/filterSlice";

function ExportAttendance({ data }) {
  const [showModal, setShowModal] = useState(false);

  const meeting = useSelector((state) => state.filter.meet_number);

  const dispatch = useDispatch();

  const [allData, setAllData] = useState([]);
  const [dataMeet, setDataMeet] = useState([]);
  const { data: dataAllAttendance } = useSubscription(GET_ATTENDANCES, {
    variables: { schedules_id: data.id },
  });

  useEffect(() => {
    setDataMeet([]);
    if (meeting === "1") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_1: d.p_1 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "2") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_2: d.p_2 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "3") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_3: d.p_3 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "4") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_4: d.p_4 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "5") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_5: d.p_5 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "6") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_6: d.p_6 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "7") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_7: d.p_7 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "8") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_8: d.p_8 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "9") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_9: d.p_9 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "10") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_10: d.p_10 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "11") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_11: d.p_11 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "12") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_12: d.p_12 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "13") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_13: d.p_13 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "14") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_14: d.p_14 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "15") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_15: d.p_15 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "16") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_16: d.p_16 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "17") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_17: d.p_17 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "18") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_18: d.p_18 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "19") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_19: d.p_19 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "20") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_20: d.p_20 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "21") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_21: d.p_21 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "22") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_22: d.p_22 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "23") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_23: d.p_23 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "24") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_24: d.p_24 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "25") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_25: d.p_25 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "26") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_26: d.p_26 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "27") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_27: d.p_27 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "28") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_28: d.p_28 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "29") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_29: d.p_29 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "30") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_30: d.p_30 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "31") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_31: d.p_31 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "32") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_32: d.p_32 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "33") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_33: d.p_33 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "34") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_34: d.p_34 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "35") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_35: d.p_35 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "36") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_36: d.p_36 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "37") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_37: d.p_37 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "38") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_38: d.p_38 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "39") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_39: d.p_39 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "40") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_40: d.p_40 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "41") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_41: d.p_41 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "42") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_42: d.p_42 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "43") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_43: d.p_43 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "44") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_44: d.p_44 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "45") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_45: d.p_45 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "46") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_46: d.p_46 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "47") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_47: d.p_47 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "48") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_48: d.p_48 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "49") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_49: d.p_49 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "50") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_50: d.p_50 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "51") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_51: d.p_51 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "52") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_52: d.p_52 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "53") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_53: d.p_53 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "54") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_54: d.p_54 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "55") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_55: d.p_55 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "56") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_56: d.p_56 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "57") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_57: d.p_57 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "58") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_58: d.p_58 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "59") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_59: d.p_59 === 0 ? "0" : "1",
          },
        ])
      );
    } else if (meeting === "60") {
      dataAllAttendance?.attendances.map((d) =>
        setDataMeet((dataMeet) => [
          ...dataMeet,
          {
            UID: d.student.npm,
            name: d.student.fullname,
            session_60: d.p_60 === 0 ? "0" : "1",
          },
        ])
      );
    }
  }, [meeting, dataAllAttendance?.attendances]);

  useEffect(() => {
    setAllData([]);
    dataAllAttendance?.attendances.map((d) =>
      setAllData((allData) => [
        ...allData,
        {
          UID: d.student.npm,
          name: d.student.fullname,
          session_1: d.p_1 === 0 ? "0" : "1",
          session_2: d.p_2 === 0 ? "0" : "1",
          session_3: d.p_3 === 0 ? "0" : "1",
          session_4: d.p_4 === 0 ? "0" : "1",
          session_5: d.p_5 === 0 ? "0" : "1",
          session_6: d.p_6 === 0 ? "0" : "1",
          session_7: d.p_7 === 0 ? "0" : "1",
          session_8: d.p_8 === 0 ? "0" : "1",
          session_9: d.p_9 === 0 ? "0" : "1",
          session_10: d.p_10 === 0 ? "0" : "1",
          session_11: d.p_11 === 0 ? "0" : "1",
          session_12: d.p_12 === 0 ? "0" : "1",
          session_13: d.p_13 === 0 ? "0" : "1",
          session_14: d.p_14 === 0 ? "0" : "1",
          session_15: d.p_15 === 0 ? "0" : "1",
          session_16: d.p_16 === 0 ? "0" : "1",
          session_17: d.p_17 === 0 ? "0" : "1",
          session_18: d.p_18 === 0 ? "0" : "1",
          session_19: d.p_19 === 0 ? "0" : "1",
          session_20: d.p_20 === 0 ? "0" : "1",
          session_21: d.p_21 === 0 ? "0" : "1",
          session_22: d.p_22 === 0 ? "0" : "1",
          session_23: d.p_23 === 0 ? "0" : "1",
          session_24: d.p_24 === 0 ? "0" : "1",
          session_25: d.p_25 === 0 ? "0" : "1",
          session_26: d.p_26 === 0 ? "0" : "1",
          session_27: d.p_27 === 0 ? "0" : "1",
          session_28: d.p_28 === 0 ? "0" : "1",
          session_29: d.p_29 === 0 ? "0" : "1",
          session_30: d.p_30 === 0 ? "0" : "1",
          session_31: d.p_31 === 0 ? "0" : "1",
          session_32: d.p_32 === 0 ? "0" : "1",
          session_33: d.p_33 === 0 ? "0" : "1",
          session_34: d.p_34 === 0 ? "0" : "1",
          session_35: d.p_35 === 0 ? "0" : "1",
          session_36: d.p_36 === 0 ? "0" : "1",
          session_37: d.p_37 === 0 ? "0" : "1",
          session_38: d.p_38 === 0 ? "0" : "1",
          session_39: d.p_39 === 0 ? "0" : "1",
          session_40: d.p_40 === 0 ? "0" : "1",
          session_41: d.p_41 === 0 ? "0" : "1",
          session_42: d.p_42 === 0 ? "0" : "1",
          session_43: d.p_43 === 0 ? "0" : "1",
          session_44: d.p_44 === 0 ? "0" : "1",
          session_45: d.p_45 === 0 ? "0" : "1",
          session_46: d.p_46 === 0 ? "0" : "1",
          session_47: d.p_47 === 0 ? "0" : "1",
          session_48: d.p_48 === 0 ? "0" : "1",
          session_49: d.p_49 === 0 ? "0" : "1",
          session_50: d.p_50 === 0 ? "0" : "1",
          session_51: d.p_51 === 0 ? "0" : "1",
          session_52: d.p_52 === 0 ? "0" : "1",
          session_53: d.p_53 === 0 ? "0" : "1",
          session_54: d.p_54 === 0 ? "0" : "1",
          session_55: d.p_55 === 0 ? "0" : "1",
          session_56: d.p_56 === 0 ? "0" : "1",
          session_57: d.p_57 === 0 ? "0" : "1",
          session_58: d.p_58 === 0 ? "0" : "1",
          session_59: d.p_59 === 0 ? "0" : "1",
          session_60: d.p_60 === 0 ? "0" : "1",
        },
      ])
    );
  }, [dataAllAttendance?.attendances]);

  const exportAll = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(allData);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(
      wb,
      "Attendance " +
        data.class.class_name +
        " " +
        data.course.course_name +
        ".xlsx"
    );
  };
  const exportMeet = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(dataMeet);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(
      wb,
      "Attendance-" +
        meeting +
        " " +
        data.class.class_name +
        " " +
        data.course.course_name +
        ".xlsx"
    );
  };

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary-blue rounded-lg hover:bg-secondary-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-blue dark:hover:bg-secondary-blue dark:focus:ring-blue-800"
      >
        download
        <BsDownload className="ml-2 -mr-1 w-4 h-4" />
      </button>

      {showModal && (
        <div
          id="modalAddStudenttoClass"
          tabIndex="-1"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 mx-auto w-full max-w-6xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Download Attendance {data.class.class_name} -{" "}
                  {data.course.course_name}
                </h3>

                <button
                  onClick={() => {
                    setShowModal(false);
                    dispatch(FILTER_MEET_NUMBER("1"));
                  }}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="large-modal"
                >
                  <FaRegWindowClose
                    id="cancel"
                    className="w-8 dark:text-white text-primary-blue"
                    size={25}
                  />
                </button>
              </div>
              <div className="flex lg:flex-row flex-col px-6 py-2 item-center justify-center gap-3">
                <div className="flex flex-col gap-y-5 items-center lg:p-6 px-1 py-6 lg:w-[60%] w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <FilterMeetNumber />
                  <button
                    onClick={exportMeet}
                    className="flex w-full justify-center py-2 px-3 text-sm font-medium text-center text-white bg-primary-blue rounded-lg hover:bg-secondary-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-blue dark:hover:bg-secondary-blue dark:focus:ring-blue-800"
                  >
                    Download Session Excel {meeting}
                    <BsDownload className="ml-2 -mr-1 w-4 h-4" />
                  </button>
                </div>
                <div className="lg:px-6 px-1 py-11 lg:w-[40%] w-full flex flex-col items-center gap-y-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Download All Sessions
                  </h5>
                  <button
                    onClick={exportAll}
                    className="flex w-full justify-center py-2 px-3 text-sm font-medium text-center text-white bg-primary-blue rounded-lg hover:bg-secondary-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-blue dark:hover:bg-secondary-blue dark:focus:ring-blue-800"
                  >
                    Download All Sessions
                    <BsDownload className="ml-2 -mr-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExportAttendance;
