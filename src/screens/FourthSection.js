import React from "react";
import fourthSec from "../images/fourthSec.PNG";

const FourthSection = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div>
          <img
            style={{
              width: "100%",
              position: "absolute",
              top: "2137px",
            }}
            src={fourthSec}
            alt=""
          />
        </div>

        <div
          style={{
            width: "100%",
            // position: "absolute",
            // top: "2237px",
            // left: "30%",
            // fontSize: "40px",
            // color: "white",
            // width:"100%"
          }}
        >
            <div
                      style={{
                        width: "40%",
                        position: "absolute",
                        top: "2237px",
                        left: "30%",
                        fontSize: "40px",
                        color: "white",
                        width:"100%"
                      }}
            >
          Lorem ips<span style={{ color: "#3AC5EF",width:"40%" }}>um</span>  dolor sit amet
          {/* <br></br> consectetur{" "} */}
          <span
            style={{
              background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            
         </span>
          </div>

          <div
          style={{
            fontSize:"15px", width:"45%",
            display:"flex",
            textAlign:"center",
            position: "absolute",
            top: "2287px",
            left: "29%",
           
            color: "white",
         
          }}
        
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
