/* exported setup, draw */
let seed = 12345;

// allow shapes to go off page
const canvas_X = 850;
const canvas_Y = 450;
// shape size
const size_low = 100;
const size_high = 150;

// color palettes
const basic1 = ['orange', 'yellow', 'red'];
const basic2 = ['white', 'grey', 'black'];
const blues = ['#022f40', '#38AECC', '#0090C1', '#183446', '#046E8F'];
const pinks = ['#DEF6CA', '#F8BDC4', '#F497DA', '#F679E5', '#F65BE3']
const purples = ['#210B2C', '#55286F', '#BC96E6', '#D8B4E2', '#AE759F'];
const mix1 = ['#000000', '#FFFFFF', '#494949', '#7C7A7A', '#FF5D73'];
const mix2 = ['#AA1155', '#880044', '#DD1155', '#FFEE88', '#00CC99'];
const mix3 = ['#F3B700', '#F3B700', '#086788'];
let color_array = blues;

// background colors
const bk_color1 = 'black';
const bk_color2 = 'grey';
const bk_color3 = 'white';
let bk_color = bk_color1;

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(800, 400);
  createButton("Reroll").mousePressed(() => seed++);
  createButton("Palette: Blues").mousePressed(() => color_array = blues);
  createButton("Palette: Pinks").mousePressed(() => color_array = pinks);
  createButton("Palette: Purples").mousePressed(() => color_array = purples);
  createButton("Palette: Mix1").mousePressed(() => color_array = mix1);
  createButton("Palette: Mix2").mousePressed(() => color_array = mix2);
  createButton("Palette: Mix3").mousePressed(() => color_array = mix3);
  bk_button1 = createButton("Background: Black").mousePressed(() => bk_color = bk_color1);
  bk_button1.position(7, 450);
  bk_button2 = createButton("Background: Grey").mousePressed(() => bk_color = bk_color2);
  bk_button2.position(129, 450);
  bk_button1 = createButton("Background: White").mousePressed(() => bk_color = bk_color3);
  bk_button1.position(247, 450);
}

function draw() {
  randomSeed(seed);
  background(bk_color);
  noStroke();

  // draw shapes
  for (let i=0; i < 25; i++) {
    fill(random(color_array));
    draw_rect();
    fill(random(color_array));
    draw_tri();
    fill(random(color_array));
    draw_cir();    

    
    // translate(1, 1);
    // translate(p5.Vector.fromAngle(millis() / 1000, 5));

    // change scaling
    if (key === 'z') {
      scale(1.01);
    } else if (key === 'x') {
      scale(0.99);
    }
    else {
      scale(1);
    }
  }
    
  function draw_rect() {
    let x = random(canvas_X);
    let y = random(canvas_Y);
    let w = random(size_low, size_high);
    let h = random(size_low, size_high);
    rect(x, y, w, h);
  }  

  function draw_cir() {
    let x = random(canvas_X);
    let y = random(canvas_Y);
    let d = random(size_low, size_high);
    circle(x, y, d);
  }

  function draw_tri() {
    let x1 = random(canvas_X); 
    let y1 = random(canvas_Y);
    let x2 = random(x1 - size_high, x1 + size_high);
    let y2 = random(y1 - size_high, y1 + size_high);
    let x3 = random(x2 - size_high, x2 + size_high);
    let y3 = random(y2 - size_high, y2 + size_high);
    triangle(x1, y1, x2, y2, x3, y3);
  }  
}

