import React from "react";
import Header from "../components/Header";
import main from "../images/main.png";

const Banner = () => {
  return (
    <>
      <div>
        <div
          style={{
            // position: "absolute",
            // top: "0px",
            // zIndex: "-9999",
            // width: "100%",
            backgroundImage: `url(${main})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
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
              marginTop: "100px",
            }}
          >
            <div style={{ fontWeight: "bold", display: "block" }}>
              {/* , fontFamily:"Manrope" */}
              <div>
                Lor<span style={{ color: "#3AC5EF" }}>em</span> ipsum dolor sit
                <br></br> consectetur{" "}
                <span
                  style={{
                    background:
                      "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Blockchain
                </span>
              </div>

              <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "13px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "75%",
              height: "40px",
              border: "1px solid #FFFFFF",
              borderRadius: "50px",
              alignItems: "center",
            }}
          >
            <div style={{ color: "white", fontSize: "12px" }}>
              Enter ID Here
            </div>
            <input
              style={{
                width: "50%",
                height: "30px",
                background: "transparent",
                outline: "none",
                color: "white",
                border: "none",
              }}
              type="text"
            />
            <div style={{ color: "white", fontSize: "12px" }}>
              Or Upload A Photo To Search
            </div>
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
              width: "70%",
              marginTop: "15px",
              fontSize: "15px",
              fontFamily: "Archivo",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
            </div>
          </div>
          {/* <img style={{ width: "100%" }} src={main} alt="" /> */}
        </div>

      
      </div>
    </>
  );
};

export default Banner;
