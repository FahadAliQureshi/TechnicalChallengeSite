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
  return (
    <>
      <div
        style={{
          width: "100%",

          // backgroundImage: `url(${fourthSec})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          background: "#050718",
          width: "100%",
          height: "2370px",
          // backgroundColor:"#171820",
          display: "flex",
          position: "relative",
          marginTop: "300px",
        }}
      >
        {/* <div>
          <img
            style={{
              width: "100%",
              position: "absolute",
              top: "2137px",
            }}
            src={fourthSec}
            alt=""
          />
        </div> */}

        <div
          style={{
            width: "100%",
            // position: "absolute",
            // top: "2237px",
            // left: "30%",
            // fontSize: "40px",
            // color: "white",
            // width:"100%"

            backgroundImage: `url(${fourthSec})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* light effects */}
          <div
            style={{
              position: "absolute",
              top: "80px",
              left: "0%",
              fontSize: "40px",
              color: "white",
              // zIndex:"10",
            }}
          >
            <img
              style={{
                width: "30%",
              }}
              src={topleft}
              alt=""
            />
          </div>

          <div
            style={{
              width: "100%",
              position: "absolute",
              top: "180px",
              // left: "0%",
              
              // zIndex:"-999",
            }}
          >
            <img
              style={{
                width: "100%",
              }}
              src={bottomright}
              alt=""
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "1543px",
              left: "0%",
              fontSize: "40px",
              color: "white",

              // zIndex:"-999",
            }}
          >
            <img
              style={{
                width: "35%",
              }}
              src={greenleftbottom}
              alt=""
            />
          </div>

          <div
            style={{
              width: "40%",
              position: "absolute",
              top: "70px",
              left: "30%",
              fontSize: "40px",
              color: "white",
            }}
          >
            Lorem ips<span style={{ color: "#3AC5EF", width: "40%" }}>um</span>{" "}
            dolor sit amet
            {/* <br></br> consectetur{" "} */}
            <span
              style={{
                background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            ></span>
          </div>

          <div
            style={{
              fontSize: "15px",
              width: "45%",
              display: "flex",
              textAlign: "center",
              position: "absolute",
              top: "130px",
              left: "27%",

              color: "white",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            position: "absolute",
            top: "250px",
            left: "-2%",
            height: "35%",
            width: "35%",
          }}
        >
          <Boxes />
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            position: "absolute",
            top: "250px",
            left: "28%",
            height: "35%",
            width: "35%",
          }}
        >
          <BoxBlack img={fingerPrint} />
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            position: "absolute",
            top: "250px",
            left: "58%",
            height: "35%",
            width: "35%",
            color: "transparent",
          }}
        >
          <BoxBlack img={eye} />
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            position: "absolute",
            top: "580px",
            left: "-2%",
            height: "35%",
            width: "35%",
            color: "transparent",
          }}
        >
          <BoxBlack img={lock} />
        </div>
        {/* <div
        style={{
          display: "flex",
          textAlign: "center",
          position: "absolute",
          top: "2700px",
          left: "28%",
          height: "35%",
          width: "35%",
          color: "transparent",
        }}
      >
        <BoxBlack />
      </div> */}
        <div
          style={{
            display: "flex",
            textAlign: "center",
            position: "absolute",
            top: "580px",
            left: "28%",
            height: "35%",
            width: "35%",
            color: "transparent",
          }}
        >
          <BoxBlack img={expand} />
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            position: "absolute",
            top: "580px",
            left: "58%",
            height: "35%",
            width: "35%",
            color: "transparent",
          }}
        >
          <BoxBlack img={screenShare} />
        </div>
        {/* fifthsec */}
        <div
          style={{
            width: "40%",
            position: "absolute",
            top: "980px",
            left: "30%",
            fontSize: "40px",
            color: "white",
          }}
        >
          Lorem ips<span style={{ color: "#3AC5EF", width: "40%" }}>um</span>{" "}
          dolor sit amet
          {/* <br></br> consectetur{" "} */}
          <span
            style={{
              background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          ></span>
        </div>
        <div
          style={{
            fontSize: "15px",
            width: "45%",
            display: "flex",
            textAlign: "center",
            position: "absolute",
            top: "1040px",
            left: "27%",

            color: "white",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        {/* line and balls */}
        <div>
          <div
            style={{
              // background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              // height:"2%",
              // width:"2%",
              position: "absolute",
              top: "1180px",
              left: "49%",
            }}
          >
            <img style={{ height: "17%", width: "17%" }} src={balls} alt="" />
          </div>

          <div
            style={{
              // background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              // height:"2%",
              // width:"2%",
              position: "absolute",
              top: "1217px",
              left: "50.59%",
            }}
          >
            <img style={{ height: "17%", width: "17%" }} src={line} alt="" />
          </div>
          {/* 2nd ball */}
          <div
            style={{
              // background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              // height:"2%",
              // width:"2%",
              position: "absolute",
              top: "1337px",
              left: "49%",
            }}
          >
            <img style={{ height: "17%", width: "17%" }} src={balls} alt="" />
          </div>

          <div
            style={{
              // background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              // height:"2%",
              // width:"2%",
              position: "absolute",
              top: "1374px",
              left: "50.59%",
            }}
          >
            <img style={{ height: "17%", width: "17%" }} src={line} alt="" />
          </div>
          {/* 3rd ball */}
          <div
            style={{
              // background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              // height:"2%",
              // width:"2%",
              position: "absolute",
              top: "1494px",
              left: "49%",
            }}
          >
            <img style={{ height: "17%", width: "17%" }} src={balls} alt="" />
          </div>

          <div
            style={{
              // background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              // height:"2%",
              // width:"2%",
              position: "absolute",
              top: "1531px",
              left: "50.59%",
            }}
          >
            <img style={{ height: "17%", width: "17%" }} src={line} alt="" />
          </div>

          {/* 4th ball */}

          <div
            style={{
              // background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              // height:"2%",
              // width:"2%",
              position: "absolute",
              top: "1651px",
              left: "49%",
            }}
          >
            <img style={{ height: "17%", width: "17%" }} src={balls} alt="" />
          </div>
        </div>

        {/* steps */}
        <div
          style={{
            position: "absolute",
            top: "1190px",
            left: "40%",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Step 1
        </div>
        <div
          style={{
            left: "35%",
            position: "absolute",
            top: "1220px",
            color: "white",
            fontSize: "19px",
            fontWeight: "bold",
          }}
        >
          Lorem Ipsum
        </div>

        <div
          style={{
            left: "13.8%",
            position: "absolute",
            top: "1260px",
            color: "#A6A9B8",
            fontSize: "16px",

            width: "33%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        {/* 2nd step */}

        <div
          style={{
            position: "absolute",
            top: "1350px",
            left: "58%",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Step 2
        </div>
        <div
          style={{
            left: "58%",
            position: "absolute",
            top: "1380px",
            color: "white",
            fontSize: "19px",
            fontWeight: "bold",
          }}
        >
          Lorem Ipsum
        </div>

        <div
          style={{
            left: "58%",
            position: "absolute",
            top: "1420px",
            color: "#A6A9B8",
            fontSize: "16px",

            width: "33%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        {/* 3rd step */}
        {/* adding 160 in top */}
        <div
          style={{
            position: "absolute",
            top: "1510px",
            left: "40%",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Step 3
        </div>
        <div
          style={{
            left: "35%",
            position: "absolute",
            top: "1540px",
            color: "white",
            fontSize: "19px",
            fontWeight: "bold",
          }}
        >
          Lorem Ipsum
        </div>

        <div
          style={{
            left: "13.8%",
            position: "absolute",
            top: "1580px",
            color: "#A6A9B8",
            fontSize: "16px",

            width: "33%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        {/*4th step */}
        {/* adding 160 in top */}
        <div
          style={{
            position: "absolute",
            top: "1670px",
            left: "58%",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Step 4
        </div>
        <div
          style={{
            left: "58%",
            position: "absolute",
            top: "1700px",
            color: "white",
            fontSize: "19px",
            fontWeight: "bold",
          }}
        >
          Lorem Ipsum
        </div>

        <div
          style={{
            left: "58%",
            position: "absolute",
            top: "1740px",
            color: "#A6A9B8",
            fontSize: "16px",

            width: "33%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        {/* blackbox at the end */}

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "1940px",
            color: "white",
            zIndex: "100",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "430px",
              background: "#171820",
              display: "flex",
              justifyContent: "center",
              fontSize: "45px",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                // marginTop: "1%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </div>
            <div
              style={{
                width: "50%",
                marginTop: "3%",
                color: "#A6A9B8",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
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
                marginTop: "50px",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <div style={{ fontSize: "16px" }}>Contact Now</div>

              {/* <div><img 
          style={{width:"19%", display:"flex", marginLeft:"45%"}}
          src={arrow} alt="" /></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* 
      Adding another main div/section here  */}

      <div
        style={{
          width: "100%",
          // backgroundImage: `url(${fourthSec})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          background: "#050718",
          width: "100%",
          height: "1070px",
          // backgroundColor:"#171820",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          // marginTop: "300px",
          textAlign: "center",
          zIndex: "-1",
        }}
      >
        <div
          style={{
            // width: "40%",
            // position: "absolute",
            marginTop: "70px",
            // marginLeft: "30%",
            fontSize: "40px",
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Lorem ips<span style={{ color: "#3AC5EF" }}>um </span>
          dolor sit amet
          {/* <br></br> consectetur{" "} */}
          <span
            style={{
              background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          ></span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "10px",
            gap: "5%",
            padding: "2% 10%",
            zIndex: "100",
          }}
        >
          <Cards img={card1} />
          <Cards img={card2} />
          <Cards img={card3} />
        </div>

        <div style={{ display: "flex", marginTop: "150px", gap: "5%" }}>
          <div
            style={{
              color: "white",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              marginLeft: "7%",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "5%",
                width: "90%",
              }}
            >
              Frequently <br /> Asked Questions
            </div>
            <div style={{ fontSize: "14px", color: "#A6A9B8", width: "80%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
            }}
          >
            {/* From here */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10%" }}
            >
              <div
                style={{
                  color: "white",
                  width: "100%",
                  display: "flex",

                  textAlign: "start",
                  gap: "20%",
                }}
              >
                <div>Lorem ipsum dolor sit amet, consectetur?</div>
                <div>
                  <img
                    style={{
                      width: "15%",
                    }}
                    src={expandarrow}
                    alt=""
                  />
                </div>
              </div>
              <img
                style={{ width: "65%", padding: "3% 0%" }}
                src={lineExpand}
                alt=""
              />
            </div>
            {/* To here */}

            {/* From here */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10%" }}
            >
              <div
                style={{
                  color: "white",
                  width: "100%",
                  display: "flex",

                  textAlign: "start",
                  gap: "20%",
                }}
              >
                <div>Lorem ipsum dolor sit amet, consectetur?</div>
                <div>
                  <img
                    style={{
                      width: "15%",
                    }}
                    src={expandarrow}
                    alt=""
                  />
                </div>
              </div>
              <img
                style={{ width: "65%", margin: "3% 0%" }}
                src={lineExpand}
                alt=""
              />
            </div>
            {/* To here */}

            {/* From here */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10%" }}
            >
              <div
                style={{
                  color: "white",
                  width: "100%",
                  display: "flex",

                  textAlign: "start",
                  gap: "20%",
                }}
              >
                <div>Lorem ipsum dolor sit amet, consectetur?</div>
                <div>
                  <img
                    style={{
                      width: "15%",
                    }}
                    src={expandarrow}
                    alt=""
                  />
                </div>
              </div>
              <img
                style={{ width: "65%", padding: "3% 0%" }}
                src={lineExpand}
                alt=""
              />
            </div>
            {/* To here */}

            {/* From here */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10%" }}
            >
              <div
                style={{
                  color: "white",
                  width: "100%",
                  display: "flex",

                  textAlign: "start",
                  gap: "20%",
                }}
              >
                <div>Lorem ipsum dolor sit amet, consectetur?</div>
                <div>
                  <img
                    style={{
                      width: "15%",
                    }}
                    src={expandarrow}
                    alt=""
                  />
                </div>
              </div>
              <img
                style={{ width: "65%", padding: "3% 0%" }}
                src={lineExpand}
                alt=""
              />
            </div>
            {/* To here */}

            {/* From here */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10%" }}
            >
              <div
                style={{
                  color: "white",
                  width: "100%",
                  display: "flex",

                  textAlign: "start",
                  gap: "20%",
                }}
              >
                <div>Lorem ipsum dolor sit amet, consectetur?</div>
                <div>
                  <img
                    style={{
                      width: "15%",
                    }}
                    src={expandarrow}
                    alt=""
                  />
                </div>
              </div>
              <img
                style={{ width: "65%", padding: "3% 0%" }}
                src={lineExpand}
                alt=""
              />
            </div>
            {/* To here */}

            {/* From here */}
            <div style={{}}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10%" }}
              >
                <div
                  style={{
                    color: "white",
                    width: "100%",
                    display: "flex",

                    textAlign: "start",
                    gap: "20%",
                  }}
                >
                  <div style={{}}>Lorem ipsum dolor sit amet, consectetur?</div>
                  <div>
                    <img
                      style={{
                        width: "15%",
                      }}
                      src={expandup}
                      alt=""
                    />
                  </div>
                </div>
                <img
                  style={{ width: "65%", padding: "3% 0%" }}
                  src={lineExpand}
                  alt=""
                />
              </div>
            </div>
            {/* To here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
