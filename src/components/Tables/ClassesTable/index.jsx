import { useMutation, useSubscription } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ATTENDANCES } from "../../../api/Model/Subscription/GetAttendances";
import LoadingAnimationXL from "../../Loading/LoadingAnimationXL";
import { AiOutlineClose } from "react-icons/ai";
import { DELETE_STUDENT_FROM_CLASS } from "../../../api/Model/Mutation/Delete/DeleteStudentFromClass";
import LoadingAnimation from "../../Loading/LoadingAnimation";

function ClassesTable({ schedule_data }) {
  const { data, loading } = useSubscription(GET_ATTENDANCES, {
    variables: { schedules_id: schedule_data.id },
  });
  const [attendances, setAttendances] = useState([]);
  const [deleteStudent, { loading: deleteLoading }] = useMutation(
    DELETE_STUDENT_FROM_CLASS
  );

  useEffect(() => {
    setAttendances([]);
    !loading &&
      data?.attendances.forEach((attendance) => {
        setAttendances((attendances) => [
          ...attendances,
          {
            npm: attendance.student.npm,
            fullname: attendance.student.fullname,
          },
        ]);
      });
  }, [data, loading]);

  const [deleteIndex, setDeleteIndex] = useState();
  const handleDelete = (npm, index) => {
    deleteStudent({
      variables: {
        npm,
        schedules_id: parseInt(schedule_data.id),
      },
    });

    setDeleteIndex(index);
  };

  return (
    <>
      <p className="p-1">
        Total Student : {attendances?.length !== 0 ? attendances?.length : "0"}
      </p>
      <div className="relative h-96 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-primary-white2 dark:bg-primary-black dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                UIN
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3 text-center"></th>
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
                <tr
                  key={attendance.npm}
                  className="dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-primary-white2 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4">{attendance.npm}</td>
                  <td className="px-6 py-4">{attendance.fullname}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDelete(attendance.npm, index)}>
                      {deleteLoading && deleteIndex === index ? (
                        <LoadingAnimation />
                      ) : (
                        <AiOutlineClose size={20} color="red" />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <p className="text-center py-3">No Data</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ClassesTable;
