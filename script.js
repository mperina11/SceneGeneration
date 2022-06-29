/* exported setup, draw */
let seed = 12345;

// allow shapes to go off page
const canvas_X = 850;
const canvas_Y = 450;
// shape size
const size_low = 75;
const size_high = 150;

const color_array = ['orange', 'yellow', 'green', 'blue', 'pruple', 'pink', 'red'];

const sunColor = [254,254,254,80]; // with opacity

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(800, 400);
  createButton("reroll").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  background('black');

  noStroke();

  // draw
  for (let i=0; i < 25; i++) {
    fill(random(color_array));
    draw_rect();
    fill(random(color_array));
    draw_tri();
    fill(random(color_array));
    draw_cir();
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


  // -----------------------------
  // fill(skyColor);
  // rect(0, 0, width, height / 2);

  // // An example of making something respond to the mouse
  // fill(...sunColor);
  // ellipse(mouseX,0,30,30);
  // ellipse(mouseX,0,50,50);
  // ellipse(mouseX,0,100,100);
  // ellipse(mouseX,0,200,200);

  // fill(grassColor);
  // rect(0, height / 2, width, height / 2);

  // // An example of drawing an irregular polygon
  // fill(hillColor);
  // beginShape();
  // vertex(0, height / 2);
  // const steps = 10;
  // for (let i = 0; i < steps + 1; i++) {
  //   let x = (width * i) / steps;
  //   let y =
  //     height / 2 - (random() * random() * random() * height) / 8 - height / 50;
  //   vertex(x, y);
  // }
  // vertex(width, height / 2);
  // endShape(CLOSE);

  // const trees = 5*random();
  // for (let i = 0; i < trees; i++) {
  //   drawLtree();
  // }

  // // An example of recursively drawing an L-tree 
  // function drawLtree() {
  //   let x = width * random();
  //   let y = height/2 + height/8 * random();
  //   let s = width/200 + (y - height/2)/2;
  //   let jitter = (mouseX - width/2) / width * 2 * Math.PI / 180;
  //   drawLtreeBranch(x, y, s, (-90 * Math.PI / 180) + jitter, 0, 5); // this angle points north (0 is east)
  // }  

  // function drawLtreeBranch(x, y, s, angle, max_limit, branch_weight) { // s is length of a segment
  //   stroke(treeColor);
  //   strokeWeight(branch_weight);
  //   let v = p5.Vector.fromAngle(angle, s);
  //   let vx = v.x;
  //   let vy = v.y; 
  //   let x1 = x;
  //   let y1 = y; 
  //   let x2 = x1 + vx;
  //   let y2 = y1 + vy;
  //   line(x1, y1, x2, y2);

  //   let new_s = s * 0.7;
  //   let new_max = max_limit + random();
  //   let new_branch_weight = branch_weight - 1;
  //   new_branch_weight = max(new_branch_weight, 1);

  //   if (max_limit < 3) {
  //       if (random() < 1/3) {
  //           drawLtreeBranch(x2, y2, new_s, (-35 * Math.PI / 180) + angle, new_max, new_branch_weight);
  //       } else if (random() > 1/3) {
  //           drawLtreeBranch(x2, y2, new_s, (35 * Math.PI / 180) + angle, new_max, new_branch_weight);
  //       } else {
  //           drawLtreeBranch(x2, y2, new_s, (-35 * Math.PI / 180) + angle, new_max, new_branch_weight);
  //           drawLtreeBranch(x2, y2, new_s, (35 * Math.PI / 180) + angle, new_max, new_branch_weight);
  //       }
  //       drawLtreeBranch(x2, y2, new_s, angle, new_max, new_branch_weight);
  //   }
  //   else {
  //       if (random() < 1/3) {
  //           drawLeave(x2, y2, new_s, (-35 * Math.PI / 180) + angle);
  //       } else if (random() > 1/3) {
  //           drawLeave(x2, y2, new_s, (35 * Math.PI / 180) + angle);
  //       } else {
  //           drawLeave(x2, y2, new_s, (-35 * Math.PI / 180) + angle);
  //           drawLeave(x2, y2, new_s, (35 * Math.PI / 180) + angle);
  //       }
  //   }

  // }

  // function drawLeave(x, y, s, angle) {
  //   fill(leaveColor);
  //   noStroke();
  //   let v = p5.Vector.fromAngle(angle, s);
  //   let vx = v.x;
  //   let vy = v.y; 
  //   let x1 = x;
  //   let y1 = y; 
  //   let x2 = x1 + vx;
  //   let y2 = y1 + vy;
  //   line(x1, y1, x2, y2);
  //   circle(x2, y2, 3);

  // }
}

