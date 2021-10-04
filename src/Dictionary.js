import React, { useState } from "react";
import Definition from "./Definition";

import "./App.css";

export default function Dictionary() {
  var [keyword, setKeyword] = useState(" ");

  function handleDictionarySubmit(event) {
    event.preventDefault;

    return `Hello ${keyword}`;
  }

  function SearchKeyWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>Dictionary</h2>
      <form
        onSubmit={handleDictionarySubmit}
        className="dictionarySearchBar text-center"
      >
        <input
          type="search"
          placeholder="Enter a word..."
          className="mx-1 text-align-center"
          autoFocus={true}
          onClick={SearchKeyWord}
        />
        <input type="submit" className="mx-1" value="Search" />
      </form>
      <Definition />
    </div>
  );
}
