import { useParams } from "react-router-dom";
import pokemonDB from "./lib/data.json";

export default function PokemonDetails() {
  const { pokemonName } = useParams();
  const currentPokemon = pokemonDB.find(
    (pokemon) => pokemon.name === pokemonName
  );
  return (
    <>
      <h1>Details</h1>
      <p>{pokemonName}</p>
      <p>{currentPokemon?.type}</p>
      <p>{currentPokemon?.habitat}</p>
    </>
  );
}
