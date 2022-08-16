import './locationCard.styles.css'
import { LocationContext } from '../../contexts/locationdetail.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const LocationCard = ({ location }) => {
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)
  const navigate = useNavigate()

  const selectlocation = () => {
    setSelectedLocation(location)

    navigate(`/location/details/${location.id}`)
  }

  return (
    <div className="main-location-container" onClick={selectlocation}>
      <img src={location.images[0]} />
      <div>
        <p>{location.address}</p>
        <span>rating</span>
      </div>
    </div>
  )
}

export default LocationCard
