import * as React from "react";

function Moon(props) {
  return (
    <svg
      className="icon-mode"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Moon;
