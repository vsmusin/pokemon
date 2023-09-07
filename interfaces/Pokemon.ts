export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  pokemon_v2_pokemonsprites: {
    sprites: string;
  }[];
  moves: {
    move: {
      name: string;
      accuracy: number;
    }
  }[]
}