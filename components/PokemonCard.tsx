import { Pokemon } from "@/interfaces/Pokemon";
import Image from "next/image";

interface Props {
  pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: Props) {
  const sprites = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites);

  const sprite = sprites[Object.keys(sprites)[0]]
    ?.replace("/media/", "https://raw.githubusercontent.com/PokeAPI/sprites/master/");

  return (
    <div className="border-2 rounded-lg w-80 mx-auto p-5 flex flex-col items-center">
      {sprite && <Image src={sprite} alt={pokemon.name} width="100" height="100" />}
      <h1 className="text-2xl font-bold p-5 capitalize">{pokemon.name}</h1>
      <h2>Moves:</h2>
      <table className="w-full">
        <tbody>
          {pokemon.moves.map((m, i) => (
            <tr key={i} className="p-5">
              <td>{m.move.name}</td>
              <td>{m.move.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
