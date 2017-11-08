const View = require("./ttt-view");
const Game = require("../node_solution/game");

$( () => {
  const game = new Game();
  const el = $(".ttt");
  const view = new View(game, el);
});
