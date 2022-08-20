import React from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import FilterStudents from "../../../components/FilterStudents";
import SearchBar from "../../../components/SearchBar";
import StudentTable from "../../../components/Tables/StudentTable";
import { useSelector } from "react-redux";
import InsertModal from "../../../components/Modal/ModalInsert";

function KelolaMahasiswa() {
  const name_prodi = useSelector((state) => state.prodi.name);
  return (
    <>
      <Sidebar />
      <Header />
      <div className="main bg-primary-white2 dark:bg-primary-black lg:px-7 pt-20 lg:text-xl text-xs h-screen">
        <h1 className="p-3 lg:text-2xl lg:text-left text-lg text-center text-primary-grey dark:text-white">
          Manage Students of the {name_prodi}
        </h1>
        <div className="bg-primary-white dark:bg-primary-grey text-white p-5 h-max w-full">
          <div className="flex lg:flex-row flex-col justify-between items-center py-3">
            <InsertModal type="student" />
            <FilterStudents />
            <SearchBar type="student" />
          </div>
          <StudentTable type="" />
        </div>
      </div>
    </>
  );
}

export default KelolaMahasiswa;
