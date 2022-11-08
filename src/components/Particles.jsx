import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
        },
        particles: {
          color: {
            value: "#f582ae",
          },
          links: {
            color: {
              value: "#b8c1ec",
            },
            enable: true,
            opacity: 0.5,
          },
          move: {
            enable: true,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 7,
          },
        },
      }}
    />
  );
}

export default Particle;
