import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartLink.css";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        <img src="https://i.pinimg.com/564x/f9/94/47/f99447febc2466ecfd4286d2b688990c.jpg" />
        ({total})
      </Link>
    </div>
  );
}
