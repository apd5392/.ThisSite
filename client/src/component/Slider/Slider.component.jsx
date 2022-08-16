import './slider.styles.css'
// import LocationCard from '../LocationCard/LocationCard.component'

const CardSlider = ({
  locationCard: LocationCard,
  commentCard: CommentCard,
  Locations
}) => {
  // const { locationCard: LocationCard } = props
  // const { Locations } = props

  console.log(Locations)
  const data = [1, 2, 3, 4, 5, 6, 7]

  const slideLeft = () => {
    const slider = document.querySelector('.slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const slideRight = () => {
    const slider = document.querySelector('.slider')
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  return (
    <div className="main-slider-container">
      <div className="left-btn btn" onClick={slideLeft}>
        <i class="fa-solid fa-angles-left"></i>
      </div>

      <div className="slider">
        {Locations &&
          Locations.map((element, index) => (
            <LocationCard key={index} location={element} />
          ))}
      </div>
      <div className="right-btn btn" onClick={slideRight}>
        <i class="fa-solid fa-angles-right"></i>
      </div>
    </div>
  )
}

export default CardSlider
