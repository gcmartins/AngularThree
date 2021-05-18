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
        position: new FormGroup({
          x: new FormControl(0, Validators.required),
          y: new FormControl(0, Validators.required),
          z: new FormControl(0, Validators.required), 
        }),
        color: new FormControl('#0', Validators.required),
        geometryType: new FormControl(null, Validators.required)
    });

  }

  addGeometry() {
    if (this.geometryForm.valid) {
      
      this.threeService.addGeometry(this.geometryForm.value);
    }
  }

}
