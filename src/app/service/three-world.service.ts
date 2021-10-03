import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Color } from 'three';
import { World } from '../lib/threeWorld/World';
import { Geometry } from '../model/geometry';

@Injectable({
  providedIn: 'root'
})
export class ThreeWorldService {
  private world: World;
  geometries: Geometry[] = [];

  newGeometries = new Subject<Geometry[]>();
  
  constructor() {
    this.world = new World();
  }
  
  createWorld(container: HTMLElement){
    this.world.bind(container);
    this.world.start();
  }
  
  addGeometry(geometry: Geometry) {
    const geo = this.world.addGeometry(geometry);
    let geom = new Geometry(geo.id, geo.position, geo.geometry.type, geo.material.color);
    this.geometries.push(geom);
    this.newGeometries.next(this.geometries);
  }
  
  deleteGeometry(id: number) {
    this.world.deleteGeometry(id);
    let index = this.geometries.findIndex(geo => geo.id == id);
    this.geometries.splice(index, 1);
  }

  changeTransformMode(mode: string){
    this.world.setTransformMode(mode);
  }

  toggleTransform(enabled: boolean) {
    this.world.toggleTransform(enabled);
  }
}