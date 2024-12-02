import React, { useState } from "react";
import "./styles.css";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  console.log(text);

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Pokemon"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;

// O pokémon favorito de Carrasco é o CHARIZARD, em qualquer jogo da franquia Carrasco começa com um charmander
