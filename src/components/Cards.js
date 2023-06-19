import React from "react";

const Cards = ({ img }) => {
  return (
    <>
      <div style={{  width:"100%",}}>
        <div style={{
          
           background:" #171820",
          display:"flex",
          flexDirection:"column",
            justifyContent:"center",
            alignContent:"center",
            textAlign:"center",
            alignItems:"center",
            minHeight: 'fit-content',
            height: 'calc(100% + 8%)',
            borderRadius:"5px",
        }}>
          <img
            style={{
              width: "90%",
            }}
            src={img}
            alt=""
          />
          <div
          style={{
            color:"#A6A9B8",
            width: "90%",
            paddingTop:"1.5%"
          }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
