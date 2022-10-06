import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navigation.styles.css'
import UserDropDown from '../User-dropdown/User-dropdown.component'
import { useContext, useState } from 'react'
import { SignInUser } from '../../services/Auth'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'
const Navigation = () => {
  const { user, setUser, toggleAuthenticated } = useContext(UserContext)
  const [toggleuser, setToggleuser] = useState(false)

  const navigate = useNavigate()
  const toggleUserIcon = () => {
    setToggleuser(!toggleuser)
  }

  const getUser = async (e) => {
    e.preventDefault()
    const payload = await SignInUser({ userName: 'CC', password: 'abc1234' })
    console.log(payload)
    setUser(payload)
    toggleAuthenticated(true)
    navigate(`/`)
  }

  return (
    <Fragment>
      <div className="navigation">
        <div className={`logo-container ${user ? 'login' : ''}`}>
          <Link to="/">
            <img src={logo} />
            <h1 className="Title">.ThisSite</h1>
          </Link>
        </div>

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          {user ? (
            <i class="fa-solid fa-user user-icon" onClick={toggleUserIcon}></i>
          ) : (
            ''
          )}
          {user ? (
            ''
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          {user ? '' : <button onClick={getUser}>Login existing user</button>}
        </div>
        {toggleuser && (
          <UserDropDown setToggleuser={setToggleuser} Toggleuser={toggleuser} />
        )}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
