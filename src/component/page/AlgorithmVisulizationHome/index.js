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
                    value: 75,
                  },
                  size: {
                    value: 2,
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
          <div style={{ display: "flex", marginTop: 80 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Link to="/pathfinder" className={styles.button}>
                <span>PathFinder Visualization</span>
              </Link>
              <p className={styles.code_text}>
                Pathfinder is a technique that provides visual methods to query
                paths, while considering various constraints.In this we have
                shown three different path finding algorithms in a maze, which
                are be either randomized or created by the user.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Link to="/sortvisulization" className={styles.button}>
                <span>Sort Visulization</span>
              </Link>
              <p className={styles.code_text}>
                A sorting algorithm is a method for reorganizing a large number
                of items into a specific order, such as alphabetical,
                highest-to-lowest value or shortest-to-longest distance. In this
                example we have used bar charts to explain how certain sorting
                algorithm works.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AlgoHome;
