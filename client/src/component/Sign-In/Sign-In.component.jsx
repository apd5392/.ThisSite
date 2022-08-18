import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import { SignInUser } from '../../services/Auth'
const initSignInfo = {
  userName: '',
  password: ''
}

const SignIn = () => {
  const { user, setUser, toggleAuthenticated } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState(initSignInfo)
  const { userName, password } = userInfo
  const navigate = useNavigate()
  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const getUser = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(userInfo)
    console.log(payload)

    setUser(payload)
    setUserInfo(initSignInfo)
    toggleAuthenticated(true)
    // navigate(`/`)
  }
  console.log(userInfo)
  console.log(user)

  return (
    <div className="sign-container">
      <h1>Please Sign In</h1>
      <form onSubmit={getUser}>
        <div className="input-containerIn">
          <label>Username: </label>
          <input
            className="signScreen"
            type="text"
            onChange={handleChange}
            name="userName"
            value={userName}
          />
        </div>
        <div className="input-containerIn">
          <label>Password: </label>
          <input
            className="signScreen"
            type="password"
            required
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <button className="signInBtn">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
