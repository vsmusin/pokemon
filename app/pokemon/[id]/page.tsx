import { gql } from "@apollo/client";
import { getClient } from "../../../lib/client";
import PokemonCard from "@/components/PokemonCard";


const query = (id: string) => gql`{
  pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
    id
    name
    pokemon_v2_pokemonsprites {
      sprites
    }
    moves: pokemon_v2_pokemonmoves{
      move: pokemon_v2_move{
          name
          accuracy
        }
      }
    }
  }
`;

interface Props {
  params: {
    id: string
  }
}

export default async function Pokemon({ params }: { params: { id: string } }) {
  const { id } = params;

  const client = getClient();
  const { data: { pokemon_v2_pokemon } } = await client.query({ query: query(id) });

  const pokemon = pokemon_v2_pokemon[0];


  return <PokemonCard pokemon={pokemon} />
}
