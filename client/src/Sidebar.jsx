import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/students">Students</NavLink> 
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/exams">Exams</NavLink>
        <NavLink to="/grades">Grades</NavLink>
      </nav>
    </div>
  );
}