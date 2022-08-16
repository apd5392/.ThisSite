import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const value = { user }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
