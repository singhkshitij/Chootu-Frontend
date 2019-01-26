import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Header from "./components/header";
import Content from "./components/content";
import "./App.css";
import axios from 'axios';

let isInit = false;

class App extends Component {

    initHerokuRestApi() {

        axios.get('https://www.chtu.ml/')
            .then(res => {
                console.log("REST API init request message : ", res.data);
            });
    }

    render() {

        if (!isInit) {
            this.initHerokuRestApi();
            isInit = true;
        }

        return (
            <div className="App">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Content/>
          </Row>
        </Container>
      </div>
        );
    }
}

export default App;