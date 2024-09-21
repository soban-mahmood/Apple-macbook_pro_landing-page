import { useGLTF } from "@react-three/drei";
import React from "react";
import logo from "../public/red.jpg"
const MacContainer = () => {
  let model;
  try {
    model = useGLTF(logo);
  } catch (error) {
    console.error("Failed to load model:", error);
    return null; // or return a fallback component
  }

  return <primitive object={model.scene} />;
};

export default MacContainer;