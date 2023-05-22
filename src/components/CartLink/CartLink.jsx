import "./CartLink.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);
  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);
  return (
    <div className="CartLink">
      <Link to="/cart">
        <div className="Together">
          <img
            src="https://i.pinimg.com/564x/bd/14/9c/bd149c5c05185de274f040d809f93354.jpg"
            alt="icon"
            className="cartIcon"
          />{" "}
          <span>({total})</span>
        </div>
      </Link>
    </div>
  );
}
