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
}