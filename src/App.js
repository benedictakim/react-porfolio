import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import { Button, Card, Row, Col } from 'react-materialize';
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <Footer /> */}
    </div>
  );
}

export default App;