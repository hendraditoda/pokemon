import React from 'react';
import { Link } from 'react-router-dom';
// import typeColors from '../../Datas/type-color';
import './style.css';

const Card = ({ pokemon }) => {
  return (
    <div className="Card">
      <div className="Card__img">
        <img src={pokemon.data.sprites.front_default} alt="" />
      </div>
      <div className="Card__name">
        <Link to={`PokemonDetail/${pokemon.data.id}`}>{pokemon.data.name}</Link>
      </div>
      {/* <div className="Card__types">
        {pokemon.data.types.map((type, i) => {
          return (
            <div
              key={i}
              className="Card__type"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card__info">
        <div className="Card__data Card__data--weight">
          <p className="title">Weight</p>
          <p>{pokemon.data.weight}</p>
        </div>
        <div className="Card__data Card__data--weight">
          <p className="title">Height</p>
          <p>{pokemon.data.height}</p>
        </div>
        <div className="Card__data Card__data--ability">
          <p className="title">Ability</p>
          <p>{pokemon.data.abilities[0].ability.name}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
