import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {
  userExists() {
    if (this.props.auth) {
      this.props.history.push("/surveys");
    }
  }

  render() {
    {
      this.userExists();
    }
    return (
      <div className="logo_subtitle" style={{ textAlign: "center" }}>
        <h1 className="logo_title">SurveyDonkey</h1>
        Let us help you collect feedback from your users
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
