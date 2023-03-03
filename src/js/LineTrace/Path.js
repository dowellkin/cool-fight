export const EDGE_LEFT = 1;
export const EDGE_RIGHT = 2;
export const EDGE_TOP = 4;
export const EDGE_BOTTOM = 8;
export const EDGE_NONE = 0;

export default class Path {
    /**
     * @param {HTMLElement|string} from
     * @param {HTMLElement|string} to
     */
    constructor( from, to ) {
        if ( typeof from === 'string' ) {
            from = document.querySelector(from);
        }
        if ( typeof to === 'string' ) {
            to = document.querySelector(to);
        }

        this.from = from;
        this.to = to;

        this.path = [];
        this.startEdge = 'none';
        this.endEdge = 'none';
    }

    /**
     *
     * @param edge
     * @returns {Path}
     */
    setStartEdge( edge )
    {
        this.startEdge = edge;
        return this;
    }

    /**
     *
     * @param edge
     * @returns {Path}
     */
    setEndEdge( edge )
    {
        this.endEdge = edge;
        return this;
    }

    /**
     * @returns {int}
     */
    getStartEdge()
    {
        return this.startEdge;
    }

    /**
     * @returns {int}
     */
    getEndEdge()
    {
        return this.endEdge;
    }

    /**
     * @returns {HTMLElement}
     */
    getFrom()
    {
        return this.from;
    }

    /**
     * @returns {HTMLElement}
     */
    getTo()
    {
        return this.to
    }

    /**
     * @returns {[]}
     */
    getPath()
    {
        return this.path;
    }
}