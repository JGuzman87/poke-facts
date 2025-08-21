import FetchButton from '../components/fetch-button';

const PokemonCard = () => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Pokemon Name</h2>
          <p>
            A brief description will go here, hopefully.
          </p>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <FetchButton> Submit </FetchButton>
      </div>
    </>
  );
}

export default PokemonCard;