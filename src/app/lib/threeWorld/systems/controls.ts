import { Camera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createControls(camera: Camera, canvas: HTMLElement) {
  const controls = new OrbitControls(camera, canvas);

  // damping and auto rotation require
  // the controls to be updated each frame

  // this.controls.autoRotate = true;
  // controls.enableDamping = true;

  // controls.tick = () => controls.update();

  return controls;
}

