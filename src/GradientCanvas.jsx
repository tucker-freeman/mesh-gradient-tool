import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei'

export default function GradientCanvas() {
  const sphere = useRef()

  useFrame((_, delta) => {
    sphere.current.rotation.y += delta * 0.25
  })

  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      style={{ background: 'radial-gradient(circle at 30% 30%, #b38dff, #6563ac)' }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 2, 3]} intensity={1.5} />
      <Sphere args={[1, 64, 64]} ref={sphere}>
        <MeshDistortMaterial
          color="#ffffff"
          distort={0.4}
          speed={0.8}
          roughness={0.1}
        />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
