import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Stripe extends Component {
  render() {
    return (
      <StripeCheckout
        name="SurveyDonkey"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="credits btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Stripe);
