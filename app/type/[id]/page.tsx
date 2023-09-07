import { gql } from "@apollo/client";
import { getClient } from "../../../lib/client";
import List from "../../../components/List";


const query = (id: string) => gql`{
  pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {type_id: {_eq: ${id}}}}) {
    id
    name
  }
}
`;

interface Props {
  params: {
    id: string
  }
}

export default async function Type({ params }: Props) {
  const { id } = params;

  const client = getClient();
  const { data: { pokemon_v2_pokemon } } = await client.query({ query: query(id) });


  return <List mode={"pokemon"} items={pokemon_v2_pokemon} />;
}
