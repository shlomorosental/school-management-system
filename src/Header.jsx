import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">School App</Link>  
      </div>
    </header>
  );
}