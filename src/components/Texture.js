import React, { Component, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { perlin } from '../assets/perlin';
import image from '../assets/texture5.jpg';
import disp from '../assets/noise.png';

class Texture extends Component {
    constructor(props) {
        super(props);
        this.initImage = this.initImage.bind(this);
    }

    initImage() {
        const [texture, noise] = useMemo(
            () => {
                const loader = new THREE.TextureLoader();
                return [loader.load(image), loader.load(disp)]
            }, 
            [image, disp]
        );
        return (
            <mesh>
                <planeBufferGeometry name="geometry" args={[5, 5]} />
                <shaderMaterial 
                    attach="material"
                    args={[perlin]}
                    uniforms-noise-value={noise}
                    uniforms-texture-value={texture}
                />
            </mesh>
        );
    }
    
    render() {
        return (
            <Canvas>
                <this.initImage/>
            </Canvas>
        );
    }
}

export { Texture };