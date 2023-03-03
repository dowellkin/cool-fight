import * as myFunctions from "./modules/functions.js";
import LineTracer from "./modules/LineTrace/LineTracer.js";
import Path, {EDGE_BOTTOM, EDGE_LEFT, EDGE_RIGHT} from "./modules/LineTrace/Path.js";
import Line from "./modules/LineTrace/Line.js";

const lineTracer = new LineTracer();
const path = new Path('.section__hero', '.section__events');
path.setStartEdge(EDGE_RIGHT | EDGE_BOTTOM);
path.setEndEdge(EDGE_RIGHT);

path.addLine(new Line(32, 0))
path.addLine(new Line(0, 122))
path.addLine(new Line(-74, 74))
path.addLine(new Line(-202, 0))
path.addLine(new Line(-74, 74))
path.addLine(new Line(-260, 0))

const svg = lineTracer.makeSvg(path);
document.body.appendChild(svg);

myFunctions.isWebp();
