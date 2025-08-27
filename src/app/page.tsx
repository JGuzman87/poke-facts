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

  const [input, setInput] = useState<string>('');
  const [pokemonName, setPokemonName] = useState<string>("");
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [sprite, setSprite] = useState<Sprite | null>(null);


  const handleClick = async () => {
  try{ const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.trim().toLowerCase()}`);
    if(!response.ok) {
      return alert('Invalid Name');
    }
      const data = await response.json();

       setPokemonName(data.name);
       setAbilities(data.abilities);
       setSprite(data.sprites);
       console.log(data);
  }catch(error) {
   alert("Invalid request")
  }    
  
 
    
    // router.push(`/info-page/${pokemonName}`)
   
  };

  


  return (
    <>
      <label htmlFor="name">Pokemon Search 🔍:</label>
      <input type="text" value={input} placeholder="enter name here" onChange={(e) => setInput(e.target.value)} />
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
