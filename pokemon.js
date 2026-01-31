class Pokemon {
  constructor(c, ctx, x, y, image) {
    this.c = c;
    this.c_width = c.clientWidth;
    this.c_height = c.clientHeight;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.dx = Math.random(0, 1) > 0.5 ? 3 : -3;
    this.image = image;
  }

  getPokemon() {
    var pokemon = new Image();
    pokemon.src = this.image;
    return pokemon;
  }

  draw() {
    this.getPokemon().onload = () => {
      this.ctx.clearRect(0, 0, this.c_width, this.c_height);
      this.ctx.drawImage(this.getPokemon(), this.x, this.y);
    };
  }

  update() {
    this.x += this.dx;
    if (this.x > this.c_width || this.x < 0) {
      this.dx *= -1;
    }
  }
}
