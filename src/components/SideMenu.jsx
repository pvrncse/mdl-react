import React, { Component } from "react";
// import user from "../images/user.jpg";
import { Link } from "react-router-dom";
class SideMenu extends Component {
  // handleClick = event => {
  //   let anchorsClass = document.getElementsByClassName("mdl-navigation__link");
  //   for (let index = 0; index < anchorsClass.length; index++) {
  //     console.log(anchorsClass[index]);
  //     anchorsClass[index].classList.remove("active-item");
  //   }
  //   event.target.classList.add("active-item");
  // };
  render() {
    console.log(this.props);
    return (
      <div className="demo-drawer mdl-layout__drawer mdl-color--indigo-900 mdl-color-text--indigo-50">
        <header className="demo-drawer-header">
          <h4 className="text-center">My MDL App</h4>
        </header>
        <nav className="demo-navigation mdl-navigation mdl-color--indigo-900">
          <Link
            to="/home"
            className="mdl-navigation__link"
            onClick={this.props.pageSelect}
          >
            <i
              className="mdl-color-text--indigo-400 material-icons"
              role="presentation"
            >
              home
            </i>
            <span>Home</span>
          </Link>
          <Link
            to="/inbox"
            className="mdl-navigation__link"
            onClick={this.props.pageSelect}
          >
            <i
              className="mdl-color-text--indigo-400 material-icons"
              role="presentation"
            >
              inbox
            </i>
            <span>Inbox</span>
          </Link>
          <Link
            to="/inbox"
            className="mdl-navigation__link"
            onClick={this.props.pageSelect}
          >
            <i
              className="mdl-color-text--indigo-400 material-icons"
              role="presentation"
            >
              delete
            </i>
            <span>Trash</span>
          </Link>
          <Link
            to="/inbox"
            className="mdl-navigation__link"
            onClick={this.props.pageSelect}
          >
            <i
              className="mdl-color-text--indigo-400 material-icons"
              role="presentation"
            >
              report
            </i>
            <span>Spam</span>
          </Link>
          <Link
            to="/inbox"
            className="mdl-navigation__link"
            onClick={this.props.pageSelect}
          >
            <i
              className="mdl-color-text--indigo-400 material-icons"
              role="presentation"
            >
              forum
            </i>
            <span>Forums</span>
          </Link>
        </nav>
        {/* <div className="demo-avatar-dropdown">
          <img src={user} className="demo-avatar" />
          <span>hello@example.com</span>
          <div className="mdl-layout-spacer" />
          <button
            id="accbtn"
            className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
          >
            <i className="material-icons" role="presentation">
              arrow_drop_down
            </i>
            <span className="visuallyhidden">Accounts</span>
          </button>
          <ul
            className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
            for="accbtn"
          >
            <li className="mdl-menu__item">hello@example.com</li>
            <li className="mdl-menu__item">info@example.com</li>
            <li className="mdl-menu__item">
              <i className="material-icons">add</i>Add another account
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default SideMenu;
