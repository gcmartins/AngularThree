import { Component, OnInit } from '@angular/core';
import { SceneService } from 'src/app/service/scene.service';
import { ThreeWorldService } from 'src/app/service/three-world.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  constructor(public sceneService: SceneService, private threeService: ThreeWorldService) { }

  ngOnInit(): void {
  }

  updateScene() {
    const scene = this.sceneService.editingScene;
    scene.geometries = this.threeService.geometries;
    this.sceneService.updateScene(scene).subscribe();
  }

}
