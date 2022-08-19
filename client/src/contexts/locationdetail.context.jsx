import { createContext, useState } from 'react'

export const LocationContext = createContext({
  selectedlocation: '',
  setSelectedLocation: () => {},
  stateAndCity: '',
  setStateAndCity: () => {}
})

export const LocationProvider = ({ children }) => {
  const [selectedlocation, setSelectedLocation] = useState({})
  const [stateAndCity, setStateAndCity] = useState({})
  const value = {
    selectedlocation,
    setSelectedLocation,
    stateAndCity,
    setStateAndCity
  }

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}
