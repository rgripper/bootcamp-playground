import React from "react";

export default function MessagingIcon({ isActive }) {
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
        d="M21 9H8a1 1 0 00-1 1v10a1 1 0 001 1h10l4 3V10a1 1 0 00-1-1zm-4 8h-5v-1h5v1zm1-3h-7v-1h7v1zm-1-9v2H6a1 1 0 00-1 1v8H3a1 1 0 01-1-1V5a1 1 0 011-1h13a1 1 0 011 1z"
      ></path>
      :<path
        fill="currentColor"
        d="M21 8H8a1 1 0 00-1 1v10a1 1 0 001 1h10l4 3V9a1 1 0 00-1-1zm-1 11.11L18.52 18H9v-8h11v9.11zM12 15h5v1h-5v-1zm-8-2h1v2H3a1 1 0 01-1-1V4a1 1 0 011-1h13a1 1 0 011 1v2h-2V5H4v8zm14 0h-7v-1h7v1z"
      ></path>}
    </svg>
  );
}