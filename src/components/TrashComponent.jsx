import React, { Component } from "react";
class TrashComponent extends Component {
  state = {
    trashMails: []
  };
  componentDidMount() {
    console.log("mount");
    this.fetchItems();
  }
  fetchItems = async () => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(data);
    // this.setState({ info: data });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            trashMails: result
          });
          console.log(result);
          // this.render();
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            trashMails: null
          });
          console.log(error);
        }
      );
  };
  removeRow = mail => {
    console.log(mail);
    this.state.trashMails.map(({ email }, index) => {
      if (mail === email) {
        this.state.trashMails.splice(index, 1);
      }
    });
    this.setState({
      trashMails: this.state.trashMails
    });
  };
  render() {
    // return <h4>{this.state.info.url}</h4>;
    //add class  mdl-data-table--selectable for table row chckboxes
    console.log("render");
    return (
      <div className="mdl-grid">
        <div className="demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
          <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
              <tr>
                <th className="mdl-data-table__cell--non-numeric">Name</th>
                <th>Title</th>
                <th>Email From</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.trashMails.map(({ name, email, website: title }) => (
                <tr key={name}>
                  <td className="mdl-data-table__cell--non-numeric">{name}</td>
                  <td>{title}</td>
                  <td>{email}</td>
                  <td>
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-js-ripple-effect"
                      // onClick={this.removeRow(email)}
                      onClick={this.removeRow.bind(this, email)}
                    >
                      <i className="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TrashComponent;
