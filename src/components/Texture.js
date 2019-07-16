import * as THREE from 'three'
import React, { Component, useState, useCallback, useMemo, useRef } from 'react'
import { Canvas, useRender } from 'react-three-fiber'
import { useSpring, animated as anim } from 'react-spring/three'
import { perlin } from '../shaders/perlin'
import img from '../img/text.jpg'
import disp from '../img/displacement/noise.png'

class Texture extends Component {

    Image({ url, disp, ...props }) {
        const [hovered, setHover] = useState(false)
        const hover = useCallback(() => setHover(true), [])
        const unhover = useCallback(() => setHover(false), [])
        const { progress } = useSpring({ progress: hovered ? 1 : 0 })
        const [texture, noise] = useMemo(
          () => {
            const loader = new THREE.TextureLoader()
            return [loader.load(url), loader.load(disp)]
          },
          [url, disp]
        )
        return (
          <mesh {...props} onHover={hover} onUnhover={unhover}>
            <planeBufferGeometry name="geometry" args={[5, 5]} />
            <shaderMaterial
              name="material"
              args={[perlin]}
              uniforms-texture-value={texture}
              uniforms-disp-value={noise}
              uniforms-dispFactor-value={progress}
            />
          </mesh>
        )
    }

    Scene() {
      let group = useRef();

    }

    render() {
        return (   
            <Canvas className="canvas">
                <this.Image url={img} disp={disp} />
            </Canvas>
        );
    }
}

export default Texture;