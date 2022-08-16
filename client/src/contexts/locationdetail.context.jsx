import { createContext, useState } from 'react'

export const LocationContext = createContext({
  selectedlocation: '',
  setSelectedLocation: () => {}
})

export const LocationProvider = ({ children }) => {
  const [selectedlocation, setSelectedLocation] = useState({})
  const value = { selectedlocation, setSelectedLocation }

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}
