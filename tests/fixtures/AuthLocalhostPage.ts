import { test as base } from "@playwright/test";
import { AuthLocalhostPage } from "../models/AuthLocalhostPage";

// Declare the types of your fixtures.
type MyFixtures = {
    authLocalhostPage: AuthLocalhostPage;
};

// Extend base test by providing "authLocalhostPage"
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    authLocalhostPage: async ({ page }, use) => {
        // Set up the fixture.
        const authLocalhostPage = new AuthLocalhostPage(page);
        // Use the fixture value in the test.
        await use(authLocalhostPage);
    },
});
export { expect } from "@playwright/test";
