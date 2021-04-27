import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { World } from '../lib/threeWorld/World';
import { Geometry } from '../model/geometry';

@Injectable({
  providedIn: 'root'
})
export class ThreeWorldService {
  world: World;
  geometries: Geometry[] = [];

  newGeometries = new Subject<Geometry[]>();
  
  constructor() { }
  
  createWorld(container: HTMLElement){
    this.world = new World(container);
    this.world.start();
  }
  
  addGeometry(pos: {x: number, y: number, z: number}, color: string) {
    const geo = this.world.addGeometry(pos, color);
    let geom = new Geometry(geo.id, geo.position, geo.geometry.type, color);
    this.geometries.push(geom);
    this.newGeometries.next(this.geometries);
    console.log(this.geometries);
  }
  
  deleteGeometry(id: number) {
    this.world.deleteFromScene(id);
    let index = this.geometries.findIndex(geo => geo.id == id);
    this.geometries.splice(index, 1);
  }
}
