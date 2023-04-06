import { NavLink } from "react-router-dom";
import "./Nav.css";


 export default function Nav(props){
  return(
    <nav className="Nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
 }