import React from "react";
import logo from "../images/logo.png";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          color: "#FFFFFF",
          alignItems: "center",
          padding: "2% 9% 5% 9%",
          position: "relative",
        }}
      >
        <div style={{ display: "flex" }}>
          <img style={{ width:  isTabletOrMobile ? "150px": "180px", height: isTabletOrMobile? "50px" : "60px" }} src={logo} alt="" />
        </div>
{
  isTabletOrMobile ? 
  <div>
    Menu
    </div>
    :
<>
<div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "45%",
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
        </div></>
}
        
      </div>
    
    </>
  );
};

export default Header;
