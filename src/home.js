import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import styles from "./component/page/Home/home.module.css";
const MainHome = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 150,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
      <Link to="/data-visulizations" className={styles.button}>
        <span>Data Visualization</span>
      </Link>
      <Link to="/algo-visulization" className={styles.button}>
        <span>Algorithm Visualization</span>
      </Link>
    </div>
  );
};
export default MainHome;
