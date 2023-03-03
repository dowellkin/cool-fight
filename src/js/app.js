import * as myFunctions from "./modules/functions.js";
import LineTracer from "./modules/LineTrace/LineTracer.js";
import Path, {EDGE_BOTTOM, EDGE_LEFT, EDGE_RIGHT} from "./modules/LineTrace/Path.js";
import { default as SvgPath } from "svg-path-generator"
import Line from "./modules/LineTrace/Line.js";

const lineTracer = new LineTracer();
const path = new Path('.section__hero', '.section__events');
path.setStartEdge(EDGE_LEFT | EDGE_BOTTOM);
path.setEndEdge(EDGE_RIGHT);

path.addLine(new Line(32, 0))
path.addLine(new Line(0, 122))
path.addLine(new Line(74, 74))
path.addLine(new Line(-74, 74))
path.addLine(new Line(-202, 0))
path.addLine(new Line(-202, 0))
path.addLine(new Line(-74, 74))
path.addLine(new Line(-260, 0))

const line = SvgPath()
    .moveTo(0, 0)
    .lineTo(0, 20)
    .relative().lineTo(20, 0)
    .relative().lineTo(0, -10)
    .end();

const svg = document.createElement('svg');
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svg.setAttribute('color', 'red');
svg.setAttribute('width', 50);
svg.setAttribute('height', 50);
svg.setAttribute('viewBox', '0 0 50 50');
svg.innerHTML = `
    <path d="${line}" stroke="red" fill="none"/>
`;
document.body.appendChild(svg);
console.log(svg);

console.log(line);

console.log(path, path.getRealStartOffset(), path.getRealEndOffset());

myFunctions.isWebp();
