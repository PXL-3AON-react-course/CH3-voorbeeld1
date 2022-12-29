import React from "react";
import { IBook } from "../../models/Book";

const BookCard = ({ id, title, description }: IBook) => {
  const cardStyle = {
    border: id % 2 === 0 ? "2px solid black" : "2px solid red",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;
