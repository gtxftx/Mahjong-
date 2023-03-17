const tiles = [];
const suits = ["bamboo", "characters", "dots"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Build the tile set
suits.forEach((suit) => {
  values.forEach((value) => {
    tiles.push(`${value}${suit}`);
  });
});

// Shuffle the tile set
const shuffleTiles = () => {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
};

// Deal the tiles to the players
const players = [];
const numOfPlayers = 4;
const numOfPlayers = 2;
const numOfPlayers = 4;
for (let i = 0; i < numOfPlayers; i++) {
  players[i] = [];
}

let currentPlayer = 0;
while (tiles.length > 0) {
  players[currentPlayer].push(tiles.shift());
  currentPlayer = (currentPlayer + 1) % numOfPlayers;
}

// Play the game
const playTile = (playerIndex, tileIndex) => {
  const tile = players[playerIndex].splice(tileIndex, 1);
  console.log(`Player ${playerIndex + 1} plays ${tile}`);
};

shuffleTiles();

// Example of playing the first tile of the first player
playTile(0, 0);
