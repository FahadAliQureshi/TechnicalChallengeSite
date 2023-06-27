import React from "react";
import contactBG from "../images/contactBG.png";
import { useMediaQuery } from "react-responsive";
import reachBGPhone from "../images/reachBGPhone.png";
import bgfinal from "../images/bgfinal.png";
import nexus from "../images/nexus.PNG";
import transparent from "../images/transparent.png";
import "./contact.css";

const Contact = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {!isTabletOrMobile ? (
        <div
          style={{
            backgroundImage: isTabletOrMobile
              ? `url(${reachBGPhone})`
              : `url(${contactBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "700px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Manrope",
          }}
        >
          <div style={{ width: "40%", marginLeft: "10%" }}>
            <div
              style={{
                fontWeight: "bold",
                display: "block",
                color: "white",
                fontSize: "55px",
                fontFamily: "Manrope",
                marginTop: "150px",
              }}
            >
              Reach out to
              <br></br> Lor
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
              Ipsum
              <div
                style={{
                  color: "#FFFFFF",
                  marginTop: "250px",
                  fontSize: "18px",
                  fontWeight: "lighter",
                  fontFamily: "Manrope",
                }}
              >
                info@loremipsum.com
              </div>
            </div>
          </div>
          {/* form */}
          <div
            style={{
              width: "40%",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "3%",
              display: "flex",
              flexDirection: "column",
              gap: "17%",
           
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15%",
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  fontFamily: "Manrope",
                  cursor: "pointer",
                }}
              >
                Contact
              </div>
              <div
                style={{
                  marginTop: "5%",
                  display: "flex",
                  gap: "3%",
                  fontFamily: "Manrope",
                  width:"100%"
                }}
              >
                <input
                  style={{
                    background: "transparent",
                    border: "1px solid white",
                    padding: "2% 10% 2% 3%",
                    outline: "none",
                    borderRadius: "1%",
                    color: "white",
                    width:"33.2%"
                  }}
                  placeholder=" First Name"
                  type="text"
                />

                <input
                  style={{
                    background: "transparent",
                    border: "1px solid white",
                    padding: "2% 10% 2% 3%",
                    outline: "none",
                    borderRadius: "1%",
                    color: "white",
                    width:"33.2%"
                  }}
                  placeholder="Last Name"
                  type="text"
                />
              </div>

              <div
                style={{
                  marginTop: "5%",
                  fontFamily: "Manrope",
                  width:"100%"
                }}
              >
                <input
                  style={{
                    background: "transparent",
                    border: "1px solid white",
                    padding: "2% 59% 2% 3%",
                    outline: "none",
                    borderRadius: "1%",
                    color: "white",
                    width:"34%"
                  }}
                  placeholder="Email"
                  type="text"
                />
              </div>

              <div
                style={{
                  marginTop: "5%",
                  fontFamily: "Manrope",
                }}
              >
                <input
                  style={{
                    background: "transparent",
                    border: "1px solid white",
                    padding: "3% 59% 30% 3%",
                    outline: "none",
                    borderRadius: "1%",
                    color: "white",
                  }}
                  placeholder="Message"
                  type="text"
                />
              </div>
              <div
                style={{
                  background:
                    "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
                  height: "50px",
                  width: "30%",
                  marginTop: "50px",
                  borderRadius: "50px",
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                  alignItems: "center",
                  justifyItems: "center",
                  fontFamily: "Manrope",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: "16px" }}>Send message</div>

                {/* <div><img 
        style={{width:"19%", display:"flex", marginLeft:"45%"}}
        src={arrow} alt="" /></div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            // height: isTabletOrMobile ?"300px":null,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // paddingTop: "30px",
              backgroundImage: isTabletOrMobile
                ? `url(${nexus})`
                : `url(${contactBG})`,
              height: "475px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                display: "block",
                color: "white",
                fontSize: "40px",
                textAlign: "center",
                fontFamily: "Manrope",
              }}
            >
              Reach out to
              <br></br> Lor
              <span
                style={{
                  background:
                    "-webkit-linear-gradient(right, #46E1FF, #46E1FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                em
              </span>{" "}
              Ipsum
            </div>
            <div
              style={{
                color: "#A6A9B8",
                fontSize: "20px",
                width: "95%",

                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                paddingTop: "20px",
                fontFamily: "Manrope",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "20px",
                width: "95%",

                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px 0px",
                fontFamily: "Manrope",
              }}
            >
              hello@loremipsum.com
            </div>
            <div
              style={{
                width: "92%",
                // background: "#18191E" + 90,
                // background: "rgba(0, 0, 0, 0.8)",
                color: "white",
                padding: "4%",
                display: "flex",
                flexDirection: "column",
                gap: "17%",
                justifyContent: "center",
                alignItems: "center",
                // position:"absolute",
                // top:"3000px"
                zIndex: "-99",
                position: "relative",
              }}
            ></div>
          </div>

          <div
            style={{
              background: "#050718",
              // background: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              // height:"300px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              className="contactWhitePH"
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: "30px 0px",
                fontFamily: "Manrope",
                position: "relative",
                paddingTop: "35px",
                backgroundImage: `url(${transparent})`,
                color: "rgba(255, 255, 255, 0.90)",
                position: "absolute",
                top: "-100px",
              }}
            >
              Contact
              <div>
                <div
                  style={{
                    marginTop: "10%",
                    display: "flex",
                    // gap: "5%",
                    width: "100%",
                    justifyContent: "space-evenly",
                    fontFamily: "Manrope",
                  }}
                >
                  <input
                    id="contactWhitePH"
                    style={{
                      width: "40%",
                      background: "transparent",
                      border: "1px solid white",
                      padding: "3% 1% 3% 1%",
                      outline: "none",
                      borderRadius: "1%",
                      color: "white",
                    }}
                    placeholder=" First Name"
                    type="text"
                  />
                  <input
                    id="contactWhitePH"
                    style={{
                      width: "45%",
                      background: "transparent",
                      border: "1px solid white",
                      padding: "3% 1% 3% 1%",
                      outline: "none",
                      borderRadius: "1%",
                      color: "white",
                    }}
                    placeholder="Last Name"
                    type="text"
                  />
                </div>

                <div
                  id="contactWhitePH"
                  style={{
                    marginTop: "5%",
                    width: "100%",
                    display: "flex",

                    justifyContent: "center",
                    fontFamily: "Manrope",
                  }}
                >
                  <input
                    id="contactWhitePH"
                    style={{
                      width: "87%",
                      background: "transparent",
                      border: "1px solid white",
                      padding: "3% 3% 3% 3%",
                      outline: "none",
                      borderRadius: "1%",
                      color: "white",
                    }}
                    placeholder="Email"
                    type="text"
                  />
                </div>

                <div
                  style={{
                    marginTop: "5%",
                    width: "100%",
                    display: "flex",

                    justifyContent: "center",
                    fontFamily: "Manrope",
                  }}
                >
                  <input
                    id="contactWhitePH"
                    style={{
                      width: "87%",
                      background: "transparent",
                      border: "1px solid white",
                      padding: "3% 3% 30% 3%",
                      outline: "none",
                      borderRadius: "1%",
                      color: "white",
                    }}
                    placeholder="Message"
                    type="text"
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      background:
                        "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
                      // height: "50px",
                      width: "50%",
                      marginTop: "50px",
                      marginBottom: "50px",

                      borderRadius: "50px",
                      display: "flex",
                      justifyContent: "center",
                      color: "white",
                      alignItems: "center",
                      justifyItems: "center",
                      padding: "15px 0px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontSize: 17,
                        fontWeight: "500",
                        fontFamily: "Manrope",
                        cursor: "pointer",
                      }}
                    >
                      Send message
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: "#050718",
                height: "450px",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
      )}

      {/* for phone */}

      {/* end */}
    </>
  );
};

export default Contact;
