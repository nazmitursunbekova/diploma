import { NavLink } from "react-router-dom";
import "./Nav.css";


 export default function Nav(props){
  return(
    <nav className="Nav">
      <ul>
      <li><NavLink to="/">HOME</NavLink></li>
      <li><NavLink to="/about">ABOUT</NavLink></li>
      <li><NavLink to="/contacts">CONTACTS</NavLink></li>
      <li><NavLink to="/delivery">DELIVERY</NavLink></li>
      </ul>
    </nav>
  );
 }