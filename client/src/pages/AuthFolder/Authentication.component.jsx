import SignIn from '../../component/Sign-In/Sign-In.component'
import SignUp from '../../component/Sign-up/Sign-up.component'
import './authentication.styles.css'
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
