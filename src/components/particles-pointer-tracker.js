import * as dat from 'dat.gui';

class particlesTracker {
  dots = [];
  particleCount = 100;
  radius = 3;
  trail = 1;
  hueStart = 200;
  hueRange = 40;
  lerpMax = 0.95;
  lerpMin = 0.5;
  rotation = 10;
  shape = { shape: 2 };

  controlsSettings = [
    { attr: 'particleCount', min: 10, max: 3000, step: 10 },
    { attr: 'rotation', min: 1, max: 30, step: 1 },
    { attr: 'hueStart', min: 0, max: 360, step: 1 },
    { attr: 'hueRange', min: 0, max: 50, step: 1 },
    { attr: 'radius', min: 1, max: 10 },
    { attr: 'lerpMin', min: 0.5, max: 0.9 },
    { attr: 'lerpMax', min: 0.9, max: 0.99 },
    { attr: 'trail', min: 0.02, max: 1 },
    {
      type: 'select',
      attribute: 'shape',
      values: {
        circle: 0,
        infinity: 1,
        bouncy_triangle: 2,
        vortex: 3
      }
    }
  ];

  constructor(height, width) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.w = this.ctx.canvas.width = window.innerWidth;
    this.h = this.ctx.canvas.height = window.innerHeight;
    this.cX = this.w/2;
    this.cY = this.h/2;
  }

  init() {
    this.initializeEvents();
    this.emit();
    this.draw();
  }

  initializeEvents() {
    window.onresize = () => { this.onResize(); };
    document.onmousemove = (event) => { this.onMouseOver(event) };
    document.ontouchmove = (event) => { this.onTouchMove(event) };

    setTimeout(() => {
      clearTimeout(setInterval( this.prev, 17));
    }, 700);
  }

  onResize() {
    this.w = this.ctx.canvas.width = window.innerWidth;
    this.h = this.ctx.canvas.height = window.innerHeight;
  }

  onMouseOver(event) {
    this.cX = event.pageX;
    this.cY = event.pageY;
  }

  onTouchMove(event) {
    this.cX = event.touches[0].pageX;
    this.cY = event.touches[0].pageY;
  }

  change(attribute, data) {
    if (!data) {
      return;
    }

    if (attribute === 'shape') {
      this.shape.shape = parseInt(data);
    } else {
      this[attribute] = data;
    }

    this.dots = [];
    this.emit();
  }

  emit() {
    for (let i=0; i < this.particleCount; i++) {
      this.dots.push({
        x: 0,
        y: 0,
        h: Math.random()*((this.hueStart+this.hueRange)-(this.hueStart-this.hueRange))+(this.hueStart-this.hueRange),
        a: (i+1)*(360/this.particleCount),
        n: Math.random()*(this.lerpMax-this.lerpMin)+this.lerpMin
      });
    }
  }

  draw() {
    this.ctx.fillStyle = "rgba(0,0,0," + this.trail + ")";
    this.ctx.rect(0,0, this.w, this.h);
    this.ctx.fill();
    let dots = this.dots;
    let radius = this.radius;
    let cX = this.cX;
    let cY = this.cY;

    for (let i=0; i < dots.length; i++) {
      let lerpX = this.lerp(cX, dots[i].x, dots[i].n);
      let lerpY = this.lerp(cY, dots[i].y, dots[i].n);

      this.ctx.beginPath();
      this.ctx.fillStyle = "hsla("+(dots[i].h)+", 100%, 50%, 1)";
      this.ctx.arc(dots[i].x, dots[i].y, radius * (dots[i].n * dots[i].n), 0, Math.PI*2);
      this.ctx.fill();
      this.ctx.closePath();

      dots[i].a += this.rotation % 360;

      if (this.shape.shape === 0) {
        dots[i].x = this.rotate(dots[i].x, dots[i].y, lerpX, lerpY, dots[i].a).x;
        dots[i].y = this.rotate(dots[i].x, dots[i].y, this.lerp(cX, dots[i].x, dots[i].n), lerpY, dots[i].a).y;
      } else if (this.shape.shape === 1){
        dots[i].x = this.rotate(dots[i].x, dots[i].y, lerpX, lerpY, dots[i].a).x;
        dots[i].y = this.rotate(dots[i].x, dots[i].y, lerpX, lerpY, dots[i].a).y;
      } else if (this.shape.shape === 2){
        dots[i].x = this.rotate(dots[i].x, dots[i].y, this.lerp(cX, dots[i].x, Math.sin(dots[i].n)), this.lerp(cY, dots[i].y, Math.tan(dots[i].n)), dots[i].a).x;
        dots[i].y = this.rotate(dots[i].x, dots[i].y, this.lerp(cX, dots[i].x, Math.sin(dots[i].n)), this.lerp(cY, dots[i].y, Math.sin(dots[i].n)), dots[i].a).y;
      } else if (this.shape.shape === 3){
        dots[i].x = this.rotate(dots[i].x, dots[i].y, this.lerp(cX, dots[i].x, Math.tan(dots[i].n)), this.lerp(cY, dots[i].y, Math.tan(dots[i].n)), dots[i].a).x;
        dots[i].y = this.rotate(dots[i].x, dots[i].y, this.lerp(cX, dots[i].x, Math.asin(dots[i].n)), this.lerp(cY, dots[i].y, Math.asin(dots[i].n)), dots[i].a).y;
      }
    }

    setTimeout(() => {
      requestAnimationFrame(() => { this.draw(); });
    }, 0);
  }

  rotate(pointX, pointY, originX, originY, angle) {
    const newAngle = angle * Math.PI / 180.0;
    return {
      x: Math.cos(newAngle) * (pointX - originX) - Math.sin(newAngle) * (pointY - originY) + originX,
      y: Math.sin(newAngle) * (pointX - originX) + Math.cos(newAngle) * (pointY - originY) + originY
    };
  }

  lerp(p1, p2, n) {
    return (1 - n) * p1 + n * p2;
  }

  prev () {
    this.cX += 20;
  }
}

const particlesTracker1 = new particlesTracker();
particlesTracker1.init();

// controls
class Controls {
  guiSettings = {
    resizable : false,
    hideable: true,
    closeOnTop: true,
    closed: true
  };

  gui = {};
  elementToControl = {};
  initialControlSettings = [];

  constructor(elementToControl) {
    this.gui = new dat.GUI(this.guiSettings);
    this.elementToControl = elementToControl;
    this.initialControlSettings = elementToControl.controlsSettings;
  }

  change(attribute, data) {
    this.elementToControl.change(attribute, data);
  }

  createSelectControl(control) {
    this.gui.add(this.elementToControl[control.attribute], control.attribute, control.values)
      .onChange((data) => {
        this.change(control.attribute, data)
      });
  }

  createSliderControl(control) {
    const guiControl = this.gui
      .add(this.elementToControl, control.attr, control.min, control.max)
      .onChange((data) => { this.change(control.attr, data) });

    if (control.step) {
      guiControl.step(control.step);
    }
  }

  initialize() {
    this.initialControlSettings.forEach((controlSetting) => {
      if (controlSetting.type === 'select') {
        this.createSelectControl(controlSetting);
      } else {
        this.createSliderControl(controlSetting);
      }
    });
  }
}

const controls1 = new Controls(particlesTracker1);

controls1.initialize();

