import * as myFunctions from "./modules/functions.js";
import LineTracer from "./modules/LineTrace/LineTracer.js";
import Path, {EDGE_BOTTOM, EDGE_LEFT, EDGE_RIGHT} from "./modules/LineTrace/Path.js";

const lineTracer = new LineTracer();
const path = new Path('.section__main', '.section__events');
path.setStartEdge(EDGE_LEFT | EDGE_BOTTOM);
path.setEndEdge(EDGE_RIGHT);
path.
console.log(path, path.getRealStartOffset(), path.getRealEndOffset());

myFunctions.isWebp();
