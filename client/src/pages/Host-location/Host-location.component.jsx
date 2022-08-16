import './host-location.styles.css'
import { useState } from 'react'
import axios from 'axios'
const defaultFormfields = {
  user_Id: 1,
  images: [],
  address: '',
  description: '',
  price: ''
}
const HostLocation = () => {
  const [Formfields, setFormfields] = useState(defaultFormfields)
  const { images, address, description, price } = Formfields
  const [preview, setPreview] = useState([])

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
        setFormfields({ ...Formfields, images: previewList })
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

  return (
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
  )
}

export default HostLocation
