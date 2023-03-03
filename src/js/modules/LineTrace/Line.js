export default class Line {
    /**
     * @param {float} vectorX
     * @param {float} vectorY
     * @param {float} verticalWeight
     * @param {float} horizontalWeight
     */
    constructor( vectorX, vectorY ) {
        this.vectorX = vectorX;
        this.vectorY = vectorY;

        this.scaleX = 1;
        this.scaleY = 1;

        const vectorLength = Math.sqrt(vectorX ** 2 + vectorY ** 2);
        this.vectorNormalizedX = vectorX / vectorLength;
        this.vectorNormalizedY = vectorY / vectorLength;
    }

    /**
     * @param {float} scaleX
     * @param {float} scaleY,
     */
    setScale( scaleX, scaleY )
    {
        this.setScaleX(scaleX);
        this.normalizeVerticalWeight(scaleY);
    }

    /**
     * @param {float} scaleX
     */
    setScaleX( scaleX )
    {
        this.scaleX = scaleX;
    }

    /**
     * @param {float} scaleY
     */
    setScaleY( scaleY )
    {
        this.scaleY = scaleY;
    }

    getWidth()
    {
        return this.vectorX * this.scaleX;
    }

    getHeight()
    {
        return this.vectorY * this.scaleY;
    }
}