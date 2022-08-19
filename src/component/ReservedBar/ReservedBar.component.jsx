import { useState, useContext } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import "./reservebar.styles.css";
import { ReserveContext } from "../../contexts/reserve.context";
import { useNavigate } from "react-router-dom";
const ReservedBar = ({ Price, Selectedlocation }) => {
  const {
    numberOfGuest,
    setnumberOfGuest,
    dateRange,
    setDateRange,
    location,
    setLocation,
    setPrice,
  } = useContext(ReserveContext);
  const [startDate, setStartDate] = useState(dateRange.startDate);
  const [endDate, setEndDate] = useState(dateRange.endDate);
  const [openCal, SetOpenCal] = useState(false);
  const [openheadCounts, SetheadCounts] = useState(false);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }
  console.log(dateRange)

  const navigate = useNavigate();

  const selectDateRange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    console.log(ranges.selection);
    setEndDate(ranges.selection.endDate);
  };

  const toggleCal = () => {
    SetOpenCal(!openCal);
  };

  const handleSubmitReserve = () => {
    setPrice(Price);
    setDateRange({ startDate: startDate, endDate: endDate });
    setLocation(Selectedlocation);
    navigate(`/confirmation`);
  };
  const days = (startDate, endDate) => {
    const difference = endDate - startDate;
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDays;
  };



  // console.log(endDate.LocalDataStirng())

  return (
    <div className="reserve-main-container">
      <div className={`date-container ${openCal ? "active" : ""} `}>
        <span
          onClick={toggleCal}
        >{`${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`}</span>
        {openCal && (
          <div className="date--calender-container">
            <DateRangePicker
              className="date--calender"
              ranges={[selectionRange]}
              onChange={selectDateRange}
            />
          </div>
        )}
      </div>
      <div className="numberGuest-container">
        <span>
          Adult:{numberOfGuest.adult} Children:{numberOfGuest.children} Infants:
          {numberOfGuest.infants}
        </span>
      </div>
      <br></br>
      <span>
        {Price} x {days(startDate, endDate)} Nights
      </span>
      <span>Total: ${Price * days(startDate, endDate)} </span>
      <button className="reserveButton" onClick={handleSubmitReserve}>
        Reserve
      </button>
      <p className="reserveDisclaimer">You won't be charged yet*</p>

    </div>
  );
};

export default ReservedBar;
