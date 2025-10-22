import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

export default function GradientCanvas() {
  const sphere = useRef()

  useFrame((state, delta) => {
    sphere.current.rotation.y += delta * 0.1
    sphere.current.rotation.x += delta * 0.05
  })

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <Sphere args={[1.2, 128, 128]} ref={sphere}>
        <MeshDistortMaterial
          color="#b38dff"
          distort={0.4}
          speed={0.8}
          roughness={0.1}
        />
      </Sphere>
    </Canvas>
  )
}
