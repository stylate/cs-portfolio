const perlin = {
    transparent: true,
    uniforms: {
        speed: { type: 'f', value: 0.5 },
        noise: { type: 't', value: undefined },
        texture: { type: 't', value: undefined }
    },
    vertexShader: `
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D noise;
        uniform sampler2D texture;
        uniform float speed;

        varying vec2 vUv;

        void main() {
            // perlin noise displacement
            vec4 disp = texture2D(noise, vUv + speed);
            
            // ripple effect with sin waves
            disp.xy = sin(vUv.y * 100. * speed);
            
            // apply ripple on texture
            vec2 shift = vec2(vUv.x - disp.x, vUv.y - disp.y);
            gl_FragColor = texture2D(texture, shift);
        }
    `
};

export { perlin }