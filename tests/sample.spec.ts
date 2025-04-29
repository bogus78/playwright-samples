import { test, expect } from "@playwright/test";


test("login without username", async ({ page }) => {
	
	await page.goto('https://storage.ionos.fr');

	const cookieButton = page.locator('button#selectAll').first();
	if (await cookieButton.isVisible()) {
		// Click the button if it is visible
		await cookieButton.click();
	}	
	
	// click the botton
	await page.click("button#button--with-loader");

	// Verify that the specific error message is visible on the page
	//const expectedText = 'Veuillez saisir votre adresse email.';
	//await expect(page.locator(`text=${expectedText}`)).toBeVisible();

	//Check for the error message that should appear in the DOM
	const errorMessageSelector = "p.input-byline.input-byline--error";
	const expectedErrorMessage = "Please enter your email address.";

	await expect(page.locator(errorMessageSelector)).toHaveText(
		expectedErrorMessage
	);
});

test("login with wrong username", async ({ page }) => {

});

test("login without password", async ({ page }) => {

});

test("login with wrong password", async ({ page }) => {

});











