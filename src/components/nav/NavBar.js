import React, { Component } from "react";
import { NavBarDisplay } from "./NavBarDisplay";
import { connect } from "react-redux";
import { logOutAction } from "../../redux/userDuck";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  logOut = () => {
    this.props.logOutAction();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <NavBarDisplay logOut={this.logOut} loggedIn={this.props.loggedIn} />
      </div>
    );
  }
}
function mapState({ user: { loggedIn } }) {
  return { loggedIn };
}
export default withRouter(connect(mapState, { logOutAction })(NavBar));
