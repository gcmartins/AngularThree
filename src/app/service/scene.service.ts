import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SceneThree } from '../model/scene';


const API_URL = 'https://angular-three-default-rtdb.firebaseio.com/scene.json';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor(private http: HttpClient) { }

  saveScene(scene: SceneThree) {
    return this.http.post<SceneThree>(API_URL, scene);
  }

  getScene() {
    return this.http.get<any>(API_URL);
  }
}
