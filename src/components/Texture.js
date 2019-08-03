import * as THREE from 'three'
import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useRender, useThree } from 'react-three-fiber'
import styled from 'styled-components';

import { perlin } from '../shaders/perlin'
import img from '../assets/fritz.jpg'
import disp from '../assets/displacement/noise.png'
import { Desktop } from './core/Index'

let heightDiff = window.innerHeight - 900;
let widthDiff = window.innerWidth - 1400;

const InitImage = ({url, disp}) => {
  const [texture, noise] = useMemo(
    () => {
      const loader = new THREE.TextureLoader()
      return [loader.load(url), loader.load(disp)]
    },
    [url, disp]
  );
  const { canvas } = useThree();

  canvas.height = Math.max(900, 900 + heightDiff);
  canvas.width = Math.max(650, 650 + widthDiff);
  canvas.style = "width: 100%; height: 100%";

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

const Container = styled.div`
  overflow: hidden;
`;

export const Texture = () => {
  return (
    <div>
      <Canvas className='canvas'>
        <Scene />
      </Canvas>
    </div>
  );
};

/*class Texture extends Component {

  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
  }

  resize() {
    const { canvas, camera, renderer } = useThree();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas.height = Math.max(900, 900 + heightDiff);
    canvas.width = Math.max(750, 750 + widthDiff);
  }

  render() {
    return (
    <Desktop>
      <Canvas className="canvas">
        <Scene />
      </Canvas>
    </Desktop>
    );
  }

}

export { Texture };*/