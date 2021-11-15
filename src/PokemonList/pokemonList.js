import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../Context/PokemonContext';
import * as grahql from '../GraphQL/graphql';
import Card from '../Components/Card';

const PokemonList = () => {
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
  } = useContext(PokemonContext);

  const { fetchData, getPokemonList, handleEdit1, indeksNilai } = functions;

  useEffect(() => {
    getPokemonList();
  }, [loading, setLoading]);

  return (
    <>
      <div>
        {loading ? (
          <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        ) : (
          <>
            <div className="grid-container">
              {pokemon.map((res, index) => {
                return <Card key={index} pokemon={res} />;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PokemonList;
