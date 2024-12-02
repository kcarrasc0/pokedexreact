import React from "react";

import "./styles.css";

import NavBarDetail from "../../components/NavBarDetail";
import PokemonComponent from "../../components/Pokemon";

function Pokemon() {
  return (
    <div className="header-container">
      <NavBarDetail />
      <div id="container-fluid">
        <PokemonComponent />
      </div>
    </div>
  );
}

export default Pokemon;

// Seu fogo é incrivelmente quente, e descreveu a ser quente o suficiente para derreter rochas. Por causa das asas que tem crescido em evolução, Charizard pode voar e pode usar muitas habilidades tipo voador, e suas asas são capazes de levá-lo perto de uma altitude de 4.600 pés.