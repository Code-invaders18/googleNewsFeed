import React from "react";

const News = ({ title, publish, description, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{publish}</h3>
      <p>{description}</p>
      <img src={image} alt=""></img>
    </div>
  );
};
export default News;
