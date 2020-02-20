const keys = require("../../config/keys");

module.exports = survey => {
  return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h1 style="color: #f76c6c;">We want your input!</h1>
                    <p>Please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                    </div>
                    <p>From SurveyDonkey</p>
                </div>
            </body>
        </html>
    `;
};
