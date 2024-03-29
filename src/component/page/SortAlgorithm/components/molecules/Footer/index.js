import React from "react";
import "./style.css";

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with <span className="Footer__Heart">&hearts;</span>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/prasun-acharjee-3193b497/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Prasun Acharjee,
        </a>
        <a
          href="
          https://www.linkedin.com/in/sayan-das-429a471a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Sayan Das,
        </a>
        <a
          href="https://www.linkedin.com/in/gaurav-jha-0a770616b/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Gaurav Jha
        </a>
        &amp;
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
          style={{ marginLeft: 20 }}
        >
          Abhishek Saha
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://github.com/Prasun-Acharjee/data-visualization"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
