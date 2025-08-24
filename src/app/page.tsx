"use client";

import { useState } from "react";
import PokemonCard from "../components/pokemon-card";

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
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await request.json();

    setPokemonName(data.name);
    setAbilities(data.abilities);
    setSprite(data.sprites);
    console.log(data);
  };

  return (
    <>
      <PokemonCard
     
        handleClick={handleClick}
        pokemonName={pokemonName}
        abilities={abilities}
        sprite={sprite}
      />
    </>
  );
};

export default Home;
