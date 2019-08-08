import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import InboxComponent from "./InboxComponent";
class Content extends Component {
  render() {
    return (
      <main className="mdl-layout__content mdl-color--grey-100">
        <div
          id="p2"
          className="mdl-progress mdl-js-progress mdl-progress__indeterminate"
        />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/inbox" component={InboxComponent} />
        </Switch>
      </main>
    );
  }
}

export default Content;
