import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'three';

function createMaterial(color) {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    '/assets/textures/uv-test-bw.png',
  );

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    color: color
  });

  return material;
}

function createCube(color) {
  const geometry = new BoxBufferGeometry(1, 1, 1);
  const material = createMaterial(color);
  const cube = new Mesh(geometry, material);

  // cube.rotation.set(-0.5, -0.1, 0.8);

  // const radiansPerSecond = MathUtils.degToRad(30);

  // cube.tick = (delta) => {
  //   // increase the cube's rotation each frame
  //   cube.rotation.z += delta * radiansPerSecond;
  //   cube.rotation.x += delta * radiansPerSecond;
  //   cube.rotation.y += delta * radiansPerSecond;
  // };

  return cube;
}

export { createCube };
