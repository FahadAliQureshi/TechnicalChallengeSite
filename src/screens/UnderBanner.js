import React from "react";
import pink3logo from "../images/pink3logo.PNG";
import whiteface from "../images/whiteface.png";
import { useMediaQuery } from "react-responsive";
import Frame from "../images/Frame.png";
import warning from "../images/warning.png";
import underBannerBGsahi from "../images/underBannerBGsahi.PNG";

const UnderBanner = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 450px)",
  });
  return (
    <>
      <div
        style={{
          backgroundImage: isTabletOrMobile ? "null" : `url(${underBannerBGsahi})`,
          width: "100%",
          
        }}
      >
        <div
          style={{
            width: "100%",
            // alignItems: "center",
            backgroundImage: isTabletOrMobile ? "null" : `url(${pink3logo})`,
            background: isTabletOrMobile
              ? "-webkit-linear-gradient(top left, #A709FD, #3FE0FF)"
              : "null",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            height: isTabletOrMobile ? "285px" : null,
            justifyContent: "center",
             borderRadius:isTabletOrMobile?null:"10px"
          }}
        >
          <div
            style={{
              width: "80%",
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: isTabletOrMobile ? "column" : null,
              gap: isTabletOrMobile ? "7%" : null,
              margin: isTabletOrMobile ? "25px 0px 35px 45px" : null,
            }}
          >
            <div
              style={{
                // flexDirection:"column"
                // justifyContent: "center",
                display: "flex",
                alignItems: "center",
                gap: "5%",
                justifyContent: isDesktopOrLaptop ? "center" : null,
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
                  fontFamily: "Manrope",
                  fontSize: "15px",
                }}
              >
                Lorem ipsum <br />
                dolor sit amet
              </p>
            </div>

            <div
              style={{
                justifyContent: isDesktopOrLaptop ? "center" : null,

                // flexDirection:"column"
                // justifyContent: "center",
                display: "flex",
                alignItems: "center",
                gap: "5%",
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
                src={isTabletOrMobile ? warning : Frame}
                alt=""
              />
              <p
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Manrope",
                  fontSize: "15px",
                }}
              >
                Lorem ipsum <br />
                dolor sit amet
              </p>
            </div>
            <div
              style={{
                justifyContent: isDesktopOrLaptop ? "center" : null,
                // flexDirection:"column"
                // justifyContent: "center",
                display: "flex",
                alignItems: "center",
                gap: "5%",
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
                src={isTabletOrMobile ? Frame : warning}
                alt=""
              />
              <p
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Manrope",
                  fontSize: "15px",
                }}
              >
                Lorem ipsum <br />
                dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderBanner;
