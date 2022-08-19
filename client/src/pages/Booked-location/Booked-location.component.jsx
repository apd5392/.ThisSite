import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/user.context'
import LocationCard from '../../component/LocationCard/LocationCard.component'
import axios from 'axios'
import './booked-locations.styles.css'

const BookedLocation = () => {
  const { user, setUser } = useContext(UserContext)
  const [bookedLocation, setBookedLocation] = useState([])

  useEffect(() => {
    const getBookedLocation = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/location/booked/${user.id}`
      )
      const newBookedlocation = await res.data
      console.log(newBookedlocation)
      const list = [...bookedLocation, ...newBookedlocation]

      setBookedLocation(list)
      //
    }
    getBookedLocation()
  }, [user])
  console.log(bookedLocation)
  return (
    <div className="booklocation-main-container">
      <h1>Reservation:</h1>

      <div className="bookedlocation-second-container">
        {bookedLocation.length === 0
          ? ''
          : bookedLocation.map((Location) => (
              <LocationCard location={Location} />
            ))}
      </div>
    </div>
  )
}

export default BookedLocation
