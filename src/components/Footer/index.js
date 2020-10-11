import React from "react";
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Benedicta Kim</h5>
          <p class="white-text">Training as Full Stack Web Developer at Johns Hopkins University. Inching towards data visualization to boost storytelling in: international health, public health and mental health.</p>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">About</h5>
          <ul>
            <li><a class="white-text" href="./about.html">Bio</a></li>
            <li><a class="white-text" href="./docs/Resume-BenedictaKIM-WebDeveloper.pdf">Resume </a><i class="tiny material-icons">picture_as_pdf</i></li>
            <li><a class="white-text" href="./portfolio.html">Portfolio</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="https://github.com/benedictakim">Github</a></li>
            <li><a class="white-text" href="https://www.linkedin.com/in/benedictakim/">LinkedIn</a></li>
            <li><a class="white-text" href="tel:410-929-4646">410-929-4646</a></li>
            <li><a class="white-text" href="mailto:benedicta.kim@gmail.com">benedicta.kim@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright grey darken-3">
      <div class="container" id="copyright">
      Copyright 2020
      </div>
    </div>
    </footer>
  );
}

export default Footer;
