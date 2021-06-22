import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
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
      </div>
    );
  }
}

export default Home;
