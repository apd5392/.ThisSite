import { useState, useContext } from 'react'
import { SearchResultContext } from '../../contexts/searchresult.context'
import LocationCard2 from '../../component/LocationCard/LocationCard2.component'
import './search.styles.css'
const SearchResults = () => {
  const { searchResult, setsearchResult } = useContext(SearchResultContext)

  return (
    <div className="searchresult-main-container">
      {searchResult.map((location) => (
        <LocationCard2 Location={location} key={location.id} />
      ))}

      <h1>Welcome</h1>
    </div>
  )
}
export default SearchResults
