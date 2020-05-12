import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});
  /*state = {
    // valor do estado que guarda infos e foto do pokemon
    pokemon: {}
  };*/

  useEffect(() => {
    axios
      .get(`${props.urlBase}/${props.pokemon}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.pokemon, props.urlBase]);

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;
