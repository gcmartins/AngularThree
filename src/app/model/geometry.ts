import { Color, Vector3 } from "three";

export class Geometry {
    private _color: Color;
    colorString: string;
    constructor(
        public id: number,
        public position: Vector3,
        public name: string,
        color: Color
    ){
        this._color = color;
        this.colorString = '#' + this._color.getHexString();
    }

    set color(colorString: string) {
        this._color.set(colorString);
        this.colorString = colorString;
    }

    get color(): string {
        return this.colorString;
    }
}