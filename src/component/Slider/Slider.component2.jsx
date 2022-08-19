import './slider2.styles.css'
// import LocationCard from '../LocationCard/LocationCard.component'

const CardSlider2 = ({ commentCard: CommentCard, Locations }) => {
  const slideLeft = () => {
    const slider = document.querySelector('.slider2')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.querySelector('.slider2')
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className="main-slider2-container">
      <div className="left-btn btn" onClick={slideLeft}>
        <i class="fa-solid fa-angles-left"></i>
      </div>

      <div className="slider2">
        {Locations &&
          Locations.map((element, index) => (
            <CommentCard
              key={index}
              comment={element.Comments[0]}
              location={element}
            />
          ))}
      </div>
      <div className="right-btn btn" onClick={slideRight}>
        <i class="fa-solid fa-angles-right"></i>
      </div>
    </div>
  )
}

export default CardSlider2
