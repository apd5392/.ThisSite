import { createContext, useState } from 'react'

export const SearchResultContext = createContext({ searchResult: [] })

export const SearchResultProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState()
  const value = { searchResult, setSearchResult }

  return (
    <SearchResultContext.Provider value={value}>
      {children}
    </SearchResultContext.Provider>
  )
}
