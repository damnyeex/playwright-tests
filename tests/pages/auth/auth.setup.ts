import { test } from "../../fixtures/AuthLocalhostPage";

test("authenticate", async ({ authLocalhostPage, page }) => {
    await authLocalhostPage.ensureAuthFolderExists();

    await authLocalhostPage.openLoginPage();
    await authLocalhostPage.fillLoginTextBox();
    await authLocalhostPage.fillPasswordTextBox();
    await authLocalhostPage.clickLoginBtn();

    await authLocalhostPage.waitForAuthToken();
    await authLocalhostPage.waitForAuthCookie();

    await authLocalhostPage.saveAuthContext();
});
