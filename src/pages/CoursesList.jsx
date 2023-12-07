import { useState } from "react";
import "./table.css";

const dummyData = [
  {
    id: 1,
    name: "Math",
    teacherName: "John Doe",
    class: 12,
  },
  {
    id: 2,
    name: "English",
    teacherName: "Jane Smith",
    class: 10,
  },
  {
    id: 3,
    name: "Biology",
    teacherName: "Jack Ryan",
    class: 11,
  },
];

export default function CoursesList() {
  const [courses, setCourses] = useState(dummyData);

  return (
    <div>
      <h1>Courses</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Teacher</th>
            <th>Class</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.teacherName}</td>
              <td>{course.class}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Add Course</button>
    </div>
  );
}
