"use client";
import { useRouter } from "next/navigation";
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
const router = useRouter();
  
  const [pokemonName, setPokemonName] = useState<string>("");
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [sprite, setSprite] = useState<Sprite | null>(null);


  const handleClick = async () => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await request.json();

  
    setPokemonName(data.name);
    setAbilities(data.abilities);
    setSprite(data.sprites);
    console.log(data);
    
    // router.push(`/info-page/${pokemonName}`)
   
  };

    const handleChange = (e) => {
     
    setPokemonName(e.target.value);
    };


  return (
    <>
      <label htmlFor="name">Pokemon Search 🔍:</label>
      <input type="text" value={pokemonName} placeholder="enter name here" onChange={handleChange}></input>
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
