import './locationCard.styles.css'
import { LocationContext } from '../../contexts/locationdetail.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const LocationCard2 = ({ Location }) => {
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)
  const navigate = useNavigate()

  console.log(Location)
  const selectlocation = () => {
    setSelectedLocation(Location)

    navigate(`/location/details/${Location.id}`)
  }

  console.log(selectedlocation)
  return (
    <div className="main-location-container" onClick={selectlocation}>
      <img src={Location.images[0]} />
      <div>
        <p>{Location.address}</p>
        <span>rating</span>
      </div>
    </div>
  )
}

export default LocationCard2
