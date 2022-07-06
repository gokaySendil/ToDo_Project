import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { authSignOut } from "./database/Firebase";
import "../styles/_Navbar.scss";

const NavBar = () => {
  const history = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    authSignOut().then(history(-1));
  };

  return (
    <div>
      <ul>
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </ul>
    </div>
  );
};

export default NavBar;
