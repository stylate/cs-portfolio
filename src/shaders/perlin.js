const perlin = {
  transparent: true,
  uniforms: {
    effectFactor: { type: 'f', value: 0.075 },
    dispFactor: { type: 'f', value: 0 },
    speed: { type: 'f', value: 0.5 },
    time: { type: 'f', value: 0 },
    texture: { type: 't', value: undefined },
    disp: { type: 't', value: undefined },
    resolution: { type: 'v2', value: undefined }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D texture;
    uniform sampler2D disp;
    uniform float dispFactor;
    uniform float effectFactor;
    uniform float speed;
    uniform float time;
    uniform vec2 resolution;

    void main() {
      vec2 st = gl_FragCoord.xy / resolution;
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      disp -= 0.6;

      disp.xy *= cos(uv.y * 85. + speed * time) * effectFactor;

      vec2 shift = vec2(uv.x - disp.x, uv.y - disp.y);
      gl_FragColor = texture2D(texture, shift);
    }
`
}

export { perlin }
