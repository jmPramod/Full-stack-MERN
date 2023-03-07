import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import NavBar from '../../components/NavBar'
import PropertyList from '../../components/propertyList/PropertyList'
import "./homeStyle.css"
const Home = () => {
  return (


    <div>
     <NavBar/>
   <Header/>    
<div className="homeContainer">
  <Featured/>

<h1 className="homeTitle">
  Browse by Property 

</h1>
<PropertyList/>
</div>
    </div>
  )
}

export default Home