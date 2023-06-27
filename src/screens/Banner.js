import React from "react";
import Header from "../components/Header";
import main from "../images/main.png";
import { useMediaQuery } from "react-responsive";
import upload from "../images/upload.png";
import phoneBGScrOne from "../images/phoneBGScrOne.PNG";
import phoneBGOne from "../images/phoneBGOne.PNG";
import './banner.css'

const Banner = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const gradientBorderStyle = {
    position: "relative",
    display: "inline-block",
    padding: "5px",
  };

  const gradientBorderOverlay = {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "2px solid transparent",
    borderImage: "linear-gradient(to right, #3AC5EF, #A060AE) 1",
    borderRadius: "5px",
    pointerEvents: "none",
    zIndex: -1,
  };
  return (
    <>
      <div>
        <div
          style={{
            // position: "absolute",
            // top: "0px",
            // zIndex: "-9999",
            // width: "100%",
            backgroundImage: isTabletOrMobile
              ? `url(${phoneBGScrOne})`
              : `url(${main})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            // height: "80vh",
          }}
        >
          <Header />

          <div
            style={{
              color: "#FFFFFF",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "55px",
              marginTop: isTabletOrMobile ? "80px" : "100px",
            }}
          >
            <div style={{ display: "block" }}>
              {/* , fontFamily:"Manrope" */}

              <div
                style={{
                  fontFamily: "Fira Sans",
                  fontSize: isTabletOrMobile ? "30px" : "55px",
                  display: isTabletOrMobile ? "none" : "flex",
                  flexDirection: "column",
                  fontWeight: "600",
                  
                }}
              >
                <div>
                  Lor
                  <span
                    style={{
                      background:
                        "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    em
                  </span>{" "}
                  ipsum dolor{isTabletOrMobile ? <br /> : null} sit{" "}
                  {isTabletOrMobile ? <br /> : <br />}{" "}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5%",
                  width:"102.2%"
                  }}
                >
                  {" "}
                  consectetur {isTabletOrMobile ? <br /> : null}
                  <div
                    style={{
                      // background:"red",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid",
                        padding: "0px 0px",
                        borderImage:
                          "linear-gradient(to left, #AC00FD, #3AC5EF) 1",
                         
                      }}
                    >
                      <span
                        style={{
                          background:
                            "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Blockchain{" "}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* for phone */}
              <div
                style={{
                  fontFamily: "Fira Sans",
                  fontSize: isTabletOrMobile ? "35px" : "55px",
                  display: isTabletOrMobile ? "flex" : "none",
                  flexDirection: "column",
                  fontWeight: "500",
                }}
              >
                <div>
                  Lor
                  <span
                    style={{
                      background:
                        "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    em
                  </span>{" "}
                  ipsum dolor{isTabletOrMobile ? <br /> : null}{" "}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5%",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  sit consectetur <br />
                  <div
                    style={{
                      // background:"red",
                      borderRadius: 2,
                      overflow: "hidden",
                      // width: "49%",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid",
                        padding: "0px 5px",
                        borderImage:
                          "linear-gradient(to left, #AC00FD, #3AC5EF) 1",
                      }}
                    >
                      <span
                        style={{
                          background:
                            "-webkit-linear-gradient(right, #3AC5EF,  #AC00FD)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "700",
                        }}
                      >
                        Blockchain
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}

              {isTabletOrMobile ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "68px 32px 55px 32px",
                    }}
                  >
                    <input
                      placeholder="Type or paste URL here"
                      type="text"
                      style={{
                        border: "1px solid #ffff",
                        borderRadius: "30px",
                        padding: "18px 25px",
                        color: "#000",
                        outline: "none",
                        // boxShadow: "0 0 0 2px #3AC5EF, 0 0 0 4px #A060AE",
                      }}
                      onFocus={(e) =>
                        (e.target.style.boxShadow =
                          "0 0 0 2px #3AC5EF, 0 0 0 4px #A060AE")
                      }
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                    />
                    <button
                      style={{
                        background:
                          "linear-gradient(to right, #A709FD, #3AC5EF)",
                        border: "none",
                        borderRadius: "30px",
                        color: "#fff",
                        padding: "17px 20px",
                        marginTop: "10px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        margin: "22px 0px",
                      }}
                    >
                      <img
                        style={{ width: "25px", height: "25px" }}
                        src={upload}
                        alt="Hamburger"
                      />
                      <span
                        style={{
                          fontWeight: "none",
                          fontSize: "15px",
                          marginTop: "5px",
                        }}
                      >
                        {" "}
                        or upload an image
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "25px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "50px",
                      border: "1px solid #FFFFFF",
                      borderRadius: "999px",
                      gap: "0.5%",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            fontSize: "12px",
                            marginLeft: "4%",
                            width: "23%",
                            textAlign: "left",
                            fontFamily: "Manrope",
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          Enter ID Here
                        </div>
                        <input
                          style={{
                            height: "30px",
                            background: "transparent",
                            outline: "none",
                            color: "white",
                            border: "none",
                            width: 270,
                          }}
                          type="text"
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontFamily: "Manrope",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            fontSize: "12px",
                            marginRight: "",
                            color: "rgba(255,255,255,0.7)",
                            width: "85%",
                          }}
                        >
                          Or Upload A Photo To Search
                        </div>
                        <div
                          style={{
                            cursor: "pointer",
                            background:
                              "-webkit-linear-gradient(right, #3AC5EF, #C977D6)",
                            width: 45,
                            height: 40,
                            borderRadius: "999px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "10px",
                            marginRight:"6px"
                          }}
                        >
                          <img style={{ width: "60%" }} src={upload} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </div>
          </div>
          <div
                style={{
                  color: "#FFFFFF",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: isTabletOrMobile ? "80%" : "44%",

                    fontSize: isTabletOrMobile ? "16px" : "15px",
                    fontWeight: "400",
                    lineHeight: 1.7,
                    marginTop: isTabletOrMobile ? "0px" : "35px",
                    marginBottom: "115px",
                    fontFamily: "Archivo",
                    color: "rgba(255,255,255,0.97)",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
              </div>

          {/* <img style={{ width: "100%" }} src={main} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
