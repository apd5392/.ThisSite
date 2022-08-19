import './host-location.styles.css'
import { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'

const defaultFormfields = {
  user_Id: '',
  name: '',
  images: [],
  address: '',
  description: '',
  price: ''
}

const HostLocation = () => {
  const { user, authenticated } = useContext(UserContext)
  const [Formfields, setFormfields] = useState(defaultFormfields)
  const { name, images, address, description, price } = Formfields
  const [preview, setPreview] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    const files = e.target.files
    console.log(files)
    preViewFiles(files)
    const { name, value } = e.target
    setFormfields({ ...Formfields, [name]: value })
  }

  const preViewFiles = async (files) => {
    const previewList = [...preview]
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        previewList.push(reader.result)
        setPreview(previewList)
        setFormfields({ ...Formfields, images: previewList, user_Id: user.id })
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newLocation = await axios.post(
      `http://localhost:3001/api/location/host`,
      Formfields
    )
    console.log(newLocation)
  }

  console.log(preview)
  console.log(Formfields)

  return user && authenticated ? (
    <div className="host-container">
      <h1>Please fill out details</h1>
      <form onSubmit={handleSubmit}>
        <div className="img-container">
          <label>Please upload five images of your hosting </label>
          <input
            type="file"
            // name="images"
            multiple="multiple"
            onChange={handleChange}
            className="form-input"
            required
          />
          <div className="upload-img-container">
            {preview.map((img, index) => (
              <div className="img-box">
                <img src={img} />
              </div>
            ))}
          </div>
        </div>
        <div className="input-containerUp">
          <label>Location Name: </label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={name}
            required
          />
        </div>
        <div className="input-containerUp">
          <label>Address: </label>
          <input
            type="text"
            onChange={handleChange}
            name="address"
            value={address}
            required
          />
        </div>
        <div className="input-containerUp">
          <label>Description: </label>
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={description}
            required
          />
        </div>
        <div className="input-containerUp">
          <label>Price: </label>
          <input
            type="number"
            onChange={handleChange}
            name="price"
            value={price}
            required
          />
        </div>

        <button>Host my location</button>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/auth')}>Sign In</button>
    </div>
  )
}

export default HostLocation
