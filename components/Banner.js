import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

export default function App() {
  const Scene = () => {
    return (
      <OrbitControls
        enableRotate={true}
        enablePan={false}
        enableDamping={false}
        dampingFactor={0.1}
        rotateSpeed={0.0}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 3}
      />
    );
  };

  return (
    <div className="banner">
      <Canvas>
        <Scene />
        <pointLight position={[5, 5, 5]} />
        <Text
          // style={{ color: "green" }}
          scale={[1.5, 1.5, 1.5]}
          // color="gold"
          anchorX="center"
          anchorY="middle"
          color="indigo"
          // color="linear-gradient(to left, green, red 100%)"
          // className={styles.banner1}
        >
          Background Remover
        </Text>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
