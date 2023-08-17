import client from "../config/client";

// fetches elements from game 1 and also translates into game state object.
export async function fetchGameState() {
  const response = await client
    .viewLanguageVariant()
    .byItemCodename("current_game")
    .byLanguageCodename("default")
    .toPromise();
  // translate response into easier to use array. 
  const values = response.data.elements.map((item) => {
    return item.value;
  });
  console.log(values);
  // translate Kontent.ai content item values into easier to use javascript. 
  return {
    // board is stored as text in kontent.ai, need to turn into an array. 
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
      .byItemCodename("current_game")
      .byLanguageCodename("default")
      .withData((builder) => {
        return {
          elements: [
            builder.textElement({
              element: { codename: "board" },
              // turn board array back into text
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

// To do: reuse saveGameState function, pass in default values. 
export async function resetGameState() {
  try {
    const response = await client
      .upsertLanguageVariant()
      .byItemCodename("current_game")
      .byLanguageCodename("default")
      .withData((builder) => {
        return {
          elements: [
            builder.textElement({
              element: { codename: "board" },
              value: JSON.stringify(["", "", "", "", "", "", "", "", ""]),
            }),
            builder.textElement({
              element: { codename: "current_player" },
              value: "X",
            }),
            builder.textElement({
              element: { codename: "winner" },
              value: "",
            }),
            builder.textElement({
              element: { codename: "draw" },
              value: "false",
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
