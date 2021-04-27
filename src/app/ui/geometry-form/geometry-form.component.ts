import { Component, OnInit } from '@angular/core';
import { ThreeWorldService } from 'src/app/service/three-world.service';

@Component({
  selector: 'app-geometry-form',
  templateUrl: './geometry-form.component.html',
  styleUrls: ['./geometry-form.component.css']
})
export class GeometryFormComponent implements OnInit {

  constructor(private threeService: ThreeWorldService) { }
  
  ngOnInit(): void {
  }

  addCube(x: number, y: number, z: number, color: string) {
    const pos = {x:x, y:y, z:z};
    this.threeService.addGeometry(pos, color);
  }

}
