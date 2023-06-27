import React from "react";

import frth1 from "../images/frth1.png";
import { useMediaQuery } from "react-responsive";

const Boxes = ({ selectedCard, setSelectedCard, img }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <div
        onClick={() => {
          setSelectedCard((selectedCard = 0));
        }}
        style={{
          width: isTabletOrMobile ? "90%" : "31.5%",
          height: isTabletOrMobile ? 240 : 245,
          background:
            selectedCard == 0
              ? "linear-gradient(to bottom right, #A709FD, #3FE0FF)"
              : "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          borderRadius: 4,
          // border: "1px solid #FFFFFF70",
          justifyContent: "center",
          zIndex: 999,
          paddingBottom: 38,
          marginTop: isTabletOrMobile ? 50 : 0,
          cursor: 'pointer',
          borderRadius:isTabletOrMobile? "6px":"6px",
        }}
      >
        <img
          style={{
            paddingTop: isTabletOrMobile ? 50 : 0,
            width: "80px",
            height: isTabletOrMobile ? "60" : "70",
            marginBottom: isTabletOrMobile ? 20 : 0,
          }}
          src={img}
          alt=""
        />
        <div
          style={{
            // fontWeight: "bold",
            fontSize: 23,
            color: "white",
          }}
        >
          Lorem
        </div>

        <div
          style={{
            width: "90%",
            marginTop: 18,
            fontSize: 19,
            color: "rgb(255, 255, 255, 0.7)",
          }}
        >
          Lorem ipsum dolor sit amer please consider this as dummy text only
        </div>
      </div>
    </>
  );
};

export default Boxes;
