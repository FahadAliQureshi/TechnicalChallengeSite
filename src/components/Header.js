import React from "react";
import logo from "../images/logo.png";
import { useMediaQuery } from "react-responsive";
import expandup from "../images/expandup.png";
import hamburger from "../images/hamburger.png";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          color: "#FFFFFF" + 97,
          alignItems: "center",
          padding: "2% 9% 5% 9%",
          position: "relative",
          fontFamily: "Manrope",
          background: isTabletOrMobile ? "#050718" : "",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            style={{
              width: isTabletOrMobile ? "150px" : "180px",
              height: isTabletOrMobile ? "50px" : "60px",
            }}
            src={logo}
            alt=""
          />
        </div>
        {isTabletOrMobile ? (
          <div 
          style={{
            cursor: 'pointer',
          }}
          onClick={() => setShowDropdown(!showDropdown)}>
            <img
              style={{ width: "25px", height: "25px" }}
              src={hamburger}
              alt="Hamburger"
            />
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "45%",
                color: "#FFFFFF" + 96,
              }}
            >
              <div>Home</div>
              <div>How It Works?</div>
              <div>API Integration</div>
              <div>FAQ</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "15%",
                alignItems: "center",
              }}
            >
              <div>Log In</div>
              <div
                style={{
                  border: "1px solid white",
                  padding: "5px 15px",
                  borderRadius: "4px",
                }}
              >
                Sign Up
              </div>
            </div>
          </>
        )}

        {isTabletOrMobile && showDropdown && (
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "94%",
              // background: "#050718",
              background: "#071330",

              // border: "1px solid #FFFFFF",
              // borderRadius: "10px",
              height: "669px",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",

              zIndex: "999999",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
              }}
            >
              <img
                style={{
                  padding: "10px 0px 10px 10px",
                  width: "60%",
                  marginLeft: "50px",
                }}
                src={logo}
                alt=""
              />
              <div
                style={{ width: "100%", background: "white", height: "1px" }}
              ></div>
            </div>

            <div
              style={{
                padding: "10px 5px 10px 10px",
                color: "white",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                marginTop: "150px",
                marginLeft: "20px",
              }}
            >
              Home
            </div>
            {/* <div
              style={{
                height: 1,
                backgroundColor: "white",
                margin: "2px 0px 2px 0px",
              }}
            ></div> */}
            <div
              style={{
                color: "white",
                padding: "10px 5px 10px 10px",
                marginLeft: "20px",
              }}
            >
              How It Works?
            </div>
            {/* <div
              style={{
                height: 1,
                backgroundColor: "white",
                margin: "2px 0px 2px 0px",
              }}
            ></div> */}
            <div
              style={{
                color: "white",
                padding: "10px 5px 10px 10px",
                marginLeft: "20px",
              }}
            >
              API Integration
            </div>
            {/* <div
              style={{
                height: 1,
                backgroundColor: "white",
                margin: "2px 0px 2px 0px",
              }}
            ></div> */}
            <div
              style={{
                color: "white",
                padding: "10px 5px 10px 10px",
                marginLeft: "20px",
              }}
            >
              FAQ
            </div>
            <div
              style={{
                position: "absolute",
                top: 340,
                left: -16,
                width: "35px",
                height: "35px",
                borderRadius: "999px",
                background: "#071330",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "30%",

                  transform: "rotate(90deg)",
                }}
                src={expandup}
                alt=""
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
