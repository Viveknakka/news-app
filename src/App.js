import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0
  };

  apikey = 'f70dedacba1a4120a6027d873df36686';

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            height={5}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route
              path=""
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="1" category="general" />}
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" category="sports" />}
            ></Route>
            <Route
              path="/business"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" category="business" />}
            ></Route>
            <Route
              path="/science"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" category="science" />}
            ></Route>
            <Route
              path="/health"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" category="health" />}
            ></Route>
            <Route
              path="/entertainment"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" category="entertainment" />}
            ></Route>
            <Route
              path="/technology"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" category="technology" />}
            ></Route>
            <Route
              path="/general"
              element={<News setProgress={this.setProgress} key="general" category="general" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
