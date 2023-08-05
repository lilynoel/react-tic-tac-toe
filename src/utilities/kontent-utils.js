import client from "../config/client";

// fetches elements from game 1 and also translates into game state object.
export async function fetchGameState() {
  const response = await client
    .viewLanguageVariant()
    .byItemCodename("game_1")
    .byLanguageCodename("default")
    .toPromise();
  const values = response.data.elements.map((item) => {
    return item.value;
  });
  console.log(values);
  return {
    board: JSON.parse(values[0]),
    currentPlayer: values[1],
    winner: values[2],
    draw: Boolean(values[3]),
  };
}
