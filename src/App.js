import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import { Button, Card, Row, Col } from 'react-materialize';
import PagecontentContainer from "./components/PagecontentContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import About from "./pages/About";

function App() {
  return (
    <div>
      <Header />
      <PagecontentContainer />
      <Footer />
    </div>
  );
}

export default App;