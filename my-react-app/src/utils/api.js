import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchStudents = async () => {
  try {
    const res = await axios.get(API_URL, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching students:", error);
  }
};

export const fetchStudentDetail = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Error fetching details for student ID ${id}:`, error);
  }
};

export const newStudent = async (data) => {
  try {
    const res = await axios.post(API_URL, data, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error creating student:", error);
  }
};

export const updateStudent = async (data, id) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, data, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Error updating student ID ${id}:`, error);
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Error deleting student ID ${id}:`, error);
  }
};
