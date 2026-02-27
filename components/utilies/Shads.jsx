import React from 'react';
import Sketch from 'react-p5';

// all of the path strings from the original svg; copy them here just like
// in the standalone sketch.  for brevity the example below contains only
// the first two paths, but you should paste the full set.
const svgPaths = [
  `M762.000000,1592.000000
\tC701.291565,1592.000000 640.583069,1592.000000 578.694824,1591.367310
\tC575.394104,1588.724854 573.291443,1586.695557 571.147400,1584.710815
\t/* ... */
\tC760.770142,1562.372070 761.440247,1577.184448 762.000000,1592.000000
\tz`,

  `M2822.000000,1090.000000
\tC2822.000000,1211.375122 2822.000000,1332.750244 2821.353027,1455.325684
\t/* ... */
\tC2805.175537,1107.319092 2810.270508,1096.421509 2822.000000,1090.000000
\tz`,
  // add remaining paths...
];

// helper routines moved from shad.js
function buildShape(p5, paths) {
  const s = p5.createShape();
  s.beginShape();
  paths.forEach(d => parsePathData(p5, s, d));
  s.endShape(p5.CLOSE);
  return s;
}

function parsePathData(p5, s, d) {
  const tokens = d.match(/[A-Za-z]|-?\d*\.?\d+/g);
  let i = 0;
  while (i < tokens.length) {
    let cmd = tokens[i++];
    switch (cmd) {
      case 'M': {
        let x = parseFloat(tokens[i++]);
        let y = parseFloat(tokens[i++]);
        s.vertex(x, y);
        break;
      }
      case 'C': {
        while (i + 5 < tokens.length && !/[A-Za-z]/.test(tokens[i])) {
          let x1 = parseFloat(tokens[i++]), y1 = parseFloat(tokens[i++]);
          let x2 = parseFloat(tokens[i++]), y2 = parseFloat(tokens[i++]);
          let x3 = parseFloat(tokens[i++]), y3 = parseFloat(tokens[i++]);
          s.bezierVertex(x1, y1, x2, y2, x3, y3);
        }
        break;
      }
      case 'Z':
      case 'z':
        s.endShape(p5.CLOSE);
        s.beginShape();
        break;
      default:
        // ignore others
        break;
    }
  }
}

const Shade = () => {
  let myShape = null;

  const preload = p5 => {
    myShape = buildShape(p5, svgPaths);
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 450).parent(canvasParentRef);
    p5.noLoop();
    p5.noStroke();
  };

  const draw = p5 => {
    p5.background(255);
    let s = Math.min(p5.width / 2820, p5.height / 1590);
    p5.push();
    p5.scale(s);

    let grad = p5.createGraphics(2820, 1590);
    grad.noStroke();
    for (let y = 0; y < grad.height; y++) {
      let t = p5.map(y, 0, grad.height, 0, 1);
      let c = p5.lerpColor(p5.color('#050F01'), p5.color('#061001'), t);
      grad.fill(c);
      grad.rect(0, y, grad.width, 1);
    }

    let maskImg = p5.createGraphics(2820, 1590);
    maskImg.noStroke();
    maskImg.fill(255);
    maskImg.shape(myShape);

    let gradImg = grad.get();
    gradImg.mask(maskImg.get());
    p5.image(gradImg, 0, 0);

    p5.noFill();
    p5.stroke(0);
    p5.shape(myShape);

    p5.pop();
  };

  return <Sketch preload={preload} setup={setup} draw={draw} />;
};

export default Shade;
