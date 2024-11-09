import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LanguageContext } from "../containers/StudentContainer";
import { fetchStudentDetail } from "../utils/api";

const StudentDetail = () => {
  const { language } = useContext(LanguageContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      setIsLoading(true);
      try {
        const response = await fetchStudentDetail(id);
        setStudent(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        {language === "id" ? "Kembali" : "Back"}
      </button>
      <h1 className="text-center m-3 text-cstm">
        {language === "id" ? "Detail Siswa" : "Student Detail"}
      </h1>
      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title mb-3">{student.data.name}</h3>
          <p className="card-text">
            <strong>{language === "id" ? "NIM: " : "Student ID: "}</strong>
            {student.data.nim}
          </p>
          <p className="card-text">
            <strong>{language === "id" ? "Kelas: " : "Class: "}</strong>
            {student.data.class}
          </p>
          <p className="card-text">
            <strong>{language === "id" ? "Tahun: " : "Year: "}</strong>
            {student.data.year}
          </p>
          <p className="card-text">
            <strong>
              {language === "id" ? "Jenis Kelamin: " : "Gender: "}
            </strong>
            {student.data.gender}
          </p>
          <p className="card-text">
            <strong>
              {language === "id" ? "Tanggal Lahir: " : "Birth Date: "}
            </strong>{" "}
            {student.data.birthDate}
          </p>
          <p className="card-text">
            <strong>{language === "id" ? "Alamat: " : "Address: "}</strong>
            {student.data.address}
          </p>
          <p className="card-text">
            <strong>
              {language === "id" ? "Nama Wali: " : "Guardian Name: "}
            </strong>
            {student.data.guardian_name}
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentDetail;
