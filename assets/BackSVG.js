import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={11}
      height={19}
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.547 10.178l8.544 8.542a.962.962 0 001.358 0 .957.957 0 000-1.356L2.583 9.501l7.865-7.864a.958.958 0 000-1.356.962.962 0 00-1.358 0L.546 8.82a.968.968 0 00.001 1.357z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
