import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { Canvas, useRender, useThree } from 'react-three-fiber'
import { perlin } from '../shaders/perlin'
import img from '../img/fritz.jpg'
import disp from '../img/displacement/noise.png'

const InitImage = ({url, disp}) => {
  const [texture, noise] = useMemo(
    () => {
      const loader = new THREE.TextureLoader()
      return [loader.load(url), loader.load(disp)]
    },
    [url, disp]
  );
  const { canvas } = useThree();
  canvas.height=900;
  canvas.width=700;
  canvas.style="width: 100%; height: 100%;";
  return (
    <mesh>
      <planeBufferGeometry name="geometry" args={[8, 8]} />
        <shaderMaterial
          name="material"
          args={[perlin]}
          uniforms-texture-value={texture}
          uniforms-disp-value={noise}
        />
    </mesh>
  )
};

const Scene = () => {
  let group = useRef();
  useRender(() => group.current.children[0].material.uniforms['time'].value += 0.02);
  return (
    <group ref={group}>
      <InitImage url={img} disp={disp} />
    </group>
  );
}

const Texture = () => {
  return (
    <Canvas className="canvas">
      <Scene />
    </Canvas>
  );
}

export default Texture;