import { Color, Vector3 } from "three";

export class Geometry {
    private _color: Color;
    constructor(
        public id: number,
        public position: Vector3,
        public name: string,
        color: Color
    ){
        this._color = color;
    }

    set color(colorString: string) {
        this._color.set(colorString);
    }

    get color(): string {
        return this._color.getHexString();
    }
}