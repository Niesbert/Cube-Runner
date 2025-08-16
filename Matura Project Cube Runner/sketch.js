const tileSize = 40;
let levels = {};      // FIX: object, not array
let tiles = [];       // current level tiles
let currentLevel = 1; // FIX: 1-based because levels = { 1: [...], 2: [...] }
let player;

// --- DEFINE LEVELS ---
function defineLevels() {
  levels = {
    1: [
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
    ],
    2: [
      { "x": 0, "y": 0, "type": "coin" },
      { "x": 8, "y": 0, "type": "coin" },
      { "x": 19, "y": 0, "type": "coin" },
      { "x": 2, "y": 1, "type": "ground" },
      { "x": 3, "y": 1, "type": "ground" },
      { "x": 4, "y": 1, "type": "ground" },
      { "x": 5, "y": 1, "type": "ground" },
      { "x": 6, "y": 1, "type": "ground" },
      { "x": 7, "y": 1, "type": "ground" },
      { "x": 8, "y": 1, "type": "ground" },
      { "x": 9, "y": 1, "type": "ground" },
      { "x": 10, "y": 1, "type": "ground" },
      { "x": 11, "y": 1, "type": "ground" },
      { "x": 12, "y": 1, "type": "ground" },
      { "x": 13, "y": 1, "type": "ground" },
      { "x": 14, "y": 1, "type": "ground" },
      { "x": 15, "y": 1, "type": "ground" },
      { "x": 16, "y": 1, "type": "ground" },
      { "x": 17, "y": 1, "type": "ground" },
      { "x": 18, "y": 1, "type": "ground" },
      { "x": 19, "y": 1, "type": "ground" },
      { "x": 2, "y": 2, "type": "ground" },
      { "x": 3, "y": 2, "type": "empty" },
      { "x": 4, "y": 2, "type": "empty" },
      { "x": 5, "y": 2, "type": "empty" },
      { "x": 16, "y": 2, "type": "spike" },
      { "x": 19, "y": 2, "type": "spike" },
      { "x": 0, "y": 3, "type": "ground" },
      { "x": 0, "y": 4, "type": "ground" },
      { "x": 1, "y": 4, "type": "coin" },
      { "x": 8, "y": 4, "type": "coin" },
      { "x": 14, "y": 4, "type": "coin" },
      { "x": 0, "y": 5, "type": "ground" },
      { "x": 1, "y": 5, "type": "ground" },
      { "x": 2, "y": 5, "type": "ground" },
      { "x": 7, "y": 5, "type": "ground" },
      { "x": 8, "y": 5, "type": "ground" },
      { "x": 9, "y": 5, "type": "empty" },
      { "x": 10, "y": 5, "type": "spike" },
      { "x": 11, "y": 5, "type": "spike" },
      { "x": 13, "y": 5, "type": "ground" },
      { "x": 14, "y": 5, "type": "ground" },
      { "x": 15, "y": 5, "type": "ground" },
      { "x": 16, "y": 5, "type": "ground" },
      { "x": 4, "y": 6, "type": "spike" },
      { "x": 5, "y": 6, "type": "spike" },
      { "x": 19, "y": 6, "type": "ground" },
      { "x": 19, "y": 7, "type": "ground" },
      { "x": 1, "y": 8, "type": "spike" },
      { "x": 9, "y": 8, "type": "empty" },
      { "x": 14, "y": 8, "type": "ground" },
      { "x": 15, "y": 8, "type": "ground" },
      { "x": 16, "y": 8, "type": "ground" },
      { "x": 17, "y": 8, "type": "ground" },
      { "x": 18, "y": 8, "type": "lava" },
      { "x": 19, "y": 8, "type": "lava" },
      { "x": 9, "y": 9, "type": "spike" },
      { "x": 11, "y": 9, "type": "coin" },
      { "x": 14, "y": 9, "type": "ground" },
      { "x": 15, "y": 9, "type": "ground" },
      { "x": 16, "y": 9, "type": "ground" },
      { "x": 17, "y": 9, "type": "ground" },
      { "x": 18, "y": 9, "type": "ground" },
      { "x": 19, "y": 9, "type": "ground" },
      { "x": 6, "y": 10, "type": "spike" },
      { "x": 8, "y": 10, "type": "ground" },
      { "x": 9, "y": 10, "type": "ground" },
      { "x": 10, "y": 10, "type": "ground" },
      { "x": 11, "y": 10, "type": "ground" },
      { "x": 12, "y": 10, "type": "ground" },
      { "x": 13, "y": 10, "type": "ground" },
      { "x": 14, "y": 10, "type": "ground" },
      { "x": 3, "y": 11, "type": "spike" },
      { "x": 4, "y": 11, "type": "coin" },
      { "x": 5, "y": 11, "type": "ground" },
      { "x": 6, "y": 11, "type": "ground" },
      { "x": 7, "y": 11, "type": "ground" },
      { "x": 18, "y": 11, "type": "coin" },
      { "x": 0, "y": 12, "type": "coin" },
      { "x": 2, "y": 12, "type": "ground" },
      { "x": 3, "y": 12, "type": "ground" },
      { "x": 4, "y": 12, "type": "ground" },
      { "x": 18, "y": 12, "type": "ground" },
      { "x": 0, "y": 13, "type": "ground" },
      { "x": 8, "y": 13, "type": "coin" },
      { "x": 15, "y": 13, "type": "coin" },
      { "x": 17, "y": 13, "type": "ground" },
      { "x": 8, "y": 14, "type": "ground" },
      { "x": 9, "y": 14, "type": "ground" },
      { "x": 10, "y": 14, "type": "ground" },
      { "x": 11, "y": 14, "type": "spike" },
      { "x": 12, "y": 14, "type": "spike" },
      { "x": 13, "y": 14, "type": "spike" },
      { "x": 14, "y": 14, "type": "spike" },
      { "x": 15, "y": 14, "type": "ground" },
      { "x": 16, "y": 14, "type": "ground" },
      { "x": 17, "y": 14, "type": "ground" },
      { "x": 19, "y": 14, "type": "ground" },
      { "x": 0, "y": 15, "type": "ground" },
      { "x": 1, "y": 15, "type": "ground" },
      { "x": 2, "y": 15, "type": "ground" },
      { "x": 3, "y": 15, "type": "ground" },
      { "x": 4, "y": 15, "type": "ground" },
      { "x": 5, "y": 15, "type": "ground" },
      { "x": 6, "y": 15, "type": "spike" },
      { "x": 7, "y": 15, "type": "spike" },
      { "x": 0, "y": 16, "type": "ground" },
      { "x": 1, "y": 16, "type": "ground" },
      { "x": 2, "y": 16, "type": "ground" },
      { "x": 13, "y": 16, "type": "coin" },
      { "x": 18, "y": 16, "type": "ground" },
      { "x": 9, "y": 17, "type": "coin" },
      { "x": 11, "y": 17, "type": "ground" },
      { "x": 12, "y": 17, "type": "ground" },
      { "x": 13, "y": 17, "type": "ground" },
      { "x": 14, "y": 17, "type": "ground" },
      { "x": 3, "y": 18, "type": "coin" },
      { "x": 8, "y": 18, "type": "ground" },
      { "x": 9, "y": 18, "type": "ground" },
      { "x": 10, "y": 18, "type": "ground" },
      { "x": 11, "y": 18, "type": "coin" },
      { "x": 16, "y": 18, "type": "spike" },
      { "x": 18, "y": 18, "type": "ground" },
      { "x": 19, "y": 18, "type": "ground" },
      { "x": 0, "y": 19, "type": "ground" },
      { "x": 1, "y": 19, "type": "ground" },
      { "x": 2, "y": 19, "type": "ground" },
      { "x": 3, "y": 19, "type": "ground" },
      { "x": 4, "y": 19, "type": "lava" },
      { "x": 5, "y": 19, "type": "lava" },
      { "x": 6, "y": 19, "type": "lava" },
      { "x": 7, "y": 19, "type": "lava" },
      { "x": 8, "y": 19, "type": "ground" },
      { "x": 9, "y": 19, "type": "ground" },
      { "x": 10, "y": 19, "type": "ground" },
      { "x": 11, "y": 19, "type": "ground" },
      { "x": 12, "y": 19, "type": "ground" },
      { "x": 13, "y": 19, "type": "ground" },
      { "x": 14, "y": 19, "type": "ground" },
      { "x": 15, "y": 19, "type": "ground" },
      { "x": 16, "y": 19, "type": "ground" },
      { "x": 17, "y": 19, "type": "ground" },
      { "x": 18, "y": 19, "type": "ground" },
    ],
    3: [
  {
    "x": 0,
    "y": 0,
    "type": "coin"
  },
  {
    "x": 6,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 7,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 11,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 17,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 0,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 1,
    "type": "coin"
  },
  {
    "x": 15,
    "y": 1,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 1,
    "type": "ground"
  },
  {
    "x": 17,
    "y": 1,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 1,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 1,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 2,
    "type": "coin"
  },
  {
    "x": 0,
    "y": 3,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 3,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 3,
    "type": "coin"
  },
  {
    "x": 16,
    "y": 3,
    "type": "coin"
  },
  {
    "x": 0,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 2,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 3,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 4,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 5,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 6,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 7,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 8,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 4,
    "type": "spike"
  },
  {
    "x": 11,
    "y": 4,
    "type": "spike"
  },
  {
    "x": 12,
    "y": 4,
    "type": "spike"
  },
  {
    "x": 13,
    "y": 4,
    "type": "spike"
  },
  {
    "x": 14,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 17,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 2,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 7,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 11,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 17,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 11,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 7,
    "type": "coin"
  },
  {
    "x": 14,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 7,
    "type": "coin"
  },
  {
    "x": 17,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 8,
    "type": "coin"
  },
  {
    "x": 5,
    "y": 8,
    "type": "spike"
  },
  {
    "x": 8,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 8,
    "type": "coin"
  },
  {
    "x": 11,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 17,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 17,
    "y": 9,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 10,
    "type": "coin"
  },
  {
    "x": 6,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 11,
    "type": "coin"
  },
  {
    "x": 9,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 11,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 11,
    "type": "coin"
  },
  {
    "x": 4,
    "y": 12,
    "type": "coin"
  },
  {
    "x": 6,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 7,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 11,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 13,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 13,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 13,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 13,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 13,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 14,
    "type": "coin"
  },
  {
    "x": 4,
    "y": 14,
    "type": "ground"
  },
  {
    "x": 7,
    "y": 14,
    "type": "coin"
  },
  {
    "x": 8,
    "y": 14,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 14,
    "type": "spike"
  },
  {
    "x": 13,
    "y": 14,
    "type": "coin"
  },
  {
    "x": 15,
    "y": 14,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 14,
    "type": "lava"
  },
  {
    "x": 17,
    "y": 14,
    "type": "lava"
  },
  {
    "x": 18,
    "y": 14,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 15,
    "type": "spike"
  },
  {
    "x": 6,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 7,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 15,
    "type": "spike"
  },
  {
    "x": 11,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 15,
    "type": "lava"
  },
  {
    "x": 17,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 15,
    "type": "coin"
  },
  {
    "x": 3,
    "y": 16,
    "type": "coin"
  },
  {
    "x": 4,
    "y": 16,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 16,
    "type": "coin"
  },
  {
    "x": 11,
    "y": 16,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 16,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 16,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 16,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 7,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 11,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 18,
    "type": "spike"
  },
  {
    "x": 8,
    "y": 18,
    "type": "coin"
  },
  {
    "x": 9,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 18,
    "type": "coin"
  },
  {
    "x": 17,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 2,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 3,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 7,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 9,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 19,
    "type": "spike"
  },
  {
    "x": 11,
    "y": 19,
    "type": "spike"
  },
  {
    "x": 12,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 17,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 19,
    "type": "ground"
  }
    ],
    4: [
  {
    "x": 0,
    "y": 0,
    "type": "spike"
  },
  {
    "x": 19,
    "y": 0,
    "type": "coin"
  },
  {
    "x": 0,
    "y": 1,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 1,
    "type": "coin"
  },
  {
    "x": 3,
    "y": 1,
    "type": "undefined"
  },
  {
    "x": 7,
    "y": 1,
    "type": "coin"
  },
  {
    "x": 8,
    "y": 1,
    "type": "lava"
  },
  {
    "x": 19,
    "y": 1,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 2,
    "type": "undefined"
  },
  {
    "x": 4,
    "y": 2,
    "type": "undefined"
  },
  {
    "x": 5,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 2,
    "type": "spike"
  },
  {
    "x": 7,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 2,
    "type": "undefined"
  },
  {
    "x": 9,
    "y": 2,
    "type": "lava"
  },
  {
    "x": 12,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 2,
    "type": "spike"
  },
  {
    "x": 17,
    "y": 2,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 2,
    "type": "spike"
  },
  {
    "x": 1,
    "y": 3,
    "type": "ground"
  },
  {
    "x": 2,
    "y": 3,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 3,
    "type": "undefined"
  },
  {
    "x": 5,
    "y": 3,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 3,
    "type": "undefined"
  },
  {
    "x": 7,
    "y": 3,
    "type": "undefined"
  },
  {
    "x": 8,
    "y": 3,
    "type": "undefined"
  },
  {
    "x": 10,
    "y": 3,
    "type": "undefined"
  },
  {
    "x": 11,
    "y": 3,
    "type": "undefined"
  },
  {
    "x": 13,
    "y": 3,
    "type": "lava"
  },
  {
    "x": 14,
    "y": 3,
    "type": "lava"
  },
  {
    "x": 16,
    "y": 3,
    "type": "ground"
  },
  {
    "x": 2,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 4,
    "type": "undefined"
  },
  {
    "x": 4,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 4,
    "type": "undefined"
  },
  {
    "x": 7,
    "y": 4,
    "type": "undefined"
  },
  {
    "x": 8,
    "y": 4,
    "type": "undefined"
  },
  {
    "x": 10,
    "y": 4,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 13,
    "y": 4,
    "type": "lava"
  },
  {
    "x": 17,
    "y": 4,
    "type": "undefined"
  },
  {
    "x": 18,
    "y": 4,
    "type": "undefined"
  },
  {
    "x": 19,
    "y": 4,
    "type": "undefined"
  },
  {
    "x": 2,
    "y": 5,
    "type": "undefined"
  },
  {
    "x": 3,
    "y": 5,
    "type": "coin"
  },
  {
    "x": 4,
    "y": 5,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 5,
    "type": "undefined"
  },
  {
    "x": 6,
    "y": 5,
    "type": "undefined"
  },
  {
    "x": 7,
    "y": 5,
    "type": "undefined"
  },
  {
    "x": 8,
    "y": 5,
    "type": "undefined"
  },
  {
    "x": 11,
    "y": 5,
    "type": "undefined"
  },
  {
    "x": 12,
    "y": 5,
    "type": "lava"
  },
  {
    "x": 18,
    "y": 5,
    "type": "undefined"
  },
  {
    "x": 0,
    "y": 6,
    "type": "undefined"
  },
  {
    "x": 2,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 3,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 6,
    "type": "undefined"
  },
  {
    "x": 8,
    "y": 6,
    "type": "undefined"
  },
  {
    "x": 9,
    "y": 6,
    "type": "undefined"
  },
  {
    "x": 11,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 6,
    "type": "undefined"
  },
  {
    "x": 16,
    "y": 6,
    "type": "spike"
  },
  {
    "x": 18,
    "y": 6,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 7,
    "type": "coin"
  },
  {
    "x": 8,
    "y": 7,
    "type": "undefined"
  },
  {
    "x": 9,
    "y": 7,
    "type": "undefined"
  },
  {
    "x": 10,
    "y": 7,
    "type": "undefined"
  },
  {
    "x": 11,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 7,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 7,
    "type": "coin"
  },
  {
    "x": 0,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 8,
    "type": "spike"
  },
  {
    "x": 7,
    "y": 8,
    "type": "spike"
  },
  {
    "x": 8,
    "y": 8,
    "type": "spike"
  },
  {
    "x": 9,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 10,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 11,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 8,
    "type": "ground"
  },
  {
    "x": 2,
    "y": 9,
    "type": "undefined"
  },
  {
    "x": 5,
    "y": 9,
    "type": "undefined"
  },
  {
    "x": 6,
    "y": 9,
    "type": "undefined"
  },
  {
    "x": 7,
    "y": 9,
    "type": "undefined"
  },
  {
    "x": 8,
    "y": 9,
    "type": "undefined"
  },
  {
    "x": 11,
    "y": 9,
    "type": "coin"
  },
  {
    "x": 16,
    "y": 9,
    "type": "undefined"
  },
  {
    "x": 1,
    "y": 10,
    "type": "coin"
  },
  {
    "x": 2,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 10,
    "type": "undefined"
  },
  {
    "x": 6,
    "y": 10,
    "type": "undefined"
  },
  {
    "x": 10,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 11,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 10,
    "type": "spike"
  },
  {
    "x": 13,
    "y": 10,
    "type": "spike"
  },
  {
    "x": 14,
    "y": 10,
    "type": "coin"
  },
  {
    "x": 15,
    "y": 10,
    "type": "undefined"
  },
  {
    "x": 16,
    "y": 10,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 10,
    "type": "coin"
  },
  {
    "x": 1,
    "y": 11,
    "type": "ground"
  },
  
  {
    "x": 9,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 13,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 11,
    "type": "lava"
  },
  {
    "x": 16,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 11,
    "type": "undefined"
  },
  {
    "x": 19,
    "y": 11,
    "type": "ground"
  },
  {
    "x": 8,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 12,
    "type": "spike"
  },
  {
    "x": 18,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 12,
    "type": "ground"
  },
  {
    "x": 0,
    "y": 13,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 13,
    "type": "coin"
  },
  {
    "x": 5,
    "y": 13,
    "type": "ground"
  },
  {
    "x": 6,
    "y": 13,
    "type": "ground"
  },
  {
    "x": 7,
    "y": 13,
    "type": "spike"
  },
  {
    "x": 16,
    "y": 13,
    "type": "spike"
  },
  {
    "x": 17,
    "y": 13,
    "type": "coin"
  },
  {
    "x": 0,
    "y": 14,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 14,
    "type": "ground"
  },
  {
    "x": 17,
    "y": 14,
    "type": "ground"
  },
  {
    "x": 18,
    "y": 14,
    "type": "undefined"
  },
  {
    "x": 7,
    "y": 15,
    "type": "coin"
  },
  {
    "x": 18,
    "y": 15,
    "type": "ground"
  },
  {
    "x": 5,
    "y": 16,
    "type": "undefined"
  },
  {
    "x": 6,
    "y": 16,
    "type": "spike"
  },
  {
    "x": 7,
    "y": 16,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 16,
    "type": "undefined"
  },
  {
    "x": 3,
    "y": 17,
    "type": "undefined"
  },
  {
    "x": 4,
    "y": 17,
    "type": "spike"
  },
  {
    "x": 5,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 14,
    "y": 17,
    "type": "undefined"
  },
  {
    "x": 15,
    "y": 17,
    "type": "undefined"
  },
  {
    "x": 16,
    "y": 17,
    "type": "undefined"
  },
  {
    "x": 18,
    "y": 17,
    "type": "undefined"
  },
  {
    "x": 19,
    "y": 17,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 18,
    "type": "coin"
  },
  {
    "x": 2,
    "y": 18,
    "type": "spike"
  },
  {
    "x": 3,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 4,
    "y": 18,
    "type": "undefined"
  },
  {
    "x": 11,
    "y": 18,
    "type": "coin"
  },
  {
    "x": 14,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 15,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 16,
    "y": 18,
    "type": "lava"
  },
  {
    "x": 17,
    "y": 18,
    "type": "lava"
  },
  {
    "x": 18,
    "y": 18,
    "type": "ground"
  },
  {
    "x": 19,
    "y": 18,
    "type": "lava"
  },
  {
    "x": 0,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 1,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 2,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 3,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 4,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 5,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 6,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 7,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 8,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 9,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 10,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 11,
    "y": 19,
    "type": "ground"
  },
  {
    "x": 12,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 13,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 14,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 15,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 16,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 17,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 18,
    "y": 19,
    "type": "lava"
  },
  {
    "x": 19,
    "y": 19,
    "type": "lava"
  }
    ]
  };
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
function loadLevel(levelNum) {
  // FIX: rebuild tiles from the selected level in the object
  tiles = [];
  const levelData = levels[levelNum];
  if (!levelData) {
    console.warn("No level found for key:", levelNum);
    return;
  }
  for (let t of levelData) {
    tiles.push(new Tile(t.x * tileSize, t.y * tileSize, tileSize, tileSize, t.type));
  }
  player.reset();
}

// --- NEXT LEVEL ---
function nextLevel() {
  // FIX: rotate through object keys instead of using levels.length
  const keys = Object.keys(levels).map(Number).sort((a, b) => a - b);
  const idx = keys.indexOf(currentLevel);
  const nextIdx = (idx + 1) % keys.length;
  currentLevel = keys[nextIdx];
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

    // --- keep player inside screen boundaries ---
    if (this.x < 0) {
      this.x = 0;
      this.xSpeed = 0;
    }
    if (this.x + this.w > width) {
      this.x = width - this.w;
      this.xSpeed = 0;
    }
    if (this.y + this.h > height) {
      this.y = height - this.h;
      this.ySpeed = 0;
      this.onGround = true;
    }
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
  text(`Level: ${currentLevel}   Coins: ${player.coins}`, 10, 20);
}
