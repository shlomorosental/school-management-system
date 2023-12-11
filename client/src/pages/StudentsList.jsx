import { useState, useEffect } from "react";
import "./table.css";

export default function StudentsList() {
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      class: 12,
      birthday: "2005-03-22",
      address: "123 Main St, New York, NY",
    },
    {
      id: 2,
      name: "Jane Smith",
      class: 10,
      birthday: "2007-11-03",
      address: "456 Park Ave, Los Angeles, CA",
    },
    {
      id: 3,
      name: "Jack Ryan",
      class: 11,
      birthday: "2006-05-11",
      address: "901 State St, Chicago, IL",
    },
  ];

  // const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(dummyData);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/students");
  //     const data = await response.json();
  //     setStudents(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Students</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Birthday</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {student.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.birthday}</td>
              <td>{student.address}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>Add Student</button>
    </div>
  );
}
