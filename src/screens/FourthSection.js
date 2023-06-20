import React from "react";
import fourthSec from "../images/fourthSec.PNG";
import Boxes from "../components/Box";
import BoxBlack from "../components/BoxBlack";
import fingerPrint from "../images/fingerPrint.png";

import eye from "../images/eye.png";
import expand from "../images/expand.png";
import lock from "../images/lock.png";
import screenShare from "../images/screenShare.png";

import topleft from "../images/topleft.png";
import bottomright from "../images/bottomright.png";
import balls from "../images/balls.png";

import line from "../images/line.png";
import greenleftbottom from "../images/greenleftbottom.png";

import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

import Cards from "../components/Cards";
import expandarrow from "../images/expandarrow.png";

import lineExpand from "../images/lineExpand.png";

import expandup from "../images/expandup.png";

const FourthSection = () => {
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
      width: "50%",
      position: "absolute",
      top: -200,
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
  };
  return (
    <>
      <div style={styles.mainContainer}>
        <div style={styles.relativeCont}>
          <div style={styles.cont1}>
            <div
              style={{
                fontWeight: "700",
              }}
            >
              Lorem ips
              <span style={{ color: "#3AC5EF", width: "40%" }}>um</span> dolor
              sit amet
              {/* <br></br> consectetur{" "} */}
              <span style={styles.spanCont}></span>
            </div>
            <div style={styles.txt1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <img style={styles.leftImg} src={topleft} alt="" />
          <div style={styles.rowCont}>
            <div style={styles.rowContNested}>
              <Boxes />
              <BoxBlack img={eye} />
              <BoxBlack img={eye} />
            </div>
          </div>
          <div style={{ ...styles.rowCont, marginTop: 30 }}>
            <div style={styles.rowContNested}>
              <BoxBlack img={eye} />
              <BoxBlack img={eye} />
              <BoxBlack img={eye} />
            </div>
          </div>
          <div style={{ ...styles.cont1, fontSize: 40 }}>
            <div
              style={{
                fontWeight: "700",
              }}
            >
              Lorem Ips
              <span style={{ color: "#3AC5EF", width: "40%" }}>um </span>
              Process Explained
              {/* <br></br> consectetur{" "} */}
              <span style={styles.spanCont}></span>
            </div>
            <div style={styles.txt1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "right",
            justifyContent: "center",
            gap: "4%",
            marginTop: 75,
          }}
        >
          <div
            style={{ width: "30%", display: "flex", flexDirection: "column" }}
          >
            <div style={{ color: "#fff", fontWeight: "600" }}>Step 1</div>
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
            <div style={{ color: "#A6A9B8", fontSize: 14 }}>
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
                width: 2,
              }}
            />
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
            <img
              src={line}
              style={{
                height: 130,
                width: 2,
              }}
            />
          </div>

          <div
            style={{ width: "30%", display: "flex", flexDirection: "column" }}
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
            <div style={{ color: "#A6A9B8", fontSize: 14 }}>
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
            style={{ width: "30%", display: "flex", flexDirection: "column" }}
          >
            <div style={{ color: "#fff", fontWeight: "600" }}>Step 1</div>
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
            <div style={{ color: "#A6A9B8", fontSize: 14 }}>
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
                width: 2,
              }}
            />
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
            style={{ width: "30%", display: "flex", flexDirection: "column" }}
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
            <div style={{ color: "#A6A9B8", fontSize: 14 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
              <br />
              magna aliqua.
            </div>
          </div>
        </div>

        {/* black box */}
        <div
          style={{
            width: "100%",
            height: "450px",
            display: "flex",
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
            }}
          >
            {" "}
            <div style={{ color: "white", width: "60%", fontSize: "40px" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </div>
            <div style={{ color: "#A6A9B8", width: "60%", fontSize: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </div>
            <div
              style={{
                background: "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
                height: "50px",
                width: "20%",
                marginTop: "20px",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "center",
              }}
            >
              <div style={{}}>Contact Now</div>
            </div>
          </div>
        </div>

        {/* cards */}

        <div style={{ width: "100%", color: "white" }}>
          <div>
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
            movement
          </div>
        </div>

        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ ...styles.mainContainer, display: "flex" }}>
            <div
              style={{
                background: "#171820",
                width: "30%",
                marginTop: "70px",
                color: "#A6A9B8",
              }}
            >
              <div>
                <img
                  style={{ width: "90%", margin: "5% 0px" }}
                  src={card1}
                  alt=""
                />
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </div>
            </div>
          </div>

          <div style={styles.mainContainer}>
            <div
              style={{
                background: "#171820",
                width: "30%",
                marginTop: "70px",
                color: "#A6A9B8",
              }}
            >
              <div>
                <img
                  style={{ width: "90%", margin: "5% 0px" }}
                  src={card1}
                  alt=""
                />
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </div>
            </div>
          </div>

          <div style={styles.mainContainer}>
            <div
              style={{
                background: "#171820",
                width: "30%",
                marginTop: "70px",
                color: "#A6A9B8",
              }}
            >
              <div>
                <img
                  style={{ width: "90%", margin: "5% 0px" }}
                  src={card1}
                  alt=""
                />
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently 
Asked Questions */}
      <div style={{ ...styles.mainContainer, display: "flex", color: "white" }}>
        <div style={{ width: "40%", display: "flex", flexDirection: "column" }}>
          <div>Frequently Asked Questions</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
        </div>

        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <div style={{}}>
            <div>Lorem ipsum dolor sit amet, consectetur?</div>
            <div>
              <img src={expandarrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
