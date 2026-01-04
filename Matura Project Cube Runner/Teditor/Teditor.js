let tileSize = 32;
let cols = 20;
let rows = 20;
let grid = [];
let tileTypes = ["air", "ground", "coin", "lava", "spike"];
let currentTile = "ground";

function setup() {
  createCanvas(cols * tileSize, rows * tileSize + 60);
  for (let y = 0; y < rows; y++) {
    grid[y] = [];
    for (let x = 0; x < cols; x++) {
      grid[y][x] = "air";
    }
  }

  createP("Select Tile Type:");
  let sel = createSelect();
  sel.option("air");
  tileTypes.forEach(type => sel.option(type));
  sel.changed(() => currentTile = sel.value());

  let exportBtn = createButton("Export Level");
  exportBtn.mousePressed(exportLevel);
}

function draw() {
  background(30);

  // Draw grid
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let tile = grid[y][x];
      fill(getTileColor(tile));
      stroke(60);
      rect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }

  // Draw UI area
  fill(50);
  noStroke();
  rect(0, rows * tileSize, width, 60);
}

function mousePressed() {
  if (mouseY > rows * tileSize) return;

  let x = floor(mouseX / tileSize);
  let y = floor(mouseY / tileSize);

  if (mouseButton === LEFT) {
    grid[y][x] = currentTile;
  } else if (mouseButton === RIGHT || mouseButton === CENTER) {
    grid[y][x] = "air";
  }
}

function getTileColor(type) {
  switch (type) {
    case "air": return color(20, 20, 100);
    case "ground": return color(0);
    case "coin": return color(255, 255, 0);
    case "lava": return color(255, 0, 0);
    case "spike": return color(255);
    default: return color(100);
  }
}

function exportLevel() {
  let sparse = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let type = grid[y][x];
      if (type !== "air") {
        sparse.push({ x, y, type });
      }
    }
  }

  console.log("Exported level:\n", JSON.stringify(sparse, null, 2));
  navigator.clipboard.writeText(JSON.stringify(sparse, null, 2))
    .then(() => alert("Level copied to clipboard!"))
    .catch(() => alert("Copy failed. Check console."));
}
