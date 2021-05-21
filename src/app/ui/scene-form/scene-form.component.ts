import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Geometry } from 'src/app/model/geometry';
import { SceneThree } from 'src/app/model/scene';
import { SceneService } from 'src/app/service/scene.service';
import { Color, Vector3 } from 'three';

@Component({
  selector: 'app-scene-form',
  templateUrl: './scene-form.component.html',
})
export class SceneFormComponent implements OnInit {
  sceneForm: FormGroup;

  constructor(private sceneService: SceneService) {}

  ngOnInit(): void {
    this.sceneForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

  createScene() {
    if (this.sceneForm.valid) {
      this.sceneService.saveScene(this.sceneForm.value).subscribe(
        result => console.log(result)
      );
    }
  }
}
