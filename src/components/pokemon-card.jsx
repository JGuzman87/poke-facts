
const PokemonCard = ({pokemonName, abilities, sprite, handleClick}) => {

    
  return (
    <>
      <div className="card bg-amber-100 w-96 shadow-sm ">
        <div className="card-body">
          { pokemonName && <h2 className="card-title capitalize">{pokemonName}</h2>}
          <ul className="capitalize">
            {abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <figure>
          <img
            src={
              sprite
                ? sprite.front_default
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            }
            alt="pokemon sprite"
          />
          {sprite && <img src={sprite.back_default} alt="pokemon sprite" fill />}
        </figure>
        <button
          className="hover:bg-gray-600 hover:text-white"
          onClick={handleClick}
        >
          <p className="">Submit</p>
        </button>
      </div>
    </>
  );
}

export default PokemonCard;