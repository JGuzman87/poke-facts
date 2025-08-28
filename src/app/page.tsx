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
    if(!response.ok || !input) {
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
  
  setInput('');
 
    
    // router.push(`/info-page/${pokemonName}`)
   
  };

  


  return (
    <> 
      <form className="flex flex-col gap-4 p-2 bg-amber-300" onSubmit={(e) => {e.preventDefault(); handleClick()}}>
        <label className="self-center" htmlFor="name">Pokemon Search 🔍:</label>
        <input
          className="bg-gray-100 w-1/2 self-center p-2"
          type="text"
          value={input}
          placeholder="enter name here"
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </form>
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
