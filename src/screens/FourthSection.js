import React, { useState } from "react";
import fourthSec from "../images/fourthSec.PNG";
import Boxes from "../components/Box";
import BoxBlack from "../components/BoxBlack";
import fingerPrint from "../images/fingerPrint.png";
import approvedPhone from "../images/approvedPhone.png";
import stepPoint from "../images/stepPoint.png";
import phoneApprovedLast from "../images/phoneApprovedLast.png";
import steplAP from "../images/steplAP.png";
import frth1 from "../images/frth1.png";
import transparent from "../images/transparent.png";
import eye from "../images/eye.png";
import expand from "../images/expand.png";
import lock from "../images/lock.png";
import screenShare from "../images/screenShare.png";

import topleft from "../images/topleft.png";
import bottomright from "../images/bottomright.png";
import rightBottomBlue from "../images/rightBottomBlue.png";
import topRightBluePhone from "../images/topRightBluePhone.png";
import balls from "../images/balls.png";

import line from "../images/line.png";
import greenleftbottom from "../images/greenleftbottom.png";
import rightBottomPurplePhone from "../images/rightBottomPurplePhone.png";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

import boxPhone from "../images/boxPhone.png";

import Cards from "../components/Cards";
import expandarrow from "../images/expandarrow.png";
import "./fourthSection.css";
import lineExpand from "../images/lineExpand.png";
import expandup from "../images/expandup.png";
import purpleEffect from "../images/purpleEffect.png";
import { useMediaQuery } from "react-responsive";

const FourthSection = () => {
  const [selected, setSelected] = useState();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const styles = {
    mainContainer: {
      background: "#050718",
      width: "100%",
      position: "relative",
    },
    relativeCont: {
      width: "100%",
      position: "relative",
    },
    cont1: {
      width: "100%",
      fontSize: "40px",
      color: "white",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
      paddingTop: 70,
      zIndex: isTabletOrMobile ? "999" : null,
    },
    spanCont: {
      background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    txt1: {
      fontSize: "18px",
      width: "50%",
      display: "flex",
      textAlign: "center",
      color: "#D7D7D7",
      marginTop: 15,
      alignSelf: "center",

      justifyContent: "center",
    },
    leftImg: {
      width: isTabletOrMobile ? "100%" : "36%",

      position: "absolute",
      top: isTabletOrMobile ? -350 : -200,
      // left:isTabletOrMobile?  -20 :null,
      zIndex: 0,
    },
    rowCont: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      marginTop: 60,
    },
    rowContNested: {
      width: "80%",
      justifyContent: "space-between",
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
    },
    longCont: {
      background: "#171820",
      width: "31.5%",
      marginTop: "40px",
      color: "#A6A9B8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "left",
      alignContent: "center",
      borderRadius: 6,
      border: "1px solid rgba(255,255,255,0.44)",
      padding: "1.2% 0%",
    },
  };
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <>
      <div style={styles.mainContainer}>
        <div style={styles.relativeCont}>
          <div style={styles.cont1}>
            <div
              style={{
                fontWeight: "700",
                marginLeft: isTabletOrMobile ? "50px" : null,
                padding: isTabletOrMobile ? "0px 20px 0px 20px" : null,
                fontFamily: "Manrope",
              }}
            >
              Lorem ip
              <span style={{ color: "#3AC5EF", width: "40%" }}>su</span>m dolor
              sit amet
              {/* <br></br> consectetur{" "} */}
              <span style={styles.spanCont}></span>
            </div>
            <div
              style={{
                ...styles.txt1,
                fontSize: isTabletOrMobile ? "12px" : "15px",
                fontFamily: "Archivo",
                color: "rgb(255, 255, 255, 0.70)",
                width: isTabletOrMobile ? "75%" : "47%",
                paddingBottom:isTabletOrMobile?"30px":null,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <img style={styles.leftImg}
          const src = {isTabletOrMobile ? topRightBluePhone : topleft}
          alt="" />

          <div style={isTabletOrMobile ? {} : styles.rowCont}>
            <div
              style={
                isTabletOrMobile
                  ? {
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }
                  : styles.rowContNested
              }
            >
              <Boxes
                selectedCard={selectedCard}
                img={isTabletOrMobile ? boxPhone : frth1}
              />
              <BoxBlack
                selectedCard={selectedCard}
                img={isTabletOrMobile ? approvedPhone : fingerPrint}
                heading={isTabletOrMobile ? "Lorem Ipsum" : "Lorem"}
              />
              <BoxBlack
                img={isTabletOrMobile ? phoneApprovedLast : eye}
                selectedCard={selectedCard}
                heading="Lorem Ipsum"
              />
            </div>
          </div>
          {!isTabletOrMobile && (
            <div style={{ ...styles.rowCont, marginTop: 30 }}>
              <div style={styles.rowContNested}>
                <BoxBlack
                  img={lock}
                  selectedCard={selectedCard}
                  heading="Lorem Ipsum"
                />
                <BoxBlack
                  img={expand}
                  selectedCard={selectedCard}
                  heading="Lorem Ipsum"
                />
                <BoxBlack
                  img={screenShare}
                  selectedCard={selectedCard}
                  heading="Lorem Ipsum"
                />
              </div>
            </div>
          )}

          {/* Light Effect Right Bottom of Boxes */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              // height: isTabletOrMobile ? null : "1200px",
              display: "flex",
              justifyContent: "flex-end",
              top: isTabletOrMobile ? "250px" : "310px",
              opacity: isTabletOrMobile ? "55%" : "100%",
            }}
          >
            <img
              style={{
                width: isTabletOrMobile ? "100%" : "50%",
                height: isTabletOrMobile ? "1200px" : null,
              }}
              src={rightBottomBlue}
              alt=""
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: isTabletOrMobile ? "800px" : "1300px",

              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              opacity: isTabletOrMobile ? null : "100%",
              zIndex: isTabletOrMobile ? null : "0",
            }}
          >
            <img
              style={{
                width: isTabletOrMobile ? "100%" : "50%",
                height: isTabletOrMobile ? "1300px" : null,
              }}
              src={greenleftbottom}
              alt=""
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: isTabletOrMobile ? "1600px" : "1570px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              opacity: isTabletOrMobile ? "60%" : "100%",
            }}
          >
            <img
              style={{
                width: isTabletOrMobile ? "100%" : "60%",
                height: isTabletOrMobile ? "1300px" : null,
              }}
              const src = {isTabletOrMobile ? rightBottomPurplePhone : purpleEffect}

              alt=""
            />
          </div>
          {/* yhn tk light effects */}
          <div
            style={{
              ...styles.cont1,
              fontSize: 42,
              paddingTop: "130px",
              marginBottom: 80,
              textAlign: "center",
              zIndex: isTabletOrMobile ? "999" : null,
            }}
          >
            <div
              style={{
                fontWeight: "700",
                // padding: isTabletOrMobile ? "0px 10px 0px 70px" : null,
                justifyContent: isTabletOrMobile ? "center" : null,
                // display: isTabletOrMobile ? 'flex' : null,
                fontFamily: "Manrope",
              }}
            >
              <span
                style={{
                  background:
                    "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  width: "40%",
                }}
              >
                Lorem Ipsum{" "}
              </span>
              {isTabletOrMobile ? <br /> : null}
              Process{isTabletOrMobile ? <br /> : null} Explained
              {/* <br></br> consectetur{" "} */}
              <span style={styles.spanCont}></span>
            </div>
            <div
              style={{
                ...styles.txt1,
                fontSize: isTabletOrMobile ? 14 : 15,
                width: isTabletOrMobile ? "85%" : "35%",
                color: "#D7D7D7" + 0.997,
                fontFamily: "Archivo",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>

        {/* BAlls line for laptop  */}
        <div
          style={{
            display: isTabletOrMobile ? "none" : null,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isTabletOrMobile ? "column" : null,
              textAlign: isTabletOrMobile ? "center" : "right",

              justifyContent: "center",
              gap: "4%",
              marginTop: 70,
            }}
          >
            <div
              style={{
                width: isTabletOrMobile ? "100%" : "30%",
                display: "flex",
                flexDirection: "column",
                marginTop: "9px",
                alignItems: "end",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontFamily: "Manrope",
                }}
              >
                Step 1
              </div>
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 24,
                  margin: "12px 0px",
                  fontFamily: "Manrope",
                }}
              >
                Lorem Ipsum
              </div>
              <div
                style={{
                  color: "#A6A9B8",
                  fontSize: 14,
                  fontFamily: "archivo",
                  width: "90%",
                  textAlign: "right",
                  display: "flex",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
               
              }}
            >
              <img
                src={steplAP}
                style={{
                  height: 190,
                  width: 50,
                }}
              />
              {/* <img
                src={balls}
                style={{
                  height: 50,
                  width: 50,
                }}
              />
              <img
                src={line}
                style={{
                  height: 130,
                  width: 2,
                }}
              /> */}
            </div>
            <div
              style={{
                width: "30%",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "4%" }}>
            <div
              style={{
                width: "30%",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // position:"absolute",
                // top:"1320px"
              }}
            >
              <img
                src={balls}
                style={{
                  height: 50,
                  width: 50,
                }}
              />
              <img
                src={line}
                style={{
                  height: 130,
                  width: 1,
                }}
              />
              {/* <img
                src={steplAP}
                style={{
                  height: 190,
                  width: 50,
                }}
              /> */}
            </div>

            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <div style={{ color: "#fff", fontWeight: "600" }}>Step 2</div>
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 24,
                  margin: "12px 0px",
                }}
              >
                Lorem Ipsum
              </div>
              <div
                style={{
                  color: "#A6A9B8",
                  fontSize: 14,
                  width: "90%",
                  textAlign: "left",
                  display: "flex",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
                <br />
                magna aliqua.
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "right",
              justifyContent: "center",
              gap: "4%",
            }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
                alignItems:"end"
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontFamily: "Manrope",
                }}
              >
                Step 3
              </div>
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 24,
                  margin: "12px 0px",
                  fontFamily: "Manrope",
                }}
              >
                Lorem Ipsum
              </div>
              <div
                style={{
                  color: "#A6A9B8",
                  fontSize: 14,
                  fontFamily: "archivo",
                  width: "90%",
                  textAlign: "right",
                  display: "flex",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
                <br />
                magna aliqua.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={balls}
                style={{
                  height: 50,
                  width: 50,
                }}
              />
              <img
                src={line}
                style={{
                  height: 130,
                  width: 1,
                }}
              />
              {/* <img
                src={steplAP}
                style={{
                  height: 190,
                  width: 50,
                }}
              /> */}
            </div>
            <div
              style={{
                width: "30%",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "4%" }}>
            <div
              style={{
                width: "30%",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={balls}
                style={{
                  height: 50,
                  width: 50,
                }}
              />
            </div>

            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <div style={{ color: "#fff", fontWeight: "600" }}>Step 4</div>
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 24,
                  margin: "12px 0px",
                }}
              >
                Lorem Ipsum
              </div>
              <div
                style={{
                  color: "#A6A9B8",
                  fontSize: 14,
                  width: "90%",
                  textAlign: "left",
                  display: "flex",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
                <br />
                magna aliqua.
              </div>
            </div>
          </div>
        </div>
        {/* end  */}
        {/* BAlls line for phone  */}
        <div
          style={{
            display: isTabletOrMobile ? null : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isTabletOrMobile ? "column" : null,
              textAlign: isTabletOrMobile ? "center" : "right%",

              justifyContent: "center",
              gap: "4%",
              marginTop: 15,
            }}
          >
            <div
              style={{
                width: isTabletOrMobile ? "100%" : "30%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 24,
                  fontFamily: "Manrope",
                }}
              >
                Step 1
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 24,
                    margin: "8px 0px",
                    fontFamily: "Manrope",
                  }}
                >
                  Lorem Ipsum
                </div>
                <div
                  style={{
                    color: "#D7D7D7",
                    fontSize: 14,
                    width: "80%",
                    lineHeight: "1.8",
                    fontFamily: "archivo",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={stepPoint}
                style={{
                  height: 106,
                  width: 65,
                }}
              />
              {/* <img
                src={line}
                style={{
                  height: 65,
                  width: 1.7,
                }}
              /> */}
            </div>
            <div
              style={{
                width: "30%",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isTabletOrMobile ? "column" : null,
              textAlign: isTabletOrMobile ? "center" : "right%",

              justifyContent: "center",
              gap: "4%",
              marginTop: 15,
            }}
          >
            <div
              style={{
                width: isTabletOrMobile ? "100%" : "30%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 24,
                  fontFamily: "Manrope",
                }}
              >
                Step 2
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 24,
                    margin: "8px 0px",
                    fontFamily: "Manrope",
                  }}
                >
                  Lorem Ipsum
                </div>
                <div
                  style={{
                    color: "#D7D7D7",
                    fontSize: 14,
                    width: "80%",
                    lineHeight: "1.8",
                    fontFamily: "archivo",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={stepPoint}
                style={{
                  height: 106,
                  width: 65,
                }}
              />
              {/* <img
                src={line}
                style={{
                  height: 65,
                  width: 1.7,
                }}
              /> */}
            </div>
            <div
              style={{
                width: "30%",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isTabletOrMobile ? "column" : null,
              textAlign: isTabletOrMobile ? "center" : "right%",

              justifyContent: "center",
              gap: "4%",
              marginTop: 15,
            }}
          >
            <div
              style={{
                width: isTabletOrMobile ? "100%" : "30%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 24,
                  fontFamily: "Manrope",
                }}
              >
                Step 3
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 24,
                    margin: "8px 0px",
                    fontFamily: "Manrope",
                  }}
                >
                  Lorem Ipsum
                </div>
                <div
                  style={{
                    color: "#D7D7D7",
                    fontSize: 14,
                    width: "80%",
                    lineHeight: "1.8",
                    fontFamily: "archivo",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={stepPoint}
                style={{
                  height: 106,
                  width: 65,
                }}
              />
              {/* <img
                src={balls}
                style={{
                  height: 65,
                  width: 65,
                }}
              />
              <img
                src={line}
                style={{
                  height: 65,
                  width: 1.7,
                }}
              /> */}
            </div>
            <div
              style={{
                width: "30%",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isTabletOrMobile ? "column" : null,
              textAlign: isTabletOrMobile ? "center" : "right%",

              justifyContent: "center",
              gap: "4%",
              marginTop: 15,
            }}
          >
            <div
              style={{
                width: isTabletOrMobile ? "100%" : "30%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 24,
                  fontFamily: "Manrope",
                }}
              >
                Step 4
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 24,
                    margin: "8px 0px",
                    fontFamily: "Manrope",
                  }}
                >
                  Lorem Ipsum
                </div>
                <div
                  style={{
                    color: "#D7D7D7",
                    fontSize: 14,
                    width: "80%",
                    lineHeight: "1.8",
                    fontFamily: "archivo",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
            {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={balls}
              style={{
                height: 65,
                width: 65,
              }}
            />
            <img
              src={line}
              style={{
                height: 65,
                width: 1.7,
              }}
            />
          </div>
          <div
            style={{
              width: "30%",
            }}
          ></div> */}
          </div>
        </div>
        {/* end  */}

        {/* black box */}
        <div
          style={{
            width: "100%",
            height: "450px",
            display: isTabletOrMobile ? "none" : "flex",
            justifyContent: "center",
            marginTop: "120px",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "450px",
              background: "#171820",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "5%",
              zIndex: "20",
            }}
          >
            {" "}
            <div
              style={{
                color: "white",
                width: "60%",
                fontSize: "45px",
                fontFamily: "Manrope",
                fontWeight: "700",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </div>
            <div
              style={{
                color: "#A6A9B8",
                width: "50%",
                fontSize: "15px",
                fontFamily: "archivo",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </div>
            <div
              style={{
                background: "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
                height: "50px",
                width: "15%",
                marginTop: "20px",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "center",
                fontFamily: "archivo",
                cursor: "pointer",
              }}
            >
              <div style={{}}>Contact Now</div>
            </div>
          </div>
        </div>
        {/* for phone */}
        <div
          style={{
            width: "100%",
            height: "450px",
            display: isTabletOrMobile ? "flex" : "none",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              borderRadius: 10,
              width: "90%",
              height: "450px",
              background: "#171820",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "5%",
              zIndex: "20",
            }}
          >
            {" "}
            <div
              style={{
                color: "white",
                width: "80%",
                fontSize: "40px",
                fontWeight: "700",
                fontFamily: "Manrope",
              }}
            >
              Lorem ipsum dolor sit amet consectetur
            </div>
            <div
              style={{
                color: "#A6A9B8",
                width: "94%",
                fontSize: "14px",
                fontFamily: "archivo",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </div>
            <div
              style={{
                background: "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
                height: "55px",
                width: "50%",
                marginTop: "20px",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "center",
                fontSize: "20px",
                fontFamily: "Manrope",
                cursor: "pointer",
              }}
            >
              <div style={{}}>Contact Now</div>
            </div>
          </div>
        </div>
        {/* end */}

        {/* cards */}

        <div
          style={{
            width: "100%",
            color: "white",
            fontSize: "50px",
            fontWeight: "600",
            display: isTabletOrMobile ? "none" : "flex",
            justifyContent: "center",
            marginTop: "130px",
          }}
        >
          <div style={{ fontFamily: "Manrope", fontWeight: "700" }}>
            Join the{" "}
            <span
              style={{
                background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              #loremipsum{" "}
            </span>
            movement!
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: isTabletOrMobile ? "none" : "flex",
          background: "#050718",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div style={styles.longCont}>
            <img style={{ width: "94%" }} src={card1} alt="" />
            <div
              style={{
                width: "94%",
                marginTop: 10,
                fontFamily: "Archivo",
                fontSize: "18px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt...
            </div>
          </div>
          <div style={styles.longCont}>
            <img style={{ width: "94%" }} src={card2} alt="" />
            <div
              style={{
                width: "94%",
                marginTop: 10,
                fontFamily: "Archivo",
                fontSize: "18px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt...
            </div>
          </div>
          <div style={{ ...styles.longCont, zIndex: "22" }}>
            <img style={{ width: "94%" }} src={card3} alt="" />
            <div
              style={{
                width: "94%",
                marginTop: 10,
                fontFamily: "Archivo",
                fontSize: "18px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt...
            </div>
          </div>
        </div>
      </div>

      {/* Frequently 
Asked Questions */}
      <div
        style={{
          ...styles.mainContainer,
          display: isTabletOrMobile ? "none" : "flex",
          color: "white",
          height: "400px",
          paddingTop: "70px",
          gap: "13%",
          paddingTop: "150px",
          fontFamily: "Archivo",
          fontWeight: "700",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            marginLeft: "9%",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              fontFamily: "Archivo",
              fontWeight: "700",
              marginBottom: "20px",
              lineHeight: "1.5",
            }}
          >
            Frequently
            <br /> Asked Questions
          </div>
          <div
            style={{
              color: "#A6A9B8",
              fontSize: "14px",
              fontFamily: "Archivo",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
        </div>

        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <div
                style={{
                  width: "67%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    background:
                      index == selected
                        ? "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)"
                        : "transparent",
                    padding: index == selected ? "3% 4%" : 0,
                    justifyContent: "space-between",
                    marginLeft: index == selected ? "-4%" : 0,
                    borderRadius: 10,
                    fontFamily: "Archivo",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (selected == index) {
                      setSelected(null);
                    } else {
                      setSelected(index);
                    }
                  }}
                >
                  <div style={{ fontFamily: "Archivo" }}>
                    Lorem ipsum dolor sit amet, consectetur?
                  </div>

                  <img
                    style={{
                      width: 15,
                      height: 15,
                      objectFit: "contain",

                      transform:
                        index == selected ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    src={expandarrow}
                    alt=""
                  />
                </div>
                {index != selected && (
                  <div
                    style={{
                      height: index == selected - 1 ? 0 : 0.5,
                      background: "rgba(255,255,255,0.3)",
                      margin: "15px 0px",
                      width: "97%",
                      // marginBottom: index == selected ? 0.5:0
                    }}
                  />
                )}
                {index == selected && (
                  <div
                    style={{
                      width: "95%",
                      color: "#D7D7D7" + 99,
                      fontSize: "12px",
                      marginTop: 10,
                      fontFamily: "Archivo",
                      marginBottom: 10,
                      fontWeight:"normal"
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* For phone */}
      <div
        style={
          {
            // display:"flex",
            // flexDirection:"column"
          }
        }
      >
        <div
          style={{
            ...styles.mainContainer,
            display: isTabletOrMobile ? "block" : "none",

            color: "white",
            // height: "650px",
            paddingTop: "0px",
            gap: "6%",

            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",

              display: "flex",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: isTabletOrMobile ? 40 : "30px",
                fontWeight: "600",
                textAlign: "center",
                width: "100%",
                marginTop: "70px",
              }}
            >
              Frequently <br /> asked Questions
            </div>
            <div
              style={{
                color: "#A6A9B8",
                fontSize: "16px",
                textAlign: "center",
                marginTop: "15px",
                cursor: "pointer",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit{" "}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
              paddingBottom: "80px",
            }}
          >
            {Array.from({ length: 4 }).map((item, index) => {
              return (
                <div
                  style={{
                    width: "90%",
                    padding: "0% 4%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      // background:
                      //   index == selected
                      //     ? "-webkit-linear-gradient(right, #3AC5EF, #C977D6)"
                      //     : "transparent",
                      // padding: index == selected ? "3% 0%" : 0,
                      justifyContent: "space-between",
                    }}
                    onClick={() => {
                      if (index == selected) {
                        setSelected(null);
                      } else {
                        setSelected(index);
                      }
                    }}
                  >
                    <div>Tell me your customer support?</div>

                    <img
                      style={{
                        width: 15,
                        height: 15,
                        objectFit: "contain",

                        transform:
                          index == selected ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      src={expandarrow}
                      alt=""
                    />
                  </div>
                  {index != 5 && (
                    <div
                      style={{
                        height: index == 4 ? 0 : 0.5,
                        background: "rgba(255,255,255,0.3)",
                        margin: "15px 0px",
                        width: "97%",
                      }}
                    />
                  )}
                  {index == selected && (
                    <div
                      style={{
                        width: "97%",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "14px",
                        display: "flex",
                        textAlign: "left",
                        paddingBottom: "20px",
                      }}
                    >
                      Frankly, it's the best in the business and we'll back that
                      up with references from our clients moves at the speed of
                      your business. Our Trainers and operations teams offer
                      support in multiple time zones.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default FourthSection;
