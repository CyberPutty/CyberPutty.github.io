import React from 'react'
import './footer.css'



const Footer = ({selected}) => {

    return(
  <div className={"slideShow "+ selected}>
   <span className="radio"></span>
   <span className="radio"></span>
   <span className="radio"></span>
  </div>
)
}

export default Footer