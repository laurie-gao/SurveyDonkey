import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label style={{ fontSize: "13px" }}>{label}</label>
        <div style={{ marginBottom: "13px", marginTop: "3px" }}>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        style={{ marginTop: "20px" }}
        className="back btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        style={{ marginTop: "20px" }}
        onClick={() => submitSurvey(formValues, history)}
        className="teal btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
