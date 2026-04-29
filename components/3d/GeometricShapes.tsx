"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial
        color="#60a5fa"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.3, 16, 100]} position={position}>
      <MeshDistortMaterial
        color="#2563eb"
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0.4}
        transparent
        opacity={0.2}
      />
    </Torus>
  );
}

export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingShape position={[-4, 2, -5]} scale={1.5} />
        <FloatingShape position={[4, -2, -3]} scale={1} />
        <FloatingTorus position={[0, 0, -8]} />
      </Canvas>
    </div>
  );
}
