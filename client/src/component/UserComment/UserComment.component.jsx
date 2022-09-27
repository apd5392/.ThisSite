import { useState } from 'react'
import { useContext } from 'react'
import { EditContext } from '../../contexts/edit.context'
import { LocationContext } from '../../contexts/locationdetail.context'
import { UserContext } from '../../contexts/user.context'
import axios from 'axios'
import './userComment.styles.css'
import Client from '../../services/api'
const defaultFormfields = {
  user_id: '',
  location_id: '',
  rating: '',
  content: ''
}

const UserComment = () => {
  const { user, setUser } = useContext(UserContext)
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)

  const { isLeavingCommont, setIsLeavingCommont } = useContext(EditContext)

  const [Formfields, setFormfields] = useState(defaultFormfields)
  const { user_id, location_id, rating, content } = Formfields

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormfields({
      ...Formfields,
      [name]: value,
      user_id: user.id,
      location_id: selectedlocation.id
    })
  }
  console.log(Formfields)

  const handleSubmitComment = async (e) => {
    e.preventDefault()
    console.log(Formfields)
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/comment`,
      Formfields
    )
    console.log(res)
    const newComment = res.data
    console.log(newComment)

    const newSelectedlocation = selectedlocation

    newSelectedlocation.Comments.push(newComment)
    console.log(newSelectedlocation)

    setSelectedLocation(newSelectedlocation)
    setIsLeavingCommont(!isLeavingCommont)
  }

  console.log(selectedlocation)

  return (
    <div
      className={`usercomment-main-container ${isLeavingCommont ? 'open' : ''}`}
    >
      <div>
        <form
          className="usercomment-second-container"
          onSubmit={(e) => handleSubmitComment(e)}
        >
          <label className="userFeedBack">Tell us what you think: </label>
          <textarea
            type="text"
            onChange={handleChange}
            name="content"
            value={content}
            required
            className="comment-container"
          />
          <label className="ratingBox">Rating: </label>
          <input
            type="number"
            min="0"
            max="5"
            onChange={handleChange}
            name="rating"
            value={rating}
            placeholder="Rate from 0 to 5"
            className="rating"
            required
          />
          <button className="comment-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UserComment
