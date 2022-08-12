import { useState } from 'react'

const initSignInfo = {
  username: '',
  password: ''
}

const SignIn = () => {
  const [userInfo, setUserInfo] = useState(initSignInfo)
  const { username, password } = userInfo

  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }
  console.log(userInfo)

  return (
    <div className="sign-container">
      <form>
        <div className="input-container">
          <label>Username:</label>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={username}
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            required
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
