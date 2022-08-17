import './commentCard.styles.css'

const CommentCard = ({ comment, location }) => {
  // console.log(comment)

  return comment ? (
    <div className="main-comment-container">
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
