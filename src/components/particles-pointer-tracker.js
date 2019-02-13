import * as dat from 'dat.gui';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let w = ctx.canvas.width = window.innerWidth;
let h = ctx.canvas.height = window.innerHeight;

window.onresize = () => {
  w = ctx.canvas.width = window.innerWidth;
  h = ctx.canvas.height = window.innerHeight;
};

let dots = [];
let cX = w/2;
let cY = h/2;
let particleCount = 1000;
let radius = 3;
let trail = 1;
let hueStart = 200;
let hueRange = 40;
let lerpMax = 0.95;
let lerpMin = 0.5;
let rotation = 10;
let select = {shape: 2};

const controls = new function() {
  this.particleCount = particleCount;
  this.radius = radius;
  this.trail = trail;
  this.hueStart = hueStart;
  this.hueRange = hueRange;
  this.lerpMin = lerpMin;
  this.lerpMax = lerpMax;
  this.rotation = rotation;

  this.redraw = function() {
    particleCount = controls.particleCount;
    radius = controls.radius;
    trail = controls.trail;
    hueStart = controls.hueStart;
    hueRange = controls.hueRange;
    lerpMin = controls.lerpMin;
    lerpMax = controls.lerpMax;
    rotation = controls.rotation;
    // let shape = Object.values(select)[0];

    dots = [];
    emit();
  }
}();

const gui = new dat.GUI({ resizable : false });

gui.add(controls, "particleCount", 10, 3000).step(10).onChange(controls.redraw);
gui.add(controls, "radius", 1, 10).onChange(controls.redraw);
gui.add(controls, "rotation", 1, 30).step(1).onChange(controls.redraw);
gui.add(controls, "lerpMin", 0.5, 0.9).onChange(controls.redraw);
gui.add(controls, "lerpMax", 0.9, 0.99).onChange(controls.redraw);
gui.add(controls, "hueStart", 0, 360).step(1).onChange(controls.redraw);
gui.add(controls, "hueRange", 0, 50).step(1).onChange(controls.redraw);
gui.add(controls, "trail", 0.02, 1).onChange(controls.redraw);

gui.add(select, 'shape', {
  circle: 0,
  infinity: 1,
  bouncy_triangle: 2,
  vortex: 3
}).onChange(controls.redraw);


function emit(){
  for(var i=0; i<particleCount; i++){
    dots.push({
      x: 0,
      y: 0,
      h: Math.random()*((hueStart+hueRange)-(hueStart-hueRange))+(hueStart-hueRange),
      a: (i+1)*(360/particleCount),
      n: Math.random()*(lerpMax-lerpMin)+lerpMin
    });
  }
}

function draw(){
  ctx.fillStyle = "rgba(0,0,0,"+trail+")";
  ctx.rect(0,0,w,h);
  ctx.fill();
  for(var i=0; i<dots.length; i++){
    let lerpX = lerp(cX, dots[i].x, dots[i].n);
    let lerpY = lerp(cY, dots[i].y, dots[i].n);
    ctx.beginPath();
    ctx.fillStyle = "hsla("+(dots[i].h)+", 100%, 50%, 1)";
    ctx.arc(dots[i].x, dots[i].y, radius*(dots[i].n*dots[i].n), 0, Math.PI*2);
    //ctx.rect(dots[i].x, dots[i].y, radius, radius);
    ctx.fill();
    ctx.closePath();
    dots[i].a += rotation%360;
    if(Object.values(select)[0] === 0){
      dots[i].x = rotate(dots[i].x, dots[i].y, lerpX, lerpY, dots[i].a).x;
      dots[i].y = rotate(dots[i].x, dots[i].y, lerp(cX, dots[i].x, dots[i].n), lerpY, dots[i].a).y;
    } else if(Object.values(select)[0] === 1){
      dots[i].x = rotate(dots[i].x, dots[i].y, lerpX, lerpY, dots[i].a).x;
      dots[i].y = rotate(dots[i].x, dots[i].y, lerpX, lerpY, dots[i].a).y;
    } else if(Object.values(select)[0] === 2){
      dots[i].x = rotate(dots[i].x, dots[i].y, lerp(cX, dots[i].x, Math.sin(dots[i].n)), lerp(cY, dots[i].y, Math.tan(dots[i].n)), dots[i].a).x;
      dots[i].y = rotate(dots[i].x, dots[i].y, lerp(cX, dots[i].x, Math.sin(dots[i].n)), lerp(cY, dots[i].y, Math.sin(dots[i].n)), dots[i].a).y;
    } else if(Object.values(select)[0] === 3){
      dots[i].x = rotate(dots[i].x, dots[i].y, lerp(cX, dots[i].x, Math.tan(dots[i].n)), lerp(cY, dots[i].y, Math.tan(dots[i].n)), dots[i].a).x;
      dots[i].y = rotate(dots[i].x, dots[i].y, lerp(cX, dots[i].x, Math.asin(dots[i].n)), lerp(cY, dots[i].y, Math.asin(dots[i].n)), dots[i].a).y;
    }
  }
  requestAnimationFrame(draw);
}

function rotate(pointX, pointY, originX, originY, angle) {
  angle = angle * Math.PI / 180.0;
  return {
    x: Math.cos(angle) * (pointX-originX) - Math.sin(angle) * (pointY-originY) + originX,
    y: Math.sin(angle) * (pointX-originX) + Math.cos(angle) * (pointY-originY) + originY
  };
}

function lerp(p1, p2, n){
  return (1 - n) * p1 + n * p2;
}

document.onmousemove = function(e){
  cX = e.pageX;
  cY = e.pageY;
}

document.ontouchmove = function(e){
  cX = e.touches[0].pageX;
  cY = e.touches[0].pageY;
}

emit();
draw();

function prev(){
  cX += 20;
}

setTimeout(function(){ clearTimeout(setInterval(prev, 17));}, 700);