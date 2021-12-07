import React from "react";

import "./website.css";

const Website = ({image, title, link}) => (
  <div class="grid-item">
    <img src={image} alt={title} className="image" />
    <div className="overlay">
      <div className="text">
        <a className="website" href={link} target="_blank" rel="noopener noreferrer" >{title}</a>
      </div>
    </div>
  </div>
);

export default Website;