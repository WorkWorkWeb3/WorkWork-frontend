'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create terrain geometry
    const geometry = new THREE.PlaneGeometry(30, 30, 50, 50)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff, // Changed to cyan for neon blue effect
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    
    const terrain = new THREE.Mesh(geometry, material)
    terrain.rotation.x = -Math.PI / 3
    scene.add(terrain)

    camera.position.z = 15
    camera.position.y = 5

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Animate vertices
      const positions = geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] = Math.sin((i + Date.now() * 0.001) * 0.1) * 2
      }
      geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0" />
}

