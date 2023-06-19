import React from "react";

import third from "../images/third.PNG";
import blackBG from "../images/blackBG.PNG";
import future from "../images/future.png";
import images from "../images/Images.png";
import arrow from "../images/arrow.png";

const ThirdPart = () => {
  return (
    <>
      <div
        style={{
          width: "100%",

          backgroundImage: `url(${third})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "1000px",
        }}
      >
        {/* <img
          style={{
            width: "100%",
            position: "absolute",
            top: "1810px",
          }}
          src={third}
          alt=""
        /> */}
        <img
          style={{
            width: "100%",
            position: "absolute",
            top: "1565px",
          }}
          src={blackBG}
          alt=""
        />

        <img
          style={{
            width: "35%",
            position: "absolute",
            top: "1690px",
            left: "11%",
          }}
          src={images}
          alt=""
        />
      </div>

      <div
        style={{
          //   width: "100%",

          position: "absolute",
          top: "980px",
          left: "11%",
          color: "white",
          fontSize: "50px",
        }}
      >
        <div style={{ width: "40%" }}>
          Lorem
          <span
            style={{
              background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            ipsum{" "}
          </span>{" "}
          <br></br> dolor sit <span>amet</span>
        </div>

        <div
          style={{
            width: "40%",
            fontSize: "18px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div
          style={{
            position: "absolute",
            top: "85px",
            left: "45%",
            color: "white",
            fontSize: "18px",
          }}
        >
          <img style={{ width: "80%" }} src={future} alt="" />
          <div
            style={{
              width: "83%",
              color: "white",
              fontSize: "18px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

      {/* Everything on image's right */}
      <div
        style={{
          position: "absolute",
          top: "1700px",
          left: "52%",
          width: "40%",
        }}
      >
        <div
          style={{
            width: "40%",
            fontSize: "50px",
            color: "white",
            display: "flex",
            gap: "12px",
          }}
        >
          <span> Lorem </span>
          <span
            style={{
              background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            ipsum
          </span>
        </div>

        <div style={{ color: "white" }}>
          <div style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <br />
          <div>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>

        {/* <div
        style={{
          width:"100%", display:"flex", justifyContent:"center", marginTop:"50px"
        }}
        > */}
        <div
          style={{
            background: "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
            height: "50px",
            width: "40%",
            marginTop: "90px",
            borderRadius: "50px",
            display:"flex",
            justifyContent:"center",
            color:"white",
            alignItems:"center",
          }}
        >
          <div
          style={{marginLeft:"10%"}}
          >Get Started</div>
          <div><img 
          style={{width:"19%", display:"flex", marginLeft:"45%"}}
          src={arrow} alt="" /></div>
          
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ThirdPart;
