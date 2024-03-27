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



  const handleAdd = async(name, nameTeacher, clas) => {
    if(!name||!nameTeacher||!clas){
      alert("All fields are required")
      return;
    }
    // Add a new course to the
    try {
      let res = await fetch(`http://localhost:5000/api/courses/`, {method: 'POST',  
      headers: {
        "Content-Type": "application/json", // Specify the content type if sending JSON data.
      },
      body: JSON.stringify({
        name: name,
        teacher: nameTeacher,
        class: clas
      })
    });
    http()
    }
    catch (err) {
      console.error('Error: ', err);
    }
  };

  const handleEdit = (row) => {
    console.log("Edit button clicked for row with id:", row.id);
  };

  const handleDelete = (row) => {
    fetch(`http://localhost:5000/api/courses/${row.id}`, {method: 'delete'})
    .then((response)=> response.text())
    .then((data)=>{
      console.log((data));
      http()
    })
  };
  useEffect(() => {
    http()
  }, []);

 const http = ()=>{
  fetch("http://localhost:5000/api/courses/")
  .then((response) => response.json())
  .then((data) => setCourses(data))
  .catch((error) => console.log(error));

fetch("http://localhost:5000/api/teacher/")
  .then((response) => response.json())
  .then((data) => setTeacher(data))
  .catch((error) => console.log(error));
 }
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
  };

