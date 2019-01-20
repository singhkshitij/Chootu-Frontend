import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Header from "./components/header";
import Shortener from "./components/shortener";
import "./App.css";
import axios from 'axios';
let isInit = false;

class App extends Component {

    initHerokuRestApi() { 

        axios.get('https://chootu-rest-api.herokuapp.com/')
                .then(res => {
                    console.log("REST API init request message : ", res.data);
                });
    }

  render() {

    if(!isInit){
          this.initHerokuRestApi();
          isInit=true;
    }

    return (
      <div className="App">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Shortener/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
