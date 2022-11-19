import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBox() {
  const [search, setSearch] = useState("");
  return (
    <div className="header-box">
      <div className="ring-gr-cont">
        <div className="ring-gr">
          <span className="ring-gr-item"></span>
          <span className="ring-gr-item"></span>
          <span className="ring-gr-item"></span>
          <span className="ring-gr-item"></span>
          <span className="ring-gr-item"></span>
          <span className="ring-gr-item"></span>
          <span className="ring-gr-item"></span>
          <span className="ring-gr-item"></span>
        </div>
      </div>
      <div className="search-box">
        <div className="search-box-sm">
          <input
            type="text"
            placeholder="جستجو"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_7_6838)">
                <path
                  d="M11.74 20.48C16.567 20.48 20.48 16.567 20.48 11.74C20.48 6.91303 16.567 3 11.74 3C6.91303 3 3 6.91303 3 11.74C3 16.567 6.91303 20.48 11.74 20.48Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M18.03 18.03L21 21"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_6838">
                  <rect width="24" height="24" fill="inherit" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
