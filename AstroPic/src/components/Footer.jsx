import React from "react";

export default function Footer({ handleToggleModal }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>The brutal Martian Landscape</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
