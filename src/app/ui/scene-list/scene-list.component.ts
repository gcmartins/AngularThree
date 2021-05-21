import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SceneThree } from 'src/app/model/scene';
import { SceneService } from 'src/app/service/scene.service';
import { ThreeWorldService } from 'src/app/service/three-world.service';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.component.html',
})
export class SceneListComponent implements OnInit {

  scenes: Observable<SceneThree[]>;

  constructor(private sceneService: SceneService, private threeService: ThreeWorldService, private router: Router) { }

  ngOnInit(): void {
    this.scenes = this.sceneService.getScene();
  }

  deleteScene(scene: SceneThree) {
    this.sceneService.deleteScene(scene).subscribe();
  }

  editScene(scene: SceneThree) {
    this.threeService.loadGeometries(scene.geometries);
    this.router.navigate(['edit']);   
  }

}
