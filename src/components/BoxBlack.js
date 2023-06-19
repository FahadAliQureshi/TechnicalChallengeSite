import React from 'react'
import fingerPrint from "../images/fingerPrint.png";

const BoxBlack = ({img}) => {
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
        background: "#171820",
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
        src={img} alt="" />
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

export default BoxBlack