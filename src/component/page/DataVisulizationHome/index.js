import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Particles from "react-particles-js";

class Home extends React.Component {
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
          <h1 className={styles.header}>Data Visualization</h1>
          <Link to="/linechart" className={styles.button}>
            <span>Line Chart</span>
          </Link>
          <Link to="/barchart" className={styles.button}>
            <span>Bar Chart</span>
          </Link>
          <Link to="/areachart" className={styles.button}>
            <span>Area Chart</span>
          </Link>
          <Link to="/heatmaps" className={styles.button}>
            <span>Heat Maps</span>
          </Link>
          <Link to="/networkGraph" className={styles.button}>
            <span>Network Graph</span>
          </Link>
          <Link to="/scatterplot" className={styles.button}>
            <span>Scatter Plot</span>
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
