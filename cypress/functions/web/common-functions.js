/// <reference types="Cypress" />

import homePage from "../../elements/web/homePage";
import teamsPage from "../../elements/web/teamsPage";
import signInPage from "../../elements/web/signInPage";
import userData from "../../data/userData.json";


export function login() {
  //Go to Sign in page
  cy.visit(Cypress.env("SIGNIN_URL"))
  //Input user email address
  cy.get(signInPage.emailInput).type(userData["existing_account"][0]["emailAddress"])
  //Input user password
  cy.get(signInPage.passwordInput).type(userData["existing_account"][0]["password"])
  //Click Log in Button
  cy.get(signInPage.loginButton).click()
  //Verify user are redirect to the correct homepage with headers [Upcoming for you]
  cy.get(homePage.homepageHeader).contains("Upcoming for you")
}


export function accessTeamsPageAndFavouriteTheSpecifyTeam(teamNameInput) {
  //Go to Teams page
  cy.visit(Cypress.env("TEAMS_URL"))
  //Verify user are in Teams page
  cy.get(teamsPage.teamsPageHeader).contains("Favourite Teams")
  //Search for Manchester City team
  cy.get(teamsPage.searchBox).type('Manchester City{enter}');
  cy.wait(2000);
  //Find the correct team and favorite the team
  cy.get(teamsPage.teamCard).each(($el, index1) => {
    let name = $el.text();
    cy.log(name);
    if (name == teamNameInput) {
      cy.get(teamsPage.favoriteStarButton).then(($el) => {
        cy.wrap($el.get(index1)).click();
      })
    }
  });
}
