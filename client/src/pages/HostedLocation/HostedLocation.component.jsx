import './hostedlocation.styles.css'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'

const HostedLocation = () => {
  const { user, setUser } = useContext(UserContext)
  const [hostedLocation, setHostedLocation] = useState([])

  const { host } = user

  useEffect(() => {
    const getHostedLocation = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/hosted/${user.id}`
      )
      const newHostedlocation = await res.data

      console.log(newHostedlocation)
      setUser(newHostedlocation[0])
    }
    getHostedLocation()
  }, [])

  console.log(hostedLocation)
  return (
    <div className="hostedlocation-main-container">
      <h2>These are the locations hosted by you:</h2>
      <div className="hostedlocation-second-container">
        {host.map((location, index) => (
          <div className="hostedlocation-third-container">
            <div className="hostedlocation-img-container">
              <img src={location.images[0]} />
            </div>

            <div className="hostedlocation-content-container">
              <p className="location-name">{`${location.name}`}</p>
              <p>{`Address: ${location.address}`}</p>
              <p className="hostedlocation-description">{`Description: ${location.description}`}</p>
              <p>{`Price: $ ${location.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HostedLocation
