import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Layout from "./Layout";
import Home from "./pages/Home";
import TeachersList from "./pages/TeachersList";
import StudentsList from "./pages/StudentsList";
import CoursesList from "./pages/CoursesList";
import ExamsList from "./pages/ExamsList";
import GradesList from "./pages/GradesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teachers" element={<TeachersList />} />
          <Route path="students" element={<StudentsList />} />
          <Route path="courses" element={<CoursesList />} />
          <Route path="exams" element={<ExamsList />} />
          <Route path="grades" element={<GradesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;