import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATE } from "../../redux/dateSlice";

function HeaderAttendance({ schedule_data, meet }) {
  const date = useSelector((state) => state.date.timestamp);
  const dispatch = useDispatch();
  return (
    <div className="block p-6 text-xs w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/12 py-2">
              <p className="text-gray-700 dark:text-gray-400">Course</p>
            </td>
            <td className="text-gray-700 dark:text-gray-400">:</td>
            <td>
              <p className="text-gray-700 dark:text-gray-400">
                {schedule_data.course.course_name}
              </p>
            </td>
            <td className="w-1/12 py-2">
              <p className="text-gray-700 dark:text-gray-400">Day</p>
            </td>
            <td className="text-gray-700 dark:text-gray-400">:</td>
            <td>
              <p className="text-gray-700 dark:text-gray-400">
                {schedule_data.day}
              </p>
            </td>
          </tr>
          <tr>
            <td className="w-1/12 py-2">
              <p className="text-gray-700 dark:text-gray-400">Class</p>
            </td>
            <td className="text-gray-700 dark:text-gray-400">:</td>
            <td>
              <p className="text-gray-700 dark:text-gray-400">
                {schedule_data.class.class_name}
              </p>
            </td>
            <td className="w-1/12 py-2">
              <p className="text-gray-700 dark:text-gray-400">Time</p>
            </td>
            <td className="text-gray-700 dark:text-gray-400">:</td>
            <td>
              <p className="text-gray-700 dark:text-gray-400">
                {schedule_data.time}
              </p>
            </td>
          </tr>

          <tr>
            <td className="w-1/12">
              <p className="text-gray-700 dark:text-gray-400">Session</p>
            </td>
            <td className="text-gray-700 dark:text-gray-400">:</td>
            <td>
              <p className="text-gray-700 dark:text-gray-400">{meet}</p>
            </td>
            <td className="w-1/12 py-2">
              <p className="text-gray-700 dark:text-gray-400">Term</p>
            </td>
            <td className="text-gray-700 dark:text-gray-400">:</td>
            <td>
              <p className="text-gray-700 dark:text-gray-400">
                {schedule_data.room}
              </p>
            </td>
          </tr>
          <tr>
            <td className="w-1/12 py-2">
              <p className="text-gray-700 dark:text-gray-400">Roll No</p>
            </td>
            <td className="text-gray-700 dark:text-gray-400">:</td>
            <td>
              <p className="text-gray-700 dark:text-gray-400">
                {schedule_data.roll_no}
              </p>
            </td>
          </tr>

          <tr>
            <td className="w-1/12">
              <p className="text-gray-700 dark:text-gray-400">Select Date</p>
            </td>
            <td className="text-gray-700 dark:text-gray-400">:</td>
            <td className="py-4" colSpan={4}>
              <div className="flex flex-col lg:w-1/2 w-full">
                <input
                  datepicker=""
                  datepicker-buttons=""
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                  placeholder="Select date"
                  value={date}
                  onChange={(e) => {
                    dispatch(SET_DATE(e.target.value));
                  }}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HeaderAttendance;
