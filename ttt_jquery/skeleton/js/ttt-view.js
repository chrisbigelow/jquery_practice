class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let ts = this;
    $(".box").on("click", function (event) {
      let pos = event.currentTarget.attributes.grid_pos.value;
      pos = pos.split(",").map(Number);
      try {
        ts.game.playMove(pos);
      } catch(err) {
        alert(err.msg);
        return;
      }
      ts.makeMove($(event.currentTarget));
    });
  }

  makeMove($square) {
    $square.css("background-color", "white");
    $square.append(`<p class="characters">${this.game.currentPlayer}</p>`);
    if (this.game.isOver()) {
      alert(`${this.game.currentPlayer} won!`);
      $(".box").off("click");
    }
  }

  setupBoard() {
    const ul = $("<ul class='grid'></ul>");
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        const li = $("<li class='box'></li>");
        li.attr("grid_pos", [x,y]);
        ul.append(li);
      }
    }
    this.el.append(ul);
  }
}

module.exports = View;
