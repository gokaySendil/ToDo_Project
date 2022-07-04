import React, { useEffect, useState } from "react";
import "../styles/_CardList.scss";
import Card from "../UI/Card";
import { db, auth } from "./database/Firebase";
import { doc, onSnapshot } from "firebase/firestore";

const CardList = (props) => {
  const array = props.array;
  if (array.length === 0) {
    return (
      <div className="grid_container">
        <h2>Found no todos</h2>
      </div>
    );
  }

  return (
    <div className="grid_container">
      {array.map((element, index) => {
        return <Card key={index} title={element} />;
      })}
    </div>
  );
};

export default CardList;
