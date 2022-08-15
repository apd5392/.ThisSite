import "./user-dropdown.styles.css";
import { Link } from "react-router-dom";
const UserDropDown = () => {
  return (
    <div className="user-dropdown-container">
      <div className="nav-links-containerDropDown">
        <Link className="nav-link" to="/hostedlocations">
          Hosted locations
        </Link>
        <Link className="nav-link" to="/host">
          Host your home
        </Link>

        <Link className="nav-link" to="/account">
          Account
        </Link>
        <Link className="nav-link" to="/">
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default UserDropDown;
