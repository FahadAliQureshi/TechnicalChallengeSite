import React from "react";

import third from "../images/third.PNG";
import blackBG from "../images/blackBG.PNG";
import future from "../images/future.png";
import futurePhone from "../images/futurePhone.png";
import images from "../images/Images.png";
import images2 from "../images/images2.png";
import arrow from "../images/arrow.png";
import thirdBGOk from "../images/thirdBGOk.PNG";
import play from "../images/play.png";
import { useMediaQuery } from "react-responsive";

const ThirdPart = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isTabletOrMobile ? (
        <>
          <div
            style={{
              zIndex:"999",
              width: "100%",
              backgroundImage: `url(${thirdBGOk})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // height: "600px",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              position: "relative",
              alignItems: "center",
             
            }}
          >
            {/* <div
            style={{
              position:"absolute",
            }}
            >
              <img src={bottomRightPurplePhone} alt="" />
            </div> */}
            <div
              style={{
                fontSize: "45px",
                color: "white",
                display: "flex",
                // gap: "12px",
                // marginLeft: "15%",
                marginTop: "20px",
                fontFamily: "Manrope",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                marginTop: "100px",
              }}
            >
              <div style={{}}>
                Lorem
                <span
                  style={{
                    background:
                      "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  ipsum
                </span>
              </div>
              dolor sit amet
            </div>
            <div
              style={{
                fontSize: "13px",
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.70)",
                // padding: "0px 25px",
                lineHeight: "1.6",
                fontFamily: "Archivo",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  textAlign: "center",
                  padding: "10px 0px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div
              style={{
                // justifyContent: "center",
                // alignItems: "center",
                // alignContent: 'center',
                alignSelf: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "83%",
                  // height: "250px",
                }}
                src={futurePhone}
                alt=""
              />
            </div>
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.70)",

                fontFamily: "Archivo",
                padding: "0px 25px",
                lineHeight: "1.7",
                width: "70%",
                marginBottom: "25px",
                marginTop: "15px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>

          <div
            style={{
              width: "100%",
              background: "#171820",
              // height: "600px",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "45px",
                color: "white",
                display: "flex",
                gap: "12px",
                marginTop: "70px",
                padding: isTabletOrMobile ? null : "0px 50px 0px 50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "600",
                }}
              >
                <span> Lorem </span>
                <span
                  style={{
                    background:
                      "-webkit-linear-gradient(right, #3FE0FF, #A060AE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  ipsum!
                </span>
              </div>
            </div>
            <div
              style={{
                fontSize: "15px",
                textAlign: "center",
                color: "#ffff",

                padding: "0px 25px",
                color: "#A6A9B8",
                color: "rgba(255, 255, 255, 0.55)",
                lineHeight: "1.8",
                fontFamily: "Archivo",
                marginTop: "10px",
                fontFamily: "Manrope",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>

            <div
              style={{
                background: "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
                height: "65px",
                width: "60%",
                borderRadius: "50px",
                display: "flex",
                color: "rgba(255, 255, 255, 90)",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginTop: "10px",
                fontSize: "21px",
                fontFamily: "Manrope",
                marginBottom: "60px",
                cursor: "pointer",
              }}
            >
              <p>Get Started</p>
              <img
                style={{ width: "20px", marginLeft: "15px" }}
                src={arrow}
                alt=""
              />
            </div>
            <div
            style={{
              display:"flex"
            }}
            >

            
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                paddingBottom:"50px",
                zIndex:"9999"
              }}
            >
              <img
                style={{
                  width: "93%",
                  height: "",
                }}
                src={images2}
                alt=""
              />
              <img
                style={{
                  position: "absolute",
                  width: "48px",
                  height: "46px",
                }}
                src={play}
                alt=""
              />
            </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            {/* </div> blck*/}
            <div
              style={{
                width: "100%",
                backgroundImage: `url(${third})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                height: "750px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* div to give flex clm */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  justifyContent: "center",
                  marginLeft: "4%",
                  padding: "0px 0% 0% 5%",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "55px",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    // gap: "12px",
                    marginLeft: isTabletOrMobile ? "30%" : null,
                    textAlign: "left",
                    fontWeight: "700",
                    marginBottom: "25px",
                    lineHeight: "1.1",
                  }}
                >
                  <div>
                    Lorem
                    <span
                      style={{
                        background:
                          "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {" "}
                      ipsum <br />
                    </span>
                  </div>
                  <div>
                    <span> dolor sit amet</span>
                  </div>
                </div>

                <div
                  style={{
                    color: "white",
                    width: "80%",
                    textAlign: "left",
                    marginBottom: "130px",
                    lineHeight: "1.4",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontFamily: "Archivo",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <br />
                  <div
                    style={{
                      fontFamily: "Archivo",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </div>
                </div>

                {/* <div
style={{
width:"100%", display:"flex", justifyContent:"center", marginTop:"50px"
}}
> */}
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  // marginRight:"5%",
                  marginTop: "58px",
                  paddingLeft: "6%",
                }}
              >
                <img
                  style={{
                    width: "76%",
                    height: "44%",
                    // position: "absolute",
                    // top: "1690px",
                    // left: "11%",
                  }}
                  src={future}
                  alt=""
                />
                <p
                  style={{
                    fontSize: "14px",
                    textAlign: "center",
                    color: "#ffff",
                    // padding: "0px 30px 0px 10px",
                    marginTop: "20px",
                    width: "75%",
                    fontFamily: "Archivo",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Everything on image's right */}

            {/* </div> blck*/}
            <div
              style={{
                width: "100%",
                background: "#171820",
                height: "600px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "65%",
                    height: "50%",
                    // position: "absolute",
                    // top: "1690px",
                    // left: "11%",
                  }}
                  src={images}
                  alt=""
                />
                <img
                  style={{
                    position: "absolute",
                    width: "8%",
                    top: "350px",
                  }}
                  src={play}
                  alt=""
                />
              </div>

              {/* div to give flex clm */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  textAlign: "start",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "50px",
                    color: "white",
                    display: "flex",
                    gap: "12px",
                    fontWeight: "700",
                    fontFamily: "Manrope",
                  }}
                >
                  <span> Lorem </span>
                  <span
                    style={{
                      background:
                        "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {" "}
                    ipsum
                  </span>
                </div>

                <div style={{ color: "rgba(255,255,255,0.7)", width: "79%" }}>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "Archivo",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <br />
                  <div style={{ fontFamily: "Archivo" }}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum
                  </div>
                </div>

                {/* <div
style={{
width:"100%", display:"flex", justifyContent:"center", marginTop:"50px"
}}
> */}
                <div
                  style={{
                    background:
                      "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
                    height: "55px",
                    width: "28%",
                    marginTop: "90px",
                    borderRadius: "50px",
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                    alignItems: "center",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  <div style={{}}>Get Started</div>
                  <div>
                    <img
                      style={{
                        width: "15px",
                        display: "flex",
                        marginLeft: "15px",
                      }}
                      src={arrow}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ThirdPart;

// <div
// style={{
//   width: "100%",

//   backgroundImage: `url(${third})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   height: "700px",
//   display: "flex",

// }}
// >
// <div
//   style={{
//     //   width: "100%",
//     width: "100%",
//     // position: "absolute",
//     // top: "980px",
//     // left: "11%",
//     color: "white",
//     fontSize: "50px",
//     display: "flex",
//     justifyContent:"space-between",
//     alignContent:"space-around"

//   }}
// >
//   {/* to give flex dir clm */}
//   <div
//     style={{
//       width:"50%",
//       display: "flex",
//       flexDirection: "column",
//       display:"flex",
//       textAlign:"left"
//     }}
//   >
//     <div style={{ width: "80%"

//   }}>
//       Lorem
//       <span
//         style={{
//           background:
//             "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         {" "}
//         ipsum{" "}
//       </span>{" "}
//       <br></br> dolor sit <span>amet</span>
//     </div>

//     <div
//       style={{
//         width: "80%",
//         fontSize: "18px",
//       }}
//     >
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//       enim ad minim veniam, quis nostrud exercitation ullamco laboris
//       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//       reprehenderit in voluptate velit esse cillum dolore eu fugiat
//       nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//       sunt in culpa qui officia deserunt mollit anim id est laborum
//     </div>
//     </div>
//     <div
//       style={{
//         // position: "absolute",
//         // top: "85px",
//         // left: "45%",
//         color: "white",
//         fontSize: "18px",
//         width: "85%",
//       }}
//     >
//       <img style={{ width: "50%" }} src={future} alt="" />
//       <div
//         style={{
//           width: "50%",
//           color: "white",
//           fontSize: "18px",
//         }}
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </div>
//     </div>

// </div>
// </div>
