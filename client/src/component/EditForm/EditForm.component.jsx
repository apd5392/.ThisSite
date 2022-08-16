import './editform.styles.css'

import { useState } from 'react'
const defaultFormfields = {
  user_Id: 1,
  location_Id: 2,
  rating: '',
  content: ''
}

const EditForm = () => {
  const [Formfields, setFormfields] = useState(defaultFormfields)
  const { user_Id, location_Id, rating, content } = Formfields

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormfields({ ...Formfields, [name]: value })
  }
  console.log(Formfields)
  return (
    <div className="edit-form-main-container">
      <h5>User Id:{user_Id} </h5>
      <h5> Location Id :{location_Id} </h5>
      <div className="input-edit-container">
        <form>
          <label>Tell us what you think: </label>
          <textarea
            type="text"
            onChange={handleChange}
            name="content"
            value={content}
            required
            className="text-container"
          />
          <label>Rating(1-5): </label>
          <input
            type="number"
            min="1"
            max="5"
            onChange={handleChange}
            name="rating"
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
