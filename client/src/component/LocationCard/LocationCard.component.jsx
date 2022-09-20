import './locationCard.styles.css'
import { LocationContext } from '../../contexts/locationdetail.context'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LocationCard = ({ location }) => {
  const {
    selectedlocation,
    setSelectedLocation,
    stateAndCity,
    setStateAndCity
  } = useContext(LocationContext)
  const navigate = useNavigate()
  const [rating, setRating] = useState(0)

  const selectlocation = () => {
    setSelectedLocation(location)

    navigate(`/location/details/${location.id}`)
  }

  useEffect(() => {
    calRating()
  }, [])

  const calRating = () => {
    // console.log(`working`)
    const ratings = location.Comments
    let sum = 0
    if (ratings.length > 0) {
      ratings.map((rating) => {
        sum += rating.rating
        let average = sum / parseInt(ratings.length)
        setRating(average.toFixed(2))
      })
    }
  }

  return (
    <div className="main-location-container" onClick={selectlocation}>
      <img src={location.images[0]} />
      <div>
        <p>{location.address}</p>
        <span>rating: {rating}</span>
      </div>
    </div>
  )
}

export default LocationCard
