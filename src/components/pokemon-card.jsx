

const PokemonCard = ({pokemonName, abilities, sprite, handleClick}) => {

    
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
}

export default PokemonCard;