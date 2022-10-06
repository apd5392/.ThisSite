import './editform.styles.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { EditContext } from '../../contexts/edit.context'
import { LocationContext } from '../../contexts/locationdetail.context'
import axios from 'axios'
import { EditComment } from '../../services/Auth'

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
    console.log(Formfields)
    e.preventDefault()
    const res = await EditComment(Formfields, comment.id)
    console.log(res)

    const updateComment = await res

    const newSelectedlocation = selectedlocation
    console.log(newSelectedlocation.Comments)

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
      <div className="input-edit-container">
        <form onSubmit={updateComment}>
          <label>
            {' '}
            <h3>
              Hey {comment.commentCreator.firstName} tell us what you think!{' '}
            </h3>
          </label>
          <textarea
            type="text"
            onChange={handleChange}
            name="content"
            placeholder={comment.content}
            value={content}
            required
            className="text-container"
          />
          <label>Rating: </label>
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
