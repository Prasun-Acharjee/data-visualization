import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Particles from "react-particles-js";

class AlgoHome extends React.Component {
  render() {
    return (
      <>
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
          <h1 className={styles.header}>Algorithm Visualization</h1>
          <Link to="/pathfinder" className={styles.button}>
            <span>PathFinder Visualization</span>
          </Link>
          <Link to="/sortvisulization" className={styles.button}>
            <span>Sort Visulization</span>
          </Link>
        </div>
      </>
    );
  }
}

export default AlgoHome;
