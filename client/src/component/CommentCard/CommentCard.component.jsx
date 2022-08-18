import './commentCard.styles.css'
import { useNavigate } from 'react-router-dom'
import { LocationContext } from '../../contexts/locationdetail.context'
import { useContext } from 'react'

const CommentCard = ({ comment, location }) => {
  const { selectedlocation, setSelectedLocation } = useContext(LocationContext)

  const navigate = useNavigate()
  const selectlocation = () => {
    setSelectedLocation(location)

    navigate(`/location/details/${location.id}`)
  }

  return comment ? (
    <div className="main-comment-container" onClick={selectlocation}>
      <img src={location.images[1]} />
      <div className="comment-content-box">
        <p id="textwrap">{comment ? comment.content : ''}</p>
      </div>
      <span>likes {comment ? comment.likes : ''}</span>
    </div>
  ) : (
    ''
  )
}

export default CommentCard
