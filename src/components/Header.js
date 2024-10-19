import React from "react";
import earth from "../images/earth.png"

export default function Header(){
  return(
    <div className="header">
      <img className="logo" src={earth}  />
      <p className="name">my travel journal.</p>
    </div>
  )
}