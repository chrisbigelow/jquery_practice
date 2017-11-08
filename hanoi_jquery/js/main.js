const HanoiGame = require('./game.js');
const View = require('./main.js');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});

console.log("yessssss");