import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Stripe from "./Stripe";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Stripe />
          </li>,
          <li key="3" style={{ margin: "0 10px", fontWeight: "500" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a
              className="logout"
              href="/api/logout"
              style={{ fontWeight: "500" }}
            >
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            <img src="/icons/logo.png" alt="logo" />
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
