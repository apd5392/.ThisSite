import axios from 'axios'
import { useState } from 'react'

const defaultFormfields = {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: ''
}

const SignUp = () => {
  const [Formfields, setFormfields] = useState(defaultFormfields)
  const [confirmPassword, setconfirmPassword] = useState('')
  const [isError, setIsError] = useState('')
  const { userName, firstName, lastName, email, phoneNumber, password } =
    Formfields

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(Formfields)
    const newUser = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/signup`,
      Formfields
    )
    console.log(newUser)

    setFormfields(defaultFormfields)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target

    setFormfields({ ...Formfields, [name]: value })
  }

  const passwordValidte = (e) => {
    console.log(e.target.value)
    setconfirmPassword(e.target.value)
    if (e.target.value !== password) {
      setIsError(true)
    } else {
      setIsError('')
    }
  }

  return (
    <div className="signUp-container">
      <h1>Don't Have an Account Yet?</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-containerUp">
          <label>First Name: </label>
          <input
            className="signScreen"
            type="text"
            onChange={handleChange}
            name="firstName"
            value={firstName}
            required
          />
        </div>
        <div className="input-containerUp">
          <label>Last Name: </label>
          <input
            className="signScreen"
            type="text"
            onChange={handleChange}
            name="lastName"
            value={lastName}
            required
          />
        </div>

        <div className="input-containerUp">
          <label>Username: </label>
          <input
            className="signScreen"
            type="text"
            onChange={handleChange}
            name="userName"
            value={userName}
            required
          />
        </div>
        <div className="input-containerUp">
          <label>Email: </label>
          <input
            className="signScreen"
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />
        </div>

        <div className="input-containerUp">
          <label>Phone Number: </label>
          <input
            className="signScreen"
            type="text"
            onChange={handleChange}
            name="phoneNumber"
            value={phoneNumber}
            required
          />
        </div>
        <div className="input-containerUp">
          <label>Password: </label>
          <input
            className="signScreen"
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
        </div>

        <div className="input-containerUp">
          <label>Confirm Password: </label>
          <input
            className="signScreen"
            type="password"
            name="confirmPassword"
            onChange={passwordValidte}
            value={confirmPassword}
            required
          />
        </div>

        {isError && <p>password doesn't match</p>}
        <button className="signUpbtn">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
