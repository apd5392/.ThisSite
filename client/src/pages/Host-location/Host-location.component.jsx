import './host-location.styles.css'
import { useState } from 'react'

const defaultFormfields = {
  user_Id: '',
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
      }
    })
  }

  console.log(preview)

  return (
    <div className="host-container">
      <h1>Please fill out details</h1>
      <form>
        <div className="img-container">
          <label>Please upload five image og your hosting</label>
          <input
            type="file"
            name="images"
            multiple="multiple"
            onChange={handleChange}
            className="form-input"
          />
          <div>
            {preview.map((img) => (
              <img src={img} />
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

        <button>Host my location</button>
      </form>
    </div>
  )
}

export default HostLocation
