import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../Context/PokemonContext';

import typeColors from '../Datas/type-color';
import './style.css';

const PokemonDetail = () => {
  let { id } = useParams();

  const { functions, loading, pokemonDetails } = useContext(PokemonContext);

  const { getPokemon } = functions;

  useEffect(() => {
    getPokemon(id);
  }, [getPokemon]);

  return (
    <>
      {loading ? (
        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
      ) : (
        <>
          <div className="CardDetail">
            <div className="CardDetail__img">
              <img src={pokemonDetails.sprites.front_default} alt="" />
            </div>
            <div className="CardDetail__name">{pokemonDetails.name}</div>

            <div className="CardDetail__types">
              {pokemonDetails.types.map((type, i) => {
                return (
                  <div
                    key={i}
                    className="CardDetail__type"
                    style={{ backgroundColor: typeColors[type.type.name] }}
                  >
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <div className="CardDetail__info">
              <div className="CardDetail__data CardDetail__data--weight">
                <p className="title">Weight</p>
                <p>{pokemonDetails.weight}</p>
              </div>
              <div className="CardDetail__data CardDetail__data--weight">
                <p className="title">Height</p>
                <p>{pokemonDetails.height}</p>
              </div>
              <div className="CardDetail__data CardDetail__data--ability">
                <p className="title">Ability</p>
                <p>{pokemonDetails.abilities[0].ability.name}</p>
              </div>
            </div>
            <div>
              <button>
                <Link to={`MyPokemonList/`}>Catch</Link>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonDetail;
