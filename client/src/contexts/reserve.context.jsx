import { createContext, useState } from 'react'

export const ReserveContext = createContext({
  numberOfGuest: {},
  setnumberOfGuest: () => {},
  dateRange: {},
  setDateRange: () => {},
  location: {},
  setLocation: () => {},
  price: 0,
  setPrice: () => {}
})

export const ReserveProvider = ({ children }) => {
  const [numberOfGuest, setnumberOfGuest] = useState({})
  const [dateRange, setDateRange] = useState({})
  const [location, setLocation] = useState({})
  const [price, setPrice] = useState()

  const value = {
    numberOfGuest,
    setnumberOfGuest,
    dateRange,
    setDateRange,
    location,
    setLocation,
    price,
    setPrice
  }

  return (
    <ReserveContext.Provider value={value}>{children}</ReserveContext.Provider>
  )
}
