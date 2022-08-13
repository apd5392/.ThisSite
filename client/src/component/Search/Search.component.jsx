import PlacesAutocomplete from 'react-places-autocomplete'
import './search.styles.css'
import scriptLoader from 'react-async-script-loader'
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css'

const Search = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [address, setAddress] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [openCal, SetOpenCal] = useState(false)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }
  const searchOptions = {
    types: ['(cities)'],
    componentRestrictions: { country: 'us' }
  }
  const selectDateRange = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const handleChange = (value) => {
    setAddress(value)
  }
  const handleSelect = (value) => {
    setAddress(value)
    console.log(address)
  }
  const toggleCal = () => {
    SetOpenCal(!openCal)
  }

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div className="search-container">
        {/* <h1>Find places to stay on .ThisSite</h1>
        <p>Discover entire homes and private rooms perfect for any trip.</p> */}
        <div className="where-container">
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            searchOptions={searchOptions}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <label>Where</label>
                <input
                  {...getInputProps({
                    placeholder: 'Search Destinations',
                    className: 'location-search-input'
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item'
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' }
                    return (
                      <div {...getSuggestionItemProps(suggestion)}>
                        <span>{suggestion.description}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div className={`checkin-container ${openCal ? 'active' : ''} `}>
          <label>When</label>
          <span
            onClick={toggleCal}
          >{`${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`}</span>
          {openCal && (
            <DateRangePicker
              className="date-calender"
              ranges={[selectionRange]}
              onChange={selectDateRange}
            />
          )}
        </div>

        <div className="addGuest-container">
          <span>Adult: Children: </span>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`
])(Search)
