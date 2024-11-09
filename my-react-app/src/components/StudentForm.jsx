import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../containers/StudentContainer";
import PropTypes from "prop-types";

const StudentForm = ({ isEdit, onSubmit, onChange, student }) => {
  StudentForm.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    student: PropTypes.shape({
      name: PropTypes.string,
      nim: PropTypes.string,
      class: PropTypes.string,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      gender: PropTypes.string,
      birthDate: PropTypes.string,
      address: PropTypes.string,
      guardian_name: PropTypes.string,
    }).isRequired,
  };

  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <>
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        {language === "id" ? "Kembali" : "Back"}
      </button>
      <h1 className="text-center m-3 text-cstm">
        {isEdit
          ? language === "id"
            ? "Edit Siswa"
            : "Edit Student"
          : language === "id"
          ? "Tambah Siswa Baru"
          : "Add New Student"}
      </h1>
      <form onSubmit={onSubmit} className="mt-3">
        <div className="form-group mb-3">
          <label>{language === "id" ? "Nama" : "Name"}</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder={language === "id" ? "Masukkan Nama" : "Enter Name"}
            value={student.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>{language === "id" ? "NIM" : "Student ID"}</label>
          <input
            type="text"
            className="form-control"
            name="nim"
            placeholder={
              language === "id" ? "Masukkan NIM" : "Enter Student ID"
            }
            value={student.nim}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>{language === "id" ? "Kelas" : "Class"}</label>
          <input
            type="text"
            className="form-control"
            name="class"
            placeholder={language === "id" ? "Masukkan Kelas" : "Enter Class"}
            value={student.class}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>{language === "id" ? "Tahun" : "Year"}</label>
          <input
            type="number"
            className="form-control"
            name="year"
            min="2000"
            max="2024"
            placeholder={language === "id" ? "Masukkan Tahun" : "Enter Year"}
            value={student.year}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>{language === "id" ? "Jenis Kelamin" : "Gender"}</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            placeholder={
              language === "id" ? "Masukkan Jenis Kelamin" : "Enter Gender"
            }
            value={student.gender}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>{language === "id" ? "Tanggal Lahir" : "Birth Date"}</label>
          <input
            type="date"
            className="form-control"
            name="birthDate"
            value={student.birthDate}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>{language === "id" ? "Alamat" : "Address"}</label>
          <textarea
            className="form-control"
            name="address"
            minLength="20"
            placeholder={
              language === "id" ? "Masukkan Alamat" : "Enter Address"
            }
            value={student.address}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>{language === "id" ? "Nama Wali" : "Guardian Name"}</label>
          <input
            type="text"
            className="form-control"
            name="guardian_name"
            placeholder={
              language === "id" ? "Masukkan Nama Wali" : "Enter Guardian Name"
            }
            value={student.guardian_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="modal-footer my-4">
          {isEdit ? (
            <button type="submit" className="btn btn-warning">
              <i className="bi bi-pencil-square"></i>{" "}
              {language === "id" ? "Ubah" : "Update"}
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-save"></i>{" "}
              {language === "id" ? "Kirim" : "Submit"}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default StudentForm;
