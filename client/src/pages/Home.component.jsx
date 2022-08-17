import Search from '../component/Search/Search.component'
import CardSlider from '../component/Slider/Slider.component'
import LocationCard from '../component/LocationCard/LocationCard.component'
import CommentCard from '../component/CommentCard/CommentCard.component'
import './Home.styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const getLocations = async () => {
      const locations = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/location`
      )
      console.log(locations.data)
      setLocations(locations.data)
    }
    getLocations()
  }, [])
  console.log(locations)

  return (
    <div className="Home-container">
      <h1>Find places to stay on .ThisSite</h1>
      <p>Discover entire homes and private rooms perfect for any trip.</p>
      <Search />
      <CardSlider locationCard={LocationCard} Locations={locations} />
      <CardSlider commentCard={CommentCard} />
    </div>
  )
}

export default Home

// Adama put this here since env don't work.. delete when submitting `http://localhost:3005/api/location`

