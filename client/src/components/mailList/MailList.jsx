import React from "react";
import "./mailListStyle.css"
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time , Save Money</h1>
      <span className="mailDesc">
        sign up and we will send the best deals to you
      </span>
      <div className="subscribe">
      <input type="text" placeholder="Enter your mail ID...." />
      <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
