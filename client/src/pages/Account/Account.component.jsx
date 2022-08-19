import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./account.styles.css";
const AccountDetail = () => {
  const { user } = useContext(UserContext);
  const [userUpdateInput, setuserUpdateInput] = useState({
    email: user ? user.email : "",
    password: user ? user.password : "",
    phoneNumber: user ? user.phoneNumber : "",
    lastName: user ? user.lastName : "",
    firstName: user ? user.firstName : "",
  });

  const [deleteUser, setDeleteUser] = useState(false);
  const [updateUser, setUser] = useState(false);

  const navigate = useNavigate();

  const submitUserInput = async (e) => {
    e.preventDefault();
    console.log(userUpdateInput);
    const newUser = await axios.put(
      `http://localhost:3001/api/user/${user.id}`,
      userUpdateInput
    );
    console.log(newUser);
    if (newUser.status === 200) {
      console.log(newUser.data);
      await setUser(newUser.data);
      console.log(user);
      e.target.reset();
    }
  };

  const handleChange = (e) => {
    setuserUpdateInput({
      ...userUpdateInput,
      [e.target.name]: e.target.value,
    });
    console.log(userUpdateInput);
  };

  const deleteAccount = async () => {
    const res = await axios.delete(
      `http://localhost:3001/api/user/${user._id}`
    );
    console.log(res);

    setDeleteUser(true);
    setTimeout(() => {
      alert("Delete Successful");
      navigate(`/`);
    }, 1500);
  };

  console.log(user);

  return (
    <div className="create-account-main">
      {deleteUser === true ? (
        <div>
          <h1 className="deleteAccMessage">WE ARE SORRY TO LOSE YOU ....</h1>
        </div>
      ) : (
        ""
      )}
      <div />
      <h1>Update Account Information</h1>
      <div className="create-account-form">
        <form onSubmit={submitUserInput} className="create-account-form">
          <input
            type="text"
            name="firstName"
            placeholder={user ? user.firstName : "First Name"}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder={user ? user.lastName : "Last Name"}
            onChange={handleChange}
          />
          <input
            type="text"
            name=" phoneNumber"
            placeholder={user ? user.phoneNumber : "Phone Number"}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder={user ? user.email : "Email"}
            onChange={handleChange}
          />
          <input
            type="password"
            name="Password"
            placeholder="Password*"
            onChange={handleChange}
          />
          <div className="btn-box">
            <button name="updateBtn" className="acc-update-btn">
              Update
            </button>
            <button
              value="deleteBtn"
              onClick={deleteAccount}
              className="acc-delete-btn"
            >
              Delete Account
            </button>
          </div>
          <p>* = Required Field</p>
        </form>
      </div>
    </div>
  );
};

export default AccountDetail;
