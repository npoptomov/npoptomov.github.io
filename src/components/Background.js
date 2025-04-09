// Background.js

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#00d4ff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: 5,
            random: true,
          },
          links: {
            enable: true,
            distance: 120,
            color: "#00d4ff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Background;
