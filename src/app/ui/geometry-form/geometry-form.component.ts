import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThreeWorldService } from 'src/app/service/three-world.service';

@Component({
  selector: 'app-geometry-form',
  templateUrl: './geometry-form.component.html',
  styleUrls: ['./geometry-form.component.css']
})
export class GeometryFormComponent implements OnInit {
  geometryForm: FormGroup;
  constructor(private threeService: ThreeWorldService) { }
  
  ngOnInit(): void {
    this.geometryForm = new FormGroup({
        xCoord: new FormControl(0, Validators.required),
        yCoord: new FormControl(0, Validators.required),
        zCoord: new FormControl(0, Validators.required), 
        color: new FormControl('blue', Validators.required),
        geometry: new FormControl(null, Validators.required)
    });

  }

  addGeometry() {
    if (this.geometryForm.valid) {
      const pos = {
        x:this.geometryForm.get('xCoord').value, 
        y:this.geometryForm.get('yCoord').value, 
        z:this.geometryForm.get('zCoord').value
      };
      const color = this.geometryForm.get('color').value;
      const geometryType = this.geometryForm.get('geometry').value;
      this.threeService.addGeometry(geometryType ,pos, color);
    }
  }

}
