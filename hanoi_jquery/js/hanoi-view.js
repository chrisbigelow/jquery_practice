class View {
  
  constructor (game, $el) {
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.render();
  }
  
  setupTowers() {
    const board = $("<ul class'game'></ul>");
    const piles = $("<ul class='piles'></ul>");
    for (let j = 0; j < 3; j++) {
      const disk = $("<li class='disk'></li>");
      piles.append(disk);
    }
    board.append(piles);
    for (let i = 0; i < 2; i++) {
      const piles = $("<ul class='piles'></ul>");
      board.append(piles);
    }
    this.el.append(board);
  }
  
  render() {
    
  }
  
}