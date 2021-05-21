import {
  BoxBufferGeometry,
  BufferGeometry,
  CylinderBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  SphereBufferGeometry,
  TextureLoader,
  TorusBufferGeometry,
} from 'three';

function createMaterial(color: any) {
  // create a texture loader.
  // const textureLoader = new TextureLoader();

  // load a texture
  // const texture = textureLoader.load(
  //   '/assets/textures/uv-test-bw.png',
  // );

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    color: color,
  });

  return material;
}

export function createGeometry(geometryType: string, color: any) {
  let geometry: BufferGeometry;
  switch (geometryType) {
    case 'BoxGeometry':
      geometry = createBox();
      break;
    
    case 'SphereGeometry':
      geometry = createSphere();
      break;

    case 'CylinderGeometry':
      geometry = createCylinder();
      break;

    case 'TorusGeometry':
      geometry = createTorus();
      break;

    default:
      alert(`Unknown geometry type: ${geometryType}`);
  }

  const material = createMaterial(color);
  return new Mesh(geometry, material);

}

function createBox(): BufferGeometry {
  const geometry = new BoxBufferGeometry(1, 1, 1);

  // cube.rotation.set(-0.5, -0.1, 0.8);

  // const radiansPerSecond = MathUtils.degToRad(30);

  // cube.tick = (delta) => {
  //   // increase the cube's rotation each frame
  //   cube.rotation.z += delta * radiansPerSecond;
  //   cube.rotation.x += delta * radiansPerSecond;
  //   cube.rotation.y += delta * radiansPerSecond;
  // };

  return geometry;
}

function createSphere(): BufferGeometry {
  return new SphereBufferGeometry(0.5, 10, 10)
}

function createCylinder(): BufferGeometry {
  return new CylinderBufferGeometry(0.5, 0.5, 1, 10, 10)
}

function createTorus(): BufferGeometry {
  return new TorusBufferGeometry(1, 0.5, 10, 10)
}

