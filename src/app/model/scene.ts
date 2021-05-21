import { Geometry } from "./geometry";

export class SceneThree {
    id: string;
    geometries: Geometry[] = [];

    constructor(public name: string) {}
}