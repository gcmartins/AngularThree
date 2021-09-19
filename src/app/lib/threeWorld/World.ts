import { createCamera } from './components/camera';
import { createGeometry } from './components/geometry';
import { createScene } from './components/scene';

import { createOrbitControl, createTransformControl } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';
import { AxesHelper, GridHelper, HemisphereLightProbe } from 'three';
import { Geometry } from 'src/app/model/geometry';

const camera = createCamera();
const renderer = createRenderer();
const scene = createScene();
const loop = new Loop(camera, scene, renderer);
const orbitControl = createOrbitControl(camera, renderer.domElement);
const light = new HemisphereLightProbe(0xffffbb, 0x080820, 1);

const axes = new AxesHelper(1);
//const helper = new DirectionalLightHelper(light, 5);
const grid = new GridHelper();
scene.add(light, axes, grid);

export class World {
  private sceneElements: any[] = [];

  constructor() {}

  bind(container: HTMLElement) {
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

  addGeometry(geometry: Geometry) {
    const geo = createGeometry(geometry.name, geometry.color);
    const control = createTransformControl(camera, renderer.domElement, orbitControl);
    control.attach(geo);
    
    scene.add(geo, control);
    
    this.sceneElements.push({
      geometry: geo,
      control: control,
    });
    return geo;
  }

  deleteGeometry(id: any) {
    let index = this.sceneElements.findIndex((elem) => elem.geometry.id == id);
    scene.remove(
      this.sceneElements[index].geometry,
      this.sceneElements[index].control
    );
    this.sceneElements.splice(index, 1);
  }
}
