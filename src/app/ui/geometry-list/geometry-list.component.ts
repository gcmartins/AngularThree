import { Component, OnInit } from '@angular/core';
import { Geometry } from 'src/app/model/geometry';
import { ThreeWorldService } from 'src/app/service/three-world.service';

@Component({
  selector: 'app-geometry-list',
  templateUrl: './geometry-list.component.html',
})
export class GeometryListComponent implements OnInit {
  geometries: Geometry[];

  constructor(private threeService: ThreeWorldService) { }

  ngOnInit(): void {
    this.geometries = this.threeService.geometries;
    this.threeService.newGeometries.subscribe(geometries => {
      this.geometries = geometries;
    })
  }

  deleteGeometry(id: number) {
    this.threeService.deleteGeometry(id);
  }

}
