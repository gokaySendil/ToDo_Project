import React from "react";
import "../styles/_CardList.scss";
import Card from "../UI/Card";
const CardList = (props) => {
  return (
    <div className="grid_container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
