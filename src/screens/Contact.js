import React from "react";
import contactBG from "../images/contactBG.png";

const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${contactBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "700px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%", marginLeft: "10%" }}>
          <div
            style={{
              fontWeight: "bold",
              display: "block",
              color: "white",
              fontSize: "40px",
            }}
          >
            Reach out to
            <br></br> Lor
            <span
              style={{
                background: "-webkit-linear-gradient(right, #3AC5EF, #A060AE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              em
            </span>{" "}
            Ipsum
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
              gap: "15%"

            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",

              }}
            >
              Contact
            </div>
            <div style={{ marginTop: "5%", display: "flex", gap: "2%" }}>
              <input
                style={{
                  background: "transparent",
                  border: "1px solid white",
                  padding: "2% 10% 2% 3%",
                  outline: "none",
                  borderRadius: "1%",
                  color: "white",
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
                }}
                placeholder="Last Name"
                type="text"
              />
            </div>

            <div
              style={{
                marginTop: "5%"
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
                }}
                placeholder="Email"
                type="text"
              />
            </div>

            <div
              style={{
                marginTop: "5%"
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
                background: "-webkit-linear-gradient(right, #3FE0FF, #AC00FD)",
                height: "50px",
                width: "35%",
                marginTop: "50px",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "center",
                justifyItems: "center",
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
    </>
  );
};

export default Contact;
