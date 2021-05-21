import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SceneThree } from '../model/scene';
import { map } from 'rxjs/operators';


const API_URL = 'https://angular-three-default-rtdb.firebaseio.com/scene';

function getApiEnpoint(scene?: SceneThree): string {
  if (scene){
    return `${API_URL}/${scene.id}.json`;
  }
  return `${API_URL}.json`;
} 

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  private _editingScene: SceneThree;
  isEditing = false;


  set editingScene(scene: SceneThree) {
    this._editingScene = scene;
  }

  get editingScene() {
    if (this.isEditing) {
      return this._editingScene;
    }
    return null;
  }

  constructor(private http: HttpClient) { }

  saveScene(scene: SceneThree) {
    return this.http.post<SceneThree>(getApiEnpoint(), scene);
  }

  getScene() {
    return this.http.get<SceneThree[]>(getApiEnpoint()).pipe(
      map(response => {
        const scenes = [];
        for (const key in response) {
          scenes.push({...response[key], id: key})
        }

        return scenes;
      })
    );
  }

  deleteScene(scene: SceneThree) {
    return this.http.delete<SceneThree>(getApiEnpoint(scene));
  }

  updateScene(scene: SceneThree) {
    return this.http.put<SceneThree>(getApiEnpoint(scene), scene);
  }


}
