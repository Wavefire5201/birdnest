import React from "react";
import "@google/model-viewer";

const Model = () => {
  return (
    <model-viewer
      src="/model.gltf"
      skybox-image="/shanghai_riverside_8k.jpg"
      skybox-height="1m"
      shadow-intensity="1"
      max-camera-orbit="auto 90deg auto"
      ar
      camera-controls
      disable-tap
      disable-pan
      ar-modes="webxr scene-viewer quick-look"
      tone-mapping="neutral"
      exposure="0.50"
      shadow-softness="1"
      environment-image="legacy"
      alt="A 3D model of birdnest"
      style={{ width: "100%", height: "500px" }}
    >
      <div className="progress-bar hide" slot="progress-bar">
        <div className="update-bar"></div>
      </div>
    </model-viewer>
  );
};

<script
  type="module"
  src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
></script>;

export default Model;
