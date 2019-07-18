import * as THREE from 'three'
import React, { Component, useMemo, useRef } from 'react'
import { Canvas, useRender } from 'react-three-fiber'
import { perlin } from '../shaders/perlin'
import img from '../img/fritz.jpg'
import disp from '../img/displacement/noise.png'

class Texture extends Component {

  constructor(props) {
    super(props);
    this.initImage = this.initImage.bind(this);
    this.Scene = this.Scene.bind(this);
  }

  initImage({ url, disp }) {
    const [texture, noise] = useMemo(
      () => {
        const loader = new THREE.TextureLoader()
        return [loader.load(url), loader.load(disp)]
      },
      [url, disp]
    );
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
  }

  Scene() {
    let group = useRef();
    console.log("group: ", group);
    useRender(() => group.current.children[0].material.uniforms['time'].value += 0.02);
    return (
      <group ref={group}>
        <this.initImage url={img} disp={disp} />
      </group>
    );
  }

  render() {
    return (
        <Canvas className="canvas">
            <this.Scene />
        </Canvas>
    );
  }
}

export default Texture;