import * as myFunctions from "./modules/functions.js";
import LineTracer from "./modules/LineTrace/LineTracer.js";
import Path, {EDGE_BOTTOM, EDGE_LEFT, EDGE_RIGHT, EDGE_TOP} from "./modules/LineTrace/Path.js";
import Line from "./modules/LineTrace/Line.js";

window.addEventListener('load', () => {
    const lineTracer = new LineTracer();

    const pathTop = new Path('.hero__title', '.hero__image-wrapper');
    pathTop.setStartEdge(EDGE_LEFT);
    pathTop.setEndEdge(EDGE_LEFT | EDGE_TOP);

    pathTop.addLine(new Line(-442, 0));
    pathTop.addLine(new Line(-84, 78));
    pathTop.addLine(new Line(0, 119));
    pathTop.addLine(new Line(22, 0));

    pathTop.setOffsetX(-10);
    pathTop.setOffsetY(-10);

    const path = new Path('.hero__image-wrapper', '.events__title');
    path.setStartEdge(EDGE_RIGHT | EDGE_BOTTOM);
    path.setEndEdge(EDGE_RIGHT);

    path.addLine(new Line(32, 0))
    path.addLine(new Line(0, 122))
    path.addLine(new Line(-74, 74, true))
    path.addLine(new Line(-202, 0))
    path.addLine(new Line(-74, 74, true))
    path.addLine(new Line(-260, 0))

    path.setOffsetX(24);
    path.setOffsetY(-160);

    document.body.appendChild(lineTracer.makeSvg(pathTop));
    document.body.appendChild(lineTracer.makeSvg(path));
})

myFunctions.isWebp();
