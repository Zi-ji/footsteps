import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.625 7.5H15V5c0-2.758-2.242-5-5-5S5 2.242 5 5v2.5h-.625C3.342 7.5 2.5 8.34 2.5 9.375v8.75C2.5 19.159 3.342 20 4.375 20h11.25c1.033 0 1.875-.84 1.875-1.875v-8.75A1.877 1.877 0 0015.625 7.5zM6.667 5A3.337 3.337 0 0110 1.667 3.337 3.337 0 0113.333 5v2.5H6.667V5z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
