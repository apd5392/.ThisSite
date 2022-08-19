import './confirmation.styles.css'

import { ReserveContext } from '../../contexts/reserve.context'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user.context'
import axios from 'axios'

const defaultBooking = {
  user_id: 0,
  location_id: 0,
  start_date: '',
  end_date: ''
}
const ConfirmationPage = () => {
  const {
    numberOfGuest,
    setnumberOfGuest,
    dateRange,
    setDateRange,
    location,
    setLocation,
    setPrice
  } = useContext(ReserveContext)

  const { user, setUser } = useContext(UserContext)
  const [booking, setBooking] = useState(defaultBooking)

  const calDays = (startDate, endDate) => {
    const difference = endDate - startDate
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24))
    return totalDays
  }
  const calTotalbeforeTax = (days, price) => {
    return days * price
  }
  console.log(user)
  console.log(location)
  const calTax = (totalbeforeTax) => {
    return totalbeforeTax * 0.06
  }
  const calTotal = (total, tax) => {
    return total + tax
  }

  const days = calDays(dateRange.startDate, dateRange.endDate)
  const total = calTotalbeforeTax(days, location.price)
  const totalTax = calTax(total)
  const totalPrice = calTotal(total, totalTax)

  const handleSubmitBook = async () => {
    await setBooking({
      user_id: user.id,
      location_id: location.id,
      start_date: JSON.stringify(dateRange.startDate.toISOString().split('T')[0]),
      end_date: JSON.stringify(dateRange.endDate.toISOString().split('T')[0])
    })
    const bookingResult = await axios.post(
      `http://localhost:3001/api/booking`,
      booking
    )
    console.log(bookingResult)
  }
  console.log(booking)

  return (
    <div className="confirmation-main-container">
      <div className="confirmation-second-container">
        <div className="confirmation-img-container">
          <img src={location.images[2]} />
        </div>
        <div className="confirmation-content-container">
          <p className='locationAddress'>Address: {location.address}</p>
          <p>
            {`$${location.price} x ${days} Days (${days -1}
            Nights)`}
          </p>
          <p className='total'>Subtotal: ${total}</p>
          <p className='tax'>{`Tax : $${totalTax}`}</p>
          <p className='totalprice'>Total: ${totalPrice}</p>
        </div>
        <button classname="confirm-button" onClick={handleSubmitBook}>Book Your Reservation</button>
      </div>
    </div>
  )
}

export default ConfirmationPage
