import { gql } from "@apollo/client";
import { getClient } from "../lib/client";
import Search from "../components/Search";
import List from "../components/List";


const query = gql`{
  pokemon_v2_type(where: {id: {_lt: 100}}) {
    id
    name
  }
}
`;

export default async function Home() {
  const client = getClient();
  const { data: { pokemon_v2_type } } = await client.query({ query });

  return (
    <main>
      <Search />
      <List mode={"type"} items={pokemon_v2_type} />
    </main>
  )
}
