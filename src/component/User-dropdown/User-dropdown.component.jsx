import './user-dropdown.styles.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user.context'

const UserDropDown = ({ setToggleuser, Toggleuser }) => {
  const { user, setUser } = useContext(UserContext)

  const setUserLogOut = () => {
    setUser(null)
    setToggleuser(!Toggleuser)
  }
  return (
    <div className="user-dropdown-container">
      <div className="nav-links-containerDropDown">
        <Link className="nav-link" to="/hostedlocations">
          Hosted locations
        </Link>
        <Link className="nav-link" to="/host">
          Host your home
        </Link>
        <Link className="nav-link" to="/bookedlocation">
          Reservation
        </Link>

        <Link className="nav-link" to="/accountdetail">
          Account
        </Link>
        <Link className="nav-link" to="/" onClick={setUserLogOut}>
          Log Out
        </Link>
      </div>
    </div>
  )
}

export default UserDropDown
