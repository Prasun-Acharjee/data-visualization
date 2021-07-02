import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import styles from "./component/page/DataVisulizationHome/home.module.css";
import Footer from "./component/page/SortAlgorithm/components/molecules/Footer";

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
          height: "100vh",
        }}
      >
        <Particles
          style={{ height: "100%" }}
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
      <h1 className={styles.header}>Data and Algorithm Visualization</h1>
      <div style={{ display: "flex", marginTop: 80 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Link to="/data-visulization" className={styles.button}>
            <span>Data Visualization</span>
          </Link>
          <p className={styles.code_text}>
            Data visualization is the graphical representation of information
            and data. By using visual elements like charts, graphs, and maps,
            data visualization tools provide an accessible way to see and
            understand trends, outliers, and patterns in data. In the world of
            Big Data, data visualization tools and technologies are essential to
            analyze massive amounts of information and make data-driven
            decisions.
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
          <Link to="/algorithm-visulization" className={styles.button}>
            <span>Algorithm Visualization</span>
          </Link>
          <p className={styles.code_text}>
            In addition to the mathematical and empirical analyses of
            algorithms, there is yet a third way to study algorithms. It is
            called algorithm visualization and can be defined as the use of
            images to convey some useful information about algorithms. That
            information can be a visual illustration of an algorithm’s
            operation, of its per-formance on different kinds of inputs, or of
            its execution speed versus that of other algorithms for the same
            problem.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MainHome;
