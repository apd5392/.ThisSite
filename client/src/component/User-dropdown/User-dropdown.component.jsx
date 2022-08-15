import './user-dropdown.styles.css'
import { Link } from 'react-router-dom'
const UserDropDown = () => {
  return (
    <div className="user-dropdown-container">
      <div className="nav-links-container">
        <Link className="nav-link" to="/hostedlocations">
          Hosted locations
        </Link>
        <Link className="nav-link" to="/host">
          Host your home
        </Link>

        <Link className="nav-link" to="/account">
          Account
        </Link>
        <h2>Log out</h2>
      </div>
    </div>
  )
}

export default UserDropDown
