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
  const [openheadCounts, SetheadCounts] = useState(false)
  const [headCounts, setHeadCounts] = useState({
    adult: 0,
    children: 0,
    infant: 0
  })

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
  }
  const toggleCal = () => {
    SetOpenCal(!openCal)
  }
  const toggleHeadCounts = () => {
    SetheadCounts(!openheadCounts)
  }

  const decrement = (type, operation) => {
    console.log(type)
    setHeadCounts({
      ...headCounts,
      [type]:
        operation === 'd' ? (headCounts[type] -= 1) : (headCounts[type] += 1)
    })
  }

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div className="search-container">
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
        <div className="addGuest-container" onClick={toggleHeadCounts}>
          <span>
            {`Adult: ${headCounts.adult} Children: ${headCounts.children}`}
          </span>
        </div>
        {openheadCounts && (
          <div className="dropdown-menu">
            <div className="panel">
              <span>Adult</span>
              <div className="btn-box">
                <button
                  className="btn"
                  onClick={() => decrement('adult', 'd')}
                  disabled={headCounts.adult <= 0 ? 'true' : ''}
                >
                  -
                </button>
                <span className="number">{headCounts.adult}</span>
                <button className="btn" onClick={() => decrement('adult', 'i')}>
                  +
                </button>
              </div>
            </div>
            <div className="panel">
              <span>Children</span>
              <div className="btn-box">
                <button
                  className="btn"
                  onClick={() => decrement('children', 'd')}
                  disabled={headCounts.children <= 0 ? 'true' : ''}
                >
                  -
                </button>
                <span className="number">{headCounts.children}</span>
                <button
                  className="btn"
                  onClick={() => decrement('children', 'i')}
                >
                  +
                </button>
              </div>
            </div>
            <div className="panel">
              <span>Infant</span>
              <div className="btn-box">
                <button
                  className="btn"
                  onClick={() => decrement('infant', 'd')}
                  disabled={headCounts.infant <= 0 ? 'true' : ''}
                >
                  -
                </button>
                <span className="number">{headCounts.infant}</span>
                <button
                  className="btn"
                  onClick={() => decrement('infant', 'i')}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        <button>SEARCH</button>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`
])(Search)
