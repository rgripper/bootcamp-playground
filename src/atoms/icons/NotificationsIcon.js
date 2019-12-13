import React from "react";

export default function NotificationsIcon({ isActive }) {
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
        d="M18.94 14H5.06l.73-5.56A6.26 6.26 0 0112 3a6.26 6.26 0 016.21 5.44zm2 5l-1.71-4H4.78l-1.72 4a.71.71 0 00-.06.28.75.75 0 00.75.76H10a2 2 0 104 0h6.27a.74.74 0 00.67-1.04z"
      ></path>
      :<path
        fill="currentColor"
        d="M20.94 19L19 14.49s-.41-3.06-.8-6.06A6.26 6.26 0 0012 3a6.26 6.26 0 00-6.21 5.44L5 14.49 3.06 19a.71.71 0 00-.06.28.75.75 0 00.75.76H10a2 2 0 104 0h6.27a.74.74 0 00.67-1.04zM12 4.75a4.39 4.39 0 014.35 3.81c.28 2.1.56 4.35.7 5.44H7l.65-5.44A4.39 4.39 0 0112 4.75zM5.52 18l1.3-3h10.36l1.3 3h-13z"
      ></path>}
    </svg>
  );
}
