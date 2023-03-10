import React from "react";
import UseFetch from "../../hook/UseFetch";
import "./featuredPropertiesStyle.css";
import "./loading.css"
const FeaturedProperties = () => {

  const  {data,error,loading}=UseFetch(`http://localhost:5300/hotel/countByCity?cities=chikamagalur,mandya`)
 
  return (
    <div className="fp">
       {loading?(
        <div className="loader">
        <span className="dot"></span> 
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
       ):<>     
        <div className="fItem">
      <img className="fpImg"
        src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <div className="fpInfo">
      <span className="fpName"> Mayura Hotel</span>
      <span className="fpCity">Banglore </span>
      <span className="fpPrice">Starting at 500rs</span>
      <button  className="rating">8.9</button>
      <span>excellent</span>
      </div>
      </div>
      <div className="fItem">
      <img className="fpImg"
        src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="fpInfo">
      <span className="fpName"> Mayura Hotel</span>
      <span className="fpCity">Banglore </span>
      <span className="fpPrice">Starting at 500rs</span>
      <button  className="rating">8.9</button>
      <span>excellent</span>
      </div>
      </div>
      <div className="fItem">
      <img className="fpImg"
        src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
        alt=""
      />
      <div className="fpInfo">
      <span className="fpName"> Mayura Hotel</span>
      <span className="fpCity">Banglore </span>
      <span className="fpPrice">Starting at 500rs</span>
      <button  className="rating">8.9</button>
      <span>excellent</span>
      </div>
      </div>
      <div className="fItem">
      <img className="fpImg"
        src="https://images.unsplash.com/photo-1570564117670-a080f2cdb1a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NDk3NzgyM3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="fpInfo">
      <span className="fpName"> Mayura Hotel</span>
      <span className="fpCity">Banglore </span>
      <span className="fpPrice">Starting at 500rs</span>
      <button className="rating">8.9</button>
      <span>excellent</span>
      </div>
      </div>
      </>
}
    </div>
  );
};

export default FeaturedProperties;
