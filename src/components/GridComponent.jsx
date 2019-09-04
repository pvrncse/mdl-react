import React, { Component } from "react";
class GridComponent extends Component {
  state = {};
  headerStyle = {
    background:
      "url(https://via.placeholder.com/728x90.png?text=" +
      this.props.value.name +
      ") center / cover"
  };
  render() {
    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col">
        <div className="mdl-card__title" style={this.headerStyle}>
          <h2 className="mdl-card__title-text">{this.props.value.name}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.value.message}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View Contact Info
          </a>
        </div>
        <div className="mdl-card__menu">
          <button
            className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
            id={this.props.value.name}
          >
            <i className="material-icons">remove_red_eye</i>
          </button>
          <div class="mdl-tooltip" data-mdl-for={this.props.value.name}>
            View Conversation
          </div>
        </div>
      </div>
    );
  }
}

export default GridComponent;
