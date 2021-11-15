import axios from 'axios';
import React, { createContext, useState } from 'react';
// import { useHistory } from 'react-router';
// import * as graphql from '../GraphQL/graphql';
// import { useQuery } from '@apollo/client';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState();
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [pokedex, setPokeDex] = useState([]);

  // let history = useHistory();

  const getPokemonList = async () => {
    let pokemonArray = [];
    try {
      for (let i = 1; i <= 150; i++) {
        pokemonArray.push(await fetchData(i));
      }
      setPokemon(pokemonArray);
      setLoading(false);
      return pokemonArray;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemonDetails(details.data);
    setLoading(false);
  };
  const getPokemonData = async (id) => {
    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return result;
  };

  const catchPokemonData = async (id) => {
    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return result;
  };

  const catchPokemon = async (id) => {
    setPokeDex((state) => {
      const monExits = state.filter((p) => pokemon.id === p.id);

      if (!monExits) {
        state = [...state, pokemon];
        state.sort(function (a, b) {
          return a.id - a.ib;
        });
      }
      return state;
    });
    catchPokemonData();
  };

  const removePokemonFromList = (removedPokemon) =>
    pokemon.filter((pokemon) => pokemon !== removedPokemon);

  const capture = (pokemon) => () => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
    setPokemon(removePokemonFromList(pokemon));
  };

  const releasePokemon = (releasedPokemon) =>
    capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);

  const release = (pokemon) => () => {
    setCapturedPokemons(releasePokemon(pokemon));
    setPokemon([...pokemon, pokemon]);
  };

  let functions = {
    fetchData,
    getPokemonList,
    getPokemon,
    getPokemonData,
    removePokemonFromList,
    capture,
    releasePokemon,
    release,
    catchPokemon,
    catchPokemonData,
  };

  return (
    <PokemonContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
