/// <reference types="Cypress" />

import * as commonFunction from "../../functions/web/common-functions";

describe("Demo interaction with ZujuGP", () => {

  it('should display the Autocomplete title', () => {
    //Verify that sign in page header contains the text [Welcome to ZUJU KICKOFF]
    commonFunction.verifyAutocompleteTitle('Welcome to ZUJU KICKOFF')
  })

  it("Login to ZujuGP & go to [Teams] Tab, search for [Manchester City], mark favourite and verify team details ", () => {
    //Login to ZujuGP and verify user get redirect to correct homepage
    commonFunction.login();
    //Search for Manchester Team and favorite the team
    commonFunction.accessTeamsPageAndFavouriteTheSpecifyTeam("Manchester City")
  });
});
