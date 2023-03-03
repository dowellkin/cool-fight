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
        this.startEdge = EDGE_NONE;
        this.endEdge = EDGE_NONE;
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

    /**
     * @returns {{x: number, y: number}}
     */
    getRealStartOffset()
    {
        return this.calculateRealOffset(
            this.from,
            this.startEdge,
            this.startOffsetX || 0,
            this.startOffsetY || 0,
        );
    }

    /**
     * @returns {{x: number, y: number}}
     */
    getRealEndOffset()
    {
        return this.calculateRealOffset(
            this.to,
            this.endEdge,
            this.endOffsetX || 0,
            this.endOffsetY || 0,
        );
    }

    /**
     *
     * @param {HTMLElement} element
     * @param {int} edge
     * @param {int} offsetX
     * @param {int} offsetY
     */
    calculateRealOffset( element, edge, offsetX = 0, offsetY = 0 )
    {
        const elementRect = element.getBoundingClientRect()
        let realOffsetX = elementRect.x + offsetX;
        let realOffsetY = elementRect.y + offsetY;

        if ( edge === EDGE_LEFT || edge === EDGE_RIGHT ) {
            realOffsetY += elementRect.height * 0.5;
        }
        if ( edge === EDGE_RIGHT || edge === ( EDGE_RIGHT | EDGE_TOP ) ) {
            realOffsetX += elementRect.width;
        }

        if ( edge === EDGE_TOP || edge === EDGE_BOTTOM ) {
            realOffsetX += elementRect.width * 0.5;
        }
        if ( edge === EDGE_BOTTOM || edge === ( EDGE_LEFT | EDGE_BOTTOM ) ) {
            realOffsetY += elementRect.height;
        }

        if ( edge === ( EDGE_RIGHT | EDGE_BOTTOM ) ) {
            realOffsetX += elementRect.width;
            realOffsetY += elementRect.height;
        }

        return {x: realOffsetX, y: realOffsetY};
    }
}