import React from "react";
import UseFetch from "../../hook/UseFetch";
import "./propertyStyle.css";
import "./loading.css";
const PropertyList = () => {
  const { data, error, loading } = UseFetch(
    `http://localhost:5300/hotel/countByType`
  );

  const images = [
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TmV0aGVybGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1558000143-a78f8299c40b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TmV0aGVybGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1529943247435-a5974e63d6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fE5ldGhlcmxhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1529943247435-a5974e63d6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fE5ldGhlcmxhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  ];
  console.log("data_pramod", data);
  return (
    <div className="pList">
      {loading ? (
       <div className="loading">Loading&#8230;</div>
      ) : (
        <>
          {" "}
          {data &&
            images.map((img, ind) => (
              <div className="pListItem" key={ind}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1> {data[ind]?.type}</h1>
                  <h2>
                    {data[ind]?.count} {data[ind]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
