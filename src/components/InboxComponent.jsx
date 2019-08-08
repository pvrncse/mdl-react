import React, { Component } from "react";
class InboxComponent extends Component {
  state = {
    info: ""
  };
  componentDidMount() {
    this.fetchItems();
  }
  fetchItems = async () => {
    const data = await fetch("https://reqres.in/api/users?page=2");
    console.log(data);
    this.setState({ info: data });
  };
  render() {
    return <h4>{this.state.info.url}</h4>;
  }
}

export default InboxComponent;
