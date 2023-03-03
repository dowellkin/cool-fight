import * as myFunctions from "./modules/functions.js";
import LineTracer from "./modules/LineTrace/LineTracer.js";
import Path, {EDGE_BOTTOM, EDGE_LEFT, EDGE_RIGHT} from "./modules/LineTrace/Path.js";
import { default as SvgPath } from "svg-path-generator"

const lineTracer = new LineTracer();
const path = new Path('.section__hero', '.section__events');
path.setStartEdge(EDGE_LEFT | EDGE_BOTTOM);
path.setEndEdge(EDGE_RIGHT);

const line = SvgPath()
    .moveTo(0, 0)
    .lineTo(0, 20)
    .relative().lineTo(20, 0)
    .relative().lineTo(0, -10)
    .end();

const svg = document.createElement('svg');
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svg.setAttribute('color', 'red');
svg.setAttribute('width', Math.max(path.getRealStartOffset().x, path.getRealEndOffset().x) - Math.min(path.getRealStartOffset().x, path.getRealEndOffset().x))
svg.setAttribute('height', Math.max(path.getRealStartOffset().y, path.getRealEndOffset().y) - Math.min(path.getRealStartOffset().y, path.getRealEndOffset().y))
svg.setAttribute('viewBox', '0 0 50 50');
svg.innerHTML = `
    <path d="${line}" stroke="red" fill="none"/>
`;
document.body.appendChild(svg);
console.log(svg);

console.log(line);

console.log(path, path.getRealStartOffset(), path.getRealEndOffset());

myFunctions.isWebp();
