import React from 'react'
import"./propertyStyle.css"
const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
           <img src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TmV0aGVybGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" className="pListImg" />
           <div className="pListTitles">
            <h1>Hotels 1</h1>
            <h2>233 Properties</h2>
           </div>
        </div>
        
        <div className="pListItem">
           <img src="https://images.unsplash.com/photo-1558000143-a78f8299c40b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TmV0aGVybGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" className="pListImg" />
           <div className="pListTitles">
            <h1>Hotels 2</h1>
            <h2>233 Properties</h2>
           </div>
        </div>
        
        <div className="pListItem">
           <img src="https://images.unsplash.com/photo-1529943247435-a5974e63d6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fE5ldGhlcmxhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" className="pListImg" />
           <div className="pListTitles">
            <h1>Hotels 3</h1>
            <h2>233 Properties</h2>
           </div>
        </div>
    </div>
  )
}

export default PropertyList