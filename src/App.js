import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:"lightcyan"}}>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
            <Switch>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
