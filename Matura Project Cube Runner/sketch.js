const tileSize = 40;
let levels = []; // all levels
let tiles = [];  // current level tiles
let currentLevel = 0;
let player;

// --- DEFINE LEVELS ---
function defineLevels() {
  levels = [
    [
      { x: 3, y: 10, type: "ground" },
      { x: 4, y: 10, type: "ground" },
      { x: 5, y: 10, type: "ground" },
      { x: 6, y: 10, type: "ground" },
      { x: 7, y: 10, type: "ground" },
      { x: 1, y: 12, type: "coin" },
      { x: 0, y: 13, type: "ground" },
      { x: 1, y: 13, type: "ground" },
      { x: 2, y: 13, type: "ground" },
      { x: 5, y: 14, type: "coin" }, 
      { x: 15, y: 14, type: "coin" },
      { x: 4, y: 15, type: "ground" },
      { x: 5, y: 15, type: "ground" },
      { x: 6, y: 15, type: "ground" },
      { x: 11, y: 15, type: "ground" },
      { x: 14, y: 15, type: "ground" },
      { x: 15, y: 15, type: "ground" },
      { x: 16, y: 15, type: "ground" },
      { x: 17, y: 15, type: "spike" },
      { x: 18, y: 15, type: "coin" },
      { x: 17, y: 16, type: "ground" },
      { x: 18, y: 16, type: "ground" },
      { x: 6, y: 17, type: "coin" },
      { x: 12, y: 17, type: "coin" },
      { x: 5, y: 18, type: "ground" },
      { x: 6, y: 18, type: "ground" },
      { x: 7, y: 18, type: "ground" },
      { x: 11, y: 18, type: "ground" },
      { x: 12, y: 18, type: "ground" },
      { x: 13, y: 18, type: "ground" },
      { x: 17, y: 18, type: "ground" },
      { x: 18, y: 18, type: "ground" },
      { x: 19, y: 18, type: "ground" },
      { x: 0, y: 19, type: "ground" },
      { x: 1, y: 19, type: "ground" },
      { x: 2, y: 19, type: "lava" },
      { x: 3, y: 19, type: "lava" },
      { x: 4, y: 19, type: "lava" },
      { x: 5, y: 19, type: "lava" },
      { x: 6, y: 19, type: "lava" },
      { x: 7, y: 19, type: "ground" },
      { x: 8, y: 19, type: "spike" },
      { x: 9, y: 19, type: "spike" },
      { x: 10, y: 19, type: "spike" },
      { x: 11, y: 19, type: "ground" },
      { x: 12, y: 19, type: "ground" },
      { x: 13, y: 19, type: "ground" },
      { x: 14, y: 19, type: "lava" },
      { x: 15, y: 19, type: "lava" },
      { x: 16, y: 19, type: "lava" },
      { x: 17, y: 19, type: "ground" },
      { x: 18, y: 19, type: "ground" },
      { x: 19, y: 19, type: "ground" }
    ]
  ];
}

// --- SETUP ---
function setup() {
  createCanvas(800, 800);
  defineLevels();
  player = new Player();
  loadLevel(currentLevel);
}

// --- MAIN LOOP ---
function draw() {
  background(135, 206, 235);

  player.update();
  player.display();

  let allCoinsCollected = true;

  for (let tile of tiles) {
    tile.display();
    tile.checkPlayerCollision(player);
    if (tile.type === "coin" && !tile.collected) {
      allCoinsCollected = false;
    }
  }

  drawHUD();

  if (allCoinsCollected && tiles.some(t => t.type === "coin")) {
    nextLevel();
  }
}

// --- LOAD LEVEL ---
function loadLevel(index) {
  tiles = [];
  let level = levels[index];
  for (let t of level) {
    tiles.push(new Tile(t.x * tileSize, t.y * tileSize, tileSize, tileSize, t.type));
  }
  player.reset();
}

// --- NEXT LEVEL ---
function nextLevel() {
  currentLevel++;
  if (currentLevel >= levels.length) {
    currentLevel = 0;
  }
  loadLevel(currentLevel);
}

// --- TILE CLASS ---
class Tile {
  constructor(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
    this.collected = false;
  }

  // 🆕 New helper method
  isSolid() {
    return this.type === "ground"
  }

  display() {
    if (this.type === "ground") {
      fill(139, 69, 19);
      rect(this.x, this.y, this.w, this.h);
    } else if (this.type === "lava") {
      fill(255, 0, 0);
      rect(this.x, this.y, this.w, this.h);
    } else if (this.type === "spike") {
      fill(200);
      triangle(this.x, this.y + this.h, this.x + this.w / 2, this.y, this.x + this.w, this.y + this.h);
    } else if (this.type === "coin" && !this.collected) {
      fill(255, 215, 0);
      ellipse(this.x + this.w / 2, this.y + this.h / 2, this.w * 0.6);
    }
  }

  checkPlayerCollision(player) {
    if (
      player.x < this.x + this.w &&
      player.x + player.w > this.x &&
      player.y < this.y + this.h &&
      player.y + player.h > this.y
    ) {
      if (this.type === "lava" || this.type === "spike") {
        player.reset();
      } else if (this.type === "coin" && !this.collected) {
        this.collected = true;
        player.coins++;
      }
    }
  }
}

// --- PLAYER CLASS ---
class Player {
  constructor() {
    this.w = 30;
    this.h = 30;
    this.coins = 0;
    this.reset();
  }

  reset() {
    this.x = 10;
    this.y = height -40;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.onGround = false;
  }

  update() {
    // 🆕 Movement control
    if (keyIsDown(LEFT_ARROW)) this.xSpeed = -5;
    else if (keyIsDown(RIGHT_ARROW)) this.xSpeed = 5;
    else this.xSpeed = 0;

    this.ySpeed += 0.5; // gravity

    this.x += this.xSpeed;
    this.resolveHorizontalCollision(); // 🆕 new method

    this.y += this.ySpeed;
    this.resolveVerticalCollision();   // 🆕 new method

    if (this.y > height) this.reset();
  }

  // 🆕 Handles collisions left and right
  resolveHorizontalCollision() {
    for (let tile of tiles) {
      if (!tile.isSolid()) continue;
      if (this.isColliding(tile)) {
        if (this.xSpeed > 0) {
          this.x = tile.x - this.w;
        } else if (this.xSpeed < 0) {
          this.x = tile.x + tile.w;
        }
        this.xSpeed = 0;
      }
    }
  }

  // 🆕 Handles collisions up and down
  resolveVerticalCollision() {
    this.onGround = false;
    for (let tile of tiles) {
      if (!tile.isSolid()) continue;
      if (this.isColliding(tile)) {
        if (this.ySpeed > 0) {
          this.y = tile.y - this.h;
          this.ySpeed = 0;
          this.onGround = true;
        } else if (this.ySpeed < 0) {
          this.y = tile.y + tile.h;
          this.ySpeed = 0;
        }
      }
    }
  }

  // 🆕 Helper method for bounding box collision
  isColliding(tile) {
    return (
      this.x < tile.x + tile.w &&
      this.x + this.w > tile.x &&
      this.y < tile.y + tile.h &&
      this.y + this.h > tile.y
    );
  }

  jump() {
    if (this.onGround) {
      this.ySpeed = -9.2;
    }
  }

  display() {
    fill(255, 100, 100);
    rect(this.x, this.y, this.w, this.h);
  }
}

// --- INPUT ---
function keyPressed() {
  if (key === ' ' || keyCode === UP_ARROW) {
    player.jump();
  }
}

// --- HUD ---
function drawHUD() {
  fill(0);
  textSize(16);
  text(`Level: ${currentLevel + 1}   Coins: ${player.coins}`, 10, 20);
}
