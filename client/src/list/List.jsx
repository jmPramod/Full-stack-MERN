import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../components/header/Header'
import NavBar from '../components/navbar/NavBar'
import {faCaretDown,faCaretUp
} from "@fortawesome/free-solid-svg-icons";


import "./listStyle.css"
import SearchItem from '../components/searchItem/SearchItem'

const List = () => {
  const location =useLocation()
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);

  let [date, setDate] = useState(location.state.date);

  let [openOptions, setOpenOption] = useState(location.state.openOptions);
  const [option, setOption] = useState(location.state.option);
 
  return (
    <div>
       <NavBar/>
   <Header type={"list"}/>
 <div className="listContiner">
  <div className="listWrapper">
    <div className="listSearch">
  <h1 className="lsTitle">Search</h1>
<div className="lsItem">
  <label htmlFor=""> Destination</label>
  <input placeholder='Destination' type="text" />
</div>

<div className="lsItem">
  <label htmlFor=""> Check-in date </label>
  <span onClick={() => setOpenDate(!openDate)}>{`${format(
                      date[0].startDate,
                      "dd/MM/yyyy"
                    )}  to ${format(date[0].endDate, "dd/MM/yyyy")} `}
                    
                    <FontAwesomeIcon className='dropIcon' icon={ openDate? faCaretUp:faCaretDown} />
                    </span>
 {openDate && (
                      <DateRangePicker
                        onChange={(e) => setDate([e.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        // className="date"
                      />
                    )}{" "}

</div>

<div className="IsItem">
  <label htmlFor="">Option</label>
  <div className="isOption">
  <div className="isOptionItem">
    <span className="ISOptionText">
      Min Price<small> (per Night)</small>
    </span>
    <input type="Number" className="isOptionInput" />
  </div>
  <div className="isOptionItem">
    <span className="ISOptionText">
      Min Price<small> (per Night)</small>
    </span>
    <input type="Number" className="isOptionInput" />
  </div>
  <div className="isOptionItem">
    <span className="ISOptionText">
      Max Price<small> (per Night)</small>
    </span>
    <input type="Number" className="isOptionInput" />
  </div>
  <div className="isOptionItem">
    <span className="ISOptionText">
      Adult
    </span>
    <input min={1} placeholder={option.adult}  type="Number" className="isOptionInput" />
  </div>
  <div className="isOptionItem">
    <span className="ISOptionText">
      Childern
    </span>
    <input  min={0}  placeholder={option.childern}  type="Number" className="isOptionInput" />
  </div>
  <div className="isOptionItem">
    <span className="ISOptionText">
    Room
    </span>
    <input  min={1} type="Number" placeholder={option.room}  className="isOptionInput" />
  </div>
  </div> 
</div>
<button className='headerBtn'> Search</button>
    </div>
    <div className="listResult">

<SearchItem/>

<SearchItem/>

<SearchItem/>
<SearchItem/>

<SearchItem/>

<SearchItem/>
<SearchItem/>

<SearchItem/>

<SearchItem/>



    </div>
  </div>
 </div>
    </div>
  )
}

export default List