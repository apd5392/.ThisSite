import CommentCard from '../../component/CommentCard/CommentCard.component'
import './location-details.styles.css'
import { LocationContext } from '../../contexts/locationdetail.context'
import { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EditContext } from '../../contexts/edit.context'
import { ReserveContext } from '../../contexts/reserve.context'
import EditForm from '../../component/EditForm/EditForm.component'
import ReservedBar from '../../component/ReservedBar/ReservedBar.component'
import { UserContext } from '../../contexts/user.context'
import UserComment from '../../component/UserComment/UserComment.component'
import like from '../../assets/heart-like.png'
import axios from 'axios'

const LocationDetail = () => {
  const { user } = useContext(UserContext)
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)

  const {
    isEdit,
    setIsEdit,
    setComment,
    setCommentIndex,
    isLeavingCommont,
    setIsLeavingCommont
  } = useContext(EditContext)
  const { dateRange } = useContext(ReserveContext)
  // const [selectedlocation, setSelectedLocation] = useState({
  //   name: '',
  //   address: '',
  //   description: '',
  //   images: [],
  //   price: 0,
  //   host: '',
  //   Comments: []
  // })
  const {
    name = '',
    address = '',
    description = '',
    images = [],
    price = 0,
    host = '',
    Comments = []
  } = selectedlocation
  //console.log('selectedLocation after refresh: ', selectedlocation)
  const [likes, toggleLikes] = useState(false)
  const [loading, isLoading] = useState(false)

  const { id } = useParams()
  console.log(id)
  console.log(Comments)

  useEffect(() => {
    const getLocationDetails = async () => {
      isLoading(true)
      const locations = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/location/${id}`
      )
      console.log(locations.data)
      setSelectedLocation(locations.data)
      isLoading(false)
    }

    getLocationDetails()
  }, [id])

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('stored-selected-location'))
  //   console.log(data)

  //   if (data) {
  //     setSelectedLocation(data)
  //   }
  // }, [])

  console.log(dateRange)
  const add = address === undefined ? '' : address.split(',')

  const openEdit = (comment, index) => {
    setIsEdit(!isEdit)
    setComment(comment)
    setCommentIndex(index)
  }

  const leaveCommont = () => {
    setIsLeavingCommont(!isLeavingCommont)
  }

  const calLikes = async (commentId, index) => {
    const likeStatus = document.querySelector('.like-btn-container')
    const likeId = document.getElementById(index)
    if (likeStatus.classList.contains('disactive')) {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/comment/like/${commentId}`
      )
      const updatedComment = await res.data
      //console.log(updatedComment)
      const newSelectedlocation = selectedlocation

      newSelectedlocation.Comments.splice(index, 1, updatedComment)
      //console.log(newSelectedlocation)

      setSelectedLocation(newSelectedlocation)
      likeId.style.backgroundColor = '#fab73d'
      toggleLikes(!likes)
    } else {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/comment/dislike/${commentId}`
      )
      const updatedComment = await res.data
      //console.log(updatedComment)
      const newSelectedlocation = selectedlocation

      newSelectedlocation.Comments.splice(index, 1, updatedComment)
      //console.log(newSelectedlocation)

      setSelectedLocation(newSelectedlocation)
      likeId.style.backgroundColor = 'transparent'
      toggleLikes(!likes)
    }
  }
  //console.log(selectedlocation)
  if (loading) {
    return <div>its loading</div>
  } else {
    return (
      <div
        className={`location-main-container ${isEdit ? 'active' : ''} ${
          isLeavingCommont ? 'active' : ''
        }`}
      >
        <div className="location-second-container">
          <h1 className="locationTitle">{name}</h1>
          <h2 className="locationLabel">{`${add[1]}, ${add[2]}`}</h2>

          <div className="location-img-main-container">
            {images.map((img, index) => (
              <div
                className={`img-container ${
                  index % 10 === 0 ? 'big' : 'small'
                }`}
              >
                <img src={img} />
              </div>
            ))}
          </div>
          <h3 className="postAuthor"> Hosted by {host.lastName}</h3>
          <h3 className="locationPricePer">{`$${price}  per night`}</h3>
          <div className="description-container">
            <p>{description}</p>
          </div>

          <h3>Reviews...</h3>
          <div>
            {dateRange && (
              <ReservedBar Price={price} Selectedlocation={selectedlocation} />
            )}
          </div>
          <button className="comment-button" onClick={leaveCommont}>
            Leave a comment
          </button>
          <UserComment />
          <div className="review-main-container">
            {Comments.map((comment, index) => (
              <div key={index} className="review-container">
                <div>
                  {comment.user_Id === user.id ? (
                    <i
                      class="fas fa-edit edit-icon"
                      onClick={() => openEdit(comment, index)}
                    ></i>
                  ) : (
                    ''
                  )}
                </div>
                <h5> {comment.commentCreator.firstName}</h5>

                {`comment: ${comment.content}`}
                <div className="like-box">
                  <div
                    id={index}
                    className={`like-btn-container ${
                      likes ? 'active' : 'disactive'
                    }`}
                  >
                    <img
                      src={like}
                      onClick={() => calLikes(comment.id, index)}
                    />

                    <h5> {comment.likes}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isEdit && <EditForm />}
        </div>
      </div>
    )
  }
}

export default LocationDetail
