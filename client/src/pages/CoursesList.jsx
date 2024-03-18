import React, { useEffect, useState } from "react";
import Table from "./Table";

const dummyData = [
  {
    id: 1,
    name: "Math",
    teacher: "John Doe",
    class: 12,
  },
  {
    id: 2,
    name: "English",
    teacher: "Jane Smith",
    class: 10,
  },
  {
    id: 3,
    name: "Biology",
    teacher: "Jack Ryan",
    class: 11,
  },
];

export default function CoursesList() {
  const [courses, setCourses] = useState(dummyData);
  const [teacher, setTeacher] = useState([]);
  const columns = ["name", "teacher", "class"];



  const handleAdd = () => {
    console.log("Add button clicked");
  };

  const handleEdit = (row) => {
    console.log("Edit button clicked for row with id:", row.id);
  };

  const handleDelete = (row) => {
    console.log("Delete button clicked for row with id:", row.id);
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/courses/")
      .then((response) => response.json())
      .then((data) => setCourses([data]))
      .catch((error) => console.log(error));

    fetch("http://localhost:5000/api/teacher/")
      .then((response) => response.json())
      .then((data) => setTeacher(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Courses</h1>

      <Table
        nameTable="courses"
        columns={columns}
        data={courses}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        teacherList={teacher} 
      />
    </div>
  );
}
