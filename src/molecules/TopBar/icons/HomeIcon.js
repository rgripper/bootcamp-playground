import React from "react";

export default function HomeIcon({ isActive }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 24 24"
    >
      {isActive
        ? <path
          fill="currentColor"
          d="M22 8.45l-9.15-6.19a1.5 1.5 0 00-1.69 0L2 8.45 3.06 10 4 9.37V19a1 1 0 001 1h5v-5h4v5h5a1 1 0 001-1V9.37l.94.63z"
        ></path>
        :
        <path
          fill="currentColor"
          d="M22 9.45l-9.15-6.19a1.5 1.5 0 00-1.69 0L2 9.45 3.06 11l.94-.63V20a1 1 0 001 1h6v-5h2v5h6a1 1 0 001-1v-9.63l.94.63zM18 19h-3v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4H6V8.89l6-4 6 4V19z"
        ></path>}
    </svg>
  );
}