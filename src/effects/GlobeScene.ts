import * as THREE from 'three';

const SPHERE_RADIUS = 2.5;
const DETAIL = 24;
const ROTATION_SPEED = 0.001;
const FLASH_RATE = 0.02;
const FRESNEL_COLOR = new THREE.Color('#0055FF');
const BASE_COLOR = new THREE.Color('#111111');

const vertexShader = `
varying vec3 vNormal;
void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform vec3 color;
varying vec3 vNormal;
void main() {
  float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
  gl_FragColor = vec4(color, intensity * 0.6);
}
`;

export class GlobeScene {
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private globe: THREE.Mesh;
  private fresnelGlow: THREE.Mesh;
  private geometry: THREE.IcosahedronGeometry;
  private running = false;
  private rafId = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#050507');

    const aspect = window.innerWidth / window.innerHeight;
    const d = 4;
    this.camera = new THREE.OrthographicCamera(
      -d * aspect, d * aspect, d, -d, 0.1, 1000
    );
    this.camera.position.set(4, 3, 5);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Globe
    this.geometry = new THREE.IcosahedronGeometry(SPHERE_RADIUS, DETAIL);
    const count = this.geometry.attributes.position.count;
    this.geometry.setAttribute(
      'color',
      new THREE.BufferAttribute(new Float32Array(count * 3), 3)
    );

    const material = new THREE.MeshBasicMaterial({
      color: BASE_COLOR,
      wireframe: true,
      vertexColors: true,
    });

    this.globe = new THREE.Mesh(this.geometry, material);
    this.scene.add(this.globe);

    // Fresnel glow
    const glowGeo = new THREE.IcosahedronGeometry(SPHERE_RADIUS * 1.15, DETAIL);
    const glowMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        color: { value: FRESNEL_COLOR },
      },
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.fresnelGlow = new THREE.Mesh(glowGeo, glowMat);
    this.scene.add(this.fresnelGlow);

    this.animate = this.animate.bind(this);
  }

  private animate() {
    if (!this.running) return;
    this.rafId = requestAnimationFrame(this.animate);

    this.globe.rotation.y += ROTATION_SPEED;
    this.fresnelGlow.rotation.copy(this.globe.rotation);

    // Decay colors
    const colorArray = this.geometry.attributes.color.array as Float32Array;
    for (let i = 0; i < colorArray.length; i++) {
      colorArray[i] *= 0.95;
    }

    // Lightning flashes
    if (Math.random() < FLASH_RATE) {
      const count = this.geometry.attributes.position.count;
      const idx = Math.floor(Math.random() * count);
      const flashColor = new THREE.Color();
      flashColor.setHSL(0.25, 1.0, 0.5 + Math.random() * 0.5);
      colorArray[idx * 3] = flashColor.r;
      colorArray[idx * 3 + 1] = flashColor.g;
      colorArray[idx * 3 + 2] = flashColor.b;
    }

    this.geometry.attributes.color.needsUpdate = true;
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    const aspect = window.innerWidth / window.innerHeight;
    const d = 4;
    this.camera.left = -d * aspect;
    this.camera.right = d * aspect;
    this.camera.top = d;
    this.camera.bottom = -d;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.animate();
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.rafId);
  }

  destroy() {
    this.stop();
    this.geometry.dispose();
    (this.globe.material as THREE.Material).dispose();
    (this.fresnelGlow.material as THREE.Material).dispose();
    this.renderer.dispose();
  }
}
