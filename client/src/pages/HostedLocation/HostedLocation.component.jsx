import './hostedlocation.styles.css'
import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'

const HostedLocation = () => {
  const { user, setUser } = useContext(UserContext)
  const { host } = user

  //   console.log(host)
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
              <p>Name:</p>
              <p>{`Address: ${location.address}`}</p>
              <p>{`Description: ${location.description}`}</p>
              <p>{`Price: ${location.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HostedLocation
