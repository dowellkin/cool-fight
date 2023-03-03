import Line from './Path.js';

export const DOT_TYPE_SOLID = 'solid';

export default class LineTracer {
    constructor() {
        this.borderWeight = 3;
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
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const rect = path.calculateRect();
        svg.setAttribute('viewBox', `-10 -10 ${rect.width + 20} ${rect.height + 20}`);
        svg.setAttribute('width', rect.width + 10);
        svg.setAttribute('height', rect.height + 10);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('color', 'red');
        svg.style.position = 'absolute';
        svg.style.left = `${rect.x}px`;
        svg.style.top = `${rect.y}px`;

        const svgPath = path.makeSvgPath();

        const startPointPos = path.getLocalStartPoint();
        const endPointPos = path.getLocalEndPoint();

        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', svgPath);
        pathElement.setAttribute('stroke', '#810026');
        pathElement.setAttribute('fill', 'none');
        pathElement.setAttribute('stroke-width', this.borderWeight);

        const startCircle = `<circle cx="${startPointPos.x}" cy="${startPointPos.y}" r="${this.dotRadius}"></circle>`
        const pathStr = `<path d="${svgPath}" stroke="red" fill="none"></path>`;
        const endCircle = `<circle cx="${endPointPos.x}" cy="${endPointPos.y}" r="${this.dotRadius}"></circle>`

        svg.appendChild(pathElement);

        svg.style.display = 'none';
        svg.style.display = 'block';

        window.addEventListener('resize', () => {
            const rect = path.calculateRect();
            svg.style.left = `${rect.x}px`;
            svg.style.top = `${rect.y}px`;
            pathElement.setAttribute('d', path.makeSvgPath());
        })
        svg.classList.add('svg-line');

        return svg;
    }
}