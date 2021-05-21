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
    console.log(this.geometries);
  }
  
  deleteGeometry(id: number) {
    this.world.deleteGeometry(id);
    let index = this.geometries.findIndex(geo => geo.id == id);
    this.geometries.splice(index, 1);
  }

  private cleanScene() {
    const ids = this.geometries.map(geo => geo.id);
    ids.forEach(id => {
      this.deleteGeometry(id);
    });
  }

  loadGeometries(geometries: Geometry[]) {
    this.cleanScene();
    if (geometries) {
      geometries.forEach((geo: Geometry) => this.addGeometry(new Geometry(geo.id, geo.position,geo.name, new Color(geo.colorString))));
    }
    this.newGeometries.next(this.geometries);
  }
}