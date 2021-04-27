import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';


const camera = createCamera();
const renderer = createRenderer();
const scene = createScene();
const loop = new Loop(camera, scene, renderer);

export class World {
  constructor(container) {
    this.sceneElements = [];
    container.append(renderer.domElement);
    
    const controls = createControls(camera, renderer.domElement);
    loop.updatables.push(controls);

    const light = createLights();
    scene.add(light);
    
    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  addGeometry(pos, color) {
    const cube = createCube(color);
    cube.position.set(pos.x,pos.y,pos.z);
    scene.add(cube);
    this.sceneElements.push(cube);
    return cube;
  }

  deleteFromScene(id) {
    let index = this.sceneElements.findIndex(elem => elem.id == id);
    scene.remove(this.sceneElements[index]);
    this.sceneElements.splice(index,1);
  }
}
