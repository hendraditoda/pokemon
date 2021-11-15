import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { PokemonContext } from '../Context/PokemonContext';
// import { useQuery } from '@apollo/react-hooks';
// import { GET_POKEMONS } from '../graphql/get-pokemon';
// import { Pokemon } from '../components/Pokemon';

const MyPokemonList = () => {
  let { id } = useParams();
  const {
    functions,
    pokemon,
    setPokemon,
    nextUrl,
    setNextUrl,
    prevUrl,
    setPrevUrl,
    loading,
    setLoading,
    pokemonDetails,
    setPokemonDetails,
    capturedPokemons,
    setCapturedPokemons,
    pokedex,
    setPokeDex,
  } = useContext(PokemonContext);

  const {
    fetchData,
    getPokemonList,
    getPokemon,
    getPokemonData,
    removePokemonFromList,
    capture,
    releasePokemon,
    release,
    catchPokemon,
  } = functions;

  useEffect(() => {});
  return (
    <>
      <div>
        {pokedex.map((pokemon, index) => {
          return <div key={index}>{pokemon.name}</div>;
        })}
      </div>
    </>
  );
};

export default MyPokemonList;
