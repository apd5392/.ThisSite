import './locationCard.styles.css'
import { LocationContext } from '../../contexts/locationdetail.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const LocationCard2 = ({ Location }) => {
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)
  const navigate = useNavigate()
  const [rating, setRating] = useState(0)

  const selectlocation = () => {
    setSelectedLocation(Location)
    navigate(`/location/details/${Location.id}`)
  }

  useEffect(() => {
    calRating(Location)
  }, [])

  const calRating = (Location) => {
    console.log(`working`)
    const ratings = Location.Comments
    let sum = 0
    ratings.map((rating) => {
      sum += rating.rating
    })
    console.log(ratings)
    setRating(sum)
  }

  return (
    <div className="main-location-container" onClick={selectlocation}>
      <img src={Location.images[0]} />
      <div>
        <p>{Location.address}</p>
        <span>rating:0 {rating}</span>
      </div>
    </div>
  )
}

export default LocationCard2
