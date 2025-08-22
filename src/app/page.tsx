"use client";


import { useState, useEffect } from "react";

interface Ability {
  ability: {
    name: string;
  };
}

interface Sprite {
  front_shiny: string;
}

const Home = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [sprite, setSprite] = useState<Sprite | null>(null);

  const handleClick = async () => {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await request.json();

    setPokemonName(data.name);
    setAbilities(data.abilities);
    setSprite(data.sprites);
    console.log(data);
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">
            {pokemonName ? pokemonName : "Pokemon Name"}
          </h2>
          <ul>
            {abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <figure>
          <img
            src={
              sprite
                ? sprite.front_shiny
                : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt="pokemon sprite"
          />
        </figure>
        <button onClick={handleClick}> Submit </button>
      </div>
    </>
  );
};

export default Home;