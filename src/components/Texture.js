import * as THREE from 'three'
import React, { Component, useState, useCallback, useMemo } from 'react'
import { Canvas, useRender } from 'react-three-fiber'
import { useSpring, animated as anim } from 'react-spring/three'
import { perlin } from '../shaders/perlin'
import img1 from '../img/text.jpg'
import img2 from '../img/Img2.jpg'
import disp from '../img/displacement/noise.png'

class Texture extends Component {

    Image({ url1, url2, disp, ...props }) {
        const [hovered, setHover] = useState(false)
        const hover = useCallback(() => setHover(true), [])
        const unhover = useCallback(() => setHover(false), [])
        const { progress } = useSpring({ progress: hovered ? 1 : 0 })
        const [texture1, texture2, dispTexture] = useMemo(
          () => {
            const loader = new THREE.TextureLoader()
            return [loader.load(url1), loader.load(url2), loader.load(disp)]
          },
          [url1, url2, disp]
        )
        return (
          <mesh {...props} onHover={hover} onUnhover={unhover}>
            <planeBufferGeometry name="geometry" args={[5, 5]} />
            <anim.shaderMaterial
              name="material"
              args={[perlin]}
              uniforms-texture-value={texture1}
              uniforms-texture2-value={texture2}
              uniforms-disp-value={dispTexture}
              uniforms-dispFactor-value={progress}
            />
          </mesh>
        )
    }

    render() {
        return (   
            <Canvas className="canvas">
                <this.Image url1={img1} url2={img2} disp={disp} />
            </Canvas>
        );
    }
}

export default Texture;