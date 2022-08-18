import './editform.styles.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { EditContext } from '../../contexts/edit.context'
import { LocationContext } from '../../contexts/locationdetail.context'
import axios from 'axios'
const defaultFormfields = {
  rating: '',
  content: ''
}

const EditForm = () => {
  const {
    isEdit,
    setIsEdit,
    comment,
    editcomment,
    seteditComment,
    commentIndex,
    setCommentIndex
  } = useContext(EditContext)
  const [Formfields, setFormfields] = useState(defaultFormfields)
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)
  const { user_Id, location_Id, rating, content } = Formfields
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormfields({ ...Formfields, [name]: value })
  }
  console.log(comment)
  console.log(selectedlocation)
  console.log(commentIndex)

  const closeForm = () => {
    setIsEdit(!isEdit)
  }
  const navigate = useNavigate()

  const updateComment = async (e) => {
    e.preventDefault()
    const res = await axios.put(
      `http://localhost:3001/api/comment/${comment.id}`,
      Formfields
    )

    const updateComment = res.data[1]

    const newSelectedlocation = selectedlocation

    newSelectedlocation.Comments.splice(commentIndex, 1, updateComment)
    console.log(newSelectedlocation)

    setIsEdit(!isEdit)
    setSelectedLocation(newSelectedlocation)
  }

  return (
    <div
      className={`edit-form-main-container ${isEdit === false ? 'close' : ''}`}
    >
      <i class="fa-solid fa-xmark" onClick={closeForm}></i>
      <h5>User Id:{comment.user_Id} </h5>
      <h5> Location Id :{comment.location_Id} </h5>
      <div className="input-edit-container">
        <form onSubmit={updateComment}>
          <label>Tell us what you think: </label>
          <textarea
            type="text"
            onChange={handleChange}
            name="content"
            placeholder={comment.content}
            value={content}
            required
            className="text-container"
          />
          <label>Rating(0-5): </label>
          <input
            type="number"
            min="0"
            max="5"
            onChange={handleChange}
            name="rating"
            placeholder={comment.rating}
            value={rating}
            required
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditForm
