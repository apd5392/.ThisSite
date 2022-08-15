import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navigation.styles.css'
import UserDropDown from '../User-dropdown/User-dropdown.component'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} />
            <h1>.ThisSite</h1>
          </Link>
        </div>

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/search">
            SEARCH
          </Link>

          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
        <UserDropDown />
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
