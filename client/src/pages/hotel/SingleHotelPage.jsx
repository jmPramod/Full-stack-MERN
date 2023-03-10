import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "./hotelStyle.css";
import { faLocationDot,faCircleXmark , faCircleArrowLeft,faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList"
const SingleHotelPage = () => {

  const [sideNumber,setSlideNumber]=useState(0)
  const [open,setOpen]=useState(false)
  let photos = [
    {
      src: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1631048835135-3e8ac5e99ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1631048730581-96121466be1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1631048730581-96121466be1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
let handleOpen=(i)=>{

  setSlideNumber(i)
  setOpen(true)
   
}
  return (
    <div>
      <NavBar />
      <Header type="list" />
        {
          open&&<div className="slider">

          <FontAwesomeIcon icon={faCircleXmark} />
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          <div className="sliderWrapper" >
            <img src={photos[sideNumber].src} alt="" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} />

          
          </div>
        }
      <div className="hotelContainer">
        <div className="hotelWrapper">
<button className="bookNow">Reserve or Book Now!</button>

          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 new</span>
          </div>
          <div className="hotelDistance">
           
            <span>Excelent location 500m from bustand</span>
            </div>
            <div className="hotelPriceHighLight">
            
              <span>book a stay for 2 day and 1 night , and get free breakfast and lunch</span>
              </div>
              <div className="hotelImages">
                {photos.map((photo,index) => (
                  <div className="hotelImgWrapper">
                    <img src={photo.src} alt="" className="hotelImg" onClick={()=>handleOpen(index)} />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsText">
                  <h1 className="hotelTitle">Stay in the hea4rt of India</h1>
                  <p className="hotelDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, laborum? Consequatur illum minus nobis dolorem
                    eaque harum totam. Pariatur, vel non harum animi commodi a
                    blanditiis eos sunt repudiandae consequatur necessitatibus
                    veritatis deserunt earum. Qui ipsam consequatur asperiores
                    nisi, odio veritatis, est tenetur minus voluptates
                    accusantium eum quae dolores hic, minima ea voluptatem
                    temporibus esse! Minus necessitatibus accusamus non dicta
                    magnam ad quos unde sint ab molestias velit laboriosam est
                    exercitationem voluptate quia omnis, amet id labore
                    dignissimos et. Nihil, omnis. Nobis voluptas ratione laborum
                    earum. Ratione aliquam similique reiciendis doloribus fugit
                    nostrum odit, sapiente ducimus atque quam! Tempore,
                    explicabo?
                  </p>
                </div>
                <div className="hotelDetailsPrices">
                  <h1>Perfect For 9 night Stay</h1>
                  <span>
                    located at heart of india , this propertyy has excellent
                    loaction score 9.8!
                  </span>
                  <h2>
                    <b>Rs 21000</b> (9 night)
                  </h2>
                  <button>Reserved or Book Now !</button>
                </div>
              </div>
           
        
        </div>
      </div>
        <MailList/>
        <Footer/>
    </div>
  );
};

export default SingleHotelPage;
