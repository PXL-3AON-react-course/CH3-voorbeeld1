import React from "react";
import { IBook } from "../../models/Book";
import BookCard from "../book-card/BookCard";

const BOOKS: IBook[] = [
  {
    id: 1,
    title: "The Lord of the Rings",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
  },
  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    description:
      "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
  },
  {
    id: 3,
    title: "The Hobbit",
    description:
      "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. Written in 1937, it was published by Allen & Unwin in 1937 in the United Kingdom and by Houghton Mifflin in the United States in 1938. The Hobbit met with mixed reviews and initially was a modest commercial success, but it soon gained popularity, especially after Tolkien revised it in 1951, expanding it from 32,000 to 46,000 words and adding much of the rich background material now familiar to readers. It has since become one of the best-selling books ever written, with over 100 million copies sold.",
  },
];

const BookList = () => {
  return (
    <div>
      {BOOKS.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
