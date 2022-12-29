import React from "react";
import "./App.css";
import BookList from "./components/book-list/BookList";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <BookList />
    </>
  );
};

export default App;
