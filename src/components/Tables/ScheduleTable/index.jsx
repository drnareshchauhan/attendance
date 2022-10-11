import React from "react";
import { useSubscription } from "@apollo/client";
import { useSelector } from "react-redux";
import LoadingAnimationXL from "../../Loading/LoadingAnimationXL";
import ModalDelete from "../../Modal/ModalDelete";
import ModalAttendance from "../../Modal/ModalAttendance";
import { GET_SCHEDULE } from "../../../api/Model/Subscription/GetSchedule";
import ModalUpdateSchedule from "../../Modal/ModalUpdate/ModalUpdateSchedule";
import ModalDetailClass from "../../Modal/ModalDetailClass";

function ScheduleTable() {
  const id_prodi = useSelector((state) => state.prodi.id);
  const { data, loading } = useSubscription(GET_SCHEDULE, {
    variables: { prodi: id_prodi },
  });
  let no = 1;

  return (
    <>
      <div className="relative h-80 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-primary-white2 dark:bg-primary-black dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Course Code
              </th>
              <th scope="col" className="px-6 py-3">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3">
                Class
              </th>
              <th scope="col" className="px-6 py-3">
                study program
              </th>
              <th scope="col" className="px-6 py-3">
                Lecturer
              </th>
              <th scope="col" className="px-6 py-3">
                Month
              </th>
              <th scope="col" className="px-6 py-3">
                O'clock
              </th>
              <th scope="col" className="px-6 py-3">
                Term
              </th>
              <th scope="col" className="px-6 py-3">
                Session
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} rowSpan={6}>
                  <LoadingAnimationXL />
                </td>
              </tr>
            ) : data?.schedules.length !== 0 ? (
              data?.schedules.map((d) => (
                <tr
                  key={d.id}
                  className="dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-primary-white2 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4">{no++}</td>
                  <td className="px-6 py-4">{d.course.course_id}</td>
                  <td className="px-6 py-4">{d.course.course_name}</td>
                  <td className="px-6 py-4">{d.class.class_name}</td>
                  <td className="px-6 py-4">
                    {d.class.study_program.study_program_name}
                  </td>
                  <td className="px-6 py-4">{d.lecturer.fullname}</td>
                  <td className="px-6 py-4">{d.day}</td>
                  <td className="px-6 py-4">{d.time}</td>
                  <td className="px-6 py-4">{d.room}</td>
                  <td className="px-6 py-4">{d.meet_number}</td>
                  <td className="flex flex-row justify-center gap-x-1 pt-2">
                    <ModalAttendance data={d} />
                    <ModalDetailClass data={d} />
                    <ModalUpdateSchedule data={d} />
                    <ModalDelete data={d} type={"schedule"} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11}>
                  <p className="text-center py-3">THERE IS NO SCHEDULE</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ScheduleTable;
