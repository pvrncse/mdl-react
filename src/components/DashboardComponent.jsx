import React, { Component } from "react";
import GridComponent from "./GridComponent";
const cards = [
  {
    name: "John",
    message: "How was your day?"
  },
  {
    name: "Smith",
    message: "I'll be late today"
  },
  {
    name: "Keda",
    message: "Coming home"
  },
  {
    name: "Gull",
    message: "Joining for cricket?"
  },
  {
    name: "Shami",
    message: "Good news!!!"
  },
  {
    name: "Abraham",
    message: "Good morning!!!"
  },
  {
    name: "Lee",
    message: "Comig to office?"
  },
  {
    name: "Steve",
    message: "What about new update?"
  },
  {
    name: "Flyn",
    message: "Coming for you"
  },
  {
    name: "Flyn2",
    message: "Coming for you Iam not Flyn"
  }
];
let val = 0;
class DashboardComponent extends Component {
  state = {};
  getGrid = index => {
    if (index % 2 === 0) {
      val = index++;
      return (
        <div className="mdl-grid">
          <GridComponent value={cards[val]} />
          <GridComponent value={cards[index]} />
        </div>
      );
    }
    // if (index % 2 != 0) {
    //   return <GridComponent value={{ name, message, index }} />;
    // }
  };
  render() {
    return (
      <div>
        {cards.map(({ name }, index) => (
          // <div
          //   className="demo-card-wide mdl-card mdl-shadow--2dp mdl-cell--6-col"
          //   key={name}
          // >
          //   <div className="mdl-card__title">
          //     <h2 className="mdl-card__title-text">{name}</h2>
          //   </div>
          //   <div className="mdl-card__supporting-text">{message}</div>
          //   <div className="mdl-card__actions mdl-card--border">
          //     <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          //       View Contact Info
          //     </a>
          //   </div>
          //   <div className="mdl-card__menu">
          //     <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          //       <i className="material-icons">share</i>
          //     </button>
          //   </div>
          // </div>
          // <div className="mdl-grid" key={name}>
          <React.Fragment key={name}>{this.getGrid(index)}</React.Fragment>
          // </div>
        ))}
      </div>
    );
  }
}

export default DashboardComponent;
