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
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm5.575 6.665l-6.154 6.923a.768.768 0 01-1.056.09L4.52 10.6a.77.77 0 01.961-1.202l3.276 2.62 5.669-6.377a.769.769 0 111.15 1.023z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
