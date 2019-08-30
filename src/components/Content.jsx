import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashboardComponent from "./DashboardComponent";
import InboxComponent from "./InboxComponent";
import TrashComponent from "./TrashComponent";
// const routes = [
//   {
//     path: "./home",
//     component: HomeComponent,
//     fetchInitData: "Home data"
//   },
//   {
//     path: "./inbox",
//     component: InboxComponent,
//     fetchInitData: "Inbox data"
//   }
// ];
class Content extends Component {
  render() {
    return (
      <main className="mdl-layout__content mdl-color--grey-100">
        {/* <div
          id="p2"
          className="mdl-progress mdl-js-progress mdl-progress__indeterminate"
        /> */}
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route path="/dashboard" component={DashboardComponent} />
          <Route path="/inbox" component={InboxComponent} />
          <Route path="/trash" component={TrashComponent} />
        </Switch>
        {/* {routes.map(({ path, component, fetchInitData }) => (
          <Route
            path={path}
            component={component}
            fetchInitData={fetchInitData}
          />
        ))} */}
      </main>
    );
  }
}

export default Content;
