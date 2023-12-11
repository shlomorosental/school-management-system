import { useState } from "react";
import "./table.css";

const dummyData = [
  {
    id: 1,
    studentName: "John Doe",
    examId: 456,
    grade: 90,
  },
  {
    id: 2,
    studentName: "Jane Smith",
    examId: 789,
    grade: 84,
  },
  {
    id: 3,
    studentName: "Jack Ryan",
    examId: 123,
    grade: 62,
  },
];

export default function GradesList() {
  const [grades, setGrades] = useState(dummyData);

  return (
    <div>
      <h1>Grades</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Student</th>
            <th>ExamId</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.studentName}</td>
              <td>{grade.examId}</td>
              <td>{grade.grade}</td>
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
