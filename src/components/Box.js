import React from 'react'

import frth1 from "../images/frth1.png";

const Boxes = () => {
  return (
    <>
    <div 
    style={{width:"100%"}}
    >

    </div>
    <div
    style={{
      width:"290%",
      height:"34%",
        background: "linear-gradient(to bottom right, #A709FD, #3FE0FF)",
        color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"

    }}
    >
      <div>
        <img 
        style={{
          width:"25%",
          
        }}
        src={frth1} alt="" />
        </div>
        <div
        style={{fontWeight:"bold"}}
        >Lorem</div>
        <div
        style={{width:"90%",}}
        >Lorem ipsum dolor sit amer please consider this as dummy text only</div>
    </div>
    </>
  )
}

export default Boxes