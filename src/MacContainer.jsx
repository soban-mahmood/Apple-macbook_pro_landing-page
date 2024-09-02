import { useGLTF } from "@react-three/drei";
import React from "react";

const MacContainer = () => {
  let model;
  try {
    model = useGLTF("./mac.glb");
  } catch (error) {
    console.error("Failed to load model:", error);
    return null; // or return a fallback component
  }

  return <primitive object={model.scene} />;
};

export default MacContainer;