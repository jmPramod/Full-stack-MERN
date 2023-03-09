import React from 'react'
import "./searchItemStyle.css"
const SearchItem = () => {
  return (
    <div className='searchItem'>

<img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hotelRoom"
className='sImg'
/>

<div className="sDesc">
<h1 className="sTitle">Tower Strreet Apartment</h1>
<span className="sDistance"> 500m from center</span>
<span className="sTaxiOp">free Airport taxi</span>
<span className="sSubtitle">
    Studio Apartment With Air Condtioninig
</span>
<span className="sFeatues">
    Entire Studio- *1 bathroom *21 m full bed
</span>
<span className="sCancleOp">Free Cancalation</span>
<span className="sCancleOpSubtitles">
    You can cancle later, so lock in this great price today
</span>



</div>
<div className="sDetails">
    <div className="sRating">
        <span>Excellent</span>
        <button>8.9</button>

    </div>
    <div className="sDetailTexts">
        <span className="sPrice">
            123 Rs
        </span>
        <span className="sTaxOp">Include Taxes and fee</span>
<button className="sCheckButton"> see Avalibility  </button>

    </div>
</div>

    </div>
  )
}

export default SearchItem