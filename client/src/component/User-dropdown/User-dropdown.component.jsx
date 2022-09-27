import './user-dropdown.styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user.context'
import { Navigate } from 'react-router-dom'

const UserDropDown = ({ setToggleuser, Toggleuser }) => {
  const { user, setUser } = useContext(UserContext)
  const [label, setLabel] = useState('')
  const navigae = useNavigate()

  const setUserLogOut = () => {
    setUser(null)
    setToggleuser(!Toggleuser)
    localStorage.removeItem('token')
    localStorage.removeItem('payload')
  }

  const handleClick = (e) => {
    console.log(`click`)
    setToggleuser(false)
    navigae(`/${e.target.id}`)
  }

  return (
    <div className="user-dropdown-container">
      <div className="nav-links-containerDropDown">
        <div className="nav-link" id="hostedlocations" onClick={handleClick}>
          Hosted locations
        </div>
        <div className="nav-link" id="host" onClick={handleClick}>
          Host your home
        </div>
        <div className="nav-link" id="bookedlocation" onClick={handleClick}>
          Reservation
        </div>

        <div className="nav-link" id="accountdetail" onClick={handleClick}>
          Account
        </div>
        <Link className="nav-link" to="/" onClick={setUserLogOut}>
          Log Out
        </Link>
      </div>
    </div>
  )
}

export default UserDropDown
