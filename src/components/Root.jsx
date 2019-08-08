import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";
import "../styles.css";
import "../custom.css";
import Content from "./Content";
class RootComponent extends Component {
  state = {
    currentPage: "Home"
  };
  handleClick = event => {
    let anchorsClass = document.getElementsByClassName("mdl-navigation__link");
    for (let index = 0; index < anchorsClass.length; index++) {
      anchorsClass[index].classList.remove("active-item");
    }
    // anchorsClass.forEach(element => {
    //   element.classList.remove("active-item");
    // });
    // anchorsClass.map(data => {
    //   data.classList.remove("active-item");
    // });
    if (event.target.nodeName === "A") {
      this.setState({ currentPage: event.target.children[1].innerText });
      event.target.classList.add("active-item");
    }
  };
  // componentDidMount() {
  //   this.render();
  // }
  render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Router>
          <Header value={this.state.currentPage} />
          <SideMenu pageSelect={this.handleClick} />
          <Content value={this.state.currentPage} />
        </Router>
      </div>
    );
  }
}

export default RootComponent;
