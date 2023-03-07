import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./headerStyle.css";
import {
  faBed,
  faHotel,
  faPlaneDeparture,
  faCarSide,
  faMountainCity,
  faTaxi,
  faCalendarWeek,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  let [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  let [openOptions, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 0,
    childern: 0,
    room: 0,
  });

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return (
    <div className={type==="list"?"header list":"header"}>
      <div className="headContainer list">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCarSide} />
            <span>car rentel</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMountainCity} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxies</span>
          </div>
        </div>
       {type!=="list"&&<>
       <div className="bottamHeader">
          <h1 className="headeTitle">A LifeTime of Discount </h1>
          <p>
            Gwt reward 1for your travel - un lock instant saving of 10% or more
            with a SBi Account
          </p>
          <button className="bottamHeaderButton"> Sign in/ Register</button>

          <div className="headerSearch">
            <div className="headerSerarchItem">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} />
                <input type="text" placeholder="where are ypou going" />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faCalendarWeek}
                  onClick={() => setOpenDate(!openDate)}
                />
                {/* <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> */}
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "dd/MM/yyyy"
                )}  to${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
                {openDate && (
                  <DateRangePicker
                    onChange={(e) => setDate([e.selection])}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}{" "}
              </div>

              <div className="headerSearchItem">
                {/* <FontAwesomeIcon icon="fa-solid fa-people-group" /> */}
                <FontAwesomeIcon icon={faPeopleGroup} className="familyicon" onClick={()=>setOpenOption(!openOptions)}/>
                <span>{`${option.adult} Adult ${option.childern} Childern ${option.room} Room`}</span>
               {openOptions&& <div className="options">
                  <div className="optionItem">
                    <span className="optionText"> Adult </span>
                    <button
                    disabled={option.adult<1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                    <span className="optionCounterNumber"></span>
                  </div>

                  <div className="optionItem">
                    <span className="optionText"> Childern </span>
                    <button
                    disabled={option.childern<1}
                      className="optionCounterButton"
                      onClick={() => handleOption("childern", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.childern}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("childern", "i")}
                    >
                      +
                    </button>
                    <span className="optionCounterNumber"></span>
                  </div>

                  <div className="optionItem">
                    <span className="optionText"> Room </span>
                    <button
                    disabled={option.room<1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                    <span className="optionCounterNumber"></span>
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
