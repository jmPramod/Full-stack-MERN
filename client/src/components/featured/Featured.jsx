import React from 'react'
import "./featureStyle.css"
const Featured = () => {
  return (
    <div className='featured'> 
    <div className='featuredItem'>
        <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
        <div className="featuredTitles">
            <h1>Dubai</h1>
            <h2>Properties</h2>
        </div>

    </div>
    <div className='featuredItem'>
        <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        <div className="featuredTitles">
            <h1>netherland</h1>
            <h2>Properties</h2>
        </div>

    </div>
    <div className='featuredItem'>
        <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        <div className="featuredTitles">
            <h1>vieatnam</h1>
            <h2>Properties</h2>
        </div>

    </div>
    </div>
  )
}

export default Featured