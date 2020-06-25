import React from 'react';
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => {
  let imageClass = '';

  size ? (imageClass = `${size} menu-item`) : (imageClass = 'menu-item');

  return (

    <div
    onClick = {() => history.push(`${match.url}${linkUrl}`)}
      className={imageClass}
    >
    <div className="background-image"
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}>

    </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
