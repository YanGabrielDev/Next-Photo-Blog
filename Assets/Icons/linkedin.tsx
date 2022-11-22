import React from "react"
import { SvgIconInterface } from "../../src/interfaces/svgIcons.interface"
function LinkedinIcon({
  width = "30",
  height = "30",
  fill = "#6E6E6E",
}: SvgIconInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <path
        fill="#6E6E6E"
        d="M25 2C12.316 2 2 12.316 2 25s10.316 23 23 23 23-10.316 23-23S37.684 2 25 2zm-7 33h-4V20h4zm-2-18a1.999 1.999 0 110-4 1.999 1.999 0 110 4zm21 18h-4v-7.5a3.51 3.51 0 00-3.5-3.5 3.51 3.51 0 00-3.5 3.5V35h-4V20h4v1.816A6.483 6.483 0 0130.5 20a6.5 6.5 0 016.5 6.5zm0 0"
      ></path>
    </svg>
  )
}

export default LinkedinIcon
