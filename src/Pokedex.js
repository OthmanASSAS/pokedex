import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemon, exp, isWinner }) => {
  let title = isWinner ? (
    <h1 className='Pokedex-winner'>Winning Hand</h1>
  ) : (
    <h1 className='Pokedex-loser'>Losing Hand</h1>
  );

  return (
    <div className='Pokedex'>
      <h1>Pokedex!</h1>
      <h4>Total Experience : {exp}</h4>
      {title}
      <div className='Pokedex-cards'>
        {pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
