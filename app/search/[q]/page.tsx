import { gql } from "@apollo/client";
import { getClient } from "../../../lib/client";
import List from "../../../components/List";


const query = (searchStr: string) => gql`{
  pokemon_v2_pokemon(where: {name: {_like: "%${searchStr}%"}}) {
    id
    name
  }
}
`;

interface Props {
  params: {
    q: string
  }
}

export default async function Results({ params }: Props) {
  const { q } = params;

  const client = getClient();
  const { data: { pokemon_v2_pokemon } } = await client.query({ query: query(q) });

  return <List mode={"pokemon"} items={pokemon_v2_pokemon} />;
}
