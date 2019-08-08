import React, { Component } from "react";
class Header extends Component {
  state = {
    currentPage: this.props.value
  };
  render() {
    console.log(this.props);
    return (
      <header className="demo-header mdl-layout__header mdl-color--indigo-100 mdl-color-text--grey-600">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.props.value}</span>
          <div className="mdl-layout-spacer" />
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label
              className="mdl-button mdl-js-button mdl-button--icon"
              htmlFor="search"
            >
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search" />
              <label className="mdl-textfield__label" htmlFor="search">
                Enter your query...
              </label>
            </div>
          </div>
          <button
            className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
            id="hdrbtn"
          >
            <i className="material-icons">more_vert</i>
          </button>
          <ul
            className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right"
            htmlFor="hdrbtn"
          >
            <li className="mdl-menu__item">Profile</li>
            <li className="mdl-menu__item">Settings</li>
            <li className="mdl-menu__item">Sign Out</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
