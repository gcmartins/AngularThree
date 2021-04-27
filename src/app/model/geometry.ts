export class Geometry {
    constructor(
        public id: number,
        public position: {x: number, y: number, z: number},
        public name: string,
        public color?: string,
    ){}
}