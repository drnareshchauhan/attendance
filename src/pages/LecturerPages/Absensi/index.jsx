import { useQuery, useSubscription } from "@apollo/client";
import React, { useState } from "react";
import { useEffect } from "react";
import { GET_ONE_USER } from "../../../api/Model/Query/GetOneUser";
import { GET_SCHEDULE_BY_LECTURER } from "../../../api/Model/Subscription/GetScheduleByLecturer";
import Header from "../../../components/Header";
import { AUTH } from "../../../utils/helpers/AuthCookies";
import LoadingAnimationXL from "../../../components/Loading/LoadingAnimationXL";
import ModalAttendance from "../../../components/Modal/ModalAttendance";
import ModalHistory from "../../../components/Modal/ModalHistory";

function Absensi() {
  const [nidn, setNidn] = useState("");
  const { data: dataLecturer, loading: loadingGetUser } = useQuery(GET_ONE_USER, {
    variables: {
      username: AUTH.getAuth(),
    },
  });

  const { data, loading: loadingGetSchedule } = useSubscription(GET_SCHEDULE_BY_LECTURER, {
    variables: {
      nidn,
    },
  });

  useEffect(() => {
    setNidn(dataLecturer?.users[0].username);
  }, [dataLecturer]);

  return (
    <>
      <Header />
      <div className="w-full bg-primary-white2 dark:bg-primary-black lg:px-7 pt-20 lg:text-xl text-xs h-screen">
        <div className="flex lg:flex-row flex-col justify-center items-center p-3">
          <img src={require("../../../assets/img/ftLogo.png")} className="h-12 mr-3 " alt="FT Logo" />
          <div className="flex lg:flex-row flex-col justify-center items-center gap-2">
            <h1 className="lg:text-2xl lg:text-left text-lg text-center text-primary-grey dark:text-white">Attendance</h1>
            <h1 className="lg:text-2xl lg:text-left text-lg text-center text-primary-grey dark:text-white opacity-50"> {AUTH.getFullname()}</h1>
          </div>
        </div>
        <div className="bg-primary-white dark:bg-primary-grey text-white p-5 h-5/6 w-full overflow-y-auto">
          <div className="flex lg:flex-row md:flex-row flex-col gap-x-10 gap-y-5 flex-wrap justify-center items-center py-3">
            {loadingGetUser || loadingGetSchedule ? (
              <LoadingAnimationXL />
            ) : data?.schedules.length !== 0 ? (
              data?.schedules.map((d) => (
                <div key={d.id} className="p-6 lg:w-1/3 md:w-1/3 w-3/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {d.class.class_name} <br /> {d.course.course_name}
                  </h5>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                    {d.room} , {d.day} / {d.time}
                  </p>
                  {d.meet_number !== 60 ? <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">No of Sessions : {d.meet_number}</p> : <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">Session ENDS</p>}
                  <div className="flex flex-col lg:flex-row justify-between">
                    <ModalAttendance data={d} role={"lecturer"} />
                    <ModalHistory schedule={d} />
                  </div>
                </div>
              ))
            ) : (
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">No courses are taught</h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Absensi;
