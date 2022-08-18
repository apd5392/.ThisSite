import CommentCard from '../../component/CommentCard/CommentCard.component'
import './location-details.styles.css'
import { LocationContext } from '../../contexts/locationdetail.context'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditContext } from '../../contexts/edit.context'
import { ReserveContext } from '../../contexts/reserve.context'
import EditForm from '../../component/EditForm/EditForm.component'
import ReservedBar from '../../component/ReservedBar/ReservedBar.component'

const LocationDetail = () => {
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)
  const { isEdit, setIsEdit, comment, setComment } = useContext(EditContext)
  const { dateRange } = useContext(ReserveContext)
  const { address, description, images, price, host, Comments } =
    selectedlocation

  console.log(selectedlocation)
  const add = address.split(',')

  const openEdit = (comment) => {
    setIsEdit(true)
    setComment(comment)
  }

  return (
    <div className={`location-main-container ${isEdit ? 'active' : ''}`}>
      <h1 className='locationTitle'>Location Name</h1>
      <h2 className='locationLabel'>{`${add[1]},  ${add[2]}`}</h2>

      <div className="location-img-main-container">
        {images.map((img, index) => (
          <div
            className={`img-container ${index % 10 === 0 ? 'big' : 'small'}`}
          >
            <img src={img} />
          </div>
        ))}
      </div>
      <h3 className='postAuthor'> Hosted by {host.lastName}</h3>
      <h3 className='locationPricePer'>{`$${price}  per night`}</h3>
      <p>{description}</p>
      <h3>Reviews...</h3>
      <div>
        {dateRange && (
          <ReservedBar Price={price} Selectedlocation={selectedlocation} />
        )}
      </div>
      <button className="comment-button">Leave a comment</button>

      <div className="review-main-container">
        {Comments.map((comment, index) => (
          <div key={index} className="review-container">
            <div onClick={() => openEdit(comment)}>
              <i class="fas fa-edit edit-icon"></i>
            </div>
            <h5> Likes : {comment.likes}</h5>

            {`comment: ${comment.content}`}
          </div>
        ))}
      </div>

      {isEdit && <EditForm />}
    </div>
  )
}

export default LocationDetail
