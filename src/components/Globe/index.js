import React, { useState } from 'react';
import ReactGlobe from 'react-globe';

import { ThreeSceneContainer } from './styles';

const ThreeScene = () => {
  return (
    <ThreeSceneContainer>
      <ReactGlobe
        size={[400, 400]}
        globeOptions={{
          enableBackground: false,
          glowCoefficient: 0.1,
          glowColor: 'midnightblue',
          glowPower: 20,
          glowRadiusScale: 0.5,
          enableGlow: true,
          enableClouds: true,
          cloudsOpacity: 2,
        }}
        cameraOptions={{
          enableZoom: false,
          autoRotateSpeed: 1,
          enableAutoRotate: true,
          enableRotate: true,
          maxPolarAngle: (Math.PI * 9) / 16,
          minPolarAngle: (Math.PI * 7) / 16,
          rotateSpeed: 0.5,
        }}
      />
    </ThreeSceneContainer>
  );
};

export default ThreeScene;
