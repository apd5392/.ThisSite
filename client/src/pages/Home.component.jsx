import Search from '../component/Search/Search.component'
import CardSlider from '../component/Slider/Slider.component'
import LocationCard from '../component/LocationCard/LocationCard.component'
import CommentCard from '../component/CommentCard/CommentCard.component'
import "./Home.styles.css"

const Home = () => {
  return (
    <div className="Home-container">
      <h1>Find places to stay on .ThisSite</h1>
      <p>Discover entire homes and private rooms perfect for any trip.</p>
      <Search />
      <CardSlider locationCard={LocationCard} />
      <CardSlider locationCard={CommentCard} />
    </div>
  )
}

export default Home
