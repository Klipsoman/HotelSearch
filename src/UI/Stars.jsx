import React from "react";
import starActive from "../assets/icons/starActive.png";
import starFake from "../assets/icons/starFake.png";

export default function Stars({ stars = 0 }) {   
  stars = Number(stars);
 
  switch (stars) {
    case 0:
      return (
        <div className="stars">
          <img src={starFake} alt="" />
          <img src={starFake} alt="" />
          <img src={starFake} alt="" />
          <img src={starFake} alt="" />
          <img src={starFake} alt="" />
        </div>
      );
      
    case 1:
      return (
        <div className="stars">
          <img src={starActive} alt="" />
          <img src={starFake} alt="" />
          <img src={starFake} alt="" />
          <img src={starFake} alt="" />
          <img src={starFake} alt="" />
        </div>
      );
      
    case 2:
        return (
      <div className="stars">
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starFake} alt="" />
        <img src={starFake} alt="" />
        <img src={starFake} alt="" />
      </div>
        )
      
    case 3:
        return (
      <div className="stars">
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starFake} alt="" />
        <img src={starFake} alt="" />
      </div>
        )
      
    case 4:
        return (
      <div className="stars">
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starFake} alt="" />
      </div>
        )
      
    case 5:
        return (
      <div className="stars">
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
        <img src={starActive} alt="" />
      </div>
        )
      

    default:
        return (
      <div className="stars">
        <img src={starFake} alt="" />
        <img src={starFake} alt="" />
        <img src={starFake} alt="" />
        <img src={starFake} alt="" />
        <img src={starFake} alt="" />
      </div>
    )
      
  }
  
}
