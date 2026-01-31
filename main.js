class Box {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  animate() {
    this.pokemon.update();
    this.pokemon.draw();
    requestAnimationFrame(animate);
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = () => {
  var c = document.getElementById("pokemon-box");
  var ctx = c.getContext("2d");
  var c_width = c.clientWidth;
  var c_height = c.clientHeight;
  //c.style.height = c.clientWidth / 1.5 + "px";

  // for (let i = 0; i < 10; i++) {
  const bul = new Pokemon(
    c,
    ctx,
    getRndInteger(0, c_width - 20),
    getRndInteger(0, c_height - 20),
    "/assets/pokemon.png",
  );
  // bul.draw();
  // }
  var b = new Box(bul);
  b.animate();
};
