import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 4.3;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const geometry = new THREE.IcosahedronGeometry(1.45, 3);
    const material = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `uniform float uTime; varying float pulse; void main() { vec3 p = position; float wave = sin(position.y * 4.0 + uTime * 1.2) * 0.035 + cos(position.x * 5.0 - uTime) * 0.025; p += normal * wave; pulse = wave; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
      fragmentShader: `varying float pulse; void main() { float light = 0.52 + pulse * 3.0; gl_FragColor = vec4(vec3(light), 0.23); }`,
      wireframe: true,
      transparent: true,
    });
    const core = new THREE.Mesh(geometry, material);
    group.add(core);
    const ring = new THREE.Mesh(new THREE.IcosahedronGeometry(1.58, 2), new THREE.MeshBasicMaterial({ color: 0xd95827, wireframe: true, transparent: true, opacity: 0.14 }));
    ring.rotation.set(0.4, 0.2, 0.3);
    group.add(ring);
    scene.add(group);

    const particles = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0xf0a077, size: 0.018, transparent: true, opacity: 0.8 }));
    const positions = new Float32Array(110 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      const radius = 1.8 + Math.random() * 0.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    particles.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    scene.add(particles);

    const pointer = { x: 0, y: 0 };
    const handlePointer = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.7;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.7;
    };
    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    window.addEventListener('pointermove', handlePointer);
    window.addEventListener('resize', resize);
    resize();
    let frameId;
    const animate = (time) => {
      material.uniforms.uTime.value = time * 0.001;
      group.rotation.y = time * 0.00016 + pointer.x * 0.22;
      group.rotation.x = Math.sin(time * 0.00025) * 0.06 + pointer.y * 0.16;
      ring.rotation.z = time * 0.00012;
      particles.rotation.y = -time * 0.00008;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('resize', resize);
      geometry.dispose();
      material.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      particles.geometry.dispose();
      particles.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="three-canvas" ref={mountRef} aria-hidden="true" />;
}