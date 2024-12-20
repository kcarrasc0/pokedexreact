import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Pokeball } from "../Spinner";
import { Pagination } from "semantic-ui-react";
import PokemonCard from "../PokemonCard";
import Search from "../Search";
// import axios from "axios";

import { App, PaginationContainer } from "./styles";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPokemon] = useState(807);
  const [pokemonPerPage] = useState(54);
  const [currentPage, setCurrentPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      await api
        .get(`/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`)
        .then((response) => {
          setPokemons(response.data.results);
        });

      setIsLoading(false);
    };
    fetchPokemons();
  }, [currentPage, pokemonPerPage]);

  const onPaginationClick = (e, pageInfo) => {
    setCurrentPage(pageInfo.activePage * pokemonPerPage - pokemonPerPage);
  };

  const totalPage = Math.ceil(totalPokemon / pokemonPerPage);

  const renderPokemonsList = () => {
    const pokemonsList = [];

    pokemons.forEach((pokemon) => {
      if (!pokemon.name.includes(query)) {
        return;
      }

      pokemonsList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />);
    });

    return pokemonsList;
  };

  return isLoading ? (
    <Pokeball />
  ) : (
    <>
      <Search getQuery={(q) => setQuery(q)} />

      <PaginationContainer>
        <Pagination
          defaultActivePage={1}
          totalPages={totalPage}
          onPageChange={onPaginationClick}
        />
      </PaginationContainer>

      <App>
        {/* {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))} */}

        {renderPokemonsList()}
      </App>
    </>
  );
};

export default PokemonList;



// Você sabia que...
// A criação de Pokémon teve origem na paixão de Satoshi Tajiri por colecionar insetos na infância, que ele chamava de "monstros de bolso". Tajiri decidiu criar um videogame que permitisse às crianças fazerem o mesmo que ele fazia, já que na época elas estavam mais atentas aos videogames do que a brincar ao ar livre