import React from "react";
import pink3logo from "../images/pink3logo.PNG";
import whiteface from "../images/whiteface.png";

import Frame from "../images/Frame.png";
import warning from "../images/warning.png";

const UnderBanner = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          // alignItems: "center",
          backgroundImage: `url(${pink3logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

          }}
        >
          <div
            style={{
             
              // flexDirection:"column"
              // justifyContent: "center",
              display:"flex",
             alignItems:"center",
             gap:"5%",
             justifyContent:"center"

            }}
          >

              <img
                style={{
                  width: "15%",

                  // position: "absolute",
                  // top: "715px",
                  // left: "15%",
                  // width:30,
                  // height:15
                  
                }}
                src={whiteface}
                alt=""
              />
            <p
              style={{
                color: "#FFFFFF",
          
                fontSize: "15px",
              }}
            >
              Lorem ipsum <br />
              dolor sit amet
            </p>
          </div>

          <div
            style={{
              justifyContent:"center",
             
              // flexDirection:"column"
              // justifyContent: "center",
              display:"flex",
             alignItems:"center",
             gap:"5%"

            }}
          >

              <img
                style={{
                  width: "15%",

                  // position: "absolute",
                  // top: "715px",
                  // left: "15%",
                  // width:30,
                  // height:15
                  
                }}
                src={Frame}
                alt=""
              />
            <p
              style={{
                color: "#FFFFFF",
          
                fontSize: "15px",
              }}
            >
              Lorem ipsum <br />
              dolor sit amet
            </p>
          </div>
          <div
            style={{
              justifyContent:"center",
              // flexDirection:"column"
              // justifyContent: "center",
              display:"flex",
             alignItems:"center",
             gap:"5%"

            }}
          >

              <img
                style={{
                  width: "15%",

                  // position: "absolute",
                  // top: "715px",
                  // left: "15%",
                  // width:30,
                  // height:15
                  
                }}
                src={warning}
                alt=""
              />
            <p
              style={{
                color: "#FFFFFF",
          
                fontSize: "15px",
              }}
            >
              Lorem ipsum <br />
              dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderBanner;
