import React from 'react'

import frth1 from "../images/frth1.png";

const Boxes = () => {
  return (
    <>

    <div
    style={{
      width:"30%",
      height:240,
        background: "linear-gradient(to bottom right, #A709FD, #3FE0FF)",
        color:"white",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        borderRadius:4,
        border:"1px solid #FFFFFF70",
        justifyContent:"center",
        zIndex:999,
        paddingBottom:38
        

        

    }}
    >
    
        <img 
        style={{
          width:70,
          height:70

          
        }}
        src={frth1} alt="" />
         <div
        style={{fontWeight:"bold"}}
        >Lorem</div>
     
       
        <div
        style={{width:"90%",marginTop:18}}
        >Lorem ipsum dolor sit amer please consider this as dummy text only</div>
    </div>
    </>
  )
}

export default Boxes