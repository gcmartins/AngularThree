import { createCamera } from './components/camera';
import { createGeometry } from './components/geometry';
import { createScene } from './components/scene';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';
import { AxesHelper, GridHelper, HemisphereLightProbe } from 'three';


const camera = createCamera();
const renderer = createRenderer();
const scene = createScene();
const loop = new Loop(camera, scene, renderer);
const controls = createControls(camera, renderer.domElement);
const light = new HemisphereLightProbe(0xffffbb, 0x080820, 1 );

const axes = new AxesHelper(1);
//const helper = new DirectionalLightHelper(light, 5);
const grid = new GridHelper();
scene.add(light, axes, grid);


export class World {
  private sceneElements: any[] = [];
  
  constructor() {}
  
  bind (container: HTMLElement) {
    container.append(renderer.domElement);
    
    // loop.updatables.push(controls);
  
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

  addGeometry(geometryType: string, pos: { x: number; y: number; z: number; }, color: any) {
    const cube = createGeometry(geometryType, color);
    cube.position.set(pos.x,pos.y,pos.z);
    scene.add(cube);
    this.sceneElements.push(cube);
    return cube;
  }

  deleteGeometry(id: any) {
    let index = this.sceneElements.findIndex(elem => elem.id == id);
    scene.remove(this.sceneElements[index]);
    this.sceneElements.splice(index,1);
  }
}
