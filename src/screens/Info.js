import React from "react";

import fbLogo from "../images/fbLogo.png";
import linkedInLogo from "../images/linkedInLogo.png";
import twitterLogo from "../images/twitterLogo.png";
import language from "../images/language.png";
import endline from "../images/endline.png";

import lastline from "../images/lastline.png";

import { useMediaQuery } from "react-responsive";


import logo from "../images/logo.png";
const Info = () => {


  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
  {!isTabletOrMobile ? (
      <div
        style={{
          background: "#050718",
          width: "100%",
          height: "600px",
          position:"relative",

        }}
      >
        <div
        
        >
          <img 
          style={{position:"absolute", 
        width:"75%", top:"265px", left:"145px"
        }}
          src={endline} alt="" />
        </div>
        <div
          style={{
            background: "#050718",
            width: "100%",
            height: "459px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "30%",
              padding: "8% 0% 0% 12%",
            }}
          >
            <img
              style={{
                width: "40%",
              }}
              src={logo}
              alt=""
            />

            <div style={{ width: "64%", color: "#D7D7D7" , fontSize: "15px", fontFamily:"Archivo", marginTop:"10px", lineHeight:"1.4" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "60%",
            }}
          >
            <div
              style={{
                padding: "15% 0% 0% 5%",
              }}
            >
              <div
                style={{
                  width: "70%",
                  color: "#D7D7D7",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: 20,
                  fontFamily:"Manrope"
                }}
              >
               Tools & API
              </div>
                {["API Documentation","Integrations, tools & apps","Some Extension",
                "Windows / Mac / Linux","Android App","Design Templates"].map((item,index)=>{
                  return(
                    <div
                    style={{
                      width: "100%",
                      color: "#D7D7D7",
                      fontSize: "13px",
                      marginBottom: 20,
                      color:"#A6A9B8",
                      fontFamily:"Manrope"
                    }}
                  >
                   {item}
                  </div>
                  )
                })}
            </div>

            <div
              style={{
                padding: "15% 0% 0% 5%",
                marginLeft:"30px"
              }}
            >
              <div
                style={{
                  width: "70%",
                  color: "#D7D7D7",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: 20,

                  fontFamily:"Manrope"
                }}
              >
              Support
              </div>
           
              {["Help & FAQs","Contact us","Refunds",
                "Platform Status"].map((item,index)=>{
                  return(
                    <div
                    style={{
                      width: "100%",
                      color: "#D7D7D7",
                      fontSize: "13px",
                      marginBottom: 20,

                      color:"#A6A9B8",
                      fontFamily:"Manrope"
                    }}
                  >
                   {item}
                  </div>
                  )
                })}
            </div>

            <div
              style={{
                padding: "15% 0% 0% 5%",
                marginLeft:"40px"
              }}
            >
              <div
                style={{
                  width: "70%",
                  color: "#D7D7D7",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: 20,

                  fontFamily:"Manrope"
                }}
              >
               Company
              </div>
              {["Blog","Affiliate Program","Some Other",
                "Careers","About us","Press","Pricing"].map((item,index)=>{
                  return(
                    <div
                    style={{
                      width: "100%",
                      color: "#D7D7D7",
                      fontSize: "13px",
                      marginBottom: 20,

                      color:"#A6A9B8",
                      fontFamily:"Manrope"
                    }}
                  >
                   {item}
                  </div>
                  )
                })}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#050718",
            justifyItems: "center",
            alignItems: "center",
            width: "100%"

          }}
        >
          <div>
            <img
              style={{
                width: "25%",
                paddingLeft: "35%"
              }}
              src={language}
              alt=""
            />
          </div>
          <div
            style={{  color:"#A6A9B8",  fontSize: "13px", fontFamily:"Manrope", marginLeft:"11%" }}
          >Copyright@Loremipsum.com </div>
          <div
            style={{
              display: "flex",
              gap: "4%",
              // marginLeft: "6%",
              justifyContent:"flex-end",
              marginRight:"112px"
            }}
          >
            <img
              style={{
                width: "10%",
                height: "10%"
              }}
              src={fbLogo}
              alt=""
            />
            <img
              style={{
                width: "10%",
                height: "10%"
              }}
              src={linkedInLogo}
              alt=""
            />
            <img
              style={{
                width: "10%",
                height: "10%"
              }}
              src={twitterLogo}
              alt=""
            />
          </div>
        </div>
      </div>

) : (
  <div>
      <div
        style={{
          background: "#050718",
          width: "100%",
          height: "1100px",
        }}
      >
        <div
          style={{
            background: "#050718",
            width: "100%",
            height: "459px",
            display: "flex",
            flexDirection:"column"
          }}
        >
          <div
            style={{
              width: "100%",
              // padding: "8% 0% 0% 12%",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <img
              style={{
                width: "40%",
                margin:"70px 0px 30px 0px"
              }}
              src={logo}
              alt=""
            />

            <div style={{ width: "70%", color: "#D7D7D7", fontSize: "15px", display:"flex", justifyContent:"center", textAlign:"center", fontFamily:"Archivo" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              textAlign:"center"
            }}
          >
            <div
              style={{
                // padding: "15% 0% 0% 5%",
                textAlign:"center",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
    
              }}
            >
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginBottom: "12%",
                 marginTop:"70px",
                 fontFamily:"Manrope"
                
                }}
              >
                Support
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
               Help & FAQs
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Contact us
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
               Refunds
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
              Platform Status
              </div>

            </div>

            <div
              style={{
                // padding: "15% 0% 0% 5%",
                marginTop:"50px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginBottom: "12%",
                //  marginTop:"20px",
                fontFamily:"Manrope"
                }}
              >
                Company
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Blog
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Affiliate Program
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Video Background Removal
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Careers
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                About us
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Press
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Pricing
              </div>
            </div>

            <div
              style={{
                // padding: "15% 0% 0% 5%",
                marginTop:"50px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginBottom: "12%",
                //  marginTop:"20px",
                fontFamily:"Manrope"
                }}
              >
                Tools & API
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
               API Documentation
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Integrations, tools & apps
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Photoshop Extension
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Windows / Mac / Linux
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Android App
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#D7D7D7",
                  fontSize: "13px",
                  marginBottom: "10%",
                  color:"#A6A9B8",
                  fontFamily:"Manrope"
                }}
              >
                Design Templates
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "space-between",
            background: "#050718",
            justifyItems: "center",
            alignItems: "center",
            width: "100%",
            paddingTop:"70px",


          }}
        >
          <div
          style={{
            display: "flex",
            justifyContent:"center",
            width:"100%",
          }}
          >
            <img
              style={{
                width: "25%",
                
              }}
              src={language}
              alt=""
            />
          </div>

          <div
          style={{
            display: "flex",
            justifyContent:"center",
            width:"100%",
            marginTop:"35px",
            marginBottom:"35px"
          }}
          >
            <img
              style={{
                width: "90%",
                
              }}
              src={lastline}
              alt=""
            />
          </div>


          <div
            style={{
              display: "flex",
              gap: "5%",
             
              alignItems:"center",
              justifyContent:"center",
            }}
          >
            <img
              style={{
                width: "10%",
                height: "12%"
              }}
              src={fbLogo}
              alt=""
            />
            <img
              style={{
                width: "10%",
                height: "12%"
              }}
              src={linkedInLogo}
              alt=""
            />
            <img
              style={{
                width: "10%",
                height: "12%"
              }}
              src={twitterLogo}
              alt=""
            />
          </div>
          <div
            style={{ color: "white", fontSize: "12px", margin:"35px 0px", fontFamily:"Manrope" }}
          >Copyright @Loremipsum.com </div>
         
        </div>
</div>
)}
    </>
  );
};

export default Info;
