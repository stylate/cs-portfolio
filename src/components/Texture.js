import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { Canvas, useRender, useThree } from 'react-three-fiber'
import { perlin } from '../shaders/perlin'
import img from '../assets/fritz.jpg'
import disp from '../assets/displacement/noise.png'
import { Desktop } from './core/Index'

const heightDiff = window.innerHeight - 900;
const widthDiff = window.innerWidth - 1500;

const InitImage = ({url, disp}) => {
  const [texture, noise] = useMemo(
    () => {
      const loader = new THREE.TextureLoader()
      return [loader.load(url), loader.load(disp)]
    },
    [url, disp]
  );
  const { canvas } = useThree();
  console.log("heightDiff: ", heightDiff);
  console.log("widthDiff: ", widthDiff);
  canvas.height = Math.max(900, 900 + heightDiff);
  canvas.width = Math.max(750, 750 + widthDiff);
  canvas.style = "width: 100%; height: 100%;";
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

export const Texture = () => {
  return (
    <Desktop>
      <Canvas className="canvas">
        <Scene />
      </Canvas>
    </Desktop>
  );
};