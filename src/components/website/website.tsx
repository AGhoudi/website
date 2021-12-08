import { FC } from 'react';

import "./website.scss";

interface Weblist {
  image: string,
  title: string,
  link: string,
}

const Website:FC<Weblist> = ({image, title, link}) => (
  <div className="grid-item">
    <img src={image} alt={title} className="grid-item__image" />
    <div className="overlay">
      <div className="overlay__text">
        <a className="overlay__website" href={link} target="_blank" rel="noopener noreferrer" >{title}</a>
      </div>
    </div>
  </div>
);

export default Website;