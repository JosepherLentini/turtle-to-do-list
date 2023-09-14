import * as React from "react";
const Check = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke={props.complete ? "#7EAA92" : "#8a6143"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 5 8 15l-5-4"
    />
  </svg>
);
export default Check;
