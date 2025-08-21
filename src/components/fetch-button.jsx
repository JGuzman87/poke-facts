"use client";

import { useState, useEffect } from 'react';

const FetchButton = ({ children }) => {

    const [pokemonData, setPokemonData] = useState();
 
    const handleClick = async (e) => {

        const request = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const data = await request.json();
       
        setPokemonData(data)
      console.log(pokemonData);
    }
   
    

     


    

  return (
  
  <button className="btn btn-wide self-center" onClick={handleClick}>{children}</button>);
}

export default FetchButton;