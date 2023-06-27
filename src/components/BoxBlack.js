import React from "react";
import fingerPrint from "../images/fingerPrint.png";
import { useMediaQuery } from "react-responsive";

const BoxBlack = ({ img, heading, id, selectedCardId, onClick }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <div
        onClick={() => onClick(id)}
        style={{
          width: isTabletOrMobile ? "90%" : "31.5%",
          height: isTabletOrMobile ? 240 : 245,
          background:"#171820",
            // id === selectedCardId
            //   ? "linear-gradient(to bottom right, #A709FD, #3FE0FF)"
            //   : "#171820",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          borderRadius: 4,
          border: "1px solid #FFFFFF70",
          justifyContent: "center",
          zIndex: 999,
          paddingBottom: 38,
          marginTop: isTabletOrMobile ? 20 : 0,
          cursor: "pointer",
          borderRadius:isTabletOrMobile? "6px":"6px",
        }}
      >
        <img
          style={{
            width: 70,
            height: 70,
            marginBottom: isTabletOrMobile ? 20 : 0,
          }}
          src={img}
          alt=""
        />
        <div style={{ fontSize: 23 }}>{heading}</div>

        <div
          style={{
            width: "90%",
            marginTop: 18,
            fontSize: 17,
            color: "#A6A9B8",
          }}
        >
          Lorem ipsum dolor sit amer please consider this as dummy text only
        </div>
      </div>
    </>
  );
};

export default BoxBlack;
