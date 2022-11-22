import React from "react";
interface CloseInterface {
width?: string,
height?: string,
fill?: string
}

function Close({width = '25', height = '25', fill = "#ffffff"}: CloseInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
    >
      <g
        fill={fill}
        fillOpacity="1"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="3.232"
        transform="translate(3.966 3.568)"
      >
        <path d="M0-.001l17.435 18.213" opacity="1"></path>
        <path d="M0 18.212L17.435 0" opacity="1"></path>
      </g>
    </svg>
  );
}

export default Close;