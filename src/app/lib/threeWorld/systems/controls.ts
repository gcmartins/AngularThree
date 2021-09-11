import { Camera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

export function createOrbitControl(camera: Camera, canvas: HTMLElement) {
  const controls = new OrbitControls(camera, canvas);

  // damping and auto rotation require
  // the controls to be updated each frame

  // this.controls.autoRotate = true;
  // controls.enableDamping = true;

  // controls.tick = () => controls.update();

  return controls;
}

export function createTransformControl(camera: Camera, canvas: HTMLElement, orbitControl: OrbitControls) {
  const control = new TransformControls(camera, canvas);
  control.addEventListener('dragging-changed', function (event) {
    orbitControl.enabled = !event.value;
  });
  return control;
}

