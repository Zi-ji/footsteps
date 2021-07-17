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
        d="M17.071 2.929A9.935 9.935 0 0010 0a9.935 9.935 0 00-7.071 2.929A9.935 9.935 0 000 10a9.935 9.935 0 002.929 7.071A9.935 9.935 0 0010 20a9.935 9.935 0 007.071-2.929A9.935 9.935 0 0020 10a9.935 9.935 0 00-2.929-7.071zM10 18.829c-4.868 0-8.828-3.961-8.828-8.829S5.132 1.172 10 1.172c4.868 0 8.828 3.96 8.828 8.828 0 4.868-3.96 8.828-8.828 8.828z"
        fill="#000"
      />
      <Path
        d="M14.777 6.791a.586.586 0 00-.828 0l-5.174 5.175L6.05 9.242a.586.586 0 00-.829.828L8.36 13.21a.584.584 0 00.829 0l5.588-5.59a.586.586 0 000-.828z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
