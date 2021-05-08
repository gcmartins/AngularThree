import { PerspectiveCamera } from 'three';

export function createCamera(): PerspectiveCamera {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(10, 10, 10);

  return camera;
}

