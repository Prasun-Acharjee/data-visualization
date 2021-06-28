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
          Group 12
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://youtu.be/JFjvVmvC3pQ"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Demo
        </a>
        <a
          href="https://github.com/ramiz-rahman/sort-visualizer"
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
