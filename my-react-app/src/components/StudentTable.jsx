import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../containers/StudentContainer";
import PropTypes from "prop-types";

const StudentTable = ({ students, handleDelete }) => {
  StudentTable.propTypes = {
    students: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };
  const { language } = useContext(LanguageContext);

  return (
    <>
      <h1 className="text-center m-3 text-cstm">
        {language === "id" ? "Daftar Siswa" : "List of Students"}
      </h1>
      <div className="table-responsive mt-3">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" colSpan="8">
                <Link to="/add">
                  <button className="btn btn-primary float-start fw-bold">
                    <i className="bi bi-person-fill-add"></i>{" "}
                    {language === "id"
                      ? "Tambah Siswa Baru"
                      : "Add New Student"}
                  </button>
                </Link>
              </th>
            </tr>
            <tr>
              <th scope="col">No</th>
              <th scope="col">{language === "id" ? "Nama" : "Name"}</th>
              <th scope="col">{language === "id" ? "NIM" : "Student ID"}</th>
              <th scope="col">{language === "id" ? "Kelas" : "Class"}</th>
              <th scope="col">
                {language === "id" ? "Jenis Kelamin" : "Gender"}
              </th>
              <th scope="col">
                {language === "id" ? "Perintah 1" : "Action 1"}
              </th>
              <th scope="col">
                {language === "id" ? "Perintah 2" : "Action 2"}
              </th>
              <th scope="col">
                {language === "id" ? "Perintah 3" : "Action 3"}
              </th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.nim}</td>
                  <td>{student.class}</td>
                  <td>{student.gender}</td>
                  <td>
                    <Link to={`/detail/${student.id}`}>
                      <button className="btn btn-outline-primary w-100">
                        <i className="bi bi-info-circle"></i> Info
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/edit/${student.id}`}>
                      <button className="btn btn-outline-warning w-100">
                        <i className="bi bi-pencil-square"></i> Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="btn btn-outline-danger w-100"
                    >
                      <i className="bi bi-trash"></i>{" "}
                      {language === "id" ? "Hapus" : "Delete"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  {language === "id"
                    ? "Tidak ada siswa yang ditemukan."
                    : "No students found."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentTable;
