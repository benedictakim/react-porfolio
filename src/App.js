import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import { Button, Card, Row, Col } from 'react-materialize';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
// import Contact from "./pages/Contact";
// import About from "./pages/About";

function App() {
  return (
    <div>
      <Header />
      {/* <Contact/> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;