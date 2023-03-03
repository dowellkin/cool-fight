import Line from './Path.js';

export const DOT_TYPE_SOLID = 'solid';

export default class LineTracer {
    constructor() {
        this.borderWeight = 2;
        this.dotType = DOT_TYPE_SOLID;
        this.dotRadius = 5;

        this.lineList = [];
    }

    /**
     * @param {int} weight
     */
    setBorderWeight( weight )
    {
        this.borderWeight = weight;
    }

    /**
     * @param {string} dotType
     */
    setDotType( dotType )
    {
        this.dotType = dotType;
    }

    /**
     * @param {Path} path
     */
    addPath( path )
    {
        this.lineList.push(path);
    }

    /**
     * @param {Path} path
     */
    makeSvg( path )
    {
        const svg = document.createElement('svg');
        const rect = path.calculateRect();
        svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
        svg.setAttribute('width', rect.width);
        svg.setAttribute('height', rect.height);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('color', 'red');
        svg.style.position = 'absolute';
        svg.style.left = `${rect.x}px`;
        svg.style.top = `${rect.y}px`;

        const svgPath = path.makeSvgPath();

        const startPointPos = path.getLocalStartPoint();
        const endPointPos = path.getLocalEndPoint();

        const startCircle = `<circle cx="${startPointPos.x}" cy="${startPointPos.y}" r="${this.dotRadius}"></circle>`
        const pathStr = `<path d="${svgPath}" stroke="red" fill="none"></path>`;
        const endCircle = `<circle cx="${endPointPos.x}" cy="${endPointPos.y}" r="${this.dotRadius}"></circle>`

        svg.innerHTML = `
            ${pathStr}
            ${startCircle}
            ${endCircle}
        `;

        return svg;
    }
}