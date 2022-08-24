import { useMutation, useSubscription } from "@apollo/client";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { INSERT_SCHEDULE } from "../../../api/Model/Mutation/Insert/insertSchedule";
import { GET_COURSES } from "../../../api/Model/Subscription/GetCourses";
import LoadingAnimation from "../../Loading/LoadingAnimation";
import { useDispatch, useSelector } from "react-redux";
import { MODAL_ADD } from "../../../redux/modalSlice";
import { GET_CLASS_NAMES } from "../../../api/Model/Subscription/GetClassNames";
import { GET_LECTURERS } from "../../../api/Model/Subscription/GetLecturers";

function FormSchedule() {
  const id_prodi = useSelector((state) => state.prodi.id);
  const { data: dataClasses, loading: loadingClasses } = useSubscription(
    GET_CLASS_NAMES,
    { variables: { prodi: id_prodi } }
  );
  const { data: dataCourses, loading: loadingCourses } = useSubscription(
    GET_COURSES,
    { variables: { prodi: id_prodi } }
  );
  const { data: dataLecturers, loading: loadingLecturers } =
    useSubscription(GET_LECTURERS);
  const dispatch = useDispatch();

  const INITIAL_STATE = {
    course_id: "",
    class_id: "",
    nidn: "",
    time: "",
    day: "",
    room: "Clinics",
    roll_no: "",
  };

  const INITIAL_TIME = {
    start: "09:00",
    end: "11:59",
  };

  const [schedule, setSchedule] = useState(INITIAL_STATE);
  const [time, setTime] = useState(INITIAL_TIME);

  const [insertSchedule, { loading: loadingInsert }] = useMutation(
    INSERT_SCHEDULE,
    {
      onCompleted: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Schedule successfully added",
          showConfirmButton: false,
          timer: 1200,
        });

        dispatch(MODAL_ADD(false));
        setSchedule(INITIAL_STATE);
      },
    }
  );

  const handleInput = (e) => {
    e.preventDefault();
    insertSchedule({
      variables: {
        courses_id: schedule.course_id,
        class_id: schedule.class_id,
        nidn: schedule.nidn,
        time: schedule.time,
        day: schedule.day,
        room: schedule.room,
        roll_no: schedule.roll_no,
      },
    });
  };

  const handleOnChange = (e) => {
    const VALUE = e.target.value;
    const NAME = e.target.name;
    setSchedule({ ...schedule, [NAME]: VALUE });
  };

  const handleTime = () => {
    let start = time.start;
    let end = time.end;

    setSchedule({ ...schedule, time: start.concat(" - " + end) });
  };

  return loadingClasses && loadingCourses && loadingLecturers ? (
    <LoadingAnimation />
  ) : (
    <form onSubmit={handleInput}>
      <div className="relative z-0 w-full mb-6 group">
        {/* <label htmlFor="" className="text-primary-grey dark:text-white text-sm">
          Choose Course
        </label>
        <input
          data-value={schedule.course_id}
          autoComplete="off"
          name="course_id"
          required
          type="text"
          list="courses"
          onChange={handleOnChange}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <datalist id="courses" className="w-full">
          {dataCourses?.courses.map((d) => (
            <option key={d.course_id} data-value={d.course_id}>
              {d.course_name}
            </option>
          ))}
        </datalist> */}
        <select
          required
          value={schedule.course_id}
          name="course_id"
          onChange={handleOnChange}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={""} disabled>
            Choose Course
          </option>
          {dataCourses?.courses.map((d) => (
            <option key={d.course_id} value={d.course_id}>
              {d.course_id} - {d.course_name}
            </option>
          ))}
        </select>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <select
          required
          value={schedule.class_id}
          name="class_id"
          onChange={handleOnChange}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={""} disabled>
            Choose Class
          </option>
          {dataClasses?.class.map((d) => (
            <option key={d.id} value={d.id}>
              {d.class_name}
            </option>
          ))}
        </select>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <select
          required
          value={schedule.nidn}
          name="nidn"
          onChange={handleOnChange}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={""} disabled>
            Choose a Lecturer
          </option>
          {dataLecturers?.lecturers.map((d) => (
            <option key={d.nidn} value={d.nidn}>
              {d.fullname}
            </option>
          ))}
        </select>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label htmlFor="" className="text-primary-grey dark:text-white text-sm">
          Time :
        </label>
        <div className="flex flex-row justify-center items-center gap-x-4">
          <input
            autoComplete="off"
            type="time"
            required
            name="startTime"
            value={time.start}
            onChange={(e) => setTime({ ...time, start: e.target.value })}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <p className="text-primary-grey dark:text-white text-sm">s/d</p>
          <input
            autoComplete="off"
            type="time"
            required
            name="endTime"
            value={time.end}
            onChange={(e) => setTime({ ...time, end: e.target.value })}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleTime}
            className="text-white bg-gradient-to-r from-primary-blue via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
          >
            SET
          </button>
          <input
            autoComplete="off"
            type="text"
            name="time"
            className="block outline-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={schedule.time}
            required
          />
        </div>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <select
          autoComplete="off"
          required
          value={schedule.day}
          name="day"
          onChange={handleOnChange}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value="">
            -- Choose Month --
          </option>

          <option value="Jan-Feb">Jan-Feb</option>
          <option value="March-Apr">March-Apr</option>
          <option value="May-Jun">May-Jun</option>
          <option value="Jul-Aug">Jul-Aug</option>
          <option value="Sept-Oct">Sept-Oct</option>
          <option value="Nov-Dec">Nov-Dec</option>
        </select>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <select
          autoComplete="off"
          required
          value={schedule.room}
          name="room"
          onChange={handleOnChange}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value="">
            -- Choose Room --
          </option>
          <option value="Clinics">Clinics</option>
          <option value="Lecturhall 1">Lecturhall 1</option>
          <option value="Lecturhall 2">Lecturhall 2</option>
          <option value="Lecturhall 3">Lecturhall 3</option>
          <option value="Lecturhall 4">Lecturhall 4</option>
          <option value="Lecturhall 5">Lecturhall 5</option>
          <option value="Lecturhall 6">Lecturhall 6</option>
          <option value="Lecturhall 7">Lecturhall 7</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          name="roll_no"
          onChange={handleOnChange}
          value={schedule.roll_no}
          // value={className.class_name}
          // onChange={(e) => {
          //   setClassName({ ...className, class_name: e.target.value });
          // }}
          required
          placeholder="Roll no: from-to"
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="flex items-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-primary-blue via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
        >
          {loadingInsert ? <LoadingAnimation /> : "Add"}
        </button>
      </div>
    </form>
  );
}

export default FormSchedule;
