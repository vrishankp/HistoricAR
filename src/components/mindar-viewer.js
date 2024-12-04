import React, { useEffect, useRef } from 'react';
import 'aframe';
// import 'mind-ar/dist/mindar-image-aframe.prod.js';

export default () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // const sceneEl = sceneRef.current;
    // const arSystem = sceneEl.systems["mindar-image-system"];
    // console.log(sceneEl);
    // console.log(arSystem);
    // sceneEl.addEventListener('renderstart', () => {
    //   arSystem.start(); // start AR 
    // });
    // return () => {
    //   arSystem.stop();
    // }
  }, []);

  return (
    <a-scene ref = {sceneRef} mindar-image="imageTargetSrc: targets.mind; uiScanning:no; filterMinCF:0.001; filterBeta: 0.1" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        {/* <audio id="birds_mp3" src="birds.mp3"></audio> */}
        <a-asset-item id="lighthouse" src="forUWCapstone_glb.glb"></a-asset-item>
        <video id="capy-mp4" src="capybara.mp4"></video>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 2" id="target2">
          <a-video id="capybara-vid-link" src="#capy-mp4" autoplay="false" rotation="0 0 0" width="1" height="0.5625" scale="2 2 2" position="0 0 0"></a-video>
      </a-entity>

      {/* <a-entity mindar-image-target="targetIndex: 1" id="target1">
        <audio id="whistleAudio" src="birds.mp3"></audio>
      </a-entity> */}

      <a-entity mindar-image-target="targetIndex: 0" id="target0">
        <a-gltf-model rotation="0 0 0 " position="0.5 0 0" scale="0.07 0.07 0.07" src="#lighthouse"></a-gltf-model>
      </a-entity>
    </a-scene>
  )
}