import React from "react";
import pink3logo from "../images/pink3logo.PNG";
import whiteface from "../images/whiteface.png";

import Frame from "../images/Frame.png";

const UnderBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${pink3logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "180px",
        }}
      >
        {/* <img
          style={{
            width: "100%",
            // position: "absolute",
            marginTop: "185px",
          }}
          src={pink3logo}
          alt=""
        /> */}
        <div>
          <div>
            <img
              style={{
                width: "5%",
                position: "absolute",
                top: "715px",
                left: "15%",
              }}
              src={whiteface}
              alt=""
            />
          </div>

          
          <div
            style={{
              color: "#FFFFFF",
              position: "absolute",
              position: "absolute",
              top: "725px",
              left: "22%",
              fontSize: "15px",
            }}
          >
            Lorem ipsum <br />
            dolor sit amet
          </div>
        </div>

        <div>
          <div>
            <img
              style={{
                width: "5%",
                position: "absolute",
                top: "715px",
                left: "45%",
              }}
              src={Frame}
              alt=""
            />
          </div>

          
          <div
            style={{
              color: "#FFFFFF",
              position: "absolute",
              position: "absolute",
              top: "725px",
              left: "52%",
              fontSize: "15px",
            }}
          >
            Lorem ipsum <br />
            dolor sit amet
          </div>
        </div>
        <div>
          <div>
            <img
              style={{
                width: "5%",
                position: "absolute",
                top: "715px",
                left: "75%",
              }}
              src={whiteface}
              alt=""
            />
          </div>

          
          <div
            style={{
              color: "#FFFFFF",
              position: "absolute",
              position: "absolute",
              top: "725px",
              left: "82%",
              fontSize: "15px",
            }}
          >
            Lorem ipsum <br />
            dolor sit amet
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderBanner;
