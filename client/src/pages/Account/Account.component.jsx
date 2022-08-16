import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import './account.styles.css'
const AccountDetail = () => {
  const { user } = useContext(UserContext)
  const [userUpdateInput, setuserUpdateInput] = useState({
    email: user ? user.email : '',
    password: user ? user.password : '',
    phoneNumber: user ? user.phoneNumber : '',
    lastName: user ? user.lastName : '',
    firstName: user ? user.firstName : ''
  })

  const [deleteUser, setDeleteUser] = useState(false)

  const navigate = useNavigate()

  const submitUserInput = async (e) => {
    e.preventDefault()

    // console.log(userUpdateInput)

    // const newUser = await axios.put(`/user/${user._id}`, userUpdateInput)
    // console.log(newUser)
    // if (newUser.status === 200) {
    //   console.log(newUser.data)
    //   await setUser(newUser.data)
    //   console.log(user)
    //   e.target.reset()
    // }
  }

  const handleChange = (e) => {
    setuserUpdateInput({
      ...userUpdateInput,
      [e.target.name]: e.target.value
    })
    console.log(userUpdateInput)
  }

  const deleteAccount = async () => {
    // const res = await axios.delete(`/user/${user._id}`)
    // console.log(res)

    setDeleteUser(true)
    setTimeout(() => {
      navigate(`/home`)
    }, 3000)
  }

  console.log(user)

  return (
    <div className="create-account-main">
      {deleteUser === true ? <div>WE ARE SORRY TO LOSE YOU ....</div> : ''}
      <div />
      <h1>UPDAT PERSONAL DETAILS</h1>
      <div className="create-account-form">
        <h1>hello</h1>
        <form onSubmit={submitUserInput} className="create-account-form">
          <input
            type="text"
            name="firstName"
            placeholder={user ? user.firstName : 'FIRSTNAME'}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder={user ? user.lastName : 'LASTNAME'}
            onChange={handleChange}
          />
          <input
            type="text"
            name=" phoneNumber"
            placeholder={user ? user.phoneNumber : 'PhoneNumber'}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder={user ? user.email : 'EMAIL'}
            onChange={handleChange}
          />
          <input
            type="password"
            name="Password"
            placeholder="PASSWORD"
            onChange={handleChange}
          />
          <div className="btn-box">
            <button name="updateBtn" className="btn update-btn">
              UPDATE
            </button>
            <button
              value="deleteBtn"
              onClick={deleteAccount}
              className="btn update-btn"
            >
              DELETE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AccountDetail
