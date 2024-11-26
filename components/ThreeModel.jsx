"use client";

import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ path, scale, position, rotation }) {
    const modelRef = useRef();

    // Загружаем модель
    const gltf = useLoader(GLTFLoader, path);

    // Вращаем модель
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.05; // Постепенное увеличение угла
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={scale || 1}
            position={position || [0, 0, 0]}
            rotation={rotation || [0, 0, 0]}
        />
    );
}

export default function ThreeModel() {
    return (
        <section className="flex items-center justify-center h-[400px] rounded-lg">
            <Canvas
                camera={{ position: [80, 10, 30], fov: 25 }}
            >
                {/* Модель */}
                <Model path="/models/maxwell.glb" scale={1.2} position={[0, -10, 0]} rotation={[0, 0, 0]} />

                {/* Свет */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={1} />

                {/* Управление камерой */}
                <OrbitControls />
            </Canvas>
        </section>
    );
}