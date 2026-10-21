import { Page, Locator, test, expect } from "@playwright/test";

type ElementCheck = {
    name: string;
    locator: (page: Page) => Locator;
    attribute?: { name: string; value: string };
    text?: string;
    group?: string;
};

export class PlaywrightPage {
    readonly page: Page;
    readonly elements: ElementCheck[];

    constructor(page: Page) {
        this.page = page;
        this.elements = [
            {
                locator: (page) =>
                    page.getByRole("link", {
                        name: "Playwright logo Playwright",
                    }),
                name: "Playwright logo Playwright",
                attribute: {
                    name: "href",
                    value: "/",
                },
                text: "Playwright",
                group: "banner-header",
            },
            {
                locator: (page) => page.getByRole("link", { name: "Docs" }),
                name: "Docs",
                attribute: {
                    name: "href",
                    value: "/docs/intro",
                },
                text: "Docs",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "MCP", exact: true }),
                name: "MCP",
                attribute: {
                    name: "href",
                    value: "/mcp/introduction",
                },
                text: "MCP",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "CLI", exact: true }),
                name: "CLI",
                attribute: {
                    name: "href",
                    value: "/agent-cli/introduction",
                },
                text: "CLI",
                group: "banner-header",
            },
            {
                locator: (page) => page.getByRole("link", { name: "API" }),
                name: "API",
                attribute: {
                    name: "href",
                    value: "/docs/api/class-playwright",
                },
                text: "API",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("button", { name: "Node.js" }),
                name: "Node.js",
                text: "Node.js",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "GitHub repository" }),
                name: "GitHub repository",
                attribute: {
                    name: "href",
                    value: "https://github.com/microsoft/playwright",
                },
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "Discord server" }),
                name: "Discord server",
                attribute: {
                    name: "href",
                    value: "https://aka.ms/playwright/discord",
                },
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("button", {
                        name: "Switch between dark and light",
                    }),
                name: "кнопки переключения темы",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("button", { name: "Search (Control+k)" }),
                name: "Search (Control+k)",
                text: "SearchCtrlK",
                group: "banner-header",
            },
            {
                locator: (page) => page.getByText("One API to drive Chromium"),
                name: "One API to drive Chromium",
                text: "One API to drive Chromium, Firefox, and WebKit — in your tests, your scripts, and your agent workflows. Available for TypeScript, Python, .NET, and Java.",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "Get started" }),
                name: "Get started",
                text: "Get started",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", {
                        name: "Star microsoft/playwright on",
                    }),
                name: "Star microsoft/playwright on",
                attribute: {
                    name: "href",
                    value: "https://github.com/microsoft/playwright",
                },
                text: "Star",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", {
                        name: "97k+ stargazers on GitHub",
                    }),
                name: "97k+ stargazers on GitHub",
                attribute: {
                    name: "href",
                    value: "https://github.com/microsoft/playwright/stargazers",
                },
                text: "97k+",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "Testing documentation" }),
                name: "Testing documentation",
                attribute: {
                    name: "href",
                    value: "/docs/intro",
                },
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "CLI documentation" }),
                name: "CLI documentation",
                attribute: {
                    name: "href",
                    value: "/docs/getting-started-cli",
                },
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "MCP documentation" }),
                name: "MCP documentation",
                attribute: {
                    name: "href",
                    value: "/docs/getting-started-mcp",
                },
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByRole("heading", {
                        name: "Playwright enables reliable",
                    }),
                name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
                group: "banner-header",
            },
            {
                locator: (page) =>
                    page.getByText("Playwright TestFull-featured"),
                name: "Playwright TestFull-featured",
                text: "Playwright TestFull-featured test runner with auto-waiting, assertions, tracing, and parallelism across Chromium, Firefox, and WebKit.npm init playwright@latestTesting documentation",
                group: "install-cards",
            },
            {
                locator: (page) =>
                    page.getByText("Playwright CLIToken-efficient"),
                name: "Playwright CLIToken-efficient",
                text: "Playwright CLIToken-efficient browser automation for coding agents like Claude Code and GitHub Copilot. Skill-based workflows without large context overhead.npm i -g @playwright/cli@latestCLI documentation",
                group: "install-cards",
            },
            {
                locator: (page) =>
                    page.getByText("Playwright MCPModel Context"),
                name: "Playwright MCPModel Context",
                text: "Playwright MCPModel Context Protocol server that gives AI agents full browser control through structured accessibility snapshots.npx @playwright/mcp@latestMCP documentation",
                group: "install-cards",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "Test generator" }),
                name: "Test generator",
                text: "Test generator",
                attribute: {
                    name: "href",
                    value: "docs/codegen",
                },
                group: "features-section",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "Trace Viewer" }),
                name: "Trace Viewer",
                text: "Trace Viewer",
                attribute: {
                    name: "href",
                    value: "docs/trace-viewer-intro",
                },
                group: "features-section",
            },
            {
                locator: (page) =>
                    page.getByRole("link", { name: "VS Code extension" }),
                name: "VS Code extension",
                text: "VS Code extension",
                attribute: {
                    name: "href",
                    value: "docs/getting-started-vscode",
                },
                group: "features-section",
            },
        ];
    }

    async openPlaywrightPage() {
        await test.step("Открытие главной страницы", async () => {
            await this.page.goto("https://playwright.dev/");
        });
    }

    async checkElementsBannerHeaderVisible() {
        this.elements.filter((el) => el.group === "banner-header");
        for (const { locator, name } of this.elements) {
            await test.step(`Проверка отображения элемента ${name}`, async () => {
                await expect.soft(locator(this.page)).toBeVisible();
            });
        }
    }

    async checkElementsBannerHeaderText() {
        this.elements.filter((el) => el.group === "banner-header");
        for (const { locator, name, text } of this.elements) {
            if (text) {
                await test.step(`Проверка на корректность названия элемента ${name}`, async () => {
                    await expect(locator(this.page)).toContainText(text);
                });
            }
        }
    }

    async checkElementsBannerHeaderHrefAttribute() {
        this.elements.filter((el) => el.group === "banner-header");
        for (const { locator, name, attribute } of this.elements) {
            if (attribute) {
                await test.step(`Проверка атрибута href элемента ${name}`, async () => {
                    await expect
                        .soft(locator(this.page))
                        .toHaveAttribute(attribute.name, attribute.value);
                });
            }
        }
    }

    async checkElementsInstallCardsText() {
        this.elements.filter((el) => el.group === "install-cards");
        for (const { locator, name, text } of this.elements) {
            if (text) {
                await test.step(`Проверка отображения элемента ${name} по содержанию текста ${text}`, async () => {
                    await expect.soft(locator(this.page)).toContainText(text);
                });
            }
        }
    }

    async checkElementsFeaturesSection() {
        this.elements.filter((el) => el.group === "features-section");
        for (const { locator, name, text, attribute } of this.elements) {
            if (text) {
                await test.step(`Проверка отображения элемента ${name} по содержанию текста ${text} c атрибутом ${attribute?.value}`, async () => {
                    await expect.soft(locator(this.page)).toBeVisible();
                    if (text) {
                        await expect
                            .soft(locator(this.page))
                            .toContainText(text);
                    }

                    if (attribute) {
                        await expect
                            .soft(locator(this.page))
                            .toHaveAttribute(attribute.name, attribute.value);
                    }
                });
            }
        }
    }

    async clickSwitchThemeModeIcon() {
        const buttonTheme = this.page.getByRole("button", {
            name: "Switch between dark and light",
        });
        await test.step("Нажатие на иконку смены темы", async () => {
            await buttonTheme.click();
        });
    }

    async checkDataThemeAttributeSystemValue() {
        const html = this.page.locator("html");
        await test.step("Проверка атрибута системной темы", async () => {
            await expect
                .soft(html)
                .toHaveAttribute("data-theme-choice", "system");
        });
    }

    async checkDataThemeAttributeLightValue() {
        const html = this.page.locator("html");
        await test.step("Проверка атрибута светлой темы", async () => {
            await expect
                .soft(html)
                .toHaveAttribute("data-theme-choice", "light");
            await expect.soft(html).toHaveAttribute("data-theme", "light");
        });
    }

    async checkDataThemeAttributeDarkValue() {
        const html = this.page.locator("html");
        await test.step("Проверка атрибута тёмной темы", async () => {
            await expect
                .soft(html)
                .toHaveAttribute("data-theme-choice", "dark");
            await expect.soft(html).toHaveAttribute("data-theme", "dark");
        });
    }

    async SetSystemThemeMode() {
        await test.step("Установка системной темы", async () => {
            await this.page.evaluate(() => {
                document
                    .querySelector("html")
                    ?.setAttribute("data-theme-choice", "system");
            });
        });
    }

    async SetLighThemeMode() {
        await test.step("Установка светлой темы", async () => {
            await this.page.evaluate(() => {
                document
                    .querySelector("html")
                    ?.setAttribute("data-theme-choice", "light");
                document
                    .querySelector("html")
                    ?.setAttribute("data-theme", "light");
            });
        });
    }

    async SetDarkThemeMode() {
        await test.step("Установка тёмной темы", async () => {
            await this.page.evaluate(() => {
                document
                    .querySelector("html")
                    ?.setAttribute("data-theme-choice", "dark");
                document
                    .querySelector("html")
                    ?.setAttribute("data-theme", "dark");
            });
        });
    }

    async CheckLayoutWithSystemMode() {
        await expect.soft(this.page).toHaveScreenshot(`pageWithSystemMode.png`);
    }

    async CheckLayoutWithLightMode() {
        await expect.soft(this.page).toHaveScreenshot(`pageWithLightMode.png`);
    }

    async CheckLayoutWithDarkMode() {
        await expect.soft(this.page).toHaveScreenshot(`pageWithDarkMode.png`);
    }
}
