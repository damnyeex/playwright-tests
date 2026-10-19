import { test, expect, type Page, type Locator } from "@playwright/test";

type ElementCheck = {
    name: string;
    locator: (page: Page) => Locator;
    attribute?: { name: string; value: string };
    text?: string;
    group?: string;
};

const elements: ElementCheck[] = [
    {
        locator: (page) =>
            page.getByRole("link", { name: "Playwright logo Playwright" }),
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
        locator: (page) => page.getByRole("link", { name: "MCP", exact: true }),
        name: "MCP",
        attribute: {
            name: "href",
            value: "/mcp/introduction",
        },
        text: "MCP",
        group: "banner-header",
    },
    {
        locator: (page) => page.getByRole("link", { name: "CLI", exact: true }),
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
        locator: (page) => page.getByRole("button", { name: "Node.js" }),
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
        locator: (page) => page.getByRole("link", { name: "Discord server" }),
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
        locator: (page) => page.getByRole("link", { name: "Get started" }),
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
            page.getByRole("link", { name: "97k+ stargazers on GitHub" }),
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
        locator: (page) => page.getByText("Playwright TestFull-featured"),
        name: "Playwright TestFull-featured",
        text: "Playwright TestFull-featured test runner with auto-waiting, assertions, tracing, and parallelism across Chromium, Firefox, and WebKit.npm init playwright@latestTesting documentation",
        group: "install-cards",
    },
    {
        locator: (page) => page.getByText("Playwright CLIToken-efficient"),
        name: "Playwright CLIToken-efficient",
        text: "Playwright CLIToken-efficient browser automation for coding agents like Claude Code and GitHub Copilot. Skill-based workflows without large context overhead.npm i -g @playwright/cli@latestCLI documentation",
        group: "install-cards",
    },
    {
        locator: (page) => page.getByText("Playwright MCPModel Context"),
        name: "Playwright MCPModel Context",
        text: "Playwright MCPModel Context Protocol server that gives AI agents full browser control through structured accessibility snapshots.npx @playwright/mcp@latestMCP documentation",
        group: "install-cards",
    },
    {
        locator: (page) => page.getByRole("link", { name: "Test generator" }),
        name: "Test generator",
        text: "Test generator",
        attribute: {
            name: "href",
            value: "docs/codegen",
        },
        group: "features-section",
    },
    {
        locator: (page) => page.getByRole("link", { name: "Trace Viewer" }),
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

const themeMode = ["system", "light", "dark"];

test.describe("Тесты для главной страницы", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://playwright.dev/");
    });

    test("Проверка отображения элементов хедера и баннера на странице", async ({
        page,
    }) => {
        elements
            .filter((el) => el.group === "banner-header")
            .forEach(({ locator, name }) => {
                test.step(`Проверка отображения элемента ${name}`, async () => {
                    await expect.soft(locator(page)).toBeVisible();
                });
            });
    });

    test("Проверка на корректность названий элементов хедера и баннера на странице", async ({
        page,
    }) => {
        elements
            .filter((el) => el.group === "banner-header")
            .forEach(({ locator, name, text }) => {
                if (text) {
                    test.step(`Проверка на корректность названия элемента ${name}`, async () => {
                        await expect(locator(page)).toContainText(text);
                    });
                }
            });
    });

    test("Проверка атрибутов href элементов хедера и мейна на странице", async ({
        page,
    }) => {
        elements
            .filter((el) => el.group === "banner-header")
            .forEach(({ locator, name, attribute }) => {
                if (attribute) {
                    test.step(`Проверка атрибута href элемента ${name}`, async () => {
                        await expect
                            .soft(locator(page))
                            .toHaveAttribute(attribute.name, attribute.value);
                    });
                }
            });
    });

    test("Проверка переключения темы на странице (через const)", async ({
        page,
    }) => {
        const html = page.locator("html");
        const buttonTheme = page.getByRole("button", {
            name: "Switch between dark and light",
        });

        await expect.soft(html).toHaveAttribute("data-theme-choice", "system");

        await buttonTheme.click();
        await expect.soft(html).toHaveAttribute("data-theme-choice", "light");
        await expect.soft(html).toHaveAttribute("data-theme", "light");

        await buttonTheme.click();
        await expect.soft(html).toHaveAttribute("data-theme-choice", "dark");
        await expect.soft(html).toHaveAttribute("data-theme", "dark");

        await buttonTheme.click();
        await expect.soft(html).toHaveAttribute("data-theme-choice", "system");
    });

    test("Проверка отображения и корректности названий карточек из секции с установкой", async ({
        page,
    }) => {
        elements
            .filter((el) => el.group === "install-cards")
            .forEach(({ locator, text, name }) => {
                if (text) {
                    test.step(`Проверка отображения элемента ${name} по содержанию текста ${text}`, async () => {
                        await expect.soft(locator(page)).toContainText(text);
                    });
                }
            });
    });

    test("Проверка отображения, корректности названий ссылок внутри секции с фичами", async ({
        page,
    }) => {
        elements
            .filter((el) => el.group === "features-section")
            .forEach(({ locator, name, text, attribute }) => {
                test.step(`Проверка отображения элемента ${name} по содержанию текста ${text} c атрибутом ${attribute?.value}`, async () => {
                    await expect.soft(locator(page)).toBeVisible();

                    if (text) {
                        await expect.soft(locator(page)).toContainText(text);
                    }

                    if (attribute) {
                        await expect
                            .soft(locator(page))
                            .toHaveAttribute(attribute.name, attribute.value);
                    }
                });
            });
    });

    themeMode.forEach((value) => {
        test(`Проверка состояния активного мода ${value} переключения темы`, async ({
            page,
        }) => {
            await page.evaluate((value) => {
                document
                    .querySelector("html")
                    ?.setAttribute("data-theme-choice", value);
                document
                    .querySelector("html")
                    ?.setAttribute("data-theme", value);
            }, value);
            await expect
                .soft(page)
                .toHaveScreenshot(`pageWith ${value} mode.png`);
        });
    });
});
