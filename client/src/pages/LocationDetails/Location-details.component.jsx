import CommentCard from '../../component/CommentCard/CommentCard.component'
import './location-details.styles.css'
import { LocationContext } from '../../contexts/locationdetail.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const imgs = [
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-649174746454804910/original/05e3038e-3429-4354-8d9e-8d141ccd0b91.jpeg?im_w=960',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-649174746454804910/original/b4df005a-0111-439c-b8f8-de795152b2c8.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-649174746454804910/original/778f28da-3365-4966-bfa9-697f8fc13a2a.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-649174746454804910/original/1c362f26-e8ae-4b0c-ba7d-ba53a253d569.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-649174746454804910/original/6a156cfa-e485-432b-b006-d0a8adf13db4.jpeg?im_w=720'
]
const LocationDetail = () => {
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)
  const { address, description, images, price, host } = selectedlocation
  console.log(host)
  const add = address.split(',')

  return (
    <div className="location-main-container">
      <h1>title</h1>
      <h2>{`${add[1]},  ${add[2]}`}</h2>
      <div className="location-img-main-container">
        {images.map((img, index) => (
          <div
            className={`img-container ${index % 10 === 0 ? 'big' : 'small'}`}
          >
            <img src={img} />
          </div>
        ))}
      </div>
      <h3> Hosted by {host.lastName}</h3>
      <h3>{`$ ${price}  per night`}</h3>
      <p>{description}</p>
      <div className="review-container">
        <h3>Reviews... </h3>
        <CommentCard />
      </div>
    </div>
  )
}

export default LocationDetail
