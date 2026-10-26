import { test } from "../../fixtures/PlaywrightPage";

test.describe("Тесты для главной страницы", () => {
    test("Проверка отображения элементов хедера и баннера на странице", async ({
        playwrightPage,
    }) => {
        await playwrightPage.checkElementsBannerHeaderVisible();
    });

    test("Проверка на корректность названий элементов хедера и баннера на странице", async ({
        playwrightPage,
    }) => {
        await playwrightPage.checkElementsBannerHeaderText();
    });

    test("Проверка атрибутов href элементов хедера и мейна на странице", async ({
        playwrightPage,
    }) => {
        await playwrightPage.checkElementsBannerHeaderHrefAttribute();
    });

    test("Проверка отображения и корректности названий карточек из секции с установкой", async ({
        playwrightPage,
    }) => {
        await playwrightPage.checkElementsInstallCardsText();
    });

    test("Проверка отображения, корректности названий ссылок внутри секции с фичами", async ({
        playwrightPage,
    }) => {
        await playwrightPage.checkElementsFeaturesSection();
    });

    test("Проверка переключения темы на странице", async ({
        playwrightPage,
    }) => {
        await playwrightPage.checkDataThemeAttributeSystemValue();
        await playwrightPage.clickSwitchThemeModeIcon();
        await playwrightPage.checkDataThemeAttributeLightValue();
        await playwrightPage.clickSwitchThemeModeIcon();
        await playwrightPage.checkDataThemeAttributeDarkValue();
    });

    test(`Проверка состояния страницы с системной темой`, async ({
        playwrightPage,
    }) => {
        await playwrightPage.SetSystemThemeMode();
        await test.step("Скриншотная проверка с активной системной темой", async () => {
            await playwrightPage.CheckLayoutWithSystemMode();
        });
    });

    test(`Проверка состояния страницы со светлой темой`, async ({
        playwrightPage,
    }) => {
        await playwrightPage.SetLighThemeMode();
        await test.step("Скриншотная проверка с активной светлой темой", async () => {
            await playwrightPage.CheckLayoutWithLightMode();
        });
    });

    test(`Проверка состояния страницы с тёмной темой`, async ({
        playwrightPage,
    }) => {
        await playwrightPage.SetDarkThemeMode();
        await test.step("Скриншотная проверка с активной тёмной темой", async () => {
            await playwrightPage.CheckLayoutWithDarkMode();
        });
    });
});
