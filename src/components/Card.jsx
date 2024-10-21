import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.urlToImage} alt="" />
            <a className="title" onClick={() => window.open(item.url)}>
              {item.title}
            </a>
            <div className="content">{item.description}</div>
            <button onClick={() => window.open(item.url)}>Read More</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
