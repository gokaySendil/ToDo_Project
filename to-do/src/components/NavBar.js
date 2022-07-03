import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { auth } from "./database/Firebase";
import "../styles/_Navbar.scss";

const NavBar = () => {
  const history = useNavigate();
  const handleLogout = async () => {
    auth.signOut().then(history("/"));
  };

  return (
    <div>
      <ul>
        <button onClick={handleLogout}>Log out</button>
        <h2>{auth.currentUser.email}</h2>
      </ul>
    </div>
  );
};

export default NavBar;
