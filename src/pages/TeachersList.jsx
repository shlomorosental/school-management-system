import { useState, useEffect } from "react";
import "./table.css";

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    salary: 6000,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@school.com",
    salary: 7500,
  },
];

export default function TeachersList() {
  const [teachers, setTeachers] = useState(dummyData);

  // const [teachers, setTeachers] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/teachers");
  //     const data = await response.json();
  //     setTeachers(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Teachers</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((teachers) => (
            <tr key={teachers.id}>
              <td>{teachers.name}</td>
              <td>{teachers.email}</td>
              <td>{teachers.salary}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>Add Teacher</button>
    </div>
  );
}
