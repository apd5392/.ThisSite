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

  const handleSubmit = (e) => {
    e.preventDefault()
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
    <div className="sign-container">
      <h1>Doesn't have an account yet?</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>First Name:</label>
          <input
            type="text"
            onChange={handleChange}
            name="firstName"
            value={firstName}
            required
          />
        </div>
        <div className="input-container">
          <label>Last Name:</label>
          <input
            type="text"
            onChange={handleChange}
            name="lastName"
            value={lastName}
            required
          />
        </div>

        <div className="input-container">
          <label>Username:</label>
          <input
            type="text"
            onChange={handleChange}
            name="userName"
            value={userName}
            required
          />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />
        </div>

        <div className="input-container">
          <label>Phone Number:</label>
          <input
            type="text"
            onChange={handleChange}
            name="phoneNumber"
            value={phoneNumber}
            required
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
        </div>

        <div className="input-container">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={passwordValidte}
            value={confirmPassword}
            required
          />
        </div>

        {isError && <p>password doesn't match</p>}
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
