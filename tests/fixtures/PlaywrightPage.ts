import { test as base } from "@playwright/test";
import { PlaywrightPage } from "../models/PlaywrightPage";

// Declare the types of your fixtures.
type MyFixtures = {
    playwrightPage: PlaywrightPage;
};

// Extend base test by providing "playwrightPage"
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    playwrightPage: async ({ page }, use) => {
        // Set up the fixture.
        const playwrightPage = new PlaywrightPage(page);
        await playwrightPage.openPlaywrightPage();

        // Use the fixture value in the test.
        await use(playwrightPage);
    },
});
export { expect } from "@playwright/test";
