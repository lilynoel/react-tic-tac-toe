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

export async function saveGameState(gameState) {
  try {
    const response = await client
      .upsertLanguageVariant()
      .byItemCodename("game_1")
      .byLanguageCodename("default")
      .withData((builder) => {
        return {
          elements: [
            builder.textElement({
              element: { codename: "board" },
              value: JSON.stringify(gameState.board),
            }),
            builder.textElement({
              element: { codename: "current_player" },
              value: gameState.currentPlayer,
            }),
            builder.textElement({
              element: { codename: "winner" },
              value: gameState.winner,
            }),
            builder.textElement({
              element: { codename: "draw" },
              value: String(gameState.draw),
            }),
          ],
        };
      })
      .toPromise();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
