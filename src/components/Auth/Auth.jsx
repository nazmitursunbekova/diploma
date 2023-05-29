import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span>
      Guest <button onClick={logIn}>Sign in</button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span>
        <Link to ="/orders"> {user.displayName} </Link>
        <button onClick={logOut}>Sign out</button>
      </span>
    );
  }

  return <div className="Auth">
  <img onClick={logIn} src="https://i.pinimg.com/564x/5e/d6/39/5ed63905c998c5c3cd29f2ab3890ee2e.jpg" alt="" /></div>}