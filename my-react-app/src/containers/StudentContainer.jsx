import React, { useState, useEffect, createContext } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  fetchStudents,
  newStudent,
  updateStudent,
  deleteStudent,
} from "../utils/api";

export const LanguageContext = createContext();

const StudentContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({
    name: "",
    nim: "",
    class: "",
    year: "",
    gender: "",
    birthDate: "",
    address: "",
    guardian_name: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "id" ? "en" : "id"));
  };

  useEffect(() => {
    fetchStudentsData();
  }, []);

  const fetchStudentsData = async () => {
    setIsLoading(true);
    try {
      const response = await fetchStudents();
      setStudents(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isEdit) {
        await updateStudent(currentStudent, currentStudent.id);
      } else {
        const newStudentData = await newStudent(currentStudent);
        setStudents([...students, newStudentData]);
      }
    } catch (err) {
      setError(err);
    } finally {
      setCurrentStudent({
        name: "",
        nim: "",
        class: "",
        year: "",
        gender: "",
        birthDate: "",
        address: "",
        guardian_name: "",
      });
      setIsLoading(false);
      setIsEdit(false);
      fetchStudentsData();
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await deleteStudent(id);
      fetchStudentsData();
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Router>
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <StudentTable students={students} handleDelete={handleDelete} />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <StudentForm
                  isEdit={true}
                  onSubmit={handleSubmit}
                  onChange={handleInputChange}
                  student={currentStudent}
                />
              }
            />
            <Route
              path="/add"
              element={
                <StudentForm
                  isEdit={false}
                  onSubmit={handleSubmit}
                  onChange={handleInputChange}
                  student={currentStudent}
                />
              }
            />
            <Route path="/detail/:id" element={<StudentDetail />} />
          </Routes>
        </LanguageContext.Provider>
      </Router>
    </div>
  );
};

export default StudentContainer;
