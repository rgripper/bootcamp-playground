import React from "react";

export default function JobsIcon({ isActive }) {
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
                    d="M2 13h20v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6zm20-5v4H2V8a1 1 0 011-1h4V6a3 3 0 013-3h4a3 3 0 013 3v1h4a1 1 0 011 1zm-7-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v1h6V6z"
                ></path>
                : <path
                    fill="currentColor"
                    d="M21 7h-4V6a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H3a1 1 0 00-1 1v11a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1zM9 6a1 1 0 011-1h4a1 1 0 011 1v1H9V6zm11 12H4v-5h16v5zm0-6H4V9h16v3z"
                ></path>}
        </svg>
    );
}
