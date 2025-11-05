import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense, useMemo } from "react";

function ProductMesh({ color = "#8b5cf6", shape = "box" }) {
  const geometry = useMemo(() => shape, [shape]);
  return (
    <group>
      {geometry === "box" && (
        <mesh castShadow receiveShadow rotation={[0.5, 0.8, 0]}>
          <boxGeometry args={[1.2, 0.7, 1.2]} />
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.3} />
        </mesh>
      )}
      {geometry === "sphere" && (
        <mesh castShadow receiveShadow rotation={[0.2, 0.2, 0]}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial color={color} metalness={0.2} roughness={0.2} />
        </mesh>
      )}
      {geometry === "cylinder" && (
        <mesh castShadow receiveShadow rotation={[Math.PI / 2.3, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 1.4, 64]} />
          <meshStandardMaterial color={color} metalness={0.25} roughness={0.25} />
        </mesh>
      )}
    </group>
  );
}

export default function Product3DViewer({ color, shape }) {
  return (
    <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <Canvas shadows camera={{ position: [2.5, 2, 2.5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage
            intensity={0.9}
            environment="city"
            contactShadow
            adjustCamera
          >
            <ProductMesh color={color} shape={shape} />
          </Stage>
          <OrbitControls enablePan={false} minDistance={2} maxDistance={6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
